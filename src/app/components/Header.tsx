'use client'

import React from 'react'
import {
  Box,
  Container,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { locales, localeNames } from '../../middleware'

const navigation = {
  tr: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'İletişim', href: '/contact' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  de: [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Kontakt', href: '/contact' },
  ],
  fr: [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  ru: [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Контакты', href: '/contact' },
  ],
  ar: [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'اتصل بنا', href: '/contact' },
  ],
}

export function Header() {
  const params = useParams()
  const currentLang = params.lang as keyof typeof navigation
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bg} borderBottom="1px" borderColor={borderColor} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={8}>
            <Box fontWeight="bold" fontSize="xl">
              ESTHOMY
            </Box>
            <Flex as="nav" gap={4} display={{ base: 'none', md: 'flex' }}>
              {navigation[currentLang].map((item) => (
                <Link key={item.href} href={`/${currentLang}${item.href}`} passHref>
                  <Button as="a" variant="ghost">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
              {localeNames[currentLang]}
            </MenuButton>
            <MenuList>
              {locales.map((locale) => (
                <Link key={locale} href={`/${locale}`} passHref>
                  <MenuItem as="a" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                    {localeNames[locale]}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  )
} 