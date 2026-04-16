import { Link } from 'react-router'
import styles from './NavBar.module.scss'
function NavBar() {
    return (
        <nav className={styles.NavBar}>
            <ul className={styles.NavBarList}>
                <li>
                    <Link className={styles.NavBarListLink} to="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavBarListLink}
                        to="/bracketGenerator"
                    >
                        TOURNAMENT BRACKET GENERATOR
                    </Link>
                </li>
                <li>
                    <Link className={styles.NavBarListLink} to="/registerTeam">
                        REGISTER A TEAM
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar
