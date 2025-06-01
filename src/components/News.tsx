import React from 'react'

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
      image: '/images/news/news1.png',
      category: 'Company',
      subcategory: 'Contracts'
    },
    {
      id: 2,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
      image: '/images/news/news2.png',
      category: 'Company',
      subcategory: 'Contracts'
    },
    {
      id: 3,
      title:
        'We incorporate the formation of public partnerships as a core aspect of our operations.',
      image: '/images/news/news3.png',
      category: 'Company',
      subcategory: 'Contracts'
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">News</h1>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-sm transition-colors">
            View all news
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Featured Article */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/news/main.png"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mb-4">
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs">
                Company
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-full text-xs">
                Contracts
              </span>
            </div>
            <h2 className="text-xl font-semibold leading-relaxed">
              We specialize in fostering effective partnerships with supportive
              companies to drive mutual success.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our approach focuses on building long-term relationships with
              supporting companies, contributing to mutual advancement,
              development, and expansion of the sector through diverse
              capabilities, expertise, and technological innovation.
            </p>
          </div>

          {/* News Items List */}
          <div className="space-y-4">
            {newsItems.map(item => (
              <div
                key={item.id}
                className="rounded-lg px-4 pb-4 hover:bg-gray-750 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt="News thumbnail"
                      className="object-cover rounded-lg"
                      height={246}
                      width={246}
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2"></div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.title}
                    </p>
                    <span className="bg-white text-black px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                    <span className="bg-white text-black px-2 mx-2 py-1 rounded-full text-xs">
                      {item.subcategory}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
