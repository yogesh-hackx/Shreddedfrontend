import styles from './Jumbotron.module.css';

const Jumbotron = () => {
    return (
        <>
            <div className={styles.jbMain}>
                <div className="container">
                    <div className={styles.jbContent}>
                        <div className={styles.jbCol}>
                            <div className={styles.header}>
                                Shredded{' '}
                                <span className={styles.light}>Kshatriya</span>
                            </div>
                            <div className={styles.tagline}>
                                TRANSFORMING BODIES TRANSORMING YOU
                            </div>
                        </div>
                        <img
                            className={styles.headerVector}
                            height="500px"
                            src="/assets/Group 2.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.jbOr}> </div>
        </>
    );
};
export default Jumbotron;
