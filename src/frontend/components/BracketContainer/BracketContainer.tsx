import styles from './BracketContainer.module.scss'
import Bracket from '../Bracket'
import BracketSettings from '../BracketSettings'
import type { Tournament } from '../../types'

interface BracketContainerProps {
    tournament: Tournament
}
const ROUND_ROBIN_FORMAT = 'Round Robin'

const BracketContainer = ({ tournament }: BracketContainerProps) => {
    const isRoundRobin = tournament.format.name === ROUND_ROBIN_FORMAT
    const currentRound = Math.max(...tournament.Match.map((m) => m.round), 1)
    const isFinished =
        tournament.Match.filter((m) => m.round === currentRound).length === 1

    return (
        <>
            <div className={styles.BracketContainer}>
                <h1 className={styles.BracketContainerTitle}>
                    {tournament.name}
                </h1>
                <div className={styles.BracketContainerBody}>
                    <Bracket tournament={tournament} />
                    <BracketSettings
                        tournamentId={tournament.id}
                        currentRound={currentRound}
                        isFinished={isFinished}
                        isRoundRobin={isRoundRobin}
                    />
                </div>
            </div>
        </>
    )
}

export default BracketContainer
