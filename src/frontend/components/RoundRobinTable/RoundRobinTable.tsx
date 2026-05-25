import styles from './RoundRobinTable.module.scss'
import type { Tournament, Match, MatchLookup } from '../../types'
import { computeRoundRobinStandings } from '../../utils/transformMatches.ts'
import React, { useState } from 'react'
import { useUpdateMatchScore } from '../../hooks/useUpdateMatchScore.ts'
import ChangeScore from '../ChangeScore'
import TeamHeader from '../TeamHeader'

interface RoundRobinTableProps {
    tournament: Tournament
    activeLeg: number
}

const RoundRobinTable = ({ tournament, activeLeg }: RoundRobinTableProps) => {
    const teams = tournament.TournamentTeam.map((tt) => tt.team)
    const n = teams.length
    const roundsPerLeg = n % 2 === 0 ? n - 1 : n

    const legMatches = tournament.Match.filter((m) =>
        activeLeg === 1 ? m.round <= roundsPerLeg : m.round > roundsPerLeg
    )

    const lookup: MatchLookup = {}
    for (const m of legMatches) {
        if (!lookup[m.teamAId]) lookup[m.teamAId] = {}
        if (!lookup[m.teamBId]) lookup[m.teamBId] = {}
        const entry = {
            id: m.id,
            teamAId: m.teamAId,
            teamBId: m.teamBId,
            teamAName: m.teamA.name,
            teamBName: m.teamB.name,
            scoreA: m.teamAScore,
            scoreB: m.teamBScore,
            round: m.round,
            played: m.played,
        }
        lookup[m.teamAId][m.teamBId] = entry
        lookup[m.teamBId][m.teamAId] = entry
    }

    const [selectedMatch, setSelectedMatch] = useState<{
        id: number
        teamAId: number
        teamBId: number
        teamAName: string
        teamBName: string
        scoreA: number
        scoreB: number
        round: number
        played: boolean
    } | null>(null)

    const { mutate: updateScore } = useUpdateMatchScore(tournament.id)
    const standings = computeRoundRobinStandings(tournament)

    const handleConfirm = (scoreA: number, scoreB: number) => {
        if (!selectedMatch) return
        const { id } = selectedMatch
        updateScore({ matchId: id, teamAScore: scoreA, teamBScore: scoreB })
        setSelectedMatch(null)
    }

    const toMatch = (entry: NonNullable<typeof selectedMatch>): Match => ({
        id: entry.id,
        teamA: entry.teamAName,
        teamB: entry.teamBName,
        scoreA: entry.scoreA,
        scoreB: entry.scoreB,
        round: entry.round,
        played: entry.played,
    })

    const getCellScore = (rowTeamId: number, colTeamId: number) => {
        const entry = lookup[rowTeamId]?.[colTeamId]
        if (!entry) return null
        if (entry.teamAId === rowTeamId) {
            return { scoreRow: entry.scoreA, scoreCol: entry.scoreB }
        } else {
            return { scoreRow: entry.scoreB, scoreCol: entry.scoreA }
        }
    }

    const getCellResult = (rowTeamId: number, colTeamId: number) => {
        const score = getCellScore(rowTeamId, colTeamId)
        if (!score) return null
        const { scoreRow, scoreCol } = score
        if (scoreRow === 0 && scoreCol === 0) return 'pending'
        if (scoreRow > scoreCol) return 'win'
        if (scoreRow < scoreCol) return 'loss'
        return 'draw'
    }

    return (
        <div className={styles.RRWrapper}>
            <div className={styles.RRGridSection}>
                <div className={styles.RRGridContainer}>
                    <div className={styles.RRLegLabel}>Leg {activeLeg}</div>
                    <div
                        className={styles.RRGrid}
                        style={
                            {
                                '--team-count': teams.length,
                            } as React.CSSProperties
                        }
                    >
                        <div key="corner" className={styles.RRCorner} />

                        {teams.map((team) => (
                            <TeamHeader
                                key={team.id}
                                id={team.id}
                                name={team.name}
                                className={styles.RRColHeader}
                            />
                        ))}

                        {teams.map((rowTeam) => (
                            <React.Fragment key={`row-${rowTeam.id}`}>
                                <TeamHeader
                                    id={rowTeam.id}
                                    name={rowTeam.name}
                                    className={styles.RRRowHeader}
                                />

                                {teams.map((colTeam) => {
                                    if (rowTeam.id === colTeam.id) {
                                        return (
                                            <div
                                                key={`${rowTeam.id}-${colTeam.id}`}
                                                className={
                                                    styles.RRCellDiagonal
                                                }
                                            />
                                        )
                                    }

                                    const score = getCellScore(
                                        rowTeam.id,
                                        colTeam.id
                                    )
                                    const result = getCellResult(
                                        rowTeam.id,
                                        colTeam.id
                                    )
                                    const entry =
                                        lookup[rowTeam.id]?.[colTeam.id]

                                    return (
                                        <div
                                            key={`${rowTeam.id}-${colTeam.id}`}
                                            className={`${styles.RRCell} ${result ? styles[`RRCell_${result}`] : ''}`}
                                            onClick={() => {
                                                if (!entry) return
                                                setSelectedMatch({
                                                    id: entry.id,
                                                    teamAId: entry.teamAId,
                                                    teamBId: entry.teamBId,
                                                    teamAName: entry.teamAName,
                                                    teamBName: entry.teamBName,
                                                    scoreA: entry.scoreA,
                                                    scoreB: entry.scoreB,
                                                    round: entry.round,
                                                    played: entry.played,
                                                })
                                            }}
                                        >
                                            {score ? (
                                                <span
                                                    className={styles.RRScore}
                                                >
                                                    {score.scoreRow}:
                                                    {score.scoreCol}
                                                </span>
                                            ) : (
                                                <span
                                                    className={
                                                        styles.RRScorePending
                                                    }
                                                >
                                                    –
                                                </span>
                                            )}
                                        </div>
                                    )
                                })}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.RRStandingsSection}>
                <h2 className={styles.RRStandingsTitle}>Standings</h2>
                <div className={styles.RRTableWrapper}>
                    <table className={styles.RRTable}>
                        <thead>
                            <tr>
                                <th className={styles.RRTh}>#</th>
                                <th
                                    className={`${styles.RRTh} ${styles.RRThTeam}`}
                                >
                                    Team
                                </th>
                                <th className={styles.RRTh} title="Played">
                                    P
                                </th>
                                <th className={styles.RRTh} title="Won">
                                    W
                                </th>
                                <th className={styles.RRTh} title="Drawn">
                                    D
                                </th>
                                <th className={styles.RRTh} title="Lost">
                                    L
                                </th>
                                <th className={styles.RRTh} title="Points For">
                                    PF
                                </th>
                                <th
                                    className={styles.RRTh}
                                    title="Points Against"
                                >
                                    PA
                                </th>
                                <th
                                    className={styles.RRTh}
                                    title="Point Difference"
                                >
                                    PD
                                </th>
                                <th
                                    className={`${styles.RRTh} ${styles.RRThPts}`}
                                    title="Points"
                                >
                                    Pts
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((row, i) => (
                                <tr
                                    key={row.teamId}
                                    className={`${styles.RRRow} ${i === 0 ? styles.RRRowFirst : ''}`}
                                >
                                    <td className={styles.RRTd}>{i + 1}</td>
                                    <td
                                        className={`${styles.RRTd} ${styles.RRTdTeam}`}
                                    >
                                        <TeamHeader
                                            id={row.teamId}
                                            name={row.teamName}
                                            className={styles.RRTdTeamInner}
                                        />
                                    </td>
                                    <td className={styles.RRTd}>
                                        {row.played}
                                    </td>
                                    <td className={styles.RRTd}>{row.won}</td>
                                    <td className={styles.RRTd}>{row.drawn}</td>
                                    <td className={styles.RRTd}>{row.lost}</td>
                                    <td className={styles.RRTd}>
                                        {row.pointsFor}
                                    </td>
                                    <td className={styles.RRTd}>
                                        {row.pointsAgainst}
                                    </td>
                                    <td className={styles.RRTd}>
                                        {row.pointsFor - row.pointsAgainst}
                                    </td>
                                    <td
                                        className={`${styles.RRTd} ${styles.RRTdPts}`}
                                    >
                                        {row.points}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedMatch && (
                <ChangeScore
                    match={toMatch(selectedMatch)}
                    onConfirm={handleConfirm}
                    onCancel={() => setSelectedMatch(null)}
                />
            )}
        </div>
    )
}

export default RoundRobinTable
