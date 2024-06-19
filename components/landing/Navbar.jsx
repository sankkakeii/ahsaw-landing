import { Container } from '@/components/ui/containers';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './NavMenu';

const Navbar = () => {
    return (
        <nav className='py-4 px-10 border-b-1 w-full z-50'>
            <div className='flex justify-between items-center'>
                <Link
                    href='/'>
                    <div className="flex gap-2 items-center justify-center">
                        <Image width={50} height={50} className="" src="/images/ahsaw-logo.svg" alt="ahsaw-logo" />
                        <p className="px-4 py-2 text-xl font-bold">Ahsaw</p>
                    </div>
                </Link>
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;
