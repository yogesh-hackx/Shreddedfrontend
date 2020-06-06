import Navbar from '../components/Reusable/Navbar/Navbar';
import Jumbotron from '../components/Reusable/Jumbotron/Jumbotron';
import Footer from '../components/Reusable/Footer/Footer';
import CardContainer from '../components/Reusable/CardEnroll/CardContainer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <CardContainer />
            <Footer />
        </>
    );
}