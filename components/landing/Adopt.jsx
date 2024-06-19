import Image from 'next/image';
import React from 'react';

const Adopt = () => {
    return (
        <div className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16" style={{ backgroundImage: "url('/images/dalmatian-spots.svg')" }}>
            <div className="text-center md:text-left">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Under <span className='text-yellow-400'>Construction</span>
                </h1>
                <p className="text-sm md:text-base mt-4">
                    We are setting up the official adoption arm of our organization. Right now we utilize word of mouth and the structure of our partner agencies to facilitate adoptions, we are working on a more seamless and documented process.
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
                <Image width={400} height={400} className="rounded-2xl w-full md:w-auto" src="/images/about.jpg" alt="about us image" />
            </div>
        </div>
    );
}

export default Adopt;