import styles from './BracketPage.module.scss'
import BracketContainer from '../../components/BracketContainer'
import { useParams } from 'react-router'
import { useTournament } from '../../hooks/useTournament.ts'

const BracketPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data: tournament, isLoading, isError } = useTournament(id)

    return (
        <div className={styles.BracketPage}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching tournament</p>}
            {!isError && !isLoading && tournament && (
                <BracketContainer tournament={tournament} />
            )}
        </div>
    )
}

export default BracketPage
