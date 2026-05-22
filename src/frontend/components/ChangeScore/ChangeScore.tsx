import styles from './ChangeScore.module.scss'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import type { Match } from '../../types'

interface ChangeScoreProps {
    match: Match
    onConfirm: (scoreA: number, scoreB: number) => void
    onCancel: () => void
}

const ChangeScore = ({ match, onConfirm, onCancel }: ChangeScoreProps) => {
    const [scoreA, setScoreA] = useState<number>(match.scoreA ?? 0)
    const [scoreB, setScoreB] = useState<number>(match.scoreB ?? 0)

    return createPortal(
        <>
            <div className={styles.Overlay} onClick={onCancel} />
            <div className={styles.ChangeScore}>
                <h2 className={styles.ChangeScoreTitle}>Update Score</h2>

                <div className={styles.ChangeScoreMatchup}>
                    <div className={styles.ChangeScoreMatchupTeam}>
                        <label className={styles.ChangeScoreMatchupTeamLabel}>
                            {match.teamA}
                        </label>
                        <input
                            className={styles.ChangeScoreMatchupTeamInput}
                            type="number"
                            min={0}
                            max={9999}
                            value={scoreA}
                            onChange={(e) =>
                                setScoreA(
                                    Math.min(
                                        9999,
                                        Math.max(
                                            0,
                                            parseInt(e.target.value) || 0
                                        )
                                    )
                                )
                            }
                        />
                    </div>

                    <span className={styles.ChangeScoreMatchupVs}>vs</span>

                    <div className={styles.ChangeScoreMatchupTeam}>
                        <label className={styles.ChangeScoreMatchupTeamLabel}>
                            {match.teamB}
                        </label>
                        <input
                            className={styles.ChangeScoreMatchupTeamInput}
                            type="number"
                            min={0}
                            max={9999}
                            value={scoreB}
                            onChange={(e) =>
                                setScoreB(
                                    Math.min(
                                        9999,
                                        Math.max(
                                            0,
                                            parseInt(e.target.value) || 0
                                        )
                                    )
                                )
                            }
                        />
                    </div>
                </div>

                <div className={styles.ChangeScoreButtons}>
                    <button
                        className={styles.ChangeScoreButtonsCancel}
                        onClick={onCancel}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.ChangeScoreButtonsConfirm}
                        onClick={() => onConfirm(scoreA, scoreB)}
                        type="button"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </>,
        document.body
    )
}

export default ChangeScore
