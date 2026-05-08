import styles from './Home.module.scss'
import Carousel from '../Carousel'
import carouselData from '../../data/carouselData.ts'
import { Link } from 'react-router'

const Home = () => {
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
        </div>
    )
}
export default Home
