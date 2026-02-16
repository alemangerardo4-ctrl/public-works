'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getAllProducts, createCheckout, addToCheckout, getCheckoutUrl } from '../../lib/shopify'

// Curated hero photos - best outdoor/atmospheric shots
const heroPhotos = [
  '/images/164b784f-ef1b-481c-bbda-0d3eb54a3053.jpg', // golden hour landscape
  '/images/20e2a3ea-e7cc-4737-b668-0bd3f6f30dcc.jpg', // outdoor/trail
  '/images/d9e8add9-da50-459d-b0e0-1561db397a71.jpg', // atmospheric
  '/images/797131f7-61b2-4a8f-a8bd-dae8e98d669e.jpg', // camping vibes
  '/images/7fa69f80-3828-4f3e-bef8-95891c95174f.jpg', // landscape
]

// Product grid photos - showcasing gear and lifestyle
const productGridPhotos = [
  '/images/02f48fd0-477b-4050-a1ef-fc6eb402281b.jpg',
  '/images/0416155e-08c4-48fa-b85f-ffe994ad9219.jpg',
  '/images/053dfdae-7275-4ce4-91bc-e88e18562a92.jpg',
  '/images/06d3ceec-01fe-4177-97ea-46780c6b3476.jpg',
  '/images/07d39f7d-3065-4f4f-b066-0075cdcf252c.jpg',
  '/images/0fc7baa8-06b2-45aa-aa3a-ac60312ab00b.jpg',
  '/images/11dce202-3b3d-4102-a071-8a30423f2e83.jpg',
  '/images/1428bac1-bb24-47f3-b9d0-41912b11624d.jpg',
  '/images/15ab5aa5-396e-4373-8af0-fd98828e05f3.jpg',
  '/images/1602fc18-6cfe-44ea-a11d-190d175e4874.jpg',
  '/images/187cc953-4a4f-4434-a8db-f55104021b06.jpg',
  '/images/1fc976a8-08e7-49e7-82d9-97ab7b942dab.jpg',
  '/images/20a02e79-8b74-4bdb-906d-1cb4e4626a22.jpg',
  '/images/2472fd09-3839-487d-a96a-b78c92ea754c.jpg',
  '/images/274c8439-d1d0-4c28-b85c-0dbf3f77ac37.jpg',
  '/images/2efa769f-0bd7-48ec-b101-f541a9fb48ca.jpg',
  '/images/33a5f4b9-c902-4fec-a426-e52ee402eddd.jpg',
  '/images/37eb2690-f823-4b47-b12c-9d9b78d5db97.jpg',
  '/images/39fb053d-9cf9-42ac-8148-09e1d76248e8.jpg',
  '/images/3a05ef07-e570-47a7-a92a-d4d710520848.jpg',
  '/images/4076b71a-1c40-449a-aa4b-65676441483c.jpg',
  '/images/466155fd-a55a-4f03-95da-ade7025a347e.jpg',
  '/images/49ca4c7d-4d1f-43df-a93d-d000f0e1cbf2.jpg',
  '/images/49f6cc49-5c19-4fc8-b23d-8e0859891e4a.jpg',
  '/images/4ace8804-9400-4620-a954-799cecc7035f.jpg',
  '/images/4b5ec452-6a2f-461a-a228-0a0b53ddf744.jpg',
  '/images/4ddedf6e-9dad-44a9-a641-99c8409262a9.jpg',
  '/images/4df910d9-6769-4464-b199-afb3fed93ed1.jpg',
  '/images/4e580e4a-9a61-446d-8042-e0dacb406e60.jpg',
  '/images/50765142-d7f9-4d0f-b74c-dec54377cc65.jpg',
  '/images/53f12730-7404-46d9-86eb-1e96fa5e8793.jpg',
  '/images/59617592-805c-478f-b2d3-f3cdaa051be5.jpg',
  '/images/5b679560-ff91-4e0f-b780-c84f4483eaa8.jpg',
  '/images/5dcfae74-21f6-4bff-bbe9-fa82ad3b8f20.jpg',
  '/images/613629ce-a3ca-4776-aa49-a11bcf4eb3f7.jpg',
  '/images/64d519d5-53db-44b3-8fa7-29f2181c209b.jpg',
  '/images/6cc9a04d-dda8-4204-b045-57596749fb42.jpg',
  '/images/6cfc0d62-fa4d-4f61-b015-82b05070e4cb.jpg',
  '/images/6d7390a0-cae4-4120-a6bc-76125c6b56b7.jpg',
  '/images/78f40680-138e-4cfe-8ef7-159c0fb5821b.jpg',
  '/images/78f7a750-1c98-4ce4-b2b3-972734b30075.jpg',
  '/images/7b3032a9-0e7f-406f-9093-cef56fdb7dc9.jpg',
  '/images/7e5d5c6c-8c6c-4e88-98a7-42a345964c29.jpg',
  '/images/7fdfd363-2ad4-4566-aaa6-730567a5ba67.jpg',
  '/images/8073dadb-306a-4997-af00-3d16977208c6.jpg',
  '/images/82e1478f-ec54-4058-a3cd-2fdcf62c5362.jpg',
  '/images/833621e1-776f-4998-a402-214770ccd94f.jpg',
  '/images/854937d1-e3ef-4abc-acb2-3c277792548f.jpg',
  '/images/855ee5e0-6a44-40c4-af76-8406a9154787.jpg',
  '/images/88c6f03e-7476-426d-965f-ff9289c33fed.jpg',
  '/images/89b29843-a7a3-40b9-8308-0f9ad659e0fe.jpg',
  '/images/8b62d923-e3bc-4a14-a74a-4ce6b12d9416.jpg',
  '/images/8d9a2862-eff1-4e7e-acc3-ced45852e041.jpg',
  '/images/920724cd-3248-4bad-a94f-b7903d600e58.jpg',
  '/images/96de4ad7-58b3-4847-8cbc-7e73d1e3fe68.jpg',
  '/images/9727a449-c812-4cfa-a116-14a8c1ca2a92.jpg',
  '/images/9b72eb47-baa2-4e3b-8a82-c8655edbbec9.jpg',
  '/images/9c960da4-a666-46b8-9396-73fd45e76373.jpg',
  '/images/9d10f53b-a7f4-4122-8e6f-9970149febff.jpg',
  '/images/a04baec1-9ab4-462a-9a62-125be2e5fb40.jpg',
  '/images/a05821a3-4b74-4973-adef-3de618b41808.jpg',
  '/images/a7c7d916-c870-4615-928c-09a7c5a80ae1.jpg',
  '/images/a7d3f0d2-df35-4ceb-9ed4-7c6aedc8f1c3.jpg',
  '/images/a7f1cec0-75ed-4e96-8f11-a18412c5654d.jpg',
  '/images/a811ba7b-80b1-4c7d-884e-5aa7d687b24e.jpg',
  '/images/aa521b90-9e30-4a39-a5bf-47b300d63f01.jpg',
  '/images/acac8d5c-677f-4ea9-9d37-aade5cab3070.jpg',
  '/images/ae2f655a-e14e-4fd7-b14b-f457b78e65fb.jpg',
  '/images/afa26cb4-839d-440b-8973-fd5a0255571f.jpg',
  '/images/b07a9020-9603-4fa4-8fbc-e63c72b53c16.jpg',
  '/images/b1d84fcd-6f7c-433e-9212-5251fa5df784.jpg',
  '/images/b36f0494-bcfc-4b5f-aad1-682fce0e260d.jpg',
  '/images/b3978510-f4e0-4a14-bc3c-fab809f6de1d.jpg',
  '/images/b4b9e254-80df-42a5-9e3e-aead3df74dbb.jpg',
  '/images/b55e2bbd-bb7e-43c9-8ab0-02cc2d282e84.jpg',
  '/images/b586b88c-acea-4d00-b67e-115b49751066.jpg',
  '/images/b78328c2-fda7-4864-815e-e11c3c0facf8.jpg',
  '/images/b78db480-40d2-4478-acbc-7552cc2610e4.jpg',
  '/images/b7a05597-289f-4219-93f2-f15d33c2b5b4.jpg',
  '/images/c199634a-d996-413b-87c5-06e78e6d55b9.jpg',
  '/images/c22db1f9-b884-4d83-ab8e-ca909e353c18.jpg',
  '/images/c32c27ff-c087-4af0-b18a-0dd57b85e868.jpg',
  '/images/c399a41b-cd9b-46bb-a816-b1c983d6d4ac.jpg',
  '/images/c47455aa-d930-47af-a473-f5ebe243f4e2.jpg',
  '/images/c7d76476-3d58-4159-9009-d755faa9b4cc.jpg',
  '/images/cbccf155-2f40-480d-bab4-7c9325d7f0b3.jpg',
  '/images/d34a52f0-766d-4fdd-a5c5-f5f71182ca93.jpg',
  '/images/d653f8b9-1a54-4d66-947d-051545f0ca22.jpg',
  '/images/d70c0b42-3f15-4d26-82e8-29f94c68b7b7.jpg',
  '/images/d7ab0b86-9040-436f-ba95-5a8c78a0a9fe.jpg',
  '/images/d85bc8b2-4719-4fdc-878c-7ca7fe79040e.jpg',
  '/images/d909fc38-7fa2-4322-b904-8e60a41554cf.jpg',
  '/images/d93a2b53-c432-4d24-8296-86fcae7dcc2b.jpg',
  '/images/d9d30973-f426-42aa-b2b5-4e972a4e3dcd.jpg',
  '/images/da1cdd31-390b-42e4-95ad-e57a12b78fda.jpg',
  '/images/dce11e8d-9dfd-4669-9c52-3674677a9501.jpg',
  '/images/dce37192-5ad4-42a0-bc71-b6fc8e31d256.jpg',
  '/images/ddee72a6-1380-4d02-bf42-993667c06056.jpg',
  '/images/dec80c33-728c-46df-b6bc-144177abb996.jpg',
  '/images/e0b98aec-2122-4e44-b019-53dec1fccc2c.jpg',
  '/images/e1028d37-60d1-410f-a994-611365c88f7e.jpg',
  '/images/e61428b7-f9b5-4ce1-84f5-d995f8bc9f5d.jpg',
  '/images/e66f2efb-d477-48c3-abbf-55b5cf62049f.jpg',
  '/images/ecbc698a-3993-4145-8bbb-95b3a76a29ab.jpg',
  '/images/f0cf6d50-86a7-4ac4-9f2d-5fd7726da77a.jpg',
  '/images/f17a126d-cd5d-4e4f-bd54-e2cf424ee099.jpg',
  '/images/f2659337-ad5b-4e3f-ae03-8745cd6f5f00.jpg',
  '/images/f43ce639-d1a8-4ff5-9358-9b625c171817.jpg',
  '/images/f4957d98-18d3-4e4d-94d9-7ad01d436479.jpg',
  '/images/f81c422c-31a7-42bb-b5cb-eadbd5b4a517.jpg',
]

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [checkoutId, setCheckoutId] = useState(null)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  useEffect(() => {
    async function loadProducts() {
      try {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
        
        const checkout = await createCheckout()
        if (checkout) {
          setCheckoutId(checkout.id)
        }
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()

    // Auto-rotate hero images every 5 seconds
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroPhotos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleAddToCart = async (variantId) => {
    if (!checkoutId) {
      console.error('No checkout session')
      return
    }

    const lineItems = [{ variantId, quantity: 1 }]
    const checkout = await addToCheckout(checkoutId, lineItems)
    
    if (checkout) {
      const checkoutUrl = getCheckoutUrl(checkout)
      if (checkoutUrl) {
        window.location.href = checkoutUrl
      }
    }
  }

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Lifestyle Hero Section - Full Screen with Rotating Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroPhotos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentHeroIndex ? 1 : 0,
                scale: index === currentHeroIndex ? 1 : 1.1
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img 
                src={photo}
                alt="Outdoor lifestyle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-twilight-blue/70 via-twilight-blue/50 to-twilight-blue/80" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-8 text-off-white leading-none tracking-tight">
              BUILT FOR<br/>THE TRAIL
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-off-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Gear made by makers, for makers.<br/>
              <span className="text-sunset-orange font-bold">No BS. No markup. Just good stuff.</span>
            </p>
            
            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-off-white/70 text-sm"
            >
              ↓ Scroll to explore
            </motion.div>
          </motion.div>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-8 right-8 z-20 text-off-white/80 text-sm">
          {currentHeroIndex + 1} / {heroPhotos.length}
        </div>
      </section>

      {/* Shopify Products Section */}
      {!loading && products.length > 0 && (
        <section className="py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl sm:text-7xl font-black mb-6 text-twilight-blue">
                In Stock Now
              </h2>
              <p className="text-xl sm:text-2xl text-twilight-blue/80 max-w-3xl mx-auto">
                Limited runs. Real materials. Transparent pricing.
              </p>
            </motion.div>

            {/* Product Cards */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {products.map((product, index) => {
                const image = product.images?.[0]
                const variant = product.variants?.[0]
                const price = variant?.price?.amount || '0'

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white rounded-sm overflow-hidden shadow-2xl hover:shadow-sunset-orange/20 transition-all duration-500 group"
                  >
                    {/* Product Image */}
                    {image && (
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                        <img
                          src={image.src}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-twilight-blue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}

                    {/* Product Details */}
                    <div className="p-8 text-center">
                      <h3 className="text-3xl sm:text-4xl font-black mb-4 text-twilight-blue group-hover:text-sunset-orange transition-colors duration-300">
                        {product.title}
                      </h3>
                      
                      {product.description && (
                        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                      )}

                      <div className="mb-8">
                        <span className="text-5xl sm:text-6xl font-black text-sunset-orange">
                          ${parseFloat(price).toFixed(2)}
                        </span>
                      </div>
                      
                      {variant && (
                        <button
                          onClick={() => handleAddToCart(variant.id)}
                          className="w-full bg-twilight-blue text-off-white px-10 py-5 text-xl font-bold hover:bg-dusty-sage transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Photo Grid Gallery - Masonry Style */}
      <section className="py-24 bg-gradient-to-b from-off-white to-dusty-sage/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-6 text-twilight-blue">
              Life In The Wild
            </h2>
            <p className="text-xl sm:text-2xl text-twilight-blue/80 max-w-3xl mx-auto">
              Real adventures. Real people. Real gear.
            </p>
          </motion.div>

          {/* Responsive Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {productGridPhotos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="aspect-square overflow-hidden bg-gray-200 cursor-pointer rounded-sm shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Photo count badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-sunset-orange text-off-white px-8 py-4 rounded-sm font-black text-lg shadow-lg">
              233 Photos. Real Stories. Real Gear.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-24 bg-twilight-blue text-off-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-black mb-16 text-center"
          >
            The Public Works Way
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-sunset-orange">Transparent Pricing</h3>
              <p className="text-lg text-off-white/90 leading-relaxed">
                We show you the real cost. No hidden markup. $175-275 for shelves that competitors charge 3x for.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">🛠️</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-dusty-sage">Maker Culture</h3>
              <p className="text-lg text-off-white/90 leading-relaxed">
                Open-source CAD files. Repair guides. Assembly instructions. Build it yourself or with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">♻️</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-warm-earth">Upcycled Everything</h3>
              <p className="text-lg text-off-white/90 leading-relaxed">
                Recycled climbing rope. Repurposed sails. X-Pac from parachutes. Every piece tells a story.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-sunset-orange to-warm-earth text-off-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-black mb-8 leading-tight">
              Ready to Hit<br/>The Trail?
            </h2>
            <p className="text-xl sm:text-2xl mb-12 opacity-90 leading-relaxed">
              Join the movement. Build your own gear. Get outside.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#products"
                className="inline-block bg-twilight-blue text-off-white px-14 py-6 text-xl sm:text-2xl font-bold hover:bg-dusty-sage transition-all duration-300 rounded-sm shadow-2xl hover:scale-105"
              >
                Shop Now
              </a>
              <a 
                href="mailto:hello@publicworks.design"
                className="inline-block border-3 border-off-white text-off-white px-14 py-6 text-xl sm:text-2xl font-bold hover:bg-off-white/10 transition-all duration-300 rounded-sm hover:scale-105"
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
