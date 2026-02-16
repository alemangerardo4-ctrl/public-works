'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { galleryImages } from '@/lib/galleryImages'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* HERO SECTION - Full screen, centered */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero/797131f7-61b2-4a8f-a8bd-dae8e98d669e.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-twilight-blue/40" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[64px] md:text-[96px] font-bold mb-6 text-white tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            PUBLIC WORKS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[24px] md:text-[32px] mb-12 text-white/95 leading-relaxed"
          >
            Outdoor Gear Built to Last
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a 
              href="#products" 
              className="inline-block bg-sunset-orange text-white px-12 py-5 text-[20px] font-bold hover:bg-sunset-orange/90 transition-all duration-300 shadow-2xl"
            >
              Explore Products
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-[14px]"
        >
          ↓ Scroll to explore
        </motion.div>
      </section>

      {/* VALUES SECTION - Full screen, 3-column grid */}
      <section className="relative min-h-screen flex items-center justify-center bg-dusty-sage/10">
        {/* Subtle Background Image */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero/7fa69f80-3828-4f3e-bef8-95891c95174f.jpg)' }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold mb-20 text-center text-twilight-blue"
          >
            Our Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Transparent Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-[80px] mb-6">💰</div>
              <h3 className="text-[32px] font-bold mb-4 text-sunset-orange">Transparent Pricing</h3>
              <p className="text-[18px] text-twilight-blue/80 leading-relaxed">
                No hidden markups. We break down every cost so you know exactly what you're paying for.
              </p>
            </motion.div>

            {/* Open Source */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-[80px] mb-6">📐</div>
              <h3 className="text-[32px] font-bold mb-4 text-sunset-orange">Open Source</h3>
              <p className="text-[18px] text-twilight-blue/80 leading-relaxed">
                All designs, CAD files, and assembly guides available for free. Build it yourself or buy from us.
              </p>
            </motion.div>

            {/* Upcycled */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-[80px] mb-6">♻️</div>
              <h3 className="text-[32px] font-bold mb-4 text-sunset-orange">Upcycled</h3>
              <p className="text-[18px] text-twilight-blue/80 leading-relaxed">
                Made from recycled sails, parachutes, and climbing rope. Reducing waste, one bag at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION - Full screen */}
      <section id="products" className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold mb-16 text-center text-twilight-blue"
          >
            Our Products
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Small Shelf */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 shadow-xl">
                <img 
                  src="/products/06d3ceec-01fe-4177-97ea-46780c6b3476.jpg"
                  alt="Small camping shelf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[36px] font-bold mb-3 text-twilight-blue">
                Small Shelf
              </h3>
              <p className="text-[18px] text-twilight-blue/70 mb-4">
                Compact aluminum shelf for organized camping. Fits most vehicles.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-[42px] font-bold text-sunset-orange">$175</span>
                <span className="text-[18px] text-twilight-blue/60">flat-pack</span>
              </div>
              <a 
                href="/products"
                className="inline-block bg-sunset-orange text-white px-10 py-4 text-[18px] font-bold hover:bg-sunset-orange/90 transition-all duration-300 shadow-lg"
              >
                Add to Cart
              </a>
            </motion.div>

            {/* Large Shelf */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6 shadow-xl">
                <img 
                  src="/products/b78328c2-fda7-4864-815e-e11c3c0facf8.jpg"
                  alt="Large camping shelf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[36px] font-bold mb-3 text-twilight-blue">
                Large Shelf
              </h3>
              <p className="text-[18px] text-twilight-blue/70 mb-4">
                Extended storage solution for serious adventurers. Maximum organization.
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-[42px] font-bold text-sunset-orange">$275</span>
                <span className="text-[18px] text-twilight-blue/60">flat-pack</span>
              </div>
              <a 
                href="/products"
                className="inline-block bg-sunset-orange text-white px-10 py-4 text-[18px] font-bold hover:bg-sunset-orange/90 transition-all duration-300 shadow-lg"
              >
                Add to Cart
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - Full screen carousel */}
      <section className="relative min-h-screen flex items-center justify-center bg-twilight-blue/5">
        <div className="w-full py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold mb-16 text-center text-twilight-blue"
          >
            Built for Adventure
          </motion.h2>

          <div className="max-w-[90vw] mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              navigation
              className="gallery-swiper"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] overflow-hidden shadow-2xl">
                    <img
                      src={`/images-optimized/${img}`}
                      alt={`Adventure ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mt-12">
            <p className="text-[18px] text-twilight-blue/70">
              233 photos from makers around the world
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION - Full screen with background image */}
      <section id="story" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero/d9e8add9-da50-459d-b0e0-1561db397a71.jpg)' }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-twilight-blue/70" />
        
        {/* Story Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold mb-8"
          >
            How We Make
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[20px] leading-relaxed space-y-6"
          >
            <p>
              We're not a factory. We're a collective of makers who believe good gear 
              should be accessible, repairable, and built to last.
            </p>
            <p>
              Every shelf is hand-fabricated from aircraft-grade aluminum. Every bag is 
              sewn from materials saved from landfills. Every design is shared freely.
            </p>
            <p className="text-warm-earth font-bold text-[24px]">
              This is maker culture applied to outdoor gear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION - Clean, simple */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center bg-off-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[72px] font-bold mb-8 text-twilight-blue"
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[20px] text-twilight-blue/80 mb-12 leading-relaxed"
          >
            Questions about our products? Want to collaborate? Just want to say hi?
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="mailto:hello@publicworks.design"
              className="inline-block bg-sunset-orange text-white px-14 py-6 text-[22px] font-bold hover:bg-sunset-orange/90 transition-all duration-300 shadow-xl"
            >
              hello@publicworks.design
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
