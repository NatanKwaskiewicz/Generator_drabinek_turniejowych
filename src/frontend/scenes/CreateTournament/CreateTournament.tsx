import styles from './CreateTournament.module.scss'
import TournamentForm from '../../components/TournamentForm'

const CreateTournament = () => {
    return (
        <div className={styles.CreateTournament}>
            <TournamentForm />
        </div>
    )
}

export default CreateTournament
