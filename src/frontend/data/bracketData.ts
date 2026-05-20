//development only, static data
import type { Match } from '../types'

const rounds: Match[][] = [
    [
        {
            id: 1,
            participantA: 'Team Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            participantB: 'Team B',
            winner: 'A',
            scoreA: 1,
            scoreB: 0,
        },
        {
            id: 2,
            participantA: 'Team C',
            participantB: 'Team D',
            winner: 'B',
            scoreA: 13,
            scoreB: 10,
        },
        { id: 3, participantA: 'Team E', participantB: 'Team F', winner: 'B' },
        { id: 4, participantA: 'Team G', participantB: 'Team H', winner: 'B' },
    ],
    [
        { id: 6, participantA: 'Winner E/F', participantB: 'Winner G/H' },
        { id: 6, participantA: 'Winner E/F', participantB: 'Winner G/H' },
    ],
    [{ id: 5, participantA: 'Winner A/B', participantB: 'Winner C/D' }],
]

export default rounds
