'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FrameTote() {
  const [selectedColor, setSelectedColor] = useState('olive')
  const [quantity, setQuantity] = useState(1)
  
  const colors = [
    { id: 'olive', name: 'Olive Green', hex: '#5A6F3E' },
    { id: 'black', name: 'Black', hex: '#1A1A1A' },
    { id: 'tan', name: 'Desert Tan', hex: '#C4A574' },
  ]

  const productImages = [
    '/products/frame-tote-hero.jpg',
    '/products/frame-tote-lifestyle-1.jpg',
    '/products/frame-tote-detail-1.jpg',
    '/products/frame-tote-lifestyle-2.jpg',
    '/products/frame-tote-detail-2.jpg',
    '/products/frame-tote-lifestyle-3.jpg',
    '/products/frame-tote-product.webp',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const features = [
    { icon: '🎒', title: 'Frame Support', desc: 'Internal aluminum frame distributes weight' },
    { icon: '♻️', title: 'Sustainable Canvas', desc: 'Organic cotton & recycled materials' },
    { icon: '💧', title: 'Water Resistant', desc: 'Waxed canvas finish, built for the elements' },
    { icon: '🔧', title: 'Modular Design', desc: 'Attach carabiners, clips, accessories' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Public Works
            </a>
            <div className="flex gap-6">
              <a href="/products" className="text-slate-300 hover:text-white transition">
                All Products
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <motion.div 
                className="aspect-square bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img 
                  src={productImages[currentImage]}
                  alt="Frame Tote Bag"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-7 gap-2">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                      currentImage === idx 
                        ? 'border-green-400' 
                        : 'border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <img 
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Title & Price */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-mono">
                  Adventure Ready • Lifetime Warranty
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white">
                  Frame Tote
                </h1>
                <p className="text-xl text-slate-300">
                  Internal frame construction for load distribution. Sustainable canvas, modular attachments, built for daily use and weekend adventures.
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-black text-green-400">$89</p>
                  <p className="text-slate-400 text-lg line-through">$129</p>
                  <span className="px-2 py-1 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm font-bold">
                    Launch Price
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Select Color</h3>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`p-4 rounded-lg border-2 transition ${
                        selectedColor === color.id
                          ? 'border-green-400 bg-green-500/10'
                          : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-slate-600"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-white font-semibold text-sm">{color.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-white min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105">
                  Add to Cart — ${89 * quantity}
                </button>
                <p className="text-slate-400 text-sm text-center">
                  Free shipping over $75 • 30-day returns
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-700">
                {features.map((feature, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-3xl">{feature.icon}</p>
                    <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                    <p className="text-slate-400 text-xs">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Transparent Pricing */}
              <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700 space-y-3">
                <h3 className="text-white font-bold">Launch Pricing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Material & Manufacturing</span>
                    <span>$48</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Design & Testing</span>
                    <span>$22</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Margin</span>
                    <span>$19</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-bold text-base pt-2 border-t border-slate-700">
                    <span>Launch Price</span>
                    <span>$89</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">
                    Regular price $129 after launch period ends
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Specs */}
          <div className="mt-20 space-y-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-black text-white">Built for Adventure</h2>
              <div className="text-lg text-slate-300 space-y-4 leading-relaxed">
                <p>
                  The Frame Tote isn't just another bag — it's a load-bearing system disguised as 
                  everyday carry. An internal aluminum frame distributes weight across your shoulders 
                  and back, making heavy loads feel manageable whether you're hauling tools, groceries, 
                  or camping gear.
                </p>
                <p>
                  Waxed organic cotton canvas sheds water and dirt. Reinforced stitching at stress 
                  points. Modular webbing loops for carabiners, pouches, and accessories. This is the 
                  bag you'll still be using 20 years from now.
                </p>
                <p>
                  <strong>Lifetime warranty.</strong> If it breaks, we fix it or replace it. No questions asked.
                </p>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <h4 className="text-white font-bold mb-3">Dimensions</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Height: 16" (40cm)</li>
                    <li>• Width: 18" (46cm)</li>
                    <li>• Depth: 6" (15cm)</li>
                    <li>• Capacity: 25L</li>
                    <li>• Weight: 1.2kg empty</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <h4 className="text-white font-bold mb-3">Materials</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Organic cotton canvas (waxed)</li>
                    <li>• Recycled polyester liner</li>
                    <li>• 6061 aluminum frame</li>
                    <li>• YKK zippers</li>
                    <li>• Load capacity: 30lb (13.6kg)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lifestyle Images */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/products/frame-tote-lifestyle-1.jpg"
                alt="Frame Tote in use"
                className="w-full rounded-lg border border-slate-700"
              />
              <img 
                src="/products/frame-tote-lifestyle-3.jpg"
                alt="Frame Tote adventure"
                className="w-full rounded-lg border border-slate-700"
              />
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
