import styles from './CreateTeam.module.scss'
import TeamForm from '../../components/TeamForm'

const CreateTeam = () => {
    return (
        <div className={styles.CreateTeam}>
            <TeamForm />
        </div>
    )
}

export default CreateTeam
