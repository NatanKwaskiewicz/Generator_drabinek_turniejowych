import { prisma } from '../prisma.ts';
import type { Request, Response, NextFunction } from 'express';

export const getTeams = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const team = await prisma.teams.findMany();
        res.status(200).json(team);
    } catch (err) {
        next(err);
    }
};

export const getOneTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const oneTeam = await prisma.teams.findUnique({
            where: { id: Number(req.params.id) },
        });
        if (!oneTeam) return res.status(404).json('Team not found');
        res.status(200).json(oneTeam);
    } catch (err) {
        next(err);
    }
};

export const postTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, participants } = req.body as {
            name: string
            participants?: { name: string; surname: string }[]
        }

        const team = await prisma.teams.create({
            data: {
                name,
                participant: participants
                    ? { create: participants }
                    : undefined,
            },
            include: { participant: true },
        })
        res.status(201).json(team)
    } catch (err) {
        next(err)
    }
}