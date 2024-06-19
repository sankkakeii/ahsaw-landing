import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div id="about" className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
            <div className="text-center md:text-left">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    About <span className='text-yellow-400'>Us</span>
                </h1>
                <p className="text-sm md:text-base mt-4">
                    The Africa Humane Society for Animal Welfare is dedicated to rescuing and rehabilitating animals in West Africa. Our mission is to provide second chances for animals in need through rescue operations, medical care, and adoption services.
                </p>
                <p className="text-sm md:text-base mt-4">
                    We believe that every animal deserves a loving home and a chance to live a healthy, happy life. Our team works tirelessly to ensure the safety and well-being of animals, advocating for better treatment and raising awareness about animal welfare issues in the region.
                </p>
                <div className="mt-4 flex gap-3 items-center justify-center md:justify-start">
                    <button className="bg-yellow-400 px-4 py-3 rounded-md text-base md:text-lg hover:bg-yellow-300">
                        Learn More
                    </button>
                    <button className="bg-orange-400 px-4 py-3 rounded-md text-base md:text-lg hover:bg-orange-300">
                        Get Involved
                    </button>
                </div>
            </div>

            <div className="mt-8 md:mt-0">
                <Image width={500} height={500} className="rounded-2xl w-full md:w-auto" src="/images/about.jpg" alt="about us image" />
            </div>
        </div>
    );
}
