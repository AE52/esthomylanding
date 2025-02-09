import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Esthomy - Modern Diş Kliniği',
  description: 'Modern diş hekimliği hizmetleri ile yanınızdayız',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
} 