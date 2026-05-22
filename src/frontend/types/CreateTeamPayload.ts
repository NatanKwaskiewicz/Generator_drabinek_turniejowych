export interface CreateTeamPayload {
    name: string
    teamMember?: { name: string; surname: string; nickname?: string }[]
}
