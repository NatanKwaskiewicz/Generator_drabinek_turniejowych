import styles from './Bracket.module.scss'
import BracketGraph from '../BracketGraph'
import { useEffect, useState } from 'react'
import type { Match, Tournament } from '../../types'
import { transformMatchesToRounds } from '../../utils/transformMatches.ts'
import { useUpdateMatchScore } from '../../hooks/useUpdateMatchScore.ts'
import RoundRobinTable from '../RoundRobinTable'

interface BracketProps {
    tournament: Tournament
    activeLeg?: number
}
const ROUND_ROBIN_FORMAT = 'Round Robin'

const Bracket = ({ tournament, activeLeg = 1 }: BracketProps) => {
    const isRoundRobin = tournament.format.name === ROUND_ROBIN_FORMAT
    const [rounds, setRounds] = useState<Match[][]>(() =>
        transformMatchesToRounds(tournament)
    )
    const { mutate: updateScore } = useUpdateMatchScore(tournament.id)

    useEffect(() => {
        setRounds(transformMatchesToRounds(tournament))
    }, [tournament])

    const handleUpdateScore = (
        roundIndex: number,
        matchId: number,
        scoreA: number,
        scoreB: number
    ) => {
        setRounds((prev) =>
            prev.map((round, rIdx) =>
                rIdx !== roundIndex
                    ? round
                    : round.map((match) =>
                          match.id !== matchId
                              ? match
                              : { ...match, scoreA, scoreB }
                      )
            )
        )
        updateScore({ matchId, teamAScore: scoreA, teamBScore: scoreB })
    }

    if (isRoundRobin) {
        return (
            <div className={styles.Bracket}>
                <RoundRobinTable
                    tournament={tournament}
                    activeLeg={activeLeg}
                />
            </div>
        )
    }

    return (
        <div className={styles.Bracket}>
            <BracketGraph rounds={rounds} onUpdateScore={handleUpdateScore} />
        </div>
    )
}

export default Bracket
