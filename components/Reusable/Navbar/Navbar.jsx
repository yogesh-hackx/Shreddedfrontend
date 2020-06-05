import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nbMain}>
            <span className={styles.nbLogo}>SK</span>
            <span className={styles.nbList}>BLOG</span>
            <span className={styles.nbList}>PLANS</span>
        </div >
    )
}

export default Navbar