import styles from './BracketContainer.module.scss'
import Bracket from '../Bracket'
import BracketSettings from '../BracketSettings'

interface BracketContainerProps {
    tournamentName: string
}

const BracketContainer = ({ tournamentName }: BracketContainerProps) => {
    return (
        <>
            <div className={styles.BracketContainer}>
                <h1 className={styles.BracketContainerTitle}>
                    {tournamentName}
                </h1>
                <div className={styles.BracketContainerBody}>
                    <Bracket />
                    <BracketSettings />
                </div>
            </div>
        </>
    )
}

export default BracketContainer
