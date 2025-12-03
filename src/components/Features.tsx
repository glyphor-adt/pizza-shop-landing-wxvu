import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description: 'Get your pizza delivered in under 30 minutes. Guaranteed!',
  },
  {
    icon: Shield,
    title: 'Safe & Secure Ordering',
    description: 'Your online order is 100% secure with our encrypted payment system.',
  },
  {
    icon: TrendingUp,
    title: 'Always Fresh Ingredients',
    description: 'We use only the freshest, locally-sourced ingredients for the best taste.',
  },
]

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Luigi's Pizza?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
