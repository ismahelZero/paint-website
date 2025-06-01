// src/components/PricingSection.tsx
'use client'

import { useState } from 'react'

const PricingSection = () => {
  const [plan, setPlan] = useState('basic')

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Simple pricing for your Business
        </h2>
        <p className="text-gray-400 mb-12">
          Choose the plan that best fits your needs. Transparent and flexible
          pricing tailored for your growth.
        </p>

        <div className="inline-block bg-dark rounded-lg p-6 text-left w-full max-w-md mx-auto">
          <label className="block text-sm text-white mb-2">Select Plan</label>
          <select
            className="w-full px-4 py-2 mb-6 rounded bg-gray-800 text-white"
            value={plan}
            onChange={e => setPlan(e.target.value)}
          >
            <option value="intro">Intro</option>
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
          </select>

          <div className="bg-primary rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-2 capitalize">
              {plan} Plan
            </h3>
            <p className="text-white text-3xl font-bold mb-4">
              $199 <span className="text-base font-normal">/ month</span>
            </p>
            <button className="bg-white text-primary font-semibold px-4 py-2 rounded-lg">
              Try it now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
