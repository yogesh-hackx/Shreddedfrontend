import Carousel from 'react-multi-carousel';
import BlogCard from './BlogCard';

const CardCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <>
            <div className="container">
                <div style={styles.heading}>Blogs</div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr
                    showDots
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item"
                    autoPlay={true}
                    //   deviceType={this.props.deviceType}
                >
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    {/* {images.map((src, index) => (
                        <img src={src} key={index} />
                    ))} */}
                </Carousel>
            </div>
        </>
    );
};

const styles = {
    heading: {
        fontSize: '36px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '65px',
    },
};

export default CardCarousel;
