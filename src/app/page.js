import Header from '@/components/landing/Header';
import Numbers from '@/components/landing/Numbers';
import { Container } from '../components/ui/containers';
import Roadmap from '@/components/landing/Roadmap';
import AboutUs from '@/components/landing/About';
import Contact from '@/components/landing/Contact';
import Donations from '@/components/landing/Donations';
import Team from '@/components/landing/Team';

const Home = () => {
  return (
    <Container className="text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
      <Header />
      <Numbers />
      <AboutUs />
      <Roadmap />
      <Team />
      <Donations />
      <Contact />
    </Container>
  );
};

export default Home;
