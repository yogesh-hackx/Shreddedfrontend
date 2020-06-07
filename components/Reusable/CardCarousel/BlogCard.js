import styles from './BlogCard.module.css'

const BlogCard = (props) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.coverContainer}>
                    <img
                        src="/assets/sampleCover.jpg"
                        alt="coverImage"
                        className={styles.coverImage}
                    />
                </div>
                <div className={styles.blogHeadline}>Headline here</div>
                <div className={styles.blogEllipsis}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    odit voluptatum numquamamet consectetur adipisicing elit.
                    deleniti.
                </div>
                <div className={styles.readMore}>READ MORE</div>
            </div>
        </>
    );
};

export default BlogCard;
