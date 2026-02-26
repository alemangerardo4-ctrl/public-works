'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Public Works
            </div>
            <div className="flex gap-6">
              <Link href="#mission" className="text-slate-300 hover:text-white transition">
                Mission
              </Link>
              <Link href="#products" className="text-slate-300 hover:text-white transition">
                Products
              </Link>
              <Link href="/store" className="text-slate-300 hover:text-white transition">
                Store
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Sustainable Outdoor Gear
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {' '}Built for Adventure
                  </span>
                </h1>
                <p className="text-xl text-slate-300">
                  Premium, eco-conscious equipment designed for explorers who refuse to compromise on quality or sustainability.
                </p>
              </div>

              {/* Email Signup */}
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400 transition"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105"
                  >
                    {submitted ? '✓ Subscribed' : 'Notify Me'}
                  </button>
                </form>
                {submitted && (
                  <p className="text-green-400 text-sm">
                    ✓ Thanks! We'll notify you when we launch.
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-400">100%</p>
                  <p className="text-slate-400">Sustainable</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-400">∞</p>
                  <p className="text-slate-400">Lifetime</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-slate-200">1000+</p>
                  <p className="text-slate-400">Adventurers</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <div className="absolute inset-0 border border-slate-700 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <svg
                      className="w-24 h-24 mx-auto text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <p className="text-slate-400">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We believe adventure shouldn't come at the expense of our planet. Public Works creates premium outdoor gear using sustainable materials and ethical practices—proving that quality and sustainability go hand in hand.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '♻️',
                title: 'Sustainable',
                desc: 'Every product designed with environmental impact in mind'
              },
              {
                icon: '⚡',
                title: 'Engineered',
                desc: 'Built to last. Tested by real adventurers in real conditions'
              },
              {
                icon: '🌍',
                title: 'Community',
                desc: 'Part of a movement to make outdoor gear accessible to all'
              }
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl hover:border-green-500/50 transition space-y-4"
              >
                <p className="text-4xl">{value.icon}</p>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Featured Products</h2>
          <p className="text-center text-slate-400 mb-16">Pre-order coming February 2026</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Canvas Tote Bag', price: '$89', desc: 'Durable, versatile, timeless' },
              { name: 'Trek Backpack', price: '$249', desc: 'Adventure-ready with style' },
              { name: 'Water Bottle', price: '$45', desc: 'Keeps drinks cool for 48 hours' }
            ].map((product, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-green-500/50 transition"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition duration-300">📦</div>
                </div>
                <div className="p-6 bg-slate-900/80 backdrop-blur">
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <p className="text-slate-400 text-sm mb-3">{product.desc}</p>
                  <p className="text-2xl font-bold text-green-400">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/store"
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join the Adventure
          </h2>
          <p className="text-xl text-slate-300">
            Be the first to know when Public Works launches. Get exclusive pre-order access and updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400 transition"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Public Works</h3>
              <p className="text-slate-400 text-sm">Sustainable outdoor gear for adventurers.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Navigate</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="#mission" className="hover:text-white transition">Mission</Link></li>
                <li><Link href="#products" className="hover:text-white transition">Products</Link></li>
                <li><Link href="/store" className="hover:text-white transition">Store</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Follow</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Public Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
