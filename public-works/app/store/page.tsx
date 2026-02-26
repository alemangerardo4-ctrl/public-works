'use client'

export default function StoreComing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/products/b78328c2-fda7-4864-815e-e11c3c0facf8.jpg"
            alt="Canvas Tote Bag" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Store Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-slate-300">
              Direct manufacturing outdoor gear.
            </p>
            <p className="text-lg text-slate-400">
              Built to last. Made with intention.
            </p>
          </div>

          {/* Email Signup */}
          <div className="pt-8">
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-lg bg-white text-slate-900 placeholder-slate-500 font-medium text-lg flex-1 sm:flex-initial focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg transition-colors"
              >
                Notify Me
              </button>
            </form>
            <p className="text-sm text-slate-500 mt-4">
              We'll let you know when we're ready.
            </p>
          </div>

          {/* Footer Links */}
          <div className="pt-12 border-t border-slate-700 space-y-3 text-slate-400 text-sm">
            <p>
              <a href="mailto:hello@publicworks.design" className="hover:text-white transition">
                hello@publicworks.design
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/publicworks.design" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
              {' '} • {' '}
              <a href="https://twitter.com/publicworksgear" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
