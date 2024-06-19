import Image from 'next/image';
import React, { useState } from 'react';
import DonationsModal from '../payment/DonationsModal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');

    const handleDonateClick = () => {
        setSelectedAmount('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        // <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16 h-screen" style={{ backgroundImage: "url('/images/colorful-stingrays.svg')" }}>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16 h-screen mt-10">
            <div className="text-center md:text-left">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Africa Humane Society For <span className='text-yellow-400'>Animal</span>{' '}
                    Welfare
                </h1>
                <p className="text-sm md:text-base">Helping create second chances for Animals in need</p>
                <div className="mt-4 flex gap-3 items-center justify-center md:justify-start">
                    <button className="bg-yellow-400 px-4 py-3 rounded-md text-base md:text-lg hover:bg-yellow-300" onClick={handleDonateClick}>
                        Donate
                    </button>
                    <button className="bg-orange-400 px-4 py-3 rounded-md text-base md:text-lg hover:bg-orange-300">
                        Adopt
                    </button>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <Image width={500} height={500} className="rounded-2xl w-full md:w-auto" src="/images/ahsaw-landing.jpeg" alt="hero image" />
            </div>

            {isModalOpen && (
                <DonationsModal modalState={isModalOpen} closeModal={closeModal} />
            )}
        </div>
    );
}
