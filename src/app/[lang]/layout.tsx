import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  tr: {
    title: 'Esthomy - Türkiye\'nin Önde Gelen Sağlık Turizmi Platformu',
    description: 'Türkiye\'nin en iyi sağlık merkezlerinde kaliteli tedavi hizmetleri',
  },
  en: {
    title: 'Esthomy - Turkey\'s Leading Health Tourism Platform',
    description: 'Quality treatment services in Turkey\'s best healthcare centers',
  },
  de: {
    title: 'Esthomy - Die führende Plattform für Gesundheitstourismus in der Türkei',
    description: 'Qualitativ hochwertige Behandlungsdienste in den besten Gesundheitszentren der Türkei',
  },
  fr: {
    title: 'Esthomy - La Principale Plateforme de Tourisme de Santé en Turquie',
    description: 'Services de traitement de qualité dans les meilleurs centres de santé de Turquie',
  },
  ru: {
    title: 'Esthomy - Ведущая Платформа Медицинского Туризма в Турции',
    description: 'Качественные услуги лечения в лучших медицинских центрах Турции',
  },
  ar: {
    title: 'Esthomy - المنصة الرائدة للسياحة الصحية في تركيا',
    description: 'خدمات علاجية عالية الجودة في أفضل المراكز الصحية في تركيا',
  },
}

export function generateMetadata({ params }: { params: { lang: keyof typeof metadata } }): Metadata {
  const content = metadata[params.lang] || metadata.en
  return {
    title: content.title,
    description: content.description,
    icons: {
      icon: '/logo.svg',
      shortcut: '/logo.svg',
      apple: '/logo.svg',
      other: {
        rel: 'mask-icon',
        url: '/logo.svg',
      },
    },
  }
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