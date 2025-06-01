import React from 'react'

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/lines.svg')`
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About us</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-300">
          Welcome to{' '}
          <span className="text-primary font-semibold">
            Focus Marketing Solutions
          </span>
          . We're a creative team dedicated to driving your business forward
          with innovative marketing strategies. From digital marketing to social
          media management, we're here to help you succeed.{' '}
          <span className="text-primary font-semibold">
            Let's build something extraordinary together.
          </span>
        </p>
        <button className="bg-primary hover:bg-purple-700 transition-colors duration-300 px-8 py-3 rounded-full text-white font-medium ">
          Read more
        </button>
      </div>
    </section>
  )
}

export default About
