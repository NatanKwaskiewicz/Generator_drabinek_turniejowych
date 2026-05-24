export interface MatchLookup {
    [teamAId: number]: {
        [teamBId: number]: {
            id: number
            teamAId: number
            teamBId: number
            teamAName: string
            teamBName: string
            scoreA: number
            scoreB: number
            round: number
            played: boolean
        }
    }
}
