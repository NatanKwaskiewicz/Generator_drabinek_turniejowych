import styles from './BracketContainer.module.scss'
import Bracket from '../Bracket'
import BracketSettings from '../BracketSettings'
import type { Tournament } from '../../types'
import { useState } from 'react'

interface BracketContainerProps {
    tournament: Tournament
}
const ROUND_ROBIN_FORMAT = 'Round Robin'
const SWISS_FORMAT = 'Swiss'

const BracketContainer = ({ tournament }: BracketContainerProps) => {
    const [activeLeg, setActiveLeg] = useState(1)
    const isRoundRobin = tournament.format.name === ROUND_ROBIN_FORMAT
    const isSwiss = tournament.format.name === SWISS_FORMAT

    const currentRound = Math.max(...tournament.Match.map((m) => m.round), 1)

    const n = tournament.TournamentTeam.length
    const swissTotalRounds = Math.ceil(Math.log2(n))
    const swissCurrentRoundAllPlayed = tournament.Match.filter(
        (m) => m.round === currentRound
    ).every((m) => m.played)

    const isSwissFinished =
        isSwiss &&
        currentRound >= swissTotalRounds &&
        swissCurrentRoundAllPlayed

    const isElimFinished =
        !isSwiss &&
        tournament.Match.filter((m) => m.round === currentRound).length === 1

    const isFinished = isSwiss ? isSwissFinished : isElimFinished
    return (
        <>
            <div className={styles.BracketContainer}>
                <h1 className={styles.BracketContainerTitle}>
                    {tournament.name}
                </h1>
                <div className={styles.BracketContainerBody}>
                    <Bracket tournament={tournament} activeLeg={activeLeg} />
                    <BracketSettings
                        tournamentId={tournament.id}
                        tournamentName={tournament.name}
                        currentRound={currentRound}
                        isFinished={isFinished}
                        showAdvanceButton={!isRoundRobin}
                        isRoundRobin={isRoundRobin}
                        isSwiss={isSwiss}
                        onAdvanceLeg={(leg) => setActiveLeg(leg)}
                        currentLeg={activeLeg}
                    />
                </div>
            </div>
        </>
    )
}

export default BracketContainer
