'use client'

import React from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const footerContent = {
  tr: {
    about: {
      title: 'Hakkımızda',
      description: 'Modern diş hekimliği hizmetleri ile sizlere en iyi tedavi deneyimini sunuyoruz.',
    },
    links: {
      title: 'Hızlı Bağlantılar',
      items: [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hizmetler', href: '/services' },
        { label: 'Randevu Al', href: '/appointment' },
        { label: 'İletişim', href: '/contact' },
      ],
    },
    contact: {
      title: 'İletişim',
      address: 'Örnek Mahallesi, Örnek Sokak No:1',
      city: 'İstanbul, Türkiye',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Tüm hakları saklıdır.',
  },
  en: {
    about: {
      title: 'About Us',
      description: 'We provide the best treatment experience with modern dentistry services.',
    },
    links: {
      title: 'Quick Links',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Book Appointment', href: '/appointment' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Example Street, Example Road No:1',
      city: 'Istanbul, Turkey',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. All rights reserved.',
  },
  de: {
    about: {
      title: 'Über uns',
      description: 'Wir bieten Ihnen die beste Behandlungserfahrung mit modernen zahnmedizinischen Dienstleistungen.',
    },
    links: {
      title: 'Schnellzugriff',
      items: [
        { label: 'Startseite', href: '/' },
        { label: 'Leistungen', href: '/services' },
        { label: 'Termin vereinbaren', href: '/appointment' },
        { label: 'Kontakt', href: '/contact' },
      ],
    },
    contact: {
      title: 'Kontakt',
      address: 'Beispielstraße, Beispielweg Nr. 1',
      city: 'Istanbul, Türkei',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Alle Rechte vorbehalten.',
  },
  fr: {
    about: {
      title: 'À propos',
      description: 'Nous vous offrons la meilleure expérience de traitement avec des services dentaires modernes.',
    },
    links: {
      title: 'Liens rapides',
      items: [
        { label: 'Accueil', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Rendez-vous', href: '/appointment' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Rue Exemple, Route Exemple N°1',
      city: 'Istanbul, Turquie',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Tous droits réservés.',
  },
  ru: {
    about: {
      title: 'О нас',
      description: 'Мы предоставляем лучший опыт лечения с современными стоматологическими услугами.',
    },
    links: {
      title: 'Быстрые ссылки',
      items: [
        { label: 'Главная', href: '/' },
        { label: 'Услуги', href: '/services' },
        { label: 'Записаться', href: '/appointment' },
        { label: 'Контакты', href: '/contact' },
      ],
    },
    contact: {
      title: 'Контакты',
      address: 'Пример улицы, Пример дороги №1',
      city: 'Стамбул, Турция',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Все права защищены.',
  },
  ar: {
    about: {
      title: 'من نحن',
      description: 'نقدم أفضل تجربة علاج مع خدمات طب الأسنان الحديثة.',
    },
    links: {
      title: 'روابط سريعة',
      items: [
        { label: 'الرئيسية', href: '/' },
        { label: 'الخدمات', href: '/services' },
        { label: 'حجز موعد', href: '/appointment' },
        { label: 'اتصل بنا', href: '/contact' },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      address: 'شارع نموذجي، طريق نموذجي رقم 1',
      city: 'اسطنبول، تركيا',
      email: 'info@esthomy.com',
      phone: '+90 (212) 123 45 67',
    },
    copyright: '© 2024 Esthomy. جميع الحقوق محفوظة.',
  },
}

export function Footer() {
  const params = useParams()
  const currentLang = params.lang as keyof typeof footerContent
  const content = footerContent[currentLang]
  
  const bg = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor}>
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                ESTHOMY
              </Text>
            </Box>
            <Text fontSize="sm">
              {content.about.description}
            </Text>
          </Stack>

          <Stack align={currentLang === 'ar' ? 'flex-end' : 'flex-start'}>
            <Text fontWeight="bold" mb={2}>
              {content.links.title}
            </Text>
            {content.links.items.map((link) => (
              <Link key={link.href} href={`/${currentLang}${link.href}`} passHref>
                <ChakraLink>{link.label}</ChakraLink>
              </Link>
            ))}
          </Stack>

          <Stack align={currentLang === 'ar' ? 'flex-end' : 'flex-start'}>
            <Text fontWeight="bold" mb={2}>
              {content.contact.title}
            </Text>
            <Text>{content.contact.address}</Text>
            <Text>{content.contact.city}</Text>
            <ChakraLink href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </ChakraLink>
            <Text>{content.contact.phone}</Text>
          </Stack>
        </SimpleGrid>

        <Box pt={10}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
          >
            <Text textAlign="center">{content.copyright}</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
} 