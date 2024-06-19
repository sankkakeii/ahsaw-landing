'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DonationsModal from '../payment/DonationsModal';

export default function Donations() {
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
        <>
            <div id="donate" className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16 bg-gray-100" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
                <div className="mt-8 md:mt-0 order-2 md:order-1">
                    <Image width={500} height={500} className="rounded-2xl w-full md:w-auto" src="/images/thank-you.jpg" alt="donations image" />
                </div>

                <div className="text-center md:text-left order-1 md:order-2">
                    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                        Support <span className='text-yellow-400'>Our Mission</span>
                    </h1>
                    <p className="text-sm md:text-base mt-4">
                        Your generous donations help us rescue, rehabilitate, and find homes for animals in need across West Africa. Every contribution makes a difference.
                    </p>
                    <div className="mt-6">
                        <button className="bg-orange-400 px-10 py-4 rounded-md text-base md:text-lg hover:bg-orange-300" onClick={handleDonateClick}>
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <DonationsModal modalState={isModalOpen} closeModal={closeModal} />
            )}
        </>
    );
}
