'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getAllProducts, createCheckout, addToCheckout, getCheckoutUrl } from '../../lib/shopify'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [checkoutId, setCheckoutId] = useState(null)

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl font-bold text-dusty-sage text-center"
        >
          Loading products...
        </motion.div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-twilight-blue to-dusty-sage text-off-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8">Coming Soon</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
            We're adding products to the store. Check back soon for campers, bags, and more.
          </p>
          <a 
            href="https://publiworks-co.myshopify.com/admin/products" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sunset-orange text-off-white px-12 py-5 text-lg font-bold hover:bg-warm-earth transition shadow-2xl hover:scale-105"
          >
            Add Products (Admin) →
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-off-white">
      
      {/* Hero Banner with Background */}
      <section className="relative h-96 md:h-[500px] overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img 
            src="/images/02f48fd0-477b-4050-a1ef-fc6eb402281b.jpg"
            alt="Trail background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-twilight-blue/80 via-twilight-blue/60 to-off-white" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 text-off-white leading-none">
              Shop
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-off-white/90 max-w-3xl mx-auto">
              Hand-built gear designed for makers, adventurers, and anyone who values quality over quantity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid - Center Justified */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => {
            const image = product.images?.[0]
            const variant = product.variants?.[0]
            const price = variant?.price?.amount || '0'

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Product Image - Properly Proportioned */}
                {image && (
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img
                      src={image.src}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-twilight-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Product Details - Center Justified */}
                <div className="p-6 sm:p-8 text-center">
                  <h2 className="text-2xl sm:text-3xl font-black mb-3 text-twilight-blue group-hover:text-sunset-orange transition-colors">
                    {product.title}
                  </h2>
                  
                  {product.description && (
                    <p className="text-sm sm:text-base text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-sunset-orange">
                      ${parseFloat(price).toFixed(2)}
                    </span>
                  </div>
                  
                  {variant && (
                    <button
                      onClick={() => handleAddToCart(variant.id)}
                      className="w-full bg-twilight-blue text-off-white px-8 py-4 font-bold hover:bg-dusty-sage transition-all rounded-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
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

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-dusty-sage to-twilight-blue text-off-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-black mb-6">Looking for something custom?</h3>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            Every bag is unique. Every camper can be modified. Get in touch.
          </p>
          <a 
            href="mailto:hello@publicworks.design" 
            className="inline-block bg-sunset-orange text-off-white px-12 py-5 text-xl font-bold hover:bg-warm-earth transition shadow-2xl hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  )
}
