import React, { useState } from 'react';
import BentoGallery from '@/components/galleryComponents/Bento';
import Modal from '@/components/galleryComponents/GalleryModal';

const data = [
    {
        headerImage: '/images/team/pug.jpg',
        slideshowImages: [
            '/images/team/pug.jpg',
            '/images/team/pug.jpg'
        ],
        title: 'Dog 1',
        dogName: 'Buddy',
        description: 'A friendly dog.',
        features: ['Friendly', 'Energetic', 'Loyal']
    },
    {
        headerImage: '/images/contact.jpg',
        slideshowImages: [
            '/images/team/pug.jpg',
            '/images/team/pug.jpg'
        ],
        title: 'Dog 2',
        dogName: 'Max',
        description: 'A playful dog.',
        features: ['Playful', 'Curious', 'Intelligent']
    },
    // Add more data objects as needed
];

const GalleryPage = () => {
    const [selectedDog, setSelectedDog] = useState(null);

    const handleItemClick = (dog) => {
        setSelectedDog(dog);
    };

    const closeModal = () => {
        setSelectedDog(null);
    };

    return (
        <div className='flex flex-col items-center px-5 md:px-10 py-10'>
            <h1 className='text-4xl md:text-5xl font-bold leading-tight text-center mb-10'>
                Gallery
            </h1>
            <BentoGallery data={data} onItemClick={handleItemClick} />
            <Modal isOpen={!!selectedDog} onClose={closeModal} dog={selectedDog} />
        </div>
    );
};

export default GalleryPage;
