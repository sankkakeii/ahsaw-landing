import Header from '@/components/landing/Header';
import Numbers from '@/components/landing/Numbers';
import Roadmap from '@/components/landing/Roadmap';
import AboutUs from '@/components/landing/About';
import Contact from '@/components/landing/Contact';
import Donations from '@/components/landing/Donations';
import Team from '@/components/landing/Team';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const Home = () => {
  return (
    <div className="text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
      <Navbar />
      <Header />
      <Numbers />
      <AboutUs />
      <Roadmap />
      <Team />
      <Donations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
