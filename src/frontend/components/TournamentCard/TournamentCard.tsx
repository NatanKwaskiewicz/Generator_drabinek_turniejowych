import styles from './TournamentCard.module.scss'
import { useNavigate } from 'react-router'
import { useDeleteTournament } from '../../hooks/useTournaments'
import type { Tournament } from '../../types'

type Props = {
    tournament: Tournament
}

const TournamentCard = ({ tournament }: Props) => {
    const navigate = useNavigate()
    const { mutate: deleteTournament, isPending } = useDeleteTournament()
    return (
        <div className={styles.TournamentCard}>
            <div className={styles.TournamentCardInfo}>
                <h3 className={styles.TournamentCardInfoName}>
                    {tournament.name}
                </h3>
                <div className={styles.TournamentCardInfoMeta}>
                    <span className={styles.TournamentCardInfoMetaBadge}>
                        {tournament.format.name}
                    </span>
                    <span className={styles.TournamentCardInfoMetaTeams}>
                        {tournament.TournamentTeam.length}{' '}
                        {tournament.TournamentTeam.length === 1
                            ? 'team'
                            : 'teams'}
                    </span>
                </div>
            </div>
            <div className={styles.TournamentCardActions}>
                <button
                    className={styles.TournamentCardActionsOpen}
                    onClick={() => navigate(`/bracket/${tournament.id}`)}
                    type="button"
                >
                    Open
                </button>
                <button
                    className={styles.TournamentCardActionsDelete}
                    onClick={() => deleteTournament(tournament.id)}
                    disabled={isPending}
                    type="button"
                    aria-label="Delete tournament"
                >
                    🗑
                </button>
            </div>
        </div>
    )
}

export default TournamentCard
