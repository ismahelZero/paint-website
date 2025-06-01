import React from 'react'
import {
  FaBullhorn,
  FaCube,
  FaLayerGroup,
  FaPalette,
  FaUser,
  FaVideo
} from 'react-icons/fa'

type ServiceCardProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
}

const ServiceCard = ({ icon, title, subtitle }: ServiceCardProps) => (
  <div className="text-center">
    {/* Icon Container with Purple Circle */}
    <div className="relative mx-auto mb-6 w-24 h-24">
      {/* White rounded rectangle background */}
      <div className="absolute inset-0 bg-white rounded-2xl"></div>
      {/* Purple circle */}
      <div className="absolute inset-2 bg-primary rounded-full flex items-center justify-center">
        <div className="text-white text-4xl">{icon}</div>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

    {/* Subtitle */}
    <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
  </div>
)

const Services = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our services</h2>
        <p className="text-gray-400 mb-16 text-lg">
          Transforming your online presence with innovative digital strategies
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Top Row */}
          <ServiceCard
            icon={<FaVideo />}
            title="Video Making"
            subtitle="Random content"
          />
          <ServiceCard
            icon={<FaPalette />}
            title="Branding"
            subtitle="Random content to fill the blank space"
          />
          <ServiceCard
            icon={<FaBullhorn />}
            title="Marketing strategy"
            subtitle="Random content to fill the blank space"
          />

          {/* Bottom Row */}
          <ServiceCard
            icon={<FaUser />}
            title="Email Marketing"
            subtitle="Random content"
          />
          <ServiceCard
            icon={<FaLayerGroup />}
            title="Social Media Managing"
            subtitle="Random content to fill the blank space"
          />
          <ServiceCard
            icon={<FaCube />}
            title="Content Writing"
            subtitle="Random content to fill the blank space"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
