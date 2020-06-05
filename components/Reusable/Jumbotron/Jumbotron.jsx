import styles from './Jumbotron.module.css'


const Jumbotron = () => {
    return (
        <>
            <div className={styles.jbMain}>
                <div className={styles.jbContent}>
                    <div className={styles.jbCol}>
                        <h1 style={{fontSize:"90px"}}>Shredded Kshatriya</h1>
                        <p style={{ fontFamily:'Josefin Sans', fontWeight:'300', letterSpacing:'1px', fontSize:"25px"}}>Transforming Bodies,Transforming You</p>
                    </div>
                    <img height="500px" src="/assets/Group 2.svg" alt="" />
                </div>
            </div>
            <div className={styles.jbOr}> </div>
        </>
    )
}
export default Jumbotron