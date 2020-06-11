import styles from './BlogArticle.module.css';
import f_editorjs_convert_json_to_html from './editorjs-json-to-html';

const BlogArticle = ({ content }) => {
    const jsonBlogData = JSON.parse(content.data);
    const blogHtmlData = f_editorjs_convert_json_to_html(jsonBlogData);
    return (
        <div className={styles.container}>
            <img
                src={content.headerImgUrl}
                className={styles.headerImage}
                alt=""
            />
            <h1 className={styles.title}>{content.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blogHtmlData }}></div>
        </div>
    );
};

export default BlogArticle;
