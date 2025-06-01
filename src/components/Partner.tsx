'use client'
import Image from 'next/image'

const partnerLogos = [
  '/images/partners/hsbc.png',
  '/images/partners/bmw.png',
  '/images/partners/huawei.png',
  '/images/partners/nasa.png'
]

const Partners = () => {
  return (
    <section className=" py-16 text-center">
      <h2 className=" text-[48px] font-semibold mb-10">Our Partners</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 w-max">
          {partnerLogos.map((src, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-md p-4 flex items-center justify-center w-[300px] h-[80px] "
            >
              <Image
                src={src}
                alt={`Partner ${idx + 1}`}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
