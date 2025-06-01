// src/components/Services.tsx
import { ReactNode } from 'react'
import {
  FaPenNib,
  FaSearch,
  FaBullhorn,
  FaMobileAlt,
  FaPaintBrush,
  FaEnvelopeOpen
} from 'react-icons/fa'

type ServiceCardProps = {
  icon: ReactNode
  title: string
  subtitle: string
}

const ServiceCard = ({ icon, title, subtitle }: ServiceCardProps) => (
  <div className="bg-dark p-6 rounded-lg text-center shadow-md">
    <div className="text-3xl text-primary mb-4 mx-auto">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{subtitle}</p>
  </div>
)

const Services = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaPenNib />}
            title="Visual Identity"
            subtitle="Branding & Graphic Design"
          />
          <ServiceCard
            icon={<FaSearch />}
            title="Research"
            subtitle="Market & User Research"
          />
          <ServiceCard
            icon={<FaBullhorn />}
            title="Marketing Strategy"
            subtitle="Planning & Execution"
          />
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Digital Marketing"
            subtitle="Online Ads & Social Media"
          />
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Content & Imaging"
            subtitle="Photo, Video, & Design"
          />
          <ServiceCard
            icon={<FaEnvelopeOpen />}
            title="Event Hosting"
            subtitle="Online & Onsite Events"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
