import { Providers } from './providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from '../logo.svg'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 