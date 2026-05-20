import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getTeamMembers = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const teamMember = await prisma.teamMember.findMany({
            include: { team: true },
        })
        res.status(200).json(teamMember)
    } catch (err) {
        next(err)
    }
}

export const getOneTeamMember = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const oneTeamMember = await prisma.teamMember.findUnique({
            where: { id: Number(req.params.id) },
            include: { team: true },
        })
        if (!oneTeamMember)
            return res.status(404).json('Team member not found')
        res.status(200).json(oneTeamMember)
    } catch (err) {
        next(err)
    }
}

export const postTeamMember = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { name, surname, nickname, teamId } = req.body as {
            name: string
            surname: string
            nickname?: string
            teamId: number
        }

        const teamMember = await prisma.teamMember.create({
            data: { name, surname, nickname: nickname ?? null, teamId },
            include: { team: true },
        })
        res.status(201).json(teamMember)
    } catch (err) {
        next(err)
    }
}