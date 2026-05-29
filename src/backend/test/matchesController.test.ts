import { prisma } from './__mocks__/prisma.ts'

jest.mock('../prisma.ts', () => ({
    prisma,
}))

import {
    generateMatches,
    generateRoundRobinMatches,
    generateSwissMatches,
    advanceSwissRound,
    advanceRound,
    updateMatchScore,
} from '../controllers/matchesController.ts'
import {
    makeReq,
    makeRes,
    makeNext,
    makeTournamentTeam,
    makeMatch,
} from './testHelpers.ts'

describe('generateMatches', () => {
    it('returns 400 when fewer than 2 teams are registered', async () => {
        prisma.tournamentTeam.findMany.mockResolvedValue([
            makeTournamentTeam(1),
        ])
        const res = makeRes()
        await generateMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('returns 400 when the team count is odd (even required for elimination)', async () => {
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2, 3].map((id) => makeTournamentTeam(id))
        )
        const res = makeRes()
        await generateMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('creates n/2 matches for n teams and returns 201', async () => {
        const teams = [1, 2, 3, 4].map((id) => makeTournamentTeam(id))
        const createdMatches = [makeMatch(1, 1, 2), makeMatch(2, 3, 4)]
        prisma.tournamentTeam.findMany.mockResolvedValue(teams)
        prisma.match.createMany.mockResolvedValue({ count: 2 })
        prisma.match.findMany.mockResolvedValue(createdMatches)

        const res = makeRes()
        await generateMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )

        expect(prisma.match.createMany).toHaveBeenCalledWith(
            expect.objectContaining({
                data: expect.arrayContaining([
                    expect.objectContaining({
                        round: 1,
                        teamAScore: 0,
                        teamBScore: 0,
                    }),
                ]),
            })
        )
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(createdMatches)
    })

    it('pairs every team exactly once across the created matches', async () => {
        const teams = [1, 2, 3, 4, 5, 6, 7, 8].map((id) =>
            makeTournamentTeam(id)
        )
        prisma.tournamentTeam.findMany.mockResolvedValue(teams)
        prisma.match.createMany.mockResolvedValue({ count: 4 })
        prisma.match.findMany.mockResolvedValue([])

        await generateMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as { data: { teamAId: number; teamBId: number }[] }
        ).data
        expect(data).toHaveLength(4)
        const allIds = data.flatMap((m) => [m.teamAId, m.teamBId])
        expect(new Set(allIds).size).toBe(8)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.tournamentTeam.findMany.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await generateMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            next
        )
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('generateRoundRobinMatches', () => {
    it('returns 400 when matches already exist for the tournament', async () => {
        prisma.match.findMany.mockResolvedValue([makeMatch(1, 1, 2)])
        const res = makeRes()
        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
        expect(prisma.match.createMany).not.toHaveBeenCalled()
    })

    it('returns 400 when fewer than 2 teams are registered', async () => {
        prisma.match.findMany.mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue([
            makeTournamentTeam(1),
        ])
        const res = makeRes()
        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('generates n*(n-1) matches for n even teams (2 legs)', async () => {
        const n = 4
        prisma.match.findMany.mockResolvedValueOnce([]).mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            Array.from({ length: n }, (_, i) => makeTournamentTeam(i + 1))
        )
        prisma.match.createMany.mockResolvedValue({ count: 12 })

        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (call[0] as { data: unknown[] }).data
        expect(data).toHaveLength(n * (n - 1))
    })

    it('generates correct match count for an odd number of teams', async () => {
        const n = 3
        prisma.match.findMany.mockResolvedValueOnce([]).mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            Array.from({ length: n }, (_, i) => makeTournamentTeam(i + 1))
        )
        prisma.match.createMany.mockResolvedValue({ count: 6 })

        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (call[0] as { data: unknown[] }).data
        expect(data).toHaveLength(n * (n - 1))
    })

    it('returns 201 with the created matches', async () => {
        const created = [makeMatch(1, 1, 2), makeMatch(2, 2, 1)]
        prisma.match.findMany
            .mockResolvedValueOnce([])
            .mockResolvedValue(created)
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 2 })

        const res = makeRes()
        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(created)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.match.findMany.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await generateRoundRobinMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            next
        )
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('generateSwissMatches', () => {
    it('returns 400 when matches already exist', async () => {
        prisma.match.findMany.mockResolvedValue([makeMatch(1, 1, 2)])
        const res = makeRes()
        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
        expect(prisma.match.createMany).not.toHaveBeenCalled()
    })

    it('returns 400 when fewer than 2 teams are registered', async () => {
        prisma.match.findMany.mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue([
            makeTournamentTeam(1),
        ])
        const res = makeRes()
        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(400)
    })

    it('creates n/2 real matches for an even team count', async () => {
        const n = 6
        prisma.match.findMany.mockResolvedValueOnce([]).mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            Array.from({ length: n }, (_, i) => makeTournamentTeam(i + 1))
        )
        prisma.match.createMany.mockResolvedValue({ count: 3 })

        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as {
                data: { teamAId: number; teamBId: number; played: boolean }[]
            }
        ).data
        const realMatches = data.filter((m) => m.teamAId !== m.teamBId)
        expect(realMatches).toHaveLength(n / 2)
    })

    it('adds exactly one bye self-match for an odd team count', async () => {
        const n = 5
        prisma.match.findMany.mockResolvedValueOnce([]).mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            Array.from({ length: n }, (_, i) => makeTournamentTeam(i + 1))
        )
        prisma.match.createMany.mockResolvedValue({ count: 3 })

        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as {
                data: {
                    teamAId: number
                    teamBId: number
                    played: boolean
                    teamAScore: number
                }[]
            }
        ).data
        const byeMatches = data.filter((m) => m.teamAId === m.teamBId)
        expect(byeMatches).toHaveLength(1)
        expect(byeMatches[0].played).toBe(true)
        expect(byeMatches[0].teamAScore).toBe(1)
    })

    it('creates floor(n/2) real matches plus one bye for odd n', async () => {
        const n = 7
        prisma.match.findMany.mockResolvedValueOnce([]).mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            Array.from({ length: n }, (_, i) => makeTournamentTeam(i + 1))
        )
        prisma.match.createMany.mockResolvedValue({ count: 4 })

        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as { data: { teamAId: number; teamBId: number }[] }
        ).data
        expect(data).toHaveLength(Math.floor(n / 2) + 1)
    })

    it('returns 201 with the created matches', async () => {
        const created = [makeMatch(1, 1, 2)]
        prisma.match.findMany
            .mockResolvedValueOnce([])
            .mockResolvedValue(created)
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 1 })

        const res = makeRes()
        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(201)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.match.findMany.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await generateSwissMatches(
            makeReq({ params: { tournamentId: '1' } }),
            makeRes(),
            next
        )
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('advanceSwissRound', () => {
    const req = makeReq({ params: { tournamentId: '1', round: '1' } })

    it('returns 404 when no matches exist for the current round', async () => {
        prisma.match.findMany.mockResolvedValue([])
        const res = makeRes()
        await advanceSwissRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(404)
    })

    it('returns 422 when unplayed real matches remain', async () => {
        prisma.match.findMany.mockResolvedValue([
            makeMatch(1, 1, 2, { played: false }),
        ])
        const res = makeRes()
        await advanceSwissRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(422)
    })

    it('does not block advancement when only bye self-matches are unplayed', async () => {
        const byeMatch = makeMatch(99, 3, 3, { played: true, teamAScore: 1 })
        const playedMatch = makeMatch(1, 1, 2, { played: true, teamAScore: 1 })

        prisma.match.findMany
            .mockResolvedValueOnce([playedMatch, byeMatch])
            .mockResolvedValueOnce(
                [1, 2, 3].map((id) => makeTournamentTeam(id)) as never
            )
            .mockResolvedValueOnce([playedMatch, byeMatch])
            .mockResolvedValue([])

        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2, 3].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 2 })

        const res = makeRes()
        await advanceSwissRound(req, res, makeNext())
        expect(res.status).not.toHaveBeenCalledWith(422)
    })

    it('returns 422 when the tournament is already complete', async () => {
        const played = makeMatch(1, 1, 2, { played: true, teamAScore: 1 })
        prisma.match.findMany.mockResolvedValueOnce([played])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2].map((id) => makeTournamentTeam(id))
        )
        const res = makeRes()
        await advanceSwissRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(422)
        expect(res.json).toHaveBeenCalledWith(
            expect.stringContaining('complete')
        )
    })

    it('creates n/2 pairings for the next round when all matches are played', async () => {
        const r1Matches = [
            makeMatch(1, 1, 2, { played: true, teamAScore: 2, teamBScore: 1 }),
            makeMatch(2, 3, 4, { played: true, teamAScore: 0, teamBScore: 1 }),
        ]
        prisma.match.findMany
            .mockResolvedValueOnce(r1Matches)
            .mockResolvedValueOnce(r1Matches)
            .mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2, 3, 4].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 2 })

        await advanceSwissRound(
            makeReq({ params: { tournamentId: '1', round: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as { data: { teamAId: number; teamBId: number }[] }
        ).data
        const realPairings = data.filter((m) => m.teamAId !== m.teamBId)
        expect(realPairings).toHaveLength(2)
    })

    it('adds a bye self-match for the leftover team when n is odd', async () => {
        const r1Matches = [
            makeMatch(1, 1, 2, { played: true, teamAScore: 1, teamBScore: 0 }),
            makeMatch(2, 3, 3, { played: true, teamAScore: 1, teamBScore: 0 }), // bye
        ]
        prisma.match.findMany
            .mockResolvedValueOnce(r1Matches)
            .mockResolvedValueOnce(r1Matches)
            .mockResolvedValue([])
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2, 3].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 2 })

        await advanceSwissRound(
            makeReq({ params: { tournamentId: '1', round: '1' } }),
            makeRes(),
            makeNext()
        )

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as {
                data: { teamAId: number; teamBId: number; played: boolean }[]
            }
        ).data
        const byes = data.filter((m) => m.teamAId === m.teamBId)
        expect(byes).toHaveLength(1)
        expect(byes[0].played).toBe(true)
    })

    it('returns 201 with the newly created round matches', async () => {
        const r1 = [
            makeMatch(1, 1, 2, { played: true, teamAScore: 1 }),
            makeMatch(2, 3, 4, { played: true, teamAScore: 2 }),
        ]
        const r2 = [makeMatch(3, 1, 3), makeMatch(4, 2, 4)]
        prisma.match.findMany
            .mockResolvedValueOnce(r1)
            .mockResolvedValueOnce(r1)
            .mockResolvedValue(r2)
        prisma.tournamentTeam.findMany.mockResolvedValue(
            [1, 2, 3, 4].map((id) => makeTournamentTeam(id))
        )
        prisma.match.createMany.mockResolvedValue({ count: 2 })

        const res = makeRes()
        await advanceSwissRound(
            makeReq({ params: { tournamentId: '1', round: '1' } }),
            res,
            makeNext()
        )
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(r2)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.match.findMany.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await advanceSwissRound(req, makeRes(), next)
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('advanceRound', () => {
    const req = makeReq({ params: { tournamentId: '1', round: '1' } })

    it('returns 422 when only one match remains (tournament finished)', async () => {
        prisma.match.findMany.mockResolvedValue([
            makeMatch(1, 1, 2, { played: true, teamAScore: 2 }),
        ])
        const res = makeRes()
        await advanceRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(422)
        expect(res.json).toHaveBeenCalledWith('Tournament is already finished')
    })

    it('returns 422 when any match has equal scores (no winner yet)', async () => {
        prisma.match.findMany.mockResolvedValue([
            makeMatch(1, 1, 2, { teamAScore: 1, teamBScore: 1 }),
            makeMatch(2, 3, 4, { teamAScore: 2, teamBScore: 0 }),
        ])
        const res = makeRes()
        await advanceRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(422)
        expect(res.json).toHaveBeenCalledWith(
            expect.stringContaining('not determined')
        )
    })

    it('advances winners correctly from round 1 to round 2', async () => {
        prisma.match.findMany
            .mockResolvedValueOnce([
                makeMatch(1, 1, 2, { teamAScore: 2, teamBScore: 0 }),
                makeMatch(2, 3, 4, { teamAScore: 1, teamBScore: 0 }),
            ])
            .mockResolvedValue([makeMatch(3, 1, 3, { round: 2 })])
        prisma.match.createMany.mockResolvedValue({ count: 1 })

        await advanceRound(req, makeRes(), makeNext())

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as {
                data: { teamAId: number; teamBId: number; round: number }[]
            }
        ).data
        expect(data).toHaveLength(1)
        expect(data[0].teamAId).toBe(1)
        expect(data[0].teamBId).toBe(3)
        expect(data[0].round).toBe(2)
    })

    it('correctly identifies the winner when teamB has the higher score', async () => {
        prisma.match.findMany
            .mockResolvedValueOnce([
                makeMatch(1, 1, 2, { teamAScore: 0, teamBScore: 3 }),
                makeMatch(2, 3, 4, { teamAScore: 2, teamBScore: 1 }),
            ])
            .mockResolvedValue([])
        prisma.match.createMany.mockResolvedValue({ count: 1 })

        await advanceRound(req, makeRes(), makeNext())

        const [call] = prisma.match.createMany.mock.calls
        const data = (
            call[0] as { data: { teamAId: number; teamBId: number }[] }
        ).data
        expect(data[0].teamAId).toBe(2)
        expect(data[0].teamBId).toBe(3)
    })

    it('returns 201 with the newly created matches', async () => {
        const nextRound = [makeMatch(3, 1, 3, { round: 2 })]
        prisma.match.findMany
            .mockResolvedValueOnce([
                makeMatch(1, 1, 2, { teamAScore: 1 }),
                makeMatch(2, 3, 4, { teamAScore: 1 }),
            ])
            .mockResolvedValue(nextRound)
        prisma.match.createMany.mockResolvedValue({ count: 1 })

        const res = makeRes()
        await advanceRound(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(nextRound)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.match.findMany.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await advanceRound(req, makeRes(), next)
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('updateMatchScore', () => {
    const req = makeReq({
        params: { id: '10' },
        body: { teamAScore: 3, teamBScore: 1 },
    })

    it('returns 404 when no match is found for the given id', async () => {
        prisma.match.findUnique.mockResolvedValue(null)
        const res = makeRes()
        await updateMatchScore(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.json).toHaveBeenCalledWith('Match not found')
    })

    it('updates the score and sets played to true', async () => {
        const existing = makeMatch(10, 1, 2)
        const updated = {
            ...existing,
            teamAScore: 3,
            teamBScore: 1,
            played: true,
        }
        prisma.match.findUnique.mockResolvedValue(existing)
        prisma.match.update.mockResolvedValue(updated)

        await updateMatchScore(req, makeRes(), makeNext())

        expect(prisma.match.update).toHaveBeenCalledWith(
            expect.objectContaining({
                where: { id: 10 },
                data: { teamAScore: 3, teamBScore: 1, played: true },
            })
        )
    })

    it('returns 200 with the updated match', async () => {
        const existing = makeMatch(10, 1, 2)
        const updated = {
            ...existing,
            teamAScore: 3,
            teamBScore: 1,
            played: true,
        }
        prisma.match.findUnique.mockResolvedValue(existing)
        prisma.match.update.mockResolvedValue(updated)

        const res = makeRes()
        await updateMatchScore(req, res, makeNext())
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(updated)
    })

    it('updates a score to 0-0 and still marks the match as played', async () => {
        const zeroReq = makeReq({
            params: { id: '10' },
            body: { teamAScore: 0, teamBScore: 0 },
        })
        const existing = makeMatch(10, 1, 2)
        const updated = {
            ...existing,
            teamAScore: 0,
            teamBScore: 0,
            played: true,
        }
        prisma.match.findUnique.mockResolvedValue(existing)
        prisma.match.update.mockResolvedValue(updated)

        const res = makeRes()
        await updateMatchScore(zeroReq, res, makeNext())
        expect(prisma.match.update).toHaveBeenCalledWith(
            expect.objectContaining({
                data: { teamAScore: 0, teamBScore: 0, played: true },
            })
        )
        expect(res.status).toHaveBeenCalledWith(200)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.match.findUnique.mockRejectedValue(new Error('DB error'))
        const next = makeNext()
        await updateMatchScore(req, makeRes(), next)
        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})
