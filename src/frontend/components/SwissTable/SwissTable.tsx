import styles from './SwissTable.module.scss'
import type { Tournament, Match } from '../../types'
import { computeRoundRobinStandings } from '../../utils/transformMatches.ts'
import { useState } from 'react'
import { useUpdateMatchScore } from '../../hooks/useUpdateMatchScore.ts'
import { useGenerateSwissMatches } from '../../hooks/useGenerateMatches.ts'
import ChangeScore from '../ChangeScore'
import TeamHeader from '../TeamHeader'

interface SwissTableProps {
    tournament: Tournament
}

const SwissTable = ({ tournament }: SwissTableProps) => {
    const n = tournament.TournamentTeam.length
    const totalRounds = Math.ceil(Math.log2(n))
    const hasMatches = tournament.Match.length > 0

    const {
        mutate: generateMatches,
        isPending: isGenerating,
        isError: isGenError,
        error: genError,
    } = useGenerateSwissMatches(tournament.id)

    const rounds = Array.from(
        new Set(tournament.Match.map((m) => m.round))
    ).sort((a, b) => a - b)

    const [activeRound, setActiveRound] = useState<number>(() =>
        rounds.length > 0 ? Math.max(...rounds) : 1
    )

    const latestRound = rounds.length > 0 ? Math.max(...rounds) : 1
    if (latestRound > activeRound && rounds.includes(latestRound)) {
        setActiveRound(latestRound)
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

    const handleConfirm = (scoreA: number, scoreB: number) => {
        if (!selectedMatch) return
        updateScore({
            matchId: selectedMatch.id,
            teamAScore: scoreA,
            teamBScore: scoreB,
        })
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

    const standings = computeRoundRobinStandings(tournament)

    const activeRoundMatches = tournament.Match.filter(
        (m) => m.round === activeRound
    )

    return (
        <div className={styles.SwissWrapper}>
            {!hasMatches && (
                <div className={styles.SwissGenerate}>
                    <p className={styles.SwissGenerateLabel}>
                        {n} teams · {totalRounds} rounds
                    </p>
                    <button
                        className={styles.SwissGenerateBtn}
                        onClick={() => generateMatches()}
                        disabled={isGenerating}
                        type="button"
                    >
                        {isGenerating ? 'Generating…' : 'Generate Round 1'}
                    </button>
                    {isGenError && (
                        <p className={styles.SwissError}>
                            {(genError as Error)?.message}
                        </p>
                    )}
                </div>
            )}

            {hasMatches && (
                <>
                    <div className={styles.SwissRoundTabs}>
                        {rounds.map((r) => (
                            <button
                                key={r}
                                className={`${styles.SwissRoundTab} ${r === activeRound ? styles.SwissRoundTabActive : ''}`}
                                onClick={() => setActiveRound(r)}
                                type="button"
                            >
                                Round {r}
                            </button>
                        ))}
                        <span className={styles.SwissRoundCounter}>
                            {rounds.length} / {totalRounds} rounds played
                        </span>
                    </div>
                    <div className={styles.SwissMatchList}>
                        {activeRoundMatches.map((m) => {
                            const played = m.played
                            const aWon = m.teamAScore > m.teamBScore
                            const bWon = m.teamBScore > m.teamAScore
                            return (
                                <div
                                    key={m.id}
                                    className={`${styles.SwissMatch} ${played ? styles.SwissMatchPlayed : ''}`}
                                    onClick={() =>
                                        setSelectedMatch({
                                            id: m.id,
                                            teamAId: m.teamAId,
                                            teamBId: m.teamBId,
                                            teamAName: m.teamA.name,
                                            teamBName: m.teamB.name,
                                            scoreA: m.teamAScore,
                                            scoreB: m.teamBScore,
                                            round: m.round,
                                            played: m.played,
                                        })
                                    }
                                >
                                    <span
                                        className={`${styles.SwissMatchTeam} ${played && aWon ? styles.SwissMatchTeamWinner : ''}`}
                                    >
                                        {m.teamA.name}
                                    </span>
                                    <span className={styles.SwissMatchScore}>
                                        {played
                                            ? `${m.teamAScore} : ${m.teamBScore}`
                                            : 'vs'}
                                    </span>
                                    <span
                                        className={`${styles.SwissMatchTeam} ${styles.SwissMatchTeamRight} ${played && bWon ? styles.SwissMatchTeamWinner : ''}`}
                                    >
                                        {m.teamB.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
            <div className={styles.SwissStandingsSection}>
                <h2 className={styles.SwissStandingsTitle}>Standings</h2>
                <div className={styles.SwissTableWrapper}>
                    <table className={styles.SwissTable}>
                        <thead>
                            <tr>
                                <th className={styles.SwissTh}>#</th>
                                <th
                                    className={`${styles.SwissTh} ${styles.SwissThTeam}`}
                                >
                                    Team
                                </th>
                                <th className={styles.SwissTh} title="Played">
                                    P
                                </th>
                                <th className={styles.SwissTh} title="Won">
                                    W
                                </th>
                                <th className={styles.SwissTh} title="Drawn">
                                    D
                                </th>
                                <th className={styles.SwissTh} title="Lost">
                                    L
                                </th>
                                <th
                                    className={styles.SwissTh}
                                    title="Points For"
                                >
                                    PF
                                </th>
                                <th
                                    className={styles.SwissTh}
                                    title="Points Against"
                                >
                                    PA
                                </th>
                                <th
                                    className={styles.SwissTh}
                                    title="Point Difference"
                                >
                                    PD
                                </th>
                                <th
                                    className={`${styles.SwissTh} ${styles.SwissThPts}`}
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
                                    className={`${styles.SwissRow} ${i === 0 && hasMatches ? styles.SwissRowFirst : ''}`}
                                >
                                    <td className={styles.SwissTd}>{i + 1}</td>
                                    <td
                                        className={`${styles.SwissTd} ${styles.SwissTdTeam}`}
                                    >
                                        <TeamHeader
                                            id={row.teamId}
                                            name={row.teamName}
                                            className={styles.SwissTdTeamInner}
                                        />
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.played}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.won}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.drawn}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.lost}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.pointsFor}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.pointsAgainst}
                                    </td>
                                    <td className={styles.SwissTd}>
                                        {row.pointsFor - row.pointsAgainst}
                                    </td>
                                    <td
                                        className={`${styles.SwissTd} ${styles.SwissTdPts}`}
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

export default SwissTable
