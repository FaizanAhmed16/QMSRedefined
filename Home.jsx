import Features from '../components/Features'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction';
import Navbar from "../components/NavBar";
import QuickInfo from '../components/QuickInfo';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default Home