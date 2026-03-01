'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SteelShelf() {
  const [selectedFinish, setSelectedFinish] = useState('raw')
  const [quantity, setQuantity] = useState(1)
  
  const finishes = [
    { id: 'raw', name: 'Raw Stainless', price: 245 },
    { id: 'black-matte', name: 'Matte Black', price: 245 },
    { id: 'black-gloss', name: 'Gloss Black', price: 245 },
  ]

  const productImages = [
    '/products/shelf-hero.jpeg',
    '/products/shelf-detail-1.jpeg',
    '/products/shelf-detail-2.jpeg',
    '/products/shelf-cad.png',
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const features = [
    { icon: '📐', title: 'Precision Cut', desc: '44" × 9" stainless steel' },
    { icon: '💪', title: '50lb Capacity', desc: 'Industrial strength per shelf' },
    { icon: '🏭', title: 'Made to Order', desc: 'Ships in 5-7 days' },
    { icon: '⚙️', title: 'Includes Hardware', desc: 'Everything needed to mount' },
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
                className="aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img 
                  src={productImages[currentImage]}
                  alt="44 inch Stainless Steel Shelf"
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
                  Made to Order
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white">
                  44" × 9" Stainless Steel Shelf
                </h1>
                <p className="text-xl text-slate-300">
                  Precision-cut stainless steel. 44" × 9", 50lb capacity per shelf. Set of 3 with mounting hardware.
                </p>
                <div className="flex items-baseline gap-3">
                  <p className="text-4xl font-black text-green-400">
                    ${finishes.find(f => f.id === selectedFinish)?.price}
                  </p>
                  <p className="text-slate-400 text-lg">per set of 3</p>
                </div>
              </div>

              {/* Finish Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Select Finish</h3>
                <div className="grid grid-cols-1 gap-3">
                  {finishes.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`p-4 rounded-lg border-2 transition text-left ${
                        selectedFinish === finish.id
                          ? 'border-green-400 bg-green-500/10'
                          : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">{finish.name}</span>
                        {selectedFinish === finish.id && (
                          <span className="text-green-400">✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Quantity (sets of 3)</h3>
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
                  Add to Cart — ${(finishes.find(f => f.id === selectedFinish)?.price || 245) * quantity}
                </button>
                <p className="text-slate-400 text-sm text-center">
                  Ships in 5-7 days • Free shipping over $200
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
                <h3 className="text-white font-bold">Transparent Pricing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Material Cost</span>
                    <span>$165</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Fabrication & Finishing</span>
                    <span>$35</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Our Margin</span>
                    <span>$45</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-bold text-base pt-2 border-t border-slate-700">
                    <span>Total</span>
                    <span>$245</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Specs */}
          <div className="mt-20 space-y-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-black text-white">About This Product</h2>
              <div className="text-lg text-slate-300 space-y-4 leading-relaxed">
                <p>
                  Larger format, industrial strength. These 44" × 9" stainless steel shelves are 
                  precision-cut for perfect dimensional accuracy. Each set includes three shelves, 
                  mounting hardware, and detailed installation instructions.
                </p>
                <p>
                  Built for longevity. Stainless steel construction means corrosion resistance and 
                  strength that won't warp or sag. Each shelf can handle 50lb loads with ease.
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
                    <li>• Length: 44" (112cm)</li>
                    <li>• Depth: 9" (23cm)</li>
                    <li>• Thickness: 1/8" (3.2mm)</li>
                    <li>• Weight: 2.5kg per shelf</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-lg border border-slate-700">
                  <h4 className="text-white font-bold mb-3">Material</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• 304 stainless steel</li>
                    <li>• Load capacity: 50lb per shelf</li>
                    <li>• Powder coat finish options</li>
                    <li>• Corrosion resistant</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CAD Pattern */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Flat Pattern (CAD)</h3>
              <img 
                src="/products/shelf-cad.png"
                alt="Shelf Flat Pattern"
                className="w-full rounded-lg border border-slate-700 bg-white p-6"
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
