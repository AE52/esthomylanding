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
      description: 'Türkiye\'nin önde gelen sağlık turizmi platformu olarak, sizlere en kaliteli sağlık hizmetlerini sunuyoruz.',
    },
    links: {
      title: 'Hızlı Bağlantılar',
      items: [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Tedaviler', href: '/treatments' },
        { label: 'Randevu Al', href: '/appointment' },
        { label: 'İletişim', href: '/contact' },
      ],
    },
    contact: {
      title: 'İletişim',
      address: 'Maslak, Büyükdere Caddesi No:255',
      city: 'İstanbul, Türkiye',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Tüm hakları saklıdır.',
  },
  en: {
    about: {
      title: 'About Us',
      description: 'As Turkey\'s leading health tourism platform, we provide you with the highest quality healthcare services.',
    },
    links: {
      title: 'Quick Links',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Treatments', href: '/treatments' },
        { label: 'Book Appointment', href: '/appointment' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Maslak, Buyukdere Street No:255',
      city: 'Istanbul, Turkey',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. All rights reserved.',
  },
  de: {
    about: {
      title: 'Über uns',
      description: 'Als führende Plattform für Gesundheitstourismus in der Türkei bieten wir Ihnen medizinische Dienstleistungen von höchster Qualität.',
    },
    links: {
      title: 'Schnellzugriff',
      items: [
        { label: 'Startseite', href: '/' },
        { label: 'Behandlungen', href: '/treatments' },
        { label: 'Termin vereinbaren', href: '/appointment' },
        { label: 'Kontakt', href: '/contact' },
      ],
    },
    contact: {
      title: 'Kontakt',
      address: 'Maslak, Büyükdere Straße Nr. 255',
      city: 'Istanbul, Türkei',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Alle Rechte vorbehalten.',
  },
  fr: {
    about: {
      title: 'À propos',
      description: 'En tant que principale plateforme de tourisme de santé en Turquie, nous vous proposons des services de santé de la plus haute qualité.',
    },
    links: {
      title: 'Liens rapides',
      items: [
        { label: 'Accueil', href: '/' },
        { label: 'Traitements', href: '/treatments' },
        { label: 'Rendez-vous', href: '/appointment' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    contact: {
      title: 'Contact',
      address: 'Maslak, Avenue Büyükdere N°255',
      city: 'Istanbul, Turquie',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Tous droits réservés.',
  },
  ru: {
    about: {
      title: 'О нас',
      description: 'Как ведущая платформа медицинского туризма в Турции, мы предоставляем вам медицинские услуги высочайшего качества.',
    },
    links: {
      title: 'Быстрые ссылки',
      items: [
        { label: 'Главная', href: '/' },
        { label: 'Лечение', href: '/treatments' },
        { label: 'Записаться', href: '/appointment' },
        { label: 'Контакты', href: '/contact' },
      ],
    },
    contact: {
      title: 'Контакты',
      address: 'Маслак, Проспект Бююкдере №255',
      city: 'Стамбул, Турция',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. Все права защищены.',
  },
  ar: {
    about: {
      title: 'من نحن',
      description: 'كمنصة رائدة للسياحة الصحية في تركيا، نقدم لكم خدمات صحية عالية الجودة.',
    },
    links: {
      title: 'روابط سريعة',
      items: [
        { label: 'الرئيسية', href: '/' },
        { label: 'العلاجات', href: '/treatments' },
        { label: 'حجز موعد', href: '/appointment' },
        { label: 'اتصل بنا', href: '/contact' },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      address: 'مسلك، شارع بيوكديري رقم 255',
      city: 'اسطنبول، تركيا',
      email: 'info@esthomy.com',
      phone: '+90 (850) 123 45 67',
    },
    copyright: '© 2024 Esthomy. جميع الحقوق محفوظة.',
  },
}

export function Footer() {
  const params = useParams()
  const currentLang = (params?.lang as keyof typeof footerContent) || 'en'
  const content = footerContent[currentLang] || footerContent.en
  
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