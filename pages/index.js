import Navbar from '../components/Reusable/Navbar/Navbar'
import Jumbotron from '../components/Reusable/Jumbotron/Jumbotron'
import Footer from '../components/Reusable/Footer/Footer'
import CardEnroll from '../components/Reusable/CardEnroll/CardEnroll'

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardEnroll />
      <Footer />
    </>
  )
}
