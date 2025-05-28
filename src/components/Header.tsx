'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    <Image src="/images/logo.png" alt="Logo" width={100} height={30} />
                </Link>

                <nav className="hidden md:flex space-x-8">
                    <Link href="/">Home</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">About</Link>
                    <Link href="#">News</Link>
                    <Link href="#">Pricing</Link>
                </nav>

                <div className="hidden md:flex gap-4">
                    <button className="border border-white px-4 py-2 rounded-full text-sm">
                        Log In
                    </button>
                    <button className="bg-primary px-4 py-2 rounded-full text-sm text-white">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col gap-4 text-white">
                        <Link href="/">Home</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">About</Link>
                        <Link href="#">News</Link>
                        <Link href="#">Pricing</Link>
                        <button className="border border-white px-4 py-2 rounded-full text-sm">
                            Log In
                        </button>
                        <button className="bg-primary px-4 py-2 rounded-full text-sm text-white">
                            Sign Up
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
