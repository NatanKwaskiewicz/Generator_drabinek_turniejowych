import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getFormats = async(_req: Request, res: Response, next: NextFunction) => {
    try {
        const formats = await prisma.format.findMany()
        res.status(200).json(formats)
    } catch (error) {
        next(error)
    }
}
