'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="container mx-auto py-5 flex items-center justify-around">
        <div className="relative w-[135px] h-[40px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/home">Home</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Branches</Link>
          <Link href="#" className="relative inline-flex items-center">
            Jobs
            <span className="ml-1 inline-flex items-center justify-center text-xs font-bold text-white bg-primary rounded-full w-5 h-5">
              12
            </span>
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <button className="border border-white px-4 py-2 rounded-full text-sm">
            Contact us
          </button>
          <button className="bg-primary px-4 py-2 rounded-full text-sm text-white">
            Join us
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
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 text-white">
            <Link href="/home">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Branches</Link>
            <Link href="#" className="relative inline-flex items-center">
              Jobs
              <span className="ml-1 inline-flex items-center justify-center text-xs font-bold text-white bg-primary rounded-full w-5 h-5">
                12
              </span>
            </Link>
            <button className="border border-white px-4 py-2 rounded-full text-sm">
              Contact us
            </button>
            <button className="bg-primary px-4 py-2 rounded-full text-sm text-white">
              Join us
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
