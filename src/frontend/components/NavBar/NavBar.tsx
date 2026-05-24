import { Link } from 'react-router'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <h1 className={styles.NavBarTitle}>
                <Link className={styles.NavBarTitleLink} to="/">
                    Tourney
                </Link>
            </h1>
            <ul className={styles.NavBarList}>
                <li>
                    <Link className={styles.NavBarListLink} to="/tournaments">
                        Browse tournaments
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavBarListLink}
                        to="/bracketGenerator"
                    >
                        Create bracket
                    </Link>
                </li>
                <li>
                    <Link className={styles.NavBarListLink} to="/createTeam">
                        Register team
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
