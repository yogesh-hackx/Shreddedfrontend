import Link from 'next/link';
import styles from './CardBlog.module.css';

const CardBlog = (props) => {
    return (
        <div className={styles.cbBack}>
            <Link href={`/blogs/${props.link}`}>
                <div className={styles.cbMain}>
                    <div className={styles.cbImge}>
                        <img
                            className={styles.cbImg}
                            src={props.image}
                            alt="img"
                        />
                    </div>
                    <div className={styles.cbContent}>
                        <div>
                            <h3 className={styles.cbTitle}>{props.title}</h3>
                            <p className={styles.cbDes}>{props.des}</p>
                        </div>
                        <div className={styles.buttonArea}>
                            <Link href={`/blogs/${props.link}`}>
                                <button className={styles.cbBtn}>
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardBlog;
