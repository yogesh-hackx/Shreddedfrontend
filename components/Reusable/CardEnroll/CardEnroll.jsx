import styles from './CardEnroll.module.css'


const CardEnroll = () => {
    return (
        <div className={styles.ceBg}>
            <div className={styles.ceMain}>
                <div className={styles.ceTitle}>
                    <p>One Month Plan</p>
                </div>
                <div className={styles.cePrice}>
                    <img src="/assets/Vector(4).svg" alt="" />
                    <span style={{ fontSize: '64px', fontWeight: '900' }}>250</span>
                </div>
                <button className={styles.ceEnroll} type="button">Enroll Now</button>
            </div>
        </div>
        
    )
}

export default CardEnroll