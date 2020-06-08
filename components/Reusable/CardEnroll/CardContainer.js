import CardEnroll from './CardEnroll';
import styles from './cardContainer.module.css';

const CardContainer = () => {
    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.heading}>Plans</div>
                <div className={styles.cards}>
                    <CardEnroll index={1} />
                    <CardEnroll index={2} />
                    <CardEnroll index={3} />
                </div>
            </div>
        </>
    );
};

export default CardContainer;
