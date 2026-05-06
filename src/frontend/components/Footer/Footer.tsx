import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={styles.Footer}>
                <h2 className={styles.FooterTitle}>Tourney</h2>
                <p className={styles.FooterCopy}>
                    Copyright &copy; {new Date().getFullYear()} Bartosz Król &
                    Natan Kwaśkiewicz
                </p>
            </footer>
        </>
    )
}

export default Footer
