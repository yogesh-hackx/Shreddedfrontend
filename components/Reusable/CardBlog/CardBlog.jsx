import styles from './CardBlog.module.css'

const CardBlog = (props) => {
    return (
        <div className={styles.cbBack}>
            <div className={styles.cbMain}>
                <img height="200px" width="300px" className={styles.cbImg} src={props.image} alt="img" />
                <div className={styles.cbContent}>
                    <h3 className={styles.cbTitle}>{props.title}</h3>
                    <p className={styles.cbDes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore nam itaque corporis,
                        voluptatibus assumenda sint sunt! Soluta,
                    eum! Quis libero culpa magnam corporis sint! Corrupti sed voluptatum nam amet.</p>
                    <button className={styles.cbBtn}>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default CardBlog
