import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BentoGallery = ({ data, onItemClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="relative w-full h-64 cursor-pointer"
                    onClick={() => onItemClick(item)}
                >
                    <LazyLoadImage
                        src={item.headerImage}
                        alt={item.dogName}
                        effect="blur"
                        width="100%"
                        height="100%"
                        className="rounded-md object-cover"
                    />
                    <div className="rounded-md absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white p-4">
                        <h2 className="text-lg font-bold">{item.dogName}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BentoGallery;
