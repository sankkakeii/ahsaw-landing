import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        description: 'John has over 20 years of experience in animal welfare and founded the Africa Humane Society to make a difference.',
        image: '/images/team/pug.jpg'
    },
    {
        name: 'Jane Smith',
        role: 'Veterinarian',
        description: 'Jane is our lead veterinarian, ensuring that all rescued animals receive the best medical care.',
        image: '/images/team/pug.jpg'
    },
    {
        name: 'Emily Johnson',
        role: 'Operations Manager',
        description: 'Emily manages our daily operations and coordinates rescue missions across West Africa.',
        image: '/images/team/pug.jpg'
    },
    {
        name: 'Michael Brown',
        role: 'Adoption Coordinator',
        description: 'Michael works tirelessly to find loving homes for our rescued animals.',
        image: '/images/team/pug.jpg'
    }
];

export default function Team() {
    return (
        <div className="flex flex-col items-center justify-center px-5 md:px-10 py-10 md:py-16">
            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center'>
                Meet Our <span className='text-yellow-400'>Team</span>
            </h1>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <Image
                            src={member.image}
                            alt={`${member.name} photo`}
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                        <h2 className="mt-4 text-xl font-semibold">{member.name}</h2>
                        <h3 className="mt-2 text-lg text-yellow-400">{member.role}</h3>
                        <p className="mt-2 text-sm">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
