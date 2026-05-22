export interface CreateTournamentPayload {
    name: string
    format: string
    date: string
    teams?: { teamId: number }[]
}
