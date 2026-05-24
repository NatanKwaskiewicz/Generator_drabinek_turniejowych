import styles from './TournamentBrowser.module.scss'
import TournamentList from '../../components/TournamentList'

const TournamentBrowser = () => {
    return (
        <div className={styles.TournamentBrowser}>
            <TournamentList />
        </div>
    )
}

export default TournamentBrowser