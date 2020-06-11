import CardBlog from '../components/Reusable/CardBlog/CardBlog'
import Navbar from '../components/Reusable/Navbar/Navbar'
import Footer from '../components/Reusable/Footer/Footer'
import fetch from 'isomorphic-fetch'

const blog = (props) => {
    console.log(props)
    return (
        <>
            <Navbar />
            {props.json.map(blog => {
                return <CardBlog key={blog._id} title={blog.title} image={blog.headerImgUrl} des={blog.excerpt} />
            })}
            <Footer />
        </>
    )
}
blog.getInitialProps = async () => {
    const res = await fetch('https://shredded-backend.now.sh/blog/withoutFullData')
    const json = await res.json()
    return { json }

}

export default blog

