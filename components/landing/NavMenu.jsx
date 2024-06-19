'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CloseIcon, MenuIcon } from '../ui/icons/menus';

const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: '#donate', label: 'Donate' },
        { href: '/adopt', label: 'Adopt' },
        { href: '#about', label: 'About Us' },
        { href: '/gallery', label: 'Gallery' },
        // { href: 'https://aitools.fyi/', label: 'aitools.fyi' },
        { href: 'https://strayaidfoundation.beehiiv.com', label: 'Newsletter' },
    ];

    return (
        <>
            <div className='hidden md:flex'>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className='px-4 py-2 text-sm font-bold hover:text-yellow-400 hover:underline'
                        {...(link.href.startsWith('http')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className='md:hidden'>
                <button
                    className='p-2'
                    type='button'
                    aria-label='Toggle menu'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <div
                    className={`absolute right-0 w-full bg-white shadow-md py-2 px-4 mt-2 rounded-md ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className='block px-4 py-2 text-sm font-medium hover:font-bold'
                            onClick={() => setIsMenuOpen(false)}
                            {...(link.href.startsWith('http')
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavMenu;
