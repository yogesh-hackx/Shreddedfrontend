import CardBlog from '../../components/Reusable/CardBlog/CardBlog';
import fetch from 'isomorphic-fetch';

const blog = (props) => {
    return (
        <>
            <div className="topMargin">
                {props.json.map((blog) => {
                    return (
                        <CardBlog
                            key={blog._id}
                            title={blog.title}
                            image={blog.headerImgUrl}
                            des={blog.excerpt}
                            link={blog.slug}
                        />
                    );
                })}
            </div>
        </>
    );
};
blog.getInitialProps = async () => {
    const res = await fetch(
        'https://shredded-backend.now.sh/blog/withoutFullData',
    );
    const json = await res.json();
    return { json };
};

export default blog;
