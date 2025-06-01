'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const PricingSection = () => {
  const [expandedPlan, setExpandedPlan] = useState('pro')

  const plans = [
    {
      id: 'intro',
      name: 'Intro',
      price: 49,
      description:
        'Perfect for getting started with basic features and limited access.'
    },
    {
      id: 'base',
      name: 'Base',
      price: 89,
      description:
        'Ideal for small businesses with enhanced features and better support.'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 123,
      savings: 40,
      description:
        'Pro account gives you freedom with uploading HD videos and can also meet all your business needs apakn kamu',
      isPopular: true
    },
    {
      id: 'Enterprise',
      name: 'Enterprise',
      price: 250,
      description:
        'Enterprise account gives you freedom with uploading HD videos and can also meet all your business needs for your company'
    }
  ]

  const togglePlan = (planId: React.SetStateAction<string>) => {
    setExpandedPlan(expandedPlan === planId ? '' : planId)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Simple pricing
            <br />
            for your Business
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We have several powerful plans to showcase your business and get
            discovered as a creative entrepreneurs. Everything you need.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-md space-y-4 place-self-end">
          {plans.map(plan => (
            <div
              key={plan.id}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Plan Header */}
              <div
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  expandedPlan === plan.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                    : 'bg-[#1A1A1A] hover:bg-gray-750 text-primary'
                }`}
                onClick={() => togglePlan(plan.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    {plan.isPopular && (
                      <span
                        className={`bg-white  px-2 py-1 rounded text-xs ${
                          expandedPlan === plan.id ? 'bg-opacity-20' : ''
                        }`}
                      >
                        Save ${plan.savings}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary text-white">
                    {expandedPlan === plan.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedPlan === plan.id && (
                <div
                  className={`p-6 transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 `}
                >
                  <div className="space-y-4">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="flex justify-between gap-2">
                      <div>
                        <span className="text-3xl font-bold">
                          ${plan.price}
                        </span>
                        <span className="text-gray-300">/ month</span>
                      </div>
                      <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                        Try 1 month
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection
