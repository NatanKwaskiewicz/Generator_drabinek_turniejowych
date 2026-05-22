import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getTournaments = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const tournaments = await prisma.tournament.findMany()
        res.status(200).json(tournaments)
    } catch (err) {
        next(err)
    }
}

export const getOneTournament = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const oneTournament = await prisma.tournament.findUnique({
            where: { id: Number(req.params.id) },
        })
        if (!oneTournament) return res.status(404).json('Tournament not found')
        res.status(200).json(oneTournament)
    } catch (err) {
        next(err)
    }
}

export const postTournament = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, date, formatId, teams } = req.body as {
            name: string
            date: string
            formatId: number
            teams?: { teamId: number }[]
        }

        const tournament = await prisma.tournament.create({
            data: {
                name,
                date: new Date(date),
                formatId: formatId,
                TournamentTeam: teams
                    ? {
                          create: teams.map((t) => ({
                              teamId: t.teamId,
                          })),
                      }
                    : undefined,
            },
            include: {
                TournamentTeam: {
                    include: { team: true },
                },
            },
        })

        res.status(201).json(tournament)
    } catch (err) {
        next(err)
    }
}
