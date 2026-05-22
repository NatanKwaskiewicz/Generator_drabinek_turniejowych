import styles from './Bracket.module.scss'
import BracketGraph from '../BracketGraph'
import { useState } from 'react'
import bracketData from '../../data/bracketData.ts'
import type { Match } from '../../types'

const Bracket = () => {
    const [rounds, setRounds] = useState<Match[][]>(bracketData)

    const updateScore = (
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
    }

    return (
        <div className={styles.Bracket}>
            <BracketGraph rounds={rounds} onUpdateScore={updateScore} />
        </div>
    )
}

export default Bracket
