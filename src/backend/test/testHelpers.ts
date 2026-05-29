import type { Request, Response, NextFunction } from 'express'

export const makeReq = (
    overrides: Partial<{
        params: Record<string, string>
        body: unknown
    }> = {}
): Request =>
    ({
        params: {},
        body: {},
        ...overrides,
    }) as unknown as Request

export const makeRes = () => {
    const res = {
        statusCode: 0,
        body: undefined as unknown,
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    }
    return res as typeof res & Response
}

export const makeNext: () => jest.Mock<NextFunction> = () =>
    jest.fn() as jest.Mock<NextFunction>

export const makeTournamentTeam = (teamId: number, tournamentId = 1) => ({
    teamId,
    tournamentId,
    team: { id: teamId, name: `Team${teamId}` },
})

export const makeMatch = (
    id: number,
    teamAId: number,
    teamBId: number,
    overrides: Partial<{
        round: number
        teamAScore: number
        teamBScore: number
        played: boolean
        tournamentId: number
    }> = {}
) => ({
    id,
    tournamentId: 1,
    teamAId,
    teamBId,
    round: 1,
    teamAScore: 0,
    teamBScore: 0,
    played: false,
    teamA: { id: teamAId, name: `Team${teamAId}` },
    teamB: { id: teamBId, name: `Team${teamBId}` },
    ...overrides,
})
