import styles from './BracketPage.module.scss'
import BracketContainer from '../../components/BracketContainer'
import { useLocation } from 'react-router'

const BracketPage = () => {
    const location = useLocation()
    const { tournamentName } = location.state ?? {
        tournamentName: 'Test tournament',
    }
    return (
        <>
            <div className={styles.BracketPage}>
                <BracketContainer tournamentName={tournamentName} />
            </div>
        </>
    )
}

export default BracketPage
