// src/components/Partners.tsx
import Image from 'next/image'

const partnerLogos = [
  '/images/partners/hsbc.png',
  '/images/partners/bmw.png',
  '/images/partners/huawei.png',
  '/images/partners/nasa.png'
]

const Partners = () => {
  return (
    <section className="bg-black py-16 text-center">
      <h2 className="text-white text-xl font-semibold mb-10">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        {partnerLogos.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Partner ${idx + 1}`}
            width={100}
            height={40}
          />
        ))}
      </div>
    </section>
  )
}

export default Partners
