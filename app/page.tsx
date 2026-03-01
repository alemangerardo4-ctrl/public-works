'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setEmail('') }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#0a1410] relative overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/sierra-panoramic.png" 
          alt="" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1410]/40 via-[#0a1410]/70 to-[#0a1410]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* GIS Coordinates */}
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-12">
          <p>36.7783° N, 119.4179° W</p>
        </div>

        {/* Brand */}
        <div className="mb-8">
          <h1 className="font-bold text-6xl md:text-8xl text-white leading-none tracking-tight mb-2">
            PUBLIC<br />
            <span className="text-[#c5ff00]">WORKS</span>
          </h1>
          <div className="h-px w-16 mx-auto bg-[#c5ff00]/40 mt-6" />
        </div>

        {/* Tagline */}
        <p className="font-mono text-xs md:text-sm text-gray-400 max-w-md mb-16 leading-relaxed">
          Field notes, photographs & objects from the American landscape.<br />
          Something is being built.
        </p>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mb-24">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-[#151f1a] border border-gray-800 rounded text-white placeholder-gray-600 focus:outline-none focus:border-[#c5ff00] transition font-mono text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#c5ff00] text-[#0a1410] font-bold rounded hover:bg-[#b8f000] transition"
            >
              {submitted ? '✓' : 'Join'}
            </button>
          </div>
          {submitted && (
            <p className="text-[#c5ff00] text-xs font-mono mt-3">
              ✓ Added to waitlist
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="fixed bottom-6 left-0 right-0 text-center">
          <p className="font-mono text-[10px] text-gray-600 tracking-wider">
            © 2026 PUBLICWORKS COLLECTIVE
          </p>
        </div>
      </div>
    </div>
  )
}
