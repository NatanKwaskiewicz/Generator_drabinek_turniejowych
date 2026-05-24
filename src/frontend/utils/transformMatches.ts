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
            round: m.round,
            played: m.played,
        })
    }

    return Object.keys(matchesByRound)
        .map(Number)
        .sort((a, b) => a - b)
        .map((round) => matchesByRound[round])
}

export interface RoundRobinStanding {
    teamId: number
    teamName: string
    played: number
    won: number
    drawn: number
    lost: number
    pointsFor: number
    pointsAgainst: number
    points: number
}

export const computeRoundRobinStandings = (
    tournament: Tournament
): RoundRobinStanding[] => {
    const standingsMap: Record<number, RoundRobinStanding> = {}

    for (const tt of tournament.TournamentTeam) {
        standingsMap[tt.teamId] = {
            teamId: tt.teamId,
            teamName: tt.team.name,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            pointsFor: 0,
            pointsAgainst: 0,
            points: 0,
        }
    }

    for (const m of tournament.Match) {
        if (!m.played) continue
        const a = standingsMap[m.teamAId]
        const b = standingsMap[m.teamBId]

        if (!a || !b) continue

        a.played++
        b.played++
        a.pointsFor += m.teamAScore
        a.pointsAgainst += m.teamBScore
        b.pointsFor += m.teamBScore
        b.pointsAgainst += m.teamAScore

        if (m.teamAScore > m.teamBScore) {
            a.won++
            a.points += 3
            b.lost++
        } else if (m.teamAScore < m.teamBScore) {
            b.won++
            b.points += 3
            a.lost++
        } else {
            a.drawn++
            b.drawn++
            a.points += 1
            b.points += 1
        }
    }

    return Object.values(standingsMap).sort((x, y) => {
        if (y.points !== x.points) return y.points - x.points
        const gdX = x.pointsFor - x.pointsAgainst
        const gdY = y.pointsFor - y.pointsAgainst
        if (gdY !== gdX) return gdY - gdX
        return y.pointsFor - x.pointsFor
    })
}

export const transformMatchesToRoundRobinRounds = (
    tournament: Tournament
): Match[][] => {
    return transformMatchesToRounds(tournament)
}
