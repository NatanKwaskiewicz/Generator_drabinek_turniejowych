import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getMatches = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const matches = await prisma.match.findMany()
        res.status(200).json(matches)
    } catch (error) {
        next(error)
    }
}

export const generateMatches = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournamentId = Number(req.params.tournamentId)

        const tournamentTeams = await prisma.tournamentTeam.findMany({
            where: { tournamentId },
        })

        if (tournamentTeams.length < 2) {
            res.status(400).json('Not enough teams to generate matches')
        }

        if (tournamentTeams.length % 2 !== 0)
            return res.status(400).json('Number of teams must be even')

        const shuffled = [...tournamentTeams].sort(() => Math.random() - 0.5)

        const matches = []
        for (let i = 0; i < shuffled.length; i += 2) {
            matches.push({
                tournamentId,
                teamAId: shuffled[i].teamId,
                teamBId: shuffled[i + 1].teamId,
                round: 1,
                teamAScore: 0,
                teamBScore: 0,
            })
        }

        await prisma.match.createMany({ data: matches })

        const created = await prisma.match.findMany({
            where: { tournamentId, round: 1 },
            include: { teamA: true, teamB: true },
        })

        res.status(201).json(created)
    } catch (error) {
        next(error)
    }
}

export const generateRoundRobinMatches = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournamentId = Number(req.params.tournamentId)

        const existingMatches = await prisma.match.findMany({
            where: { tournamentId },
        })
        if (existingMatches.length > 0) {
            return res
                .status(400)
                .json('Matches already generated for this tournament')
        }

        const tournamentTeams = await prisma.tournamentTeam.findMany({
            where: { tournamentId },
        })

        if (tournamentTeams.length < 2) {
            return res.status(400).json('Not enough teams to generate matches')
        }

        const teams = [...tournamentTeams].sort(() => Math.random() - 0.5)
        const n = teams.length

        let list = teams.map((t) => t.teamId)
        const isOdd = n % 2 !== 0
        if (isOdd) {
            list.push(-1)
        }

        const total = list.length
        const numRounds = total - 1
        const matchesData = []

        for (let round = 0; round < numRounds; round++) {
            for (let i = 0; i < total / 2; i++) {
                const teamAId = list[i]
                const teamBId = list[total - 1 - i]

                if (teamAId === -1 || teamBId === -1) continue

                matchesData.push({
                    tournamentId,
                    teamAId,
                    teamBId,
                    round: round + 1,
                    teamAScore: 0,
                    teamBScore: 0,
                    played: false,
                })
            }
            const fixed = list[0]
            list = [fixed, list[total - 1], ...list.slice(1, total - 1)]
        }

        list = teams.map((t) => t.teamId)
        if (isOdd) list.push(-1)

        for (let round = 0; round < numRounds; round++) {
            for (let i = 0; i < total / 2; i++) {
                const teamAId = list[i]
                const teamBId = list[total - 1 - i]
                if (teamAId === -1 || teamBId === -1) continue
                matchesData.push({
                    tournamentId,
                    teamAId: teamBId,
                    teamBId: teamAId,
                    round: round + numRounds + 1,
                    teamAScore: 0,
                    teamBScore: 0,
                    played: false,
                })
            }
            const fixed = list[0]
            list = [fixed, list[total - 1], ...list.slice(1, total - 1)]
        }

        await prisma.match.createMany({ data: matchesData })

        const created = await prisma.match.findMany({
            where: { tournamentId },
            include: { teamA: true, teamB: true },
            orderBy: { id: 'asc' },
        })

        res.status(201).json(created)
    } catch (error) {
        next(error)
    }
}

export const generateSwissMatches = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournamentId = Number(req.params.tournamentId)

        const existing = await prisma.match.findMany({
            where: { tournamentId },
        })
        if (existing.length > 0)
            return res
                .status(400)
                .json('Matches already generated for this tournament')

        const tournamentTeams = await prisma.tournamentTeam.findMany({
            where: { tournamentId },
        })

        if (tournamentTeams.length < 2)
            return res.status(400).json('Not enough teams to generate matches')
        if (tournamentTeams.length % 2 !== 0)
            return res.status(400).json('Number of teams must be even')

        const shuffled = [...tournamentTeams].sort(() => Math.random() - 0.5)
        const matchesData = []

        for (let i = 0; i < shuffled.length; i += 2) {
            matchesData.push({
                tournamentId,
                teamAId: shuffled[i].teamId,
                teamBId: shuffled[i + 1].teamId,
                round: 1,
                teamAScore: 0,
                teamBScore: 0,
                played: false,
            })
        }

        await prisma.match.createMany({ data: matchesData })

        const created = await prisma.match.findMany({
            where: { tournamentId, round: 1 },
            include: { teamA: true, teamB: true },
            orderBy: { id: 'asc'}
        })

        res.status(201).json(created)
    } catch (error) {
        next(error)
    }
}

