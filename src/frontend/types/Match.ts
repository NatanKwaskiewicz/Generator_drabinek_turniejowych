export interface Match {
    id: number
    participantA: string
    participantB: string
    winner?: 'A' | 'B'
    scoreA?: number
    scoreB?: number
}