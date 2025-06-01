import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform your business with our{' '}
            <span className="text-primary">Creative Marketing Solutions!</span>
          </h1>
          <p className="text-gray-300 mb-8">
            We help innovative companies build brands, create powerful digital
            experiences, and deliver growth-focused strategies.
          </p>
          <div className="flex gap-4">
            <Link href="#">
              <button className="bg-primary px-6 py-3 rounded-full text-white">
                Get Started
              </button>
            </Link>
            <Link href="#">
              <button className="border border-white px-6 py-3 rounded-full text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 space-y-4">
          <Image
            src="/images/hero-main.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
          <div className="flex gap-4">
            <Image
              src="/images/hero-thumbnail.png"
              alt="Thumbnail"
              width={100}
              height={80}
              className="rounded-lg object-cover"
            />
            <Image
              src="/images/hero-thumbnail2.png"
              alt="Thumbnail"
              width={100}
              height={80}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