export const advanceSwissRound = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournamentId = Number(req.params.tournamentId)
        const currentRound = Number(req.params.round)

        const currentMatches = await prisma.match.findMany({
            where: { tournamentId, round: currentRound },
            orderBy: { id: 'asc' },
        })

        if (currentMatches.length === 0)
            return res.status(404).json('No matches found for this round')

        const unplayed = currentMatches.filter((m) => !m.played)
        if (unplayed.length > 0)
            return res
                .status(422)
                .json(
                    'All matches in the current round must be played before advancing.'
                )

        const tournamentTeams = await prisma.tournamentTeam.findMany({
            where: { tournamentId },
        })
        const n = tournamentTeams.length
        const totalRounds = Math.ceil(Math.log2(n))

        if (currentRound >= totalRounds)
            return res
                .status(422)
                .json(
                    `Swiss tournament is complete. Maximum ${totalRounds} rounds for ${n} teams.`
                )

        const allMatches = await prisma.match.findMany({
            where: { tournamentId },
            orderBy: { id: 'asc' },
        })

        const points: Record<number, number> = {}
        const played: Record<number, Set<number>> = {}

        for (const tt of tournamentTeams) {
            points[tt.teamId] = 0
            played[tt.teamId] = new Set()
        }

        for (const m of allMatches) {
            if (!m.played) continue
            played[m.teamAId].add(m.teamBId)
            played[m.teamBId].add(m.teamAId)
            if (m.teamAScore > m.teamBScore) {
                points[m.teamAId] += 2
            } else if (m.teamAScore < m.teamBScore) {
                points[m.teamBId] += 2
            } else {
                points[m.teamAId] += 1
                points[m.teamBId] += 1
            }
        }

        const teamIds = Object.keys(points)
            .map(Number)
            .sort((a, b) => points[b] - points[a])

        const pairings: { teamAId: number; teamBId: number }[] = []
        const unpaired: number[] = [...teamIds]

        while (unpaired.length >= 2) {
            const teamA = unpaired.shift()!

            const partnerIdx = unpaired.findIndex(
                (id) => !played[teamA].has(id)
            )

            if (partnerIdx === -1) {
                const teamB = unpaired.shift()!
                pairings.push({ teamAId: teamA, teamBId: teamB })
            } else {
                const [teamB] = unpaired.splice(partnerIdx, 1)
                pairings.push({ teamAId: teamA, teamBId: teamB })
            }
        }

        if (pairings.length === 0)
            return res
                .status(422)
                .json('Could not generate any pairings for the next round.')

        const nextRound = currentRound + 1
        const matchesData = pairings.map((p) => ({
            tournamentId,
            teamAId: p.teamAId,
            teamBId: p.teamBId,
            round: nextRound,
            teamAScore: 0,
            teamBScore: 0,
            played: false,
        }))

        await prisma.match.createMany({ data: matchesData })

        const created = await prisma.match.findMany({
            where: { tournamentId, round: nextRound },
            include: { teamA: true, teamB: true },
        })

        res.status(201).json(created)
    } catch (error) {
        next(error)
    }
}

export const advanceRound = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournamentId = Number(req.params.tournamentId)
        const currentRound = Number(req.params.round)

        const currentMatches = await prisma.match.findMany({
            where: { tournamentId, round: currentRound },
        })

        if (currentMatches.length === 1)
            return res.status(422).json('Tournament is already finished')

        const undeterminedMatches = currentMatches.filter(
            (m) => m.teamAScore === m.teamBScore
        )
        if (undeterminedMatches.length > 0)
            return res
                .status(422)
                .json(
                    'There are matches where the score (and therefore the winner) is not determined.'
                )

        const winners = currentMatches.map((m) =>
            m.teamAScore > m.teamBScore ? m.teamAId : m.teamBId
        )

        const nextMatches = []
        for (let i = 0; i < winners.length; i += 2) {
            nextMatches.push({
                tournamentId,
                teamAId: winners[i],
                teamBId: winners[i + 1],
                round: currentRound + 1,
                teamAScore: 0,
                teamBScore: 0,
            })
        }

        await prisma.match.createMany({ data: nextMatches })

        const created = await prisma.match.findMany({
            where: { tournamentId, round: currentRound + 1 },
            include: { teamA: true, teamB: true },
        })

        res.status(201).json(created)
    } catch (error) {
        next(error)
    }
}

export const updateMatchScore = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id)
        const { teamAScore, teamBScore } = req.body as {
            teamAScore: number
            teamBScore: number
        }

        const match = await prisma.match.findUnique({ where: { id } })
        if (!match) return res.status(404).json('Match not found')

        const updated = await prisma.match.update({
            where: { id },
            data: { teamAScore, teamBScore, played: true },
            include: { teamA: true, teamB: true },
        })

        res.status(200).json(updated)
    } catch (err) {
        next(err)
    }
}
