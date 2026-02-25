'use client'

export default function PreviewSite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-blue-900 sticky top-0 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">Public Works</div>
          <ul className="flex gap-8">
            <li><a href="#products" className="text-slate-700 hover:text-blue-900 font-medium">Products</a></li>
            <li><a href="#why" className="text-slate-700 hover:text-blue-900 font-medium">Why Us</a></li>
            <li><a href="#values" className="text-slate-700 hover:text-blue-900 font-medium">Values</a></li>
            <li><button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">Shop</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-100 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900">Built to Last</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Direct manufacturing outdoor gear. Modular systems designed for a lifetime of use. Anti-corporate. Real.
          </p>
          <button className="px-8 py-3 bg-blue-900 text-white rounded-lg font-bold text-lg hover:bg-blue-800">
            Explore Products
          </button>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Modular Wall Shelf', price: '$189', desc: 'Powder-coated steel. Wall-mount. 3-section modular.' },
              { name: 'Canvas Tote Bag', price: '$79', desc: 'Heavy-duty canvas. Everyday carry. Hand-stitched.' },
              { name: 'Truck Camper Kit', price: '$1,299', desc: 'Complete modular system. Fits full-size trucks.' },
            ].map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-sky-50 rounded-lg aspect-square flex items-center justify-center border border-sky-200">
                  <span className="text-6xl">📦</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{p.name}</h3>
                  <p className="text-sm text-slate-600 my-2">{p.desc}</p>
                  <p className="text-2xl font-bold text-blue-900">{p.price}</p>
                  <button className="mt-3 w-full px-4 py-2 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-blue-50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">Why Public Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Built for Lifetime', desc: 'Designed for 10+ years of use. Repairable. Replaceable parts.' },
              { title: 'Direct Manufacturing', desc: 'No middleman. No markup. Fair pricing passed to you.' },
              { title: 'Modular & Scalable', desc: 'Start small. Add modules as your needs grow.' },
              { title: 'Anti-Corporate DNA', desc: 'No BS. No planned obsolescence. No greenwashing.' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600">Sustainability through durability. Design integrity. Transparent operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {['Durability', 'Transparency', 'Sustainability'].map((v, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 space-y-3">
                <p className="text-4xl">{'🌍🔧💡'[i]}</p>
                <h3 className="font-bold text-slate-800">{v}</h3>
                <p className="text-sm text-slate-600">
                  {['Built to last. No planned obsolescence.', 'Know exactly what you\'re buying.', 'Every purchase reduces waste.'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-bold">Ready to Build Better?</h2>
          <p className="text-lg opacity-90">Join the movement. Real products. Real impact.</p>
          <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-sky-100">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© 2026 Public Works. Built to last. Made with intention.</p>
        </div>
      </footer>
    </div>
  )
}
