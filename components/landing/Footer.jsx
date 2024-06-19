import Link from 'next/link';

import { Container } from '@/components/ui/containers';

const Footer = () => {
    return (
        <footer className='py-2 border-t-2'>
            <div className='flex justify-center items-center text-sm font-medium'>
                © {new Date().getFullYear()}&nbsp;
                <Link href={'/'} target='_blank' rel='noopener noreferrer'>
                    AHSAW
                </Link>
                . All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
