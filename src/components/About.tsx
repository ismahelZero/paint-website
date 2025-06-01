// src/components/About.tsx
import Link from 'next/link'

const About = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About us</h2>
        <p className="text-gray-400 mb-8">
          We are a dynamic and forward-thinking creative marketing agency. Our
          team specializes in building powerful brand identities, user-focused
          digital experiences, and data-driven marketing strategies that fuel
          business growth.
        </p>
        <Link href="#">
          <button className="bg-primary px-6 py-3 rounded-full text-white">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  )
}

export default About
