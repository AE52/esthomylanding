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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { default as LogoSvg } from '../../../public/logo.svg'
import { useParams, useRouter } from 'next/navigation'
import { locales, localeNames, defaultLocale } from '../../middleware'

const navigation = {
  tr: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Tedaviler', href: '/treatments' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
  ],
  de: [
    { name: 'Startseite', href: '/' },
    { name: 'Behandlungen', href: '/treatments' },
  ],
  fr: [
    { name: 'Accueil', href: '/' },
    { name: 'Traitements', href: '/treatments' },
  ],
  ru: [
    { name: 'Главная', href: '/' },
    { name: 'Лечение', href: '/treatments' },
  ],
  ar: [
    { name: 'الرئيسية', href: '/' },
    { name: 'العلاجات', href: '/treatments' },
  ],
} as const

export function Header() {
  const params = useParams()
  const router = useRouter()
  const currentLang = (params?.lang as keyof typeof navigation) || defaultLocale
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={bg} borderBottom="1px" borderColor={borderColor} position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link href={`/${currentLang}`}>
            <Box 
              cursor="pointer" 
              maxW={{ base: "140px", md: "200px" }}
              w="full"
              position="relative"
              display="flex"
              alignItems="center"
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.2s"
              as="div"
              py={2}
            >
              <LogoSvg 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                viewBox="0 0 263 78"
              />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center" gap={4}>
            {navigation[currentLang]?.map((item) => (
              <Link key={item.href} href={`/${currentLang}${item.href}`}>
                <Button variant="ghost" size="md">
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Language Selector */}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                {localeNames[currentLang as keyof typeof localeNames]}
              </MenuButton>
              <MenuList>
                {locales.map((locale) => (
                  <MenuItem 
                    key={locale}
                    onClick={() => router.push(`/${locale}`)}
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  >
                    {localeNames[locale as keyof typeof localeNames]}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
          />

          {/* Mobile Menu Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch" mt={4}>
                  {navigation[currentLang]?.map((item) => (
                    <Link key={item.href} href={`/${currentLang}${item.href}`}>
                      <Button variant="ghost" w="full" onClick={onClose}>
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  
                  {/* Mobile Language Selector */}
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" w="full">
                      {localeNames[currentLang as keyof typeof localeNames]}
                    </MenuButton>
                    <MenuList>
                      {locales.map((locale) => (
                        <MenuItem 
                          key={locale}
                          onClick={() => {
                            router.push(`/${locale}`);
                            onClose();
                          }}
                          dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        >
                          {localeNames[locale as keyof typeof localeNames]}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
} 