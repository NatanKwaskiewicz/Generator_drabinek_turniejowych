import styles from './TournamentList.module.scss'
import { useTournaments } from '../../hooks/useTournaments'
import TournamentCard from '../TournamentCard'

const TournamentList = () => {
    const { data: tournaments, isLoading, isError, error } = useTournaments()
    return (
        <div className={styles.TournamentList}>
            <h2 className={styles.TournamentListTitle}>Tournaments</h2>
            {isLoading && (
                <p className={styles.TournamentListInfo}>
                    Loading tournaments...
                </p>
            )}
            {isError && (
                <p className={styles.TournamentListError}>{error?.message}</p>
            )}
            {!isLoading && !isError && tournaments?.length === 0 && (
                <p className={styles.TournamentListInfo}>No tournaments yet.</p>
            )}
            {!isLoading &&
                !isError &&
                tournaments &&
                tournaments.length > 0 && (
                    <div className={styles.TournamentListGrid}>
                        {tournaments.map((t) => (
                            <TournamentCard key={t.id} tournament={t} />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default TournamentList
