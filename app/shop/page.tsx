'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Shop() {
  const [filter, setFilter] = useState('all')

  const products = [
    {
      id: 'steel-shelf',
      name: 'Minimalist Floating Shelf',
      slug: 'steel-shelf',
      category: 'home',
      price: 175,
      image: '/products/shelf-1-main.jpeg',
      tagline: 'Precision-cut steel. Built to last.',
      tags: ['Made to Order', 'Marine-Grade Aluminum'],
      status: 'available'
    },
    {
      id: 'frame-tote',
      name: 'Frame Tote',
      slug: 'frame-tote',
      category: 'gear',
      price: 89,
      originalPrice: 129,
      image: '/products/frame-tote-hero.jpg',
      tagline: 'Internal frame. Lifetime warranty.',
      tags: ['Launch Price', 'Sustainable Canvas'],
      status: 'available'
    },
    {
      id: 'popup-camper',
      name: 'Pop-Up Truck Camper Kit',
      slug: 'popup-camper',
      category: 'adventure',
      price: 2499,
      image: '/products/camper-lifestyle-mountain.png',
      tagline: 'DIY engineering. Open-source design.',
      tags: ['Pre-Order', 'Q2 2026'],
      status: 'preorder'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏔️' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'gear', name: 'Gear', icon: '🎒' },
    { id: 'adventure', name: 'Adventure', icon: '🚚' },
  ]

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Public Works
            </Link>
            <div className="flex gap-6">
              <Link href="/shop" className="text-white font-semibold">
                Shop
              </Link>
              <a href="#" className="text-slate-300 hover:text-white transition">
                Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              Shop Public Works
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Sustainable gear, transparent pricing, open-source designs. 
              Built for adventurers who refuse to compromise.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        {product.status === 'preorder' && (
                          <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                            Pre-Order
                          </span>
                        )}
                        {product.originalPrice && (
                          <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                            Sale
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-slate-400 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition">
                        {product.name}
                      </h3>

                      <p className="text-slate-400">
                        {product.tagline}
                      </p>

                      <div className="flex items-baseline gap-3">
                        <p className="text-3xl font-black text-green-400">
                          ${product.price.toLocaleString()}
                        </p>
                        {product.originalPrice && (
                          <p className="text-lg text-slate-500 line-through">
                            ${product.originalPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Built for a Lifetime
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Every product comes with transparent pricing, detailed specs, and our commitment 
            to sustainability. No hidden fees. No compromises.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="text-center">
              <p className="text-4xl font-black text-green-400">100%</p>
              <p className="text-slate-400">Transparent Pricing</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-400">♻️</p>
              <p className="text-slate-400">Sustainable Materials</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-cyan-400">∞</p>
              <p className="text-slate-400">Built to Last</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>&copy; 2026 Public Works. Built to last.</p>
        </div>
      </footer>
    </div>
  )
}
