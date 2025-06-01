'use client'

import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto lg:flex lg:gap-x-[185px] mt-10">
        {/* Left Content */}
        <div className="relative px-4 text-center lg:order-1 lg:flex lg:flex-col lg:gap-y-[132px] lg:ps-[88px] lg:text-left">
          <div>
            <h1 className="text-white mb-6 text-[25px] leading-tight font-bold lg:text-[35px]">
              Transform your business{' '}
              <span className="lg:block">
                with our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] to-[#C75ED05E]">
                  Creative
                </span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] to-[#C75ED05E] lg:block">
                Marketing Solutions!
              </span>
            </h1>

            <p className="text-gray-300 mx-auto mb-8 max-w-2xl text-[16px] leading-relaxed sm:text-xl lg:mx-0">
              Welcome to Focus Marketing Solutions! We&apos;re a creative team
              dedicated to driving your business forward with innovative
              marketing strategies. From digital marketing to social media
              management, we&apos;re here to help you succeed. Let&apos;s build
              something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="#">
                <button className="bg-purple-500 px-6 py-3 rounded-full text-white">
                  Join us
                </button>
              </Link>
              <Link href="#">
                <button className="border border-white px-6 py-3 rounded-full text-white">
                  Contact us
                </button>
              </Link>
            </div>
          </div>

          {/* Left Bottom Thumbnail with fade-out */}
          <div className="relative hidden lg:block w-[488px] h-[356px] rounded-t-lg overflow-hidden">
            <Image
              src="/images/hero-thumbnail.png"
              alt="Decorative element"
              fill
              className="object-cover rounded-lg"
            />
            {/* Fade mask at bottom half: */}
            <div className="absolute bottom-0 left-0 right-0 h-5/6 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden lg:order-2 lg:flex lg:flex-col lg:items-start lg:justify-between">
          {/* Main Hero Image */}
          <div className="relative w-[535px] h-[445px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-main.png"
              alt="Main hero"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Bottom Thumbnail with fade-out */}
          <div className="relative mt-6 w-[312px] h-[394px] rounded-t-lg overflow-hidden">
            <Image
              src="/images/hero-thumbnail2.png"
              alt="Decorative element"
              fill
              className="object-cover rounded-lg"
            />
            {/* Fade mask at bottom half: */}
            <div className="absolute bottom-0 left-0 right-0 h-5/6 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* (Optional) Extra bottom gradient overlay */}
      <div
        className="right-0 bottom-0 left-0 z-10 hidden h-[220px] lg:absolute"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.001) 8%, rgba(0,0,0,0.008) 16%, rgba(0,0,0,0.02) 24%, rgba(0,0,0,0.04) 32%, rgba(0,0,0,0.07) 40%, rgba(0,0,0,0.12) 48%, rgba(0,0,0,0.19) 56%, rgba(0,0,0,0.28) 64%, rgba(0,0,0,0.39) 72%, rgba(0,0,0,0.52) 80%, rgba(0,0,0,0.66) 88%, rgba(0,0,0,0.8) 96%, rgba(0,0,0,0.92) 100%)'
        }}
      />
    </section>
  )
}

export default HeroSection
