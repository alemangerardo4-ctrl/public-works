'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCart, removeFromCart, updateQuantity, type Cart, type CartItem } from '@/lib/cart'

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 })
  const [email, setEmail] = useState('')

  useEffect(() => {
    setCart(getCart())
  }, [])

  const handleRemove = (itemId: string, variant?: string) => {
    const updatedCart = removeFromCart(itemId, variant)
    setCart(updatedCart)
  }

  const handleQuantityChange = (itemId: string, newQuantity: number, variant?: string) => {
    const updatedCart = updateQuantity(itemId, newQuantity, variant)
    setCart(updatedCart)
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with Shopify or payment processor
    alert('Checkout integration coming soon! We\'ll email you at: ' + email)
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Public Works
              </Link>
              <Link href="/shop" className="text-slate-300 hover:text-white transition">
                Continue Shopping
              </Link>
            </div>
          </div>
        </nav>

        {/* Empty Cart */}
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="text-8xl">🛒</div>
            <h1 className="text-5xl font-black text-white">Your Cart is Empty</h1>
            <p className="text-xl text-slate-300">
              Start building your adventure kit!
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Public Works
            </Link>
            <Link href="/shop" className="text-slate-300 hover:text-white transition">
              Continue Shopping
            </Link>
          </div>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-12">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map((item) => (
                <div
                  key={`${item.id}-${item.variant || 'default'}`}
                  className="p-6 bg-slate-900/50 rounded-lg border border-slate-700"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg border border-slate-700"
                      />
                    )}

                    {/* Product Info */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      {item.variant && (
                        <p className="text-slate-400 text-sm">{item.variant}</p>
                      )}
                      <p className="text-2xl font-black text-green-400">
                        ${item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.variant)}
                          className="w-8 h-8 rounded bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
                        >
                          −
                        </button>
                        <span className="text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.variant)}
                          className="w-8 h-8 rounded bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(item.id, item.variant)}
                      className="text-slate-400 hover:text-red-400 transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="mt-4 pt-4 border-t border-slate-700 text-right">
                    <p className="text-slate-400 text-sm">Subtotal</p>
                    <p className="text-xl font-bold text-white">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-slate-900/50 rounded-lg border border-slate-700 space-y-6">
                <h2 className="text-2xl font-bold text-white">Order Summary</h2>

                <div className="space-y-3 pb-6 border-b border-slate-700">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>${cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Shipping</span>
                    <span className="text-green-400">
                      {cart.total >= 200 ? 'FREE' : '$15'}
                    </span>
                  </div>
                  {cart.total < 200 && (
                    <p className="text-xs text-slate-500">
                      Free shipping on orders over $200
                    </p>
                  )}
                </div>

                <div className="flex justify-between text-xl font-bold pt-2">
                  <span className="text-white">Total</span>
                  <span className="text-green-400">
                    ${(cart.total + (cart.total >= 200 ? 0 : 15)).toLocaleString()}
                  </span>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleCheckout} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105"
                  >
                    Proceed to Checkout
                  </button>
                </form>

                <p className="text-xs text-slate-500 text-center">
                  Secure checkout powered by Stripe (coming soon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
