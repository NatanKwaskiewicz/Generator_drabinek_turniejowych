import type { Tournament } from '../types'
import type { Match } from '../types'

export const transformMatchesToRounds = (tournament: Tournament): Match[][] => {
    const matchesByRound: Record<number, Match[]> = {}

    for (const m of tournament.Match) {
        if (!matchesByRound[m.round]) matchesByRound[m.round] = []
        matchesByRound[m.round].push({
            id: m.id,
            teamA: m.teamA.name,
            teamB: m.teamB.name,
            scoreA: m.teamAScore,
            scoreB: m.teamBScore,
        })
    }

    return Object.keys(matchesByRound)
        .map(Number)
        .sort((a, b) => a - b)
        .map((round) => matchesByRound[round])
}
