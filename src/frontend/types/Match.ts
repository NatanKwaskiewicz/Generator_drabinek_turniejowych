export interface Match {
    id: number
    teamA: string
    teamB: string
    teamAId?: number
    teamBId?: number
    scoreA?: number
    scoreB?: number
    round: number
    played: boolean
}
