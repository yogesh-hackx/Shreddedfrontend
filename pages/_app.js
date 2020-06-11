import 'react-multi-carousel/lib/styles.css';
import '../public/css/styles.css';
import Header from '../components/Reusable/Header/Header';
import Navbar from '../components/Reusable/Navbar/Navbar';
import Footer from '../components/Reusable/Footer/Footer';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
