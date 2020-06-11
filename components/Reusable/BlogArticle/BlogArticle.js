import styles from './BlogArticle.module.css';
import f_editorjs_convert_json_to_html from './editorjs-json-to-html';

const BlogArticle = ({ content }) => {
    const jsonBlogData = JSON.parse(content.data);
    const blogHtmlData = f_editorjs_convert_json_to_html(jsonBlogData);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{content.title}</h1>
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
