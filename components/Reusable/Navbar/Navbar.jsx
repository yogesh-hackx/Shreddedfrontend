import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styles from './Navbar.module.css';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Navbar = () => {
    return (
        <div className={styles.nbMain}>
            <Link href="/">
                <span className={styles.nbLogo}>SK</span>
            </Link>
            <Link href="/blogs">
                <span className={styles.nbList}>BLOG</span>
            </Link>
            <Link href="/plans">
                <span className={styles.nbList}>PLANS</span>
            </Link>
        </div>
    );
};

export default Navbar;
