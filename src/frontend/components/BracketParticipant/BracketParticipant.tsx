import styles from './BracketParticipant.module.scss'
import { useRef, useState } from 'react'
import TeamTooltip from '../TeamTooltip'

interface BracketParticipantProps {
    name: string
    teamId?: number
    isWinner?: boolean
    score?: number
}

const BracketParticipant = ({
    name,
    teamId,
    isWinner,
    score,
}: BracketParticipantProps) => {
    const [position, setPosition] = useState<{
        top: number
        left: number
    } | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const handleMouseEnter = () => {
        if (!teamId || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setPosition({
            top: rect.top - 8,
            left: rect.left + rect.width / 2,
        })
    }
    return (
        <div
            ref={ref}
            className={`${styles.BracketParticipant} ${isWinner ? styles.BracketParticipantWinner : ''} ${teamId ? styles.BracketParticipantClickable : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setPosition(null)}
        >
            <span className={styles.BracketParticipantName}>{name}</span>
            {score !== undefined && score !== null && (
                <span className={styles.BracketParticipantScore}>{score}</span>
            )}
            {position && teamId && (
                <TeamTooltip teamId={teamId} position={position} />
            )}
        </div>
    )
}

export default BracketParticipant
