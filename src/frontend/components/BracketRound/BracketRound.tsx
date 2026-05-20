import styles from './BracketRound.module.scss'
import BracketMatch from '../BracketMatch'
import type { Match } from '../../types'

interface BracketRoundProps {
    matches: Match[]
    isLast: boolean
    setMatchRef: (matchIndex: number) => (el: HTMLDivElement | null) => void
}

const BracketRound = ({ matches, isLast, setMatchRef }: BracketRoundProps) => {
    return (
        <div className={styles.BracketRound}>
            {matches.map((match, i) => (
                <BracketMatch
                    key={match.id}
                    match={match}
                    isLast={isLast}
                    ref={setMatchRef(i)}
                />
            ))}
        </div>
    )
}

export default BracketRound
