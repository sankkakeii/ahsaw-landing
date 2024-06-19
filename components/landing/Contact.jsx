import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPatreon } from 'react-icons/fa';

export default function Contact() {
    return (
        <div id="contact" className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16">
            <div className="text-center md:text-left">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    <span className='text-yellow-400'>Contact</span> Us
                </h1>
                <p className="text-sm md:text-base mt-4">
                    We'd love to hear from you! Whether you have questions about our work, want to get involved, or need support, reach out to us.
                </p>
                <div className="mt-4">
                    <input
                        type="email"
                        placeholder="Send Us an Email"
                        className="px-4 py-3 w-full md:w-96 rounded-md text-base md:text-lg border border-gray-300"
                    />
                </div>
                <div className="mt-4 flex gap-3 items-center justify-center md:justify-start">
                    <button className="bg-yellow-400 px-4 py-3 rounded-md text-base md:text-lg hover:bg-yellow-300">
                        Send
                    </button>
                </div>
                <div className="mt-8 flex gap-5 items-center justify-center md:justify-start text-xl md:text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                        <FaInstagram />
                    </a>
                    <a href="https://patreon.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                        <FaPatreon />
                    </a>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <Image width={500} height={500} className="rounded-2xl w-full md:w-auto" src="/images/contact.jpg" alt="contact image" />
            </div>
        </div>
    );
}
