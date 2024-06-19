import React, { useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Modal = ({ isOpen, onClose, dog }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 relative">
                <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    &times;
                </button>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">{dog.dogName}</h2>
                    <p className="mb-4">{dog.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dog.slideshowImages.map((image, index) => (
                            <LazyLoadImage
                                key={index}
                                src={image}
                                alt={`${dog.dogName} - Slide ${index + 1}`}
                                effect="blur"
                                width="100%"
                                height="100%"
                                className="rounded-md object-cover"
                            />
                        ))}
                    </div>
                    <h3 className="text-xl font-bold mt-4">Features</h3>
                    <ul className="list-disc list-inside">
                        {dog.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
