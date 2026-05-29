import { prisma } from './__mocks__/prisma.ts'

jest.mock('../prisma.ts', () => ({
    prisma,
}))

import {
    postTournament,
    updateTournament,
} from '../controllers/tournamentController.ts'

import { makeReq, makeRes, makeNext } from './testHelpers.ts'

describe('postTournament', () => {
    it('creates a tournament with teams when teams are provided', async () => {
        const created = {
            id: 1,
            name: 'Summer Cup',
            TournamentTeam: [{ teamId: 1 }, { teamId: 2 }],
        }

        prisma.tournament.create.mockResolvedValue(created as never)

        const req = makeReq({
            body: {
                name: 'Summer Cup',
                date: '2026-06-01',
                formatId: 1,
                teams: [{ teamId: 1 }, { teamId: 2 }],
            },
        })

        const res = makeRes()

        await postTournament(req, res, makeNext())

        expect(prisma.tournament.create).toHaveBeenCalledWith(
            expect.objectContaining({
                data: expect.objectContaining({
                    name: 'Summer Cup',
                    formatId: 1,
                    TournamentTeam: {
                        create: [{ teamId: 1 }, { teamId: 2 }],
                    },
                }),
            })
        )

        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith(created)
    })

    it('converts the provided date string into a Date object', async () => {
        prisma.tournament.create.mockResolvedValue({} as never)

        const req = makeReq({
            body: {
                name: 'Summer Cup',
                date: '2026-06-01',
                formatId: 1,
            },
        })

        await postTournament(req, makeRes(), makeNext())

        expect(prisma.tournament.create).toHaveBeenCalledWith(
            expect.objectContaining({
                data: expect.objectContaining({
                    date: expect.any(Date),
                }),
            })
        )
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.tournament.create.mockRejectedValue(new Error('DB error'))

        const next = makeNext()

        await postTournament(
            makeReq({
                body: {
                    name: 'Summer Cup',
                    date: '2026-06-01',
                    formatId: 1,
                },
            }),
            makeRes(),
            next
        )

        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})

describe('updateTournament', () => {
    it('returns 400 when name is missing', async () => {
        const req = makeReq({
            params: { id: '1' },
            body: {},
        })

        const res = makeRes()

        await updateTournament(req, res, makeNext())

        expect(res.status).toHaveBeenCalledWith(400)

        expect(res.json).toHaveBeenCalledWith({
            message: 'Tournament name is required',
        })

        expect(prisma.tournament.update).not.toHaveBeenCalled()
    })

    it('trims the tournament name before updating', async () => {
        const updated = {
            id: 1,
            name: 'Trimmed Name',
        }

        prisma.tournament.update.mockResolvedValue(updated as never)

        const req = makeReq({
            params: { id: '1' },
            body: {
                name: '   Trimmed Name   ',
            },
        })

        await updateTournament(req, makeRes(), makeNext())

        expect(prisma.tournament.update).toHaveBeenCalledWith({
            where: {
                id: 1,
            },
            data: {
                name: 'Trimmed Name',
            },
        })
    })

    it('returns 200 with the updated tournament', async () => {
        const updated = {
            id: 1,
            name: 'Updated Tournament',
        }

        prisma.tournament.update.mockResolvedValue(updated as never)

        const req = makeReq({
            params: { id: '1' },
            body: {
                name: 'Updated Tournament',
            },
        })

        const res = makeRes()

        await updateTournament(req, res, makeNext())

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(updated)
    })

    it('calls next(error) when Prisma throws', async () => {
        prisma.tournament.update.mockRejectedValue(new Error('DB error'))

        const next = makeNext()

        await updateTournament(
            makeReq({
                params: { id: '1' },
                body: {
                    name: 'Updated Tournament',
                },
            }),
            makeRes(),
            next
        )

        expect(next).toHaveBeenCalledWith(expect.any(Error))
    })
})
