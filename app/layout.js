import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PUBLIC WORKS — Outdoor Gear Built to Last',
  description: 'Pop-up campers and bags made from upcycled materials. Transparent pricing, open-source designs, built for makers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-off-white/95 backdrop-blur-sm border-b border-twilight-blue/10 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <a href="/" className="text-lg sm:text-2xl font-bold tracking-tight">
              PUBLIC WORKS
            </a>
            <div className="flex gap-4 sm:gap-8 text-sm sm:text-base">
              <a href="/products" className="hover:text-sunset-orange transition font-medium">Products</a>
              <a href="/about" className="hover:text-sunset-orange transition font-medium">About</a>
              <a href="/cart" className="hover:text-sunset-orange transition font-medium">Cart</a>
            </div>
          </div>
        </nav>
        <main className="pt-16 sm:pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
