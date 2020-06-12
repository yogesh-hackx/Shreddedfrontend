import Link from 'next/link';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import NProgress from 'nprogress';
import styles from './Navbar.module.css';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Navbar = () => {
    return (
        <div className={styles.nbMain}>
            <div className={styles.nbLogo}>
                <Link href="/">
                    <Button style={logoStyles}>SK</Button>
                </Link>
            </div>
            <div className={styles.nbList}>
                <div className={styles.navItem}>
                    <Link href="/plans">
                        <Button style={NavButtonStyles}>Plans</Button>
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link href="/blogs">
                        <Button style={NavButtonStyles}>Blog</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NavButtonStyles = { fontSize: '18px', color: '#fff' };
const logoStyles = { fontSize: '20px', color: '#fff', fontWeight: '900px' };

export default Navbar;
