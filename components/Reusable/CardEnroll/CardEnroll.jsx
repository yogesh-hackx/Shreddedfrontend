import styles from './CardEnroll.module.css';

const CardEnroll = (props) => {
    console.log(props.index);
    const cardDetails = [
        {
            src: `/assets/Transform-0${props.index}.svg`,
            plan: 'One Month Plan',
            price: '250',
        },
        {
            src: `/assets/Transform-0${props.index}.svg`,
            plan: 'Two Month Plan',
            price: '480',
        },
        {
            src: `/assets/Transform-0${props.index}.svg`,
            plan: 'Six Month Plan',
            price: '1400',
        },
    ];
    return (
        <div className={styles.card}>
            <div className={styles.illustration}>
                <img src={cardDetails[parseInt(props.index) - 1].src} alt="" />
            </div>
            <div className={styles.planDetail}>
                {cardDetails[parseInt(props.index) - 1].plan}
            </div>
            <div className={styles.priceContainer}>
                <img src="/assets/rupeesIcon.svg" alt="" />
                <span className={styles.price}>
                    {cardDetails[parseInt(props.index) - 1].price}
                </span>
            </div>
            <div className={styles.enrollButton}>ENROLL NOW</div>
        </div>
    );
};

export default CardEnroll;
