import { Providers } from './providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from '../logo.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Esthomy - Modern Diş Kliniği',
  description: 'Modern diş hekimliği hizmetleri ile yanınızdayız',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 