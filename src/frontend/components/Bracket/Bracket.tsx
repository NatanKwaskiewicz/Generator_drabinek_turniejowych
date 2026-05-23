import styles from './Bracket.module.scss'
import BracketGraph from '../BracketGraph'
import { useEffect, useState } from 'react'
import type { Match, Tournament } from '../../types'
import { transformMatchesToRounds } from '../../utils/transformMatches.ts'
import { useUpdateMatchScore } from '../../hooks/useUpdateMatchScore.ts'

interface BracketProps {
    tournament: Tournament
}

const Bracket = ({ tournament }: BracketProps) => {
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

    return (
        <div className={styles.Bracket}>
            <BracketGraph rounds={rounds} onUpdateScore={handleUpdateScore} />
        </div>
    )
}

export default Bracket
