import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PUBLIC WORKS — Outdoor Gear Built to Last',
  description: 'Transparent pricing, open-source designs, upcycled materials. Camp shelves and adventure gear for makers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Sticky Navigation */}
        <nav className="fixed top-0 w-full bg-twilight-blue/95 backdrop-blur-sm z-50 border-b border-sunset-orange/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-[24px] font-bold text-white tracking-tight hover:text-sunset-orange transition">
              PUBLIC WORKS
            </a>
            <div className="flex gap-8 text-[18px]">
              <a 
                href="#home" 
                className="text-white hover:text-sunset-orange transition font-medium"
              >
                Home
              </a>
              <a 
                href="#products" 
                className="text-white hover:text-sunset-orange transition font-medium"
              >
                Products
              </a>
              <a 
                href="#story" 
                className="text-white hover:text-sunset-orange transition font-medium"
              >
                Story
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-sunset-orange transition font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        
        {/* Main content - no padding needed since sections are full-screen */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
