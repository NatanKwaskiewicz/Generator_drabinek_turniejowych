export interface TeamMember {
    id: number
    name: string
    surname: string
    nickname?: string | null
    countryCode?: string | null
    teamId: number
}

export interface Team {
    id: number
    name: string
    teamMembers?: TeamMember[]
}
