export interface Tournament {
    id: number
    name: string
    date: string
    createdAt: string
    formatId: number
    format: { id: number; name: string }
    TournamentTeam: {
        teamId: number
        team: { id: number; name: string }
    }[]
    Match: {
        id: number
        tournamentId: number
        teamAId: number
        teamBId: number
        teamAScore: number
        teamBScore: number
        round: number
        played: boolean
        teamA: { id: number; name: string }
        teamB: { id: number; name: string }
    }[]
}
