'use client'

import React from 'react'
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { FaInfo } from 'react-icons/fa'

const barData = [
  { name: 'Product 1', value: 90 },
  { name: 'Product 2', value: 180 },
  { name: 'Product 3', value: 320 }
]

const pieData = [
  { name: 'Product 1', value: 45 },
  { name: 'Product 2', value: 55 }
]

const COLORS = ['#a855f7', '#f97316', '#8b5cf6']
const PIE_COLORS = ['#a855f7', '#f97316']

const StatsAndCharts = () => {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto">
        {/* Top Navigation Line */}
        <div className="flex items-center mb-12">
          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
          <span className="text-purple-400 text-sm">
            The company is satisfactory
          </span>
          <div className="flex-1 h-px bg-gray-600 ml-4"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-purple-400">
                We bear the responsibility of developing the sector.
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
              Elevate your brand with our comprehensive marketing solutions
              including Digital Marketing, Content Creation, and Social Media
              Strategy. Enhance visibility through expert SEO and PPC
              management.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-12 place-self-center">
            {/* Stat 1 */}
            <div className="pt-6">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                1,400+
              </div>
              <div className="text-gray-400 text-sm">Clients</div>
            </div>

            {/* Stat 2 */}
            <div className="pt-6">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                20+
              </div>
              <div className="text-gray-400 text-sm">Branches</div>
            </div>

            {/* Stat 3 */}
            <div className="pt-6">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-gray-400 text-sm">Number of Employees</div>
            </div>

            {/* Stat 4 */}
            <div className="pt-6">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                315+
              </div>
              <div className="text-gray-400 text-sm">Sales Representative</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-8">Our charts</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Bar Chart */}
          <div className="bg-[#1E1E1E] rounded-lg p-6 h-[351px]">
            <div className="flex items-center justify-between mb-4 border-b pb-4">
              <div>
                <h3 className="text-white font-medium">Net Profit</h3>
                <p className="text-gray-400 text-sm">2024</p>
              </div>
              <div className="w-7 h-7 bg-[#4F4D4D] rounded-full flex items-center justify-center">
                {<FaInfo />}
              </div>
            </div>

            {/* Bar Chart */}
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Bar dataKey="value" fill="#9333ea" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side - Primary Text and Pie Chart */}
          <div className="space-y-6">
            {/* Pie Chart Card */}
            <div className="bg-[#1E1E1E] rounded-lg p-6 h-[351px]">
              {/* Primary Text Card */}
              <h3 className="text-white font-medium mb-1">Primary Text</h3>
              <div className="text-2xl font-bold text-white mb-1">5,987.34</div>
              <p className="text-gray-400 text-sm mb-2">Secondary text</p>
              <div className="flex justify-center mb-4 border-t pt-4">
                <ResponsiveContainer width={120} height={120}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      strokeWidth={0}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart Legend */}
              <div className="flex items-center justify-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400">Product 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-400">Product 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsAndCharts
