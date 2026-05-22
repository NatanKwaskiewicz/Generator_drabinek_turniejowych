import styles from './BracketRound.module.scss'
import BracketMatch from '../BracketMatch'
import type { Match } from '../../types'

interface BracketRoundProps {
    matches: Match[]
    isLast: boolean
    setMatchRef: (matchIndex: number) => (el: HTMLDivElement | null) => void
    roundIndex: number
    onUpdateScore: (
        roundIndex: number,
        matchId: number,
        scoreA: number,
        scoreB: number
    ) => void
}

const BracketRound = ({
    matches,
    isLast,
    setMatchRef,
    roundIndex,
    onUpdateScore,
}: BracketRoundProps) => {
    return (
        <div className={styles.BracketRound}>
            {matches.map((match, i) => (
                <BracketMatch
                    key={match.id}
                    match={match}
                    isLast={isLast}
                    ref={setMatchRef(i)}
                    roundIndex={roundIndex}
                    onUpdateScore={onUpdateScore}
                />
            ))}
        </div>
    )
}

export default BracketRound
