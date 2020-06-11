import styles from './BlogArticle.module.css';
import f_editorjs_convert_json_to_html from './editorjs-json-to-html';
import {
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    RedditIcon,
} from 'react-share';

const BlogArticle = ({ content }) => {
    const jsonBlogData = JSON.parse(content.data);
    const blogHtmlData = f_editorjs_convert_json_to_html(jsonBlogData);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{content.title}</h1>
            <div className={styles.reactShareContainer}>
                <div>
                    <FacebookShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <FacebookIcon round={true} size={28} />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <WhatsappIcon round={true} size={28} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <LinkedinIcon round={true} size={28} />
                    </LinkedinShareButton>
                    <TelegramShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <TelegramIcon round={true} size={28} />
                    </TelegramShareButton>
                    <TwitterShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <TwitterIcon round={true} size={28} />
                    </TwitterShareButton>
                    <RedditShareButton
                        url={`https://shredded.now.sh/blogs/${content.slug}`}
                    >
                        <RedditIcon round={true} size={28} />
                    </RedditShareButton>
                </div>
                <div className={styles.timeStamp}>
                    {new Date(JSON.parse(content.data).time).toDateString()}
                </div>
            </div>

            <img
                src={content.headerImgUrl}
                className={styles.headerImage}
                alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: blogHtmlData }}></div>
        </div>
    );
};

export default BlogArticle;
