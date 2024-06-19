import React from 'react';
import Link from 'next/link';
import { FaPaypal, FaStripe, FaBitcoin } from 'react-icons/fa';

export default function DonationsModal({ modalState, closeModal }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold  text-slate-800">Donate</h2>
                    <p onClick={closeModal} className="text-gray-400 text-4xl rounded-full px-2 hover:text-red-400 hover:cursor-pointer">&times;</p>
                </div>
                <div className="mt-4">
                    <h1 className="text-slate-600">Your contributions mean so much to us!!!</h1>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <Link href={'https://www.paypal.com/paypalme/ahsaw2022'} alt='paypal' className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-400">
                        <button className="flex items-center justify-center gap-2">
                            <FaPaypal /> PayPal
                        </button>
                    </Link>

                    <Link href={''} alt='stripe' className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-4 py-3 rounded-md hover:bg-indigo-400">
                        <button className="flex items-center justify-center gap-2">
                            <FaStripe /> Stripe
                        </button>
                    </Link>

                    <Link href={''} alt='flutterwave' className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-3 rounded-md hover:bg-yellow-400">
                        <button className="flex items-center justify-center gap-2">
                            <FaBitcoin /> Flutterwave
                        </button>
                    </Link>

                    <Link href={''} alt='paystack' className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-400">
                        <button className="flex items-center justify-center gap-2">
                            <FaBitcoin /> Paystack
                        </button>
                    </Link>

                    <Link href={''} alt='bitcoin' className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-md hover:bg-orange-400">
                        <button className="flex items-center justify-center gap-2">
                            <FaBitcoin /> Bitcoin
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
