import styles from './BracketSettings.module.scss'
import { useState } from 'react'
import { useAdvanceRound } from '../../hooks/useAdvanceRound.ts'

interface BracketSettingsProps {
    tournamentId: number
    currentRound: number
    isFinished: boolean
    isRoundRobin: boolean
}

const BracketSettings = ({
    tournamentId,
    currentRound,
    isFinished,
    isRoundRobin,
}: BracketSettingsProps) => {
    const [expanded, setExpanded] = useState(true)
    const {
        mutate: advanceRound,
        isPending,
        isError,
        error,
    } = useAdvanceRound(tournamentId)

    if (isError) console.error(error)
    return (
        <div
            className={`${styles.BracketSettings} ${expanded ? styles.BracketSettingsExpanded : styles.BracketSettingsCollapsed}`}
        >
            <button
                className={styles.BracketSettingsToggle}
                onClick={() => setExpanded((prev) => !prev)}
                aria-label={expanded ? 'Collapse settings' : 'Expand settings'}
            >
                {expanded ? <>&#10006;</> : <>&#9881;</>}
            </button>
            {expanded && (
                <div className={styles.BracketSettingsContent}>
                    {!isRoundRobin && (
                        <>
                            <button
                                className={styles.BracketSettingsContentAdvance}
                                onClick={() => advanceRound(currentRound)}
                                disabled={isPending || isFinished}
                                type="button"
                            >
                                {isPending
                                    ? 'Advancing...'
                                    : isFinished
                                      ? 'Final round'
                                      : `Advance to Round ${currentRound + 1}`}
                            </button>
                            {isError && (
                                <p className={styles.BracketSettingsError}>
                                    {error?.message}
                                </p>
                            )}
                        </>
                    )}
                    {isRoundRobin && (
                        <p className={styles.BracketSettingsInfo}>
                            Round Robin — all matches are played in full.
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}

export default BracketSettings
