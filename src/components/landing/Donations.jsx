import Image from 'next/image';
import React from 'react';

export default function Donations() {
    return (
        <div className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16 bg-gray-100" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
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
                    <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300">
                        Donate $10
                    </button>
                    <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300">
                        Donate $25
                    </button>
                    <button className="bg-yellow-400 px-4 py-5 rounded-md text-base md:text-lg hover:bg-yellow-300">
                        Donate $50
                    </button>
                </div>
                <div className="mt-6">
                    <button className="bg-orange-400 px-6 py-4 rounded-md text-base md:text-lg hover:bg-orange-300">
                        Other Amount
                    </button>
                </div>
            </div>
        </div>
    );
}
