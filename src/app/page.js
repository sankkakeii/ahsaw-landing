import Header from '@/components/landing/Header';
import Numbers from '@/components/landing/Numbers';
import { Container } from '../components/ui/containers';

const Home = () => {
  return (
    <Container className='text-center'>
      <Header />
      <Numbers />
    </Container>
  );
};

export default Home;
