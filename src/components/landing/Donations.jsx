'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPaypal, FaStripe, FaBitcoin } from 'react-icons/fa';
// import { SiFlutterwave, SiPaystack } from 'react-icons/si';

export default function Donations() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');

    const handleDonateClick = (amount) => {
        setSelectedAmount(amount);
        setIsModalOpen(true);
    };

    const handleOtherAmountClick = () => {
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
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300" onClick={() => handleDonateClick('$10')}>
                            Donate $10
                        </button>
                        <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300" onClick={() => handleDonateClick('$25')}>
                            Donate $25
                        </button>
                        <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300" onClick={() => handleDonateClick('$50')}>
                            Donate $50
                        </button>
                    </div>
                    <div className="mt-6">
                        <button className="bg-orange-400 px-6 py-4 rounded-md text-base md:text-lg hover:bg-orange-300" onClick={handleOtherAmountClick}>
                            Other Amount
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Donate</h2>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">&times;</button>
                        </div>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Enter amount"
                                value={selectedAmount}
                                onChange={(e) => setSelectedAmount(e.target.value)}
                                className="px-4 py-3 w-full rounded-md text-base border border-gray-300"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-400">
                                <FaPaypal /> PayPal
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-4 py-3 rounded-md hover:bg-indigo-400">
                                <FaStripe /> Stripe
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-400">
                                <FaBitcoin /> Flutterwave
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-400">
                                <FaBitcoin /> Paystack
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-400">
                                <FaBitcoin /> Bitcoin
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

