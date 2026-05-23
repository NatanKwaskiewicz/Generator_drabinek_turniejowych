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

        //te sie nie powinny wydarzyć nigdy bo jest check przy tworzeniu turnieju ale dla pewności
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
            data: { teamAScore, teamBScore },
            include: { teamA: true, teamB: true },
        })

        res.status(200).json(updated)
    } catch (err) {
        next(err)
    }
}
