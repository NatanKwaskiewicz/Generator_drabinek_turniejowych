import styles from './Home.module.scss'
import Carousel from '../../components/Carousel'
import carouselData from '../../data/carouselData.ts'
import { Link } from 'react-router'
import Arrow from '../../components/Arrow'
import FormatGrid from '../../components/FormatGrid'
import { useFormats } from '../../hooks/useFormats.ts'

const Home = () => {
    const { data: formats, isLoading, isError } = useFormats()
    return (
        <div className={styles.Home}>
            <div className={styles.HomeTop}>
                <div className={styles.HomeTopLeft}>
                    <h1>The ultimate bracket tool!</h1>
                    <p>
                        Create bespoke tournament brackets with vast
                        customization options right now!
                    </p>
                    <Link
                        className={styles.HomeTopLeftLink}
                        to="/bracketGenerator"
                    >
                        Create!
                    </Link>
                </div>
                <div className={styles.HomeTopRight}>
                    <Carousel data={carouselData} />
                </div>
            </div>
            <div className={styles.HomeMid}>
                <Arrow size={40} color={'#e8edf2'} />
                <h1>Check out our formats!</h1>
                <Arrow size={40} color={'#e8edf2'} />
            </div>
            {isLoading && (
                <p className={styles.HomeLoading}>Loading formats...</p>
            )}
            {isError && (
                <p className={styles.HomeError}>Error loading formats.</p>
            )}
            {!isLoading && !isError && <FormatGrid formats={formats} />}
        </div>
    )
}
export default Home
