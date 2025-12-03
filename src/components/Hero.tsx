import React from 'react'

function Hero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/carbon-fibre-v2.png\')'}}></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">The Best Pizza in Town, Delivered Hot & Fresh</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">Experience authentic Italian pizza made with the freshest ingredients. Order online for fast delivery or pickup.</p>
          <div className="mt-12 flex justify-center space-x-4 animate-fade-in delay-200">
            <a href="/order" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Order Now</a>
            <a href="/menu" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">View Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
