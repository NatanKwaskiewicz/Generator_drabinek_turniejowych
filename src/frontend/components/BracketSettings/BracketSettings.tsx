import styles from './BracketSettings.module.scss'
import { useState } from 'react'
import { useAdvanceRound } from '../../hooks/useAdvanceRound.ts'

interface BracketSettingsProps {
    tournamentId: number
    currentRound: number
    isFinished: boolean
    showAdvanceButton: boolean
    isRoundRobin?: boolean
    onAdvanceLeg?: (leg: number) => void
    currentLeg?: number
}

const BracketSettings = ({
    tournamentId,
    currentRound,
    isFinished,
    showAdvanceButton,
    isRoundRobin,
    onAdvanceLeg,
    currentLeg,
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
                    {showAdvanceButton && (
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
                        <div className={styles.BracketSettingsContentLegToggle}>
                            <button
                                className={`${styles.BracketSettingsContentLegToggleBtn} ${currentLeg === 1 ? styles.BracketSettingsContentLegToggleBtnActive : ''}`}
                                onClick={() => onAdvanceLeg?.(1)}
                                type="button"
                            >
                                Leg 1
                            </button>
                            <button
                                className={`${styles.BracketSettingsContentLegToggleBtn} ${currentLeg === 2 ? styles.BracketSettingsContentLegToggleBtnActive : ''}`}
                                onClick={() => onAdvanceLeg?.(2)}
                                type="button"
                            >
                                Leg 2
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default BracketSettings
