import styles from './BracketParticipant.module.scss'

interface BracketParticipantProps {
    name: string
    isWinner?: boolean
    score?: number
}

const BracketParticipant = ({
    name,
    isWinner,
    score,
}: BracketParticipantProps) => {
    return (
        <div
            className={`${styles.BracketParticipant} ${isWinner ? styles.BracketParticipantWinner : ''}`}
        >
            <span className={styles.BracketParticipantName}>{name}</span>
            {score !== undefined && score !== null && (
                <span className={styles.BracketParticipantScore}>{score}</span>
            )}
        </div>
    )
}

export default BracketParticipant
