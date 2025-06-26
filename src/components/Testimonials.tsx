'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Jessica Green',
    text: `"I love that model. I [used to have to]
call all around, and I absolutely love
that model that you could save me the
time and headache of doing that."`,
    avatar: '/images/testimonials/avatar1.png'
  },
  {
    name: 'Brandon Cox',
    text: `"I am so happy with your company.
Ever since my insurer switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"`,
    avatar: '/images/testimonials/avatar2.png'
  },
  {
    name: 'Kelly White',
    text: `“I just want to thank you for the great
job you did during my transition to
oxygen. You unraveled all the
confusion and the new company is
wonderful.”`,
    avatar: '/images/testimonials/avatar3.png'
  },
  {
    name: 'Kelly White',
    text: `“I just want to thank you for the great
job you did during my transition to
oxygen. You unraveled all the
confusion and the new company is
wonderful.”`,
    avatar: '/images/testimonials/avatar3.png'
  },
  {
    name: 'Jessica Green',
    text: `"I love that model. I [used to have to]
call all around, and I absolutely love
that model that you could save me the
time and headache of doing that."`,
    avatar: '/images/testimonials/avatar1.png'
  },
  {
    name: 'Brandon Cox',
    text: `"I am so happy with your company.
Ever since my insurer switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"`,
    avatar: '/images/testimonials/avatar2.png'
  },
  {
    name: 'Brandon Cox',
    text: `"I am so happy with your company.
Ever since my insurer switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"`,
    avatar: '/images/testimonials/avatar2.png'
  },
  {
    name: 'Jessica Green',
    text: `"I love that model. I [used to have to]
call all around, and I absolutely love
that model that you could save me the
time and headache of doing that."`,
    avatar: '/images/testimonials/avatar1.png'
  }
]

const Testimonials = () => {
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const [currentPage, setCurrentPage] = useState(0)

  const paginatedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    currentPage * testimonialsPerPage + testimonialsPerPage
  )

  return (
    <section className="bg-primary text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our clients opinions</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          {paginatedTestimonials.map((item, idx) => (
            <div key={idx} className="bg-dark rounded-lg p-6 w-full md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={` rounded-full ${
                currentPage === index ? 'bg-black' : 'bg-white'
              } ${currentPage === index ? 'w-3 h-3' : 'w-2 h-2 mt-0.5'}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-dark my-10 h-96" />
    </section>
  )
}

export default Testimonials
