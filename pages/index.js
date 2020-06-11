import Navbar from '../components/Reusable/Navbar/Navbar';
import Jumbotron from '../components/Reusable/Jumbotron/Jumbotron';
import Footer from '../components/Reusable/Footer/Footer';
import CardContainer from '../components/Reusable/CardEnroll/CardContainer';
import CardCarousel from '../components/Reusable/CardCarousel/CardCarousel';
import Header from '../components/Reusable/Header/Header';

export default function Home() {
    return (
        <>
            <Jumbotron />
            <CardCarousel />
            <CardContainer />
        </>
    );
}
