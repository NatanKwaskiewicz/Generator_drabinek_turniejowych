import styles from './BracketMatch.module.scss'
import BracketParticipant from '../BracketParticipant'
import type { Match } from '../../types'
import { forwardRef } from 'react'

interface BracketMatchProps {
    match: Match
    isLast: boolean
}

const BracketMatch = forwardRef<HTMLDivElement, BracketMatchProps>(
    ({ match, isLast }, ref) => {
        return (
            <div
                className={`${styles.BracketMatch} ${isLast ? styles.BracketMatchLast : ''}`}
                ref={ref}
            >
                <div className={styles.BracketMatchParticipants}>
                    <div className={styles.BracketMatchParticipantsOne}>
                        <BracketParticipant
                            name={match.participantA}
                            isWinner={match.winner === 'A'}
                            score={match.scoreA}
                        />
                    </div>
                    <div className={styles.BracketMatchParticipantsOne}>
                        <BracketParticipant
                            name={match.participantB}
                            isWinner={match.winner === 'B'}
                            score={match.scoreB}
                        />
                    </div>
                </div>
            </div>
        )
    }
)

export default BracketMatch
