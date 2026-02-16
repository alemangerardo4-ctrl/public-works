'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Hero background photos - rotating carousel
const heroBackgrounds = [
  '/images/797131f7-61b2-4a8f-a8bd-dae8e98d669e.jpg',
  '/images/7fa69f80-3828-4f3e-bef8-95891c95174f.jpg',
  '/images/d9e8add9-da50-459d-b0e0-1561db397a71.jpg',
  '/images/920724cd-3248-4bad-a94f-b7903d600e58.jpg',
]

export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Section with Rotating Backgrounds */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroBackgrounds.map((bg, index) => (
            <motion.div
              key={bg}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentBgIndex ? 1 : 0,
                scale: index === currentBgIndex ? 1 : 1.05
              }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img 
                src={bg}
                alt="Outdoor adventure"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-twilight-blue/85 via-twilight-blue/70 to-dusty-sage/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black mb-8 text-off-white tracking-tight leading-none"
          >
            PUBLIC WORKS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-off-white/95 leading-relaxed"
          >
            Outdoor gear built for makers.<br/>
            <span className="text-sunset-orange font-bold">Transparent pricing. Open-source designs.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="/products" 
              className="bg-sunset-orange text-off-white px-12 py-5 text-xl font-bold hover:bg-warm-earth transition-all duration-300 rounded-sm shadow-2xl hover:scale-105 active:scale-95"
            >
              Shop Now
            </a>
            <a 
              href="#about" 
              className="border-2 border-off-white text-off-white px-12 py-5 text-xl font-bold hover:bg-off-white/10 transition-all duration-300 rounded-sm hover:scale-105 active:scale-95"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-off-white/70 text-sm"
        >
          ↓ Scroll
        </motion.div>
      </section>

      {/* Product Preview with Photos */}
      <section className="py-24 bg-off-white relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-twilight-blue/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-16 text-center text-twilight-blue">
              What We Make
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Shelves Product */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 shadow-2xl">
                <img 
                  src="/images/06d3ceec-01fe-4177-97ea-46780c6b3476.jpg"
                  alt="Camping shelf in use"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-black mb-4 text-twilight-blue group-hover:text-sunset-orange transition-colors">
                Camp Shelves
              </h3>
              <p className="text-xl text-twilight-blue/80 mb-6 leading-relaxed">
                Flat-pack aluminum shelves. Small ($175) and Large ($275). Fits most trucks and vans.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/products"
                  className="bg-twilight-blue text-off-white px-8 py-4 text-lg font-bold hover:bg-dusty-sage transition-all duration-300 rounded-sm shadow-md hover:scale-105"
                >
                  Shop Shelves
                </a>
              </div>
            </motion.div>

            {/* Upcycled Bags */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 shadow-2xl">
                <img 
                  src="/images/b78328c2-fda7-4864-815e-e11c3c0facf8.jpg"
                  alt="Upcycled gear and materials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-4xl font-black mb-4 text-twilight-blue group-hover:text-sunset-orange transition-colors">
                Upcycled Bags
              </h3>
              <p className="text-xl text-twilight-blue/80 mb-6 leading-relaxed">
                Recycled sailing fabric, parachutes, and climbing rope. Every piece is one-of-a-kind. Coming soon.
              </p>
              <div className="flex gap-4">
                <a 
                  href="mailto:hello@publicworks.design"
                  className="border-2 border-twilight-blue text-twilight-blue px-8 py-4 text-lg font-bold hover:bg-twilight-blue hover:text-off-white transition-all duration-300 rounded-sm hover:scale-105"
                >
                  Join Waitlist
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-off-white to-dusty-sage/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-black mb-16 text-center text-twilight-blue"
          >
            What We Stand For
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center group"
            >
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-3xl font-bold mb-4 text-sunset-orange">Transparent Pricing</h3>
              <p className="text-lg text-twilight-blue/80 leading-relaxed">
                $175-275 camp shelves, not $500+. We show you the real cost breakdown. No hidden markup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center group"
            >
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">📐</div>
              <h3 className="text-3xl font-bold mb-4 text-dusty-sage">Open Source</h3>
              <p className="text-lg text-twilight-blue/80 leading-relaxed">
                CAD files, assembly guides, repair manuals — all free. Build it yourself or buy from us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center group"
            >
              <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">♻️</div>
              <h3 className="text-3xl font-bold mb-4 text-warm-earth">Upcycled Materials</h3>
              <p className="text-lg text-twilight-blue/80 leading-relaxed">
                Recycled sails, parachutes, climbing rope, X-Pac. Every piece is unique and has a story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Photo Grid Teaser */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-6 text-twilight-blue">
              Built For Adventure
            </h2>
            <p className="text-xl sm:text-2xl text-twilight-blue/80 max-w-3xl mx-auto">
              Real gear. Real people. Real trails.
            </p>
          </motion.div>

          {/* Photo Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {[
              '/images/02f48fd0-477b-4050-a1ef-fc6eb402281b.jpg',
              '/images/164b784f-ef1b-481c-bbda-0d3eb54a3053.jpg',
              '/images/53f12730-7404-46d9-86eb-1e96fa5e8793.jpg',
              '/images/96de4ad7-58b3-4847-8cbc-7e73d1e3fe68.jpg',
              '/images/aa521b90-9e30-4a39-a5bf-47b300d63f01.jpg',
              '/images/b55e2bbd-bb7e-43c9-8ab0-02cc2d282e84.jpg',
              '/images/d70c0b42-3f15-4d26-82e8-29f94c68b7b7.jpg',
              '/images/f17a126d-cd5d-4e4f-bd54-e2cf424ee099.jpg',
            ].map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Adventure ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a 
              href="/products"
              className="inline-block bg-twilight-blue text-off-white px-14 py-6 text-xl sm:text-2xl font-bold hover:bg-dusty-sage transition-all duration-300 rounded-sm shadow-xl hover:scale-105"
            >
              See All 233 Photos →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-br from-twilight-blue to-dusty-sage text-off-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
              The Joy of Not Being<br/>Sold Anything
            </h2>
            <p className="text-xl sm:text-2xl mb-12 opacity-90 leading-relaxed">
              We're not here to convince you to buy more stuff.<br/>
              We're here to help you build better gear, repair what you have,<br/>
              and get outside more often.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-off-white/10 backdrop-blur-sm p-8 rounded-sm">
                <h3 className="text-2xl font-bold mb-3 text-sunset-orange">Repair Over Replace</h3>
                <p className="text-off-white/90">
                  Free repair guides. Spare parts at cost. Keep your gear running forever.
                </p>
              </div>
              <div className="bg-off-white/10 backdrop-blur-sm p-8 rounded-sm">
                <h3 className="text-2xl font-bold mb-3 text-warm-earth">DIY Over Buy</h3>
                <p className="text-off-white/90">
                  Open-source CAD files. Step-by-step tutorials. Build it yourself.
                </p>
              </div>
              <div className="bg-off-white/10 backdrop-blur-sm p-8 rounded-sm">
                <h3 className="text-2xl font-bold mb-3 text-dusty-sage">Quality Over Quantity</h3>
                <p className="text-off-white/90">
                  One good shelf beats ten cheap ones. Built to last a lifetime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-sunset-orange text-off-white text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
              Join the Maker<br/>Movement
            </h2>
            <p className="text-2xl mb-12 opacity-95 leading-relaxed">
              Build your gear. Hit the trail. Share your knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/products"
                className="inline-block bg-twilight-blue text-off-white px-14 py-6 text-2xl font-bold hover:bg-dusty-sage transition-all duration-300 rounded-sm shadow-2xl hover:scale-105"
              >
                Shop Now
              </a>
              <a 
                href="mailto:hello@publicworks.design"
                className="inline-block border-3 border-off-white text-off-white px-14 py-6 text-2xl font-bold hover:bg-off-white/10 transition-all duration-300 rounded-sm hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
