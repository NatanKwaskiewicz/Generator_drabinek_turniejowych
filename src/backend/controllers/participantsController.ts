import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getParticipants = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const participants = await prisma.participant.findMany({
            include: { team: true },
        })
        res.status(200).json(participants)
    } catch (err) {
        next(err)
    }
}

export const getOneParticipant = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const oneParticipant = await prisma.participant.findUnique({
            where: { id: Number(req.params.id) },
            include: { team: true },
        })
        if (!oneParticipant)
            return res.status(404).json('Participant not found')
        res.status(200).json(oneParticipant)
    } catch (err) {
        next(err)
    }
}

export const postParticipant = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, surname, teamId } = req.body as {
            name: string
            surname: string
            teamId: number
        }

        const participant = await prisma.participant.create({
            data: { name, surname, teamId },
            include: { team: true },
        })
        res.status(201).json(participant)
    } catch (err) {
        next(err)
    }
}
