import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PUBLIC WORKS — Outdoor Gear Built to Last',
  description: 'Transparent pricing, open-source designs, sustainable materials. Adventure gear built to last.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
