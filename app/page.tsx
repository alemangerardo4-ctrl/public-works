'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const launchDate = new Date('2026-03-15').getTime();
      const now = new Date().getTime();
      const distance = launchDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Public Works
            </div>
            <div className="flex gap-6">
              <a href="#mission" className="text-slate-300 hover:text-white transition">
                Mission
              </a>
              <a href="#waitlist" className="text-slate-300 hover:text-white transition">
                Join
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Coming Soon */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-mono">
                  Coming March 2026
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tight">
                  Sustainable
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500">
                    Outdoor Gear
                  </span>
                  <br />
                  Redefined
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-lg leading-relaxed">
                  Premium equipment for adventurers who refuse to compromise on quality or the planet. Built to last, designed to inspire.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 10h10M13 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-700">
                <div className="space-y-2">
                  <p className="text-4xl font-black text-green-400">100%</p>
                  <p className="text-slate-400 text-sm">Sustainable Materials</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-blue-400">∞</p>
                  <p className="text-slate-400 text-sm">Lifetime Quality</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-cyan-400">1000+</p>
                  <p className="text-slate-400 text-sm">Waitlisted</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Featured Product */}
            <div className="relative h-96 lg:h-full lg:min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0 border border-slate-700 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 space-y-6">
                  {/* Product Icon */}
                  <div className="text-8xl animate-bounce">🎒</div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white">Trek Backpack</h3>
                    <p className="text-slate-400">Coming to public-works.design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/5 to-blue-500/5 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Launch Countdown</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur">
                  <p className="text-3xl md:text-4xl font-black text-green-400">{String(item.value).padStart(2, '0')}</p>
                  <p className="text-xs text-slate-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white">Why We Exist</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Adventure shouldn't come at the expense of our planet. We're building a better way.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Sustainable by Design',
                desc: 'Every product uses regenerative materials and ethical manufacturing. Zero compromise on environmental impact.'
              },
              {
                icon: '⚡',
                title: 'Built to Last',
                desc: 'Our gear is engineered for decades, not seasons. Better durability means less waste.'
              },
              {
                icon: '🤝',
                title: 'Community First',
                desc: 'We partner with local craftspeople and share profits with conservation efforts.'
              }
            ].map((value, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl hover:border-green-500/50 transition-all duration-300 space-y-4 hover:shadow-xl hover:shadow-green-500/10"
              >
                <p className="text-5xl group-hover:scale-110 transition-transform duration-300">{value.icon}</p>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white">Coming Soon</h2>
            <p className="text-lg text-slate-300">First collection launching March 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Canvas Tote Bag', price: '$89', emoji: '👜', desc: 'Timeless, durable, versatile' },
              { name: 'Trek Backpack', price: '$249', emoji: '🎒', desc: 'Adventure-ready companion' },
              { name: 'Steel Water Bottle', price: '$45', emoji: '💧', desc: '48-hour temperature control' }
            ].map((product, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden relative">
                  <div className="text-7xl group-hover:scale-125 transition-transform duration-300">{product.emoji}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 bg-slate-900 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition">{product.name}</h3>
                  <p className="text-slate-400 text-sm">{product.desc}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-black text-green-400">{product.price}</p>
                    <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full">Pre-order</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-y border-slate-800">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white">
                Join the Movement
              </h2>
              <p className="text-xl text-slate-300">
                Be among the first to access our sustainable gear. Get early-bird discounts and exclusive product previews.
              </p>
            </div>

            {/* Email Signup */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400 transition backdrop-blur"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                {submitted ? '✓ Subscribed' : 'Notify Me'}
              </button>
            </form>

            {submitted && (
              <p className="text-green-400 font-semibold">
                ✓ Thanks! Check your email for exclusive updates.
              </p>
            )}

            <p className="text-slate-500 text-sm">
              We'll send you launch updates, early access codes, and special offers. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Public Works</h3>
              <p className="text-slate-400 text-sm">Sustainable outdoor gear for the next generation of adventurers.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#mission" className="hover:text-white transition">Mission</a></li>
                <li><a href="#waitlist" className="hover:text-white transition">Waitlist</a></li>
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
