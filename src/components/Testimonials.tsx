// src/components/Testimonials.tsx
import Image from 'next/image'

const testimonials = [
  {
    name: 'Jessica Green',
    text: 'This agency completely revolutionized our brand image and outreach.',
    avatar: '/images/testimonials/avatar1.png'
  },
  {
    name: 'Brandon Cox',
    text: 'We saw a huge return on investment within months thanks to their campaigns.',
    avatar: '/images/testimonials/avatar2.png'
  },
  {
    name: 'Kelly White',
    text: 'The team is passionate and very easy to work with. Highly recommended!',
    avatar: '/images/testimonials/avatar3.png'
  }
]

const Testimonials = () => {
  return (
    <section className="bg-primary text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our clients opinions</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {testimonials.map((item, idx) => (
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
              <p className="text-sm text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
