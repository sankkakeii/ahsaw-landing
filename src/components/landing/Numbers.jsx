"use client"
import React, { useState, useEffect, useRef } from 'react';

export default function Numbers() {
    const [dogCount, setDogCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting();
                    observer.unobserve(entry.target);
                }
            });
        });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const targetCount = 130; // Change this to your desired final count
        let currentCount = 0;
        const interval = setInterval(() => {
            setDogCount(prevCount => {
                if (currentCount < targetCount) {
                    currentCount++;
                    return currentCount;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 10); // Adjust the interval duration as needed
    };

    return (
        <div ref={countRef} className="rounded-2xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 px-5 md:px-10 py-10 md:py-16 bg-gray-900 my-5">
            <div className="text-center">
                <h1 className='text-4xl md:text-5xl font-bold leading-tight text-white'>
                    In 3 years Ahsaw has rescued over <span className='text-yellow-400'>{dogCount}</span>{' '}
                    Dogs from poor living conditions in west Africa
                </h1>
                <p className="text-lg text-yellow-400 my-3">And with your help we can rescue many more!</p>
            </div>
        </div>
    );
}
