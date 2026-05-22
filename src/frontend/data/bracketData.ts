//development only, static data
import type { Match } from '../types'

const rounds: Match[][] = [
    [
        {
            id: 1,
            teamA: 'Team Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            teamB: 'Team B',
            scoreA: 1,
            scoreB: 0,
        },
        {
            id: 2,
            teamA: 'Team C',
            teamB: 'Team D',
            scoreA: 13,
            scoreB: 10,
        },
        { id: 3, teamA: 'Team E', teamB: 'Team F' },
        { id: 4, teamA: 'Team G', teamB: 'Team H' },
    ],
    [
        { id: 5, teamA: 'Winner E/F', teamB: 'Winner G/H' },
        { id: 6, teamA: 'Winner E/F', teamB: 'Winner G/H' },
    ],
    [{ id: 7, teamA: 'Winner A/B', teamB: 'Winner C/D' }],
]

export default rounds
