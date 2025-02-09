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
import ReactFlagsSelect from 'react-flags-select'

const countryCodeMap = {
  tr: 'TR',
  en: 'GB',
  de: 'DE',
  fr: 'FR',
  ru: 'RU',
  ar: 'SA',
} as const

const navigation = {
  tr: [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Tedaviler', href: '/treatments' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/contact' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  de: [
    { name: 'Startseite', href: '/' },
    { name: 'Behandlungen', href: '/treatments' },
    { name: 'Über Uns', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/contact' },
  ],
  fr: [
    { name: 'Accueil', href: '/' },
    { name: 'Traitements', href: '/treatments' },
    { name: 'À Propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  ru: [
    { name: 'Главная', href: '/' },
    { name: 'Лечение', href: '/treatments' },
    { name: 'О Нас', href: '/about' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contact' },
  ],
  ar: [
    { name: 'الرئيسية', href: '/' },
    { name: 'العلاجات', href: '/treatments' },
    { name: 'من نحن', href: '/about' },
    { name: 'المدونة', href: '/blog' },
    { name: 'اتصل بنا', href: '/contact' },
  ],
} as const

export function Header() {
  const params = useParams()
  const router = useRouter()
  const currentLang = (params?.lang as keyof typeof navigation) || defaultLocale
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCountrySelect = (countryCode: string) => {
    const localeMap = {
      TR: 'tr',
      GB: 'en',
      DE: 'de',
      FR: 'fr',
      RU: 'ru',
      SA: 'ar',
    } as const
    const locale = localeMap[countryCode as keyof typeof localeMap]
    router.push(`/${locale}`)
  }

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
            <Box 
              ml={2}
              sx={{
                '.flag-select': {
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: 'lg',
                  minWidth: '120px',
                  maxWidth: '150px',
                },
                '.flag-select__btn': {
                  padding: '6px 8px',
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: useColorModeValue('gray.700', 'gray.200'),
                  backgroundColor: useColorModeValue('gray.50', 'gray.700'),
                  borderRadius: 'lg',
                  border: '1px solid',
                  borderColor: useColorModeValue('gray.200', 'gray.600'),
                  transition: 'all 0.2s',
                  _hover: {
                    borderColor: useColorModeValue('blue.500', 'blue.300'),
                    boxShadow: 'sm',
                    transform: 'translateY(-1px)'
                  }
                },
                '.flag-select__options': {
                  backgroundColor: useColorModeValue('white', 'gray.800'),
                  border: '1px solid',
                  borderColor: useColorModeValue('gray.200', 'gray.600'),
                  borderRadius: 'lg',
                  boxShadow: 'lg',
                  padding: '0.5rem 0',
                  marginTop: '0.5rem',
                  minWidth: '150px'
                },
                '.flag-select__option': {
                  padding: '0.5rem 1rem',
                  fontSize: 'sm',
                  transition: 'all 0.2s',
                  _hover: {
                    backgroundColor: useColorModeValue('blue.50', 'gray.700'),
                    color: useColorModeValue('blue.600', 'blue.200')
                  }
                },
                '.flag-select__img': {
                  width: '20px !important',
                  height: '15px !important'
                }
              }}
            >
              <ReactFlagsSelect
                selected={countryCodeMap[currentLang as keyof typeof countryCodeMap]}
                onSelect={handleCountrySelect}
                countries={Object.values(countryCodeMap)}
                customLabels={localeNames}
                placeholder="Dil Seçin"
                selectButtonClassName="flag-select__btn"
                optionsSize={14}
                selectedSize={14}
                showSelectedLabel={false}
                showOptionLabel={true}
                fullWidth={false}
              />
            </Box>
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
                  <Box 
                    w="full" 
                    mt={4}
                    sx={{
                      '.flag-select': {
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: 'lg',
                        width: '100%'
                      },
                      '.flag-select__btn': {
                        padding: '8px 12px',
                        fontSize: 'sm',
                        fontWeight: 'medium',
                        color: useColorModeValue('gray.700', 'gray.200'),
                        backgroundColor: useColorModeValue('gray.50', 'gray.700'),
                        borderRadius: 'lg',
                        border: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.600'),
                        transition: 'all 0.2s',
                        width: '100%',
                        _hover: {
                          borderColor: useColorModeValue('blue.500', 'blue.300'),
                          boxShadow: 'sm'
                        }
                      },
                      '.flag-select__options': {
                        backgroundColor: useColorModeValue('white', 'gray.800'),
                        border: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.600'),
                        borderRadius: 'lg',
                        boxShadow: 'lg',
                        padding: '0.5rem 0',
                        marginTop: '0.5rem'
                      },
                      '.flag-select__option': {
                        padding: '0.5rem 1rem',
                        fontSize: 'sm',
                        transition: 'all 0.2s',
                        _hover: {
                          backgroundColor: useColorModeValue('blue.50', 'gray.700'),
                          color: useColorModeValue('blue.600', 'blue.200')
                        }
                      },
                      '.flag-select__img': {
                        width: '20px !important',
                        height: '15px !important'
                      }
                    }}
                  >
                    <ReactFlagsSelect
                      selected={countryCodeMap[currentLang as keyof typeof countryCodeMap]}
                      onSelect={handleCountrySelect}
                      countries={Object.values(countryCodeMap)}
                      customLabels={localeNames}
                      placeholder="Dil Seçin"
                      selectButtonClassName="flag-select__btn"
                      optionsSize={14}
                      selectedSize={14}
                      showSelectedLabel={true}
                      showOptionLabel={true}
                      fullWidth={true}
                    />
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
} 