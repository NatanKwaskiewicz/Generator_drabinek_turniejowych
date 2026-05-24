import styles from './BracketMatch.module.scss'
import BracketParticipant from '../BracketParticipant'
import type { Match } from '../../types'
import { forwardRef, useState } from 'react'
import ChangeScore from '../ChangeScore'
import { getWinner } from '../../utils/getWinner.ts'

interface BracketMatchProps {
    match: Match
    isLast: boolean
    roundIndex: number
    onUpdateScore: (
        roundIndex: number,
        matchId: number,
        scoreA: number,
        scoreB: number
    ) => void
}

const BracketMatch = forwardRef<HTMLDivElement, BracketMatchProps>(
    ({ match, isLast, roundIndex, onUpdateScore }, ref) => {
        const [showChangeScore, setShowChangeScore] = useState(false)
        const winner = getWinner(match)

        const handleConfirm = (scoreA: number, scoreB: number) => {
            onUpdateScore(roundIndex, match.id, scoreA, scoreB)
            //tutaj hook chyba jakiś zeby ustawiał ten score w bazie, POST albo PATCH albo coś
            setShowChangeScore(false)
        }
        return (
            <>
                <div
                    className={`${styles.BracketMatch} ${isLast ? styles.BracketMatchLast : ''}`}
                    ref={ref}
                    onClick={() => setShowChangeScore(true)}
                >
                    <div className={styles.BracketMatchParticipants}>
                        <div className={styles.BracketMatchParticipantsOne}>
                            <BracketParticipant
                                name={match.teamA}
                                teamId={match.teamAId}
                                isWinner={winner === 'A'}
                                score={match.scoreA}
                            />
                        </div>
                        <div className={styles.BracketMatchParticipantsOne}>
                            <BracketParticipant
                                name={match.teamB}
                                teamId={match.teamBId}
                                isWinner={winner === 'B'}
                                score={match.scoreB}
                            />
                        </div>
                    </div>
                </div>

                {showChangeScore && (
                    <ChangeScore
                        match={match}
                        onConfirm={handleConfirm}
                        onCancel={() => setShowChangeScore(false)}
                    />
                )}
            </>
        )
    }
)

export default BracketMatch
