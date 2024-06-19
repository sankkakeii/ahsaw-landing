import { Container } from '@/components/ui/containers';
import Link from 'next/link';
import NavMenu from './menu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-1 w-full bg-white z-50'>
      <Container className='flex justify-between items-center'>
        <Link
          href='/'>
          <div className="flex gap-2 items-center justify-center">
          <Image width={50} height={50} className="" src="/images/ahsaw-logo.svg" alt="ahsaw-logo" />
          <p className="px-4 py-2 text-xl font-bold">Ahsaw</p>
          </div>
        </Link>
        <NavMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
