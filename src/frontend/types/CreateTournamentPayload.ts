export interface CreateTournamentPayload {
    name: string
    date: string
    formatId: number
    teams?: { teamId: number }[]
}
