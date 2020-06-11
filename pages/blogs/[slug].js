import Navbar from '../../components/Reusable/Navbar/Navbar';
import Footer from '../../components/Reusable/Footer/Footer';
import BlogArticle from '../../components/Reusable/BlogArticle/BlogArticle'
import fetch from 'isomorphic-fetch';

const slug = (props) => {
    console.log(props);
    return (
        <>
            <BlogArticle content={props.json} />
        </>
    );
};
slug.getInitialProps = async ({ query }) => {
    const res = await fetch(
        `https://shredded-backend.now.sh/blog/bySlug/${query.slug}`,
    );
    const json = await res.json();
    return { json };
};

export default slug;
