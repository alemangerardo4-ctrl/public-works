'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PopupCamper() {
  const [selectedKit, setSelectedKit] = useState('complete')
  const [quantity, setQuantity] = useState(1)
  
  const kits = [
    { 
      id: 'complete', 
      name: 'Complete DIY Kit', 
      price: 2499,
      desc: 'Everything you need: frame, gas struts, hardware, assembly guide'
    },
    { 
      id: 'frame-only', 
      name: 'Frame Kit Only', 
      price: 1899,
      desc: 'Aluminum extrusion frame + connectors (BYO canvas & hardware)'
    },
  ]

  const productImages = [
    '/products/camper-exterior.jpg',
    '/products/camper-interior.jpeg',
    '/products/camper-lifestyle.png',
    '/products/camper-detail.jpeg',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const features = [
    { icon: '🪶', title: 'Ultra Lightweight', desc: 'Aluminum extrusion — strong yet portable' },
    { icon: '👨‍🔧', title: 'DIY Engineering', desc: 'Build it yourself with detailed guide' },
    { icon: '🛏️', title: 'Queen Bed', desc: 'Sleeps 2 comfortably in 6ft truck bed' },
    { icon: '⚡', title: 'Gas Strut Assist', desc: 'Easy lift mechanism, set up in minutes' },
    { icon: '🔧', title: 'Modular Design', desc: 'Customize & expand with add-ons' },
    { icon: '🏕️', title: 'Adventure Ready', desc: 'Weatherproof, built for the elements' },
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
              <a href="/shop" className="text-slate-300 hover:text-white transition">
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
                className="aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img 
                  src={productImages[currentImage]}
                  alt="Truck Pop-up Camper"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
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
                  DIY Kit • Made to Order
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white">
                  Truck Pop-up Camper
                </h1>
                <p className="text-xl text-slate-300">
                  Ultra-lightweight aluminum extrusion frame. DIY engineering gets you on the road 
                  to your next adventure. Fits 6ft truck beds. Queen-sized sleeping area.
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-black text-green-400">
                    ${kits.find(k => k.id === selectedKit)?.price.toLocaleString()}
                  </p>
                  <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-400 text-sm font-bold">
                    Pre-Order
                  </span>
                </div>
              </div>

              {/* Kit Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Select Kit</h3>
                <div className="grid grid-cols-1 gap-3">
                  {kits.map((kit) => (
                    <button
                      key={kit.id}
                      onClick={() => setSelectedKit(kit.id)}
                      className={`p-4 rounded-lg border-2 transition text-left ${
                        selectedKit === kit.id
                          ? 'border-green-400 bg-green-500/10'
                          : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-white font-bold block">{kit.name}</span>
                          <span className="text-slate-400 text-sm">{kit.desc}</span>
                        </div>
                        {selectedKit === kit.id && (
                          <span className="text-green-400 text-xl">✓</span>
                        )}
                      </div>
                      <p className="text-green-400 font-bold text-lg mt-2">
                        ${kit.price.toLocaleString()}
                      </p>
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

              {/* Pre-Order CTA */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105">
                  Pre-Order Now — ${((kits.find(k => k.id === selectedKit)?.price || 2499) * quantity).toLocaleString()}
                </button>
                <p className="text-slate-400 text-sm text-center">
                  Ships Q2 2026 • $500 deposit holds your spot
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
                <h3 className="text-white font-bold">Transparent Pricing (Complete Kit)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Aluminum Extrusion + Hardware</span>
                    <span>$1,250</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Canvas, Gas Struts, Fittings</span>
                    <span>$680</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Assembly Guide + CAD Files</span>
                    <span>$120</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Our Margin</span>
                    <span>$449</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-bold text-base pt-2 border-t border-slate-700">
                    <span>Complete Kit</span>
                    <span>$2,499</span>
                  </div>
                  <p className="text-xs text-slate-400 pt-2">
                    Compare to $8k+ commercial campers — save 70% by building it yourself
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Specs */}
          <div className="mt-20 space-y-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-black text-white">Build Your Own Adventure Platform</h2>
              <div className="text-lg text-slate-300 space-y-4 leading-relaxed">
                <p>
                  This isn't a tent. It's a modular, expandable truck camper system built from 
                  aerospace-grade aluminum extrusion. Gas-strut assisted lift means setup in under 
                  5 minutes. Queen-sized sleeping platform fits perfectly in a 6ft truck bed.
                </p>
                <p>
                  <strong>DIY philosophy:</strong> We give you the engineering, the parts list, 
                  the CAD files, and the build guide. You bring the tools and the weekend. The result? 
                  A custom camper that costs a fraction of commercial options and weighs half as much.
                </p>
                <p>
                  Modular design means you can expand with add-ons: side panels, solar mounts, 
                  roof racks, kitchen modules. Start simple, grow as you go.
                </p>
                <p className="text-green-400 font-bold">
                  ⚙️ Open-source CAD files included — modify, remix, share your build!
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
                    <li>• Fits: 6ft (72") truck beds</li>
                    <li>• Collapsed height: 12" (30cm)</li>
                    <li>• Raised height: 48" (122cm)</li>
                    <li>• Sleeping area: 72" × 60" (Queen)</li>
                    <li>• Total weight: ~150 lbs (68kg)</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <h4 className="text-white font-bold mb-3">Materials & Features</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 6063-T5 aluminum extrusion</li>
                    <li>• Gas strut lift assist (120N)</li>
                    <li>• Weatherproof canvas shell</li>
                    <li>• Stainless steel hardware</li>
                    <li>• Modular expansion ready</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pre-Order Notice */}
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/30 text-center space-y-4">
              <h3 className="text-3xl font-black text-white">Pre-Order Now — Ships Q2 2026</h3>
              <p className="text-slate-300 text-lg">
                Limited first run of 50 kits. Secure yours with a $500 deposit.
              </p>
              <p className="text-sm text-slate-400">
                Full refund available up until manufacturing begins (March 2026)
              </p>
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
