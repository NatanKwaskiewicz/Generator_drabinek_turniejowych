import styles from './Home.module.scss'
import Carousel from '../../components/Carousel'
import carouselData from '../../data/carouselData.ts'
import { Link } from 'react-router'
import Arrow from '../../components/Arrow'
import FormatGrid from '../../components/FormatGrid'
import formatData from '../../data/formatData.ts'

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
            <div className={styles.HomeMid}>
                <Arrow size={40} color={'#e8edf2'} />
                <h1>Check out our formats!</h1>
                <Arrow size={40} color={'#e8edf2'} />
            </div>
            <FormatGrid formats={formatData} />
        </div>
    )
}
export default Home
