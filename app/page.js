'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-twilight-blue to-dusty-sage">
        <div className="text-center px-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black mb-8 text-off-white tracking-tight"
          >
            PUBLIC WORKS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-off-white/90"
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
              className="bg-sunset-orange text-off-white px-12 py-5 text-xl font-bold hover:bg-warm-earth transition"
            >
              Shop Now
            </a>
            <a 
              href="#about" 
              className="border-2 border-off-white text-off-white px-12 py-5 text-xl font-bold hover:bg-off-white/10 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl sm:text-7xl font-black mb-16 text-center text-twilight-blue">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-sunset-orange">Transparent Pricing</h3>
              <p className="text-lg text-twilight-blue/80">
                $3-5k campers, not $8-15k. We show you the real cost breakdown.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">📐</div>
              <h3 className="text-2xl font-bold mb-4 text-dusty-sage">Open Source</h3>
              <p className="text-lg text-twilight-blue/80">
                CAD files, assembly guides, repair manuals — all free.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-6">♻️</div>
              <h3 className="text-2xl font-bold mb-4 text-warm-earth">Upcycled Materials</h3>
              <p className="text-lg text-twilight-blue/80">
                Recycled sails, parachutes, X-Pac. Every piece is unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="py-24 bg-gradient-to-b from-dusty-sage/20 to-off-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl sm:text-7xl font-black mb-12 text-twilight-blue">
            What We Make
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-4xl font-black mb-6 text-twilight-blue">Pop-Up Campers</h3>
              <p className="text-xl text-twilight-blue/80 mb-8">
                Flat-pack design. Assemble in a weekend. Sleep under the stars. $3-5k vs typical $8-15k.
              </p>
            </div>
            
            <div>
              <h3 className="text-4xl font-black mb-6 text-twilight-blue">Upcycled Bags</h3>
              <p className="text-xl text-twilight-blue/80 mb-8">
                Recycled sailing fabric and parachutes. Every piece is one-of-a-kind.
              </p>
            </div>
          </div>

          <a 
            href="/products"
            className="inline-block bg-twilight-blue text-off-white px-14 py-6 text-2xl font-bold hover:bg-dusty-sage transition"
          >
            View All Products
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-twilight-blue text-off-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl sm:text-7xl font-black mb-8">
            Join the Maker Movement
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            We believe in repair over replace. DIY over buy. Quality over quantity.
          </p>
          <a 
            href="/products"
            className="inline-block bg-sunset-orange text-off-white px-14 py-6 text-2xl font-bold hover:bg-warm-earth transition"
          >
            Start Building
          </a>
        </div>
      </section>

    </div>
  )
}
