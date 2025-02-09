'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Input,
  Button,
  useToast,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL

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

const newsletterContent = {
  tr: {
    title: 'Bültenimize Abone Olun',
    placeholder: 'E-posta adresiniz',
    button: 'Abone Ol',
    success: 'Bültene başarıyla abone oldunuz!',
    error: 'Bir hata oluştu, lütfen tekrar deneyin.',
  },
  en: {
    title: 'Subscribe to Our Newsletter',
    placeholder: 'Your email',
    button: 'Subscribe',
    success: 'Successfully subscribed to the newsletter!',
    error: 'An error occurred, please try again.',
  },
  de: {
    title: 'Newsletter abonnieren',
    placeholder: 'Ihre E-Mail',
    button: 'Abonnieren',
    success: 'Newsletter erfolgreich abonniert!',
    error: 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.',
  },
  fr: {
    title: 'Abonnez-vous à notre newsletter',
    placeholder: 'Votre e-mail',
    button: "S'abonner",
    success: 'Abonnement à la newsletter réussi !',
    error: 'Une erreur est survenue, veuillez réessayer.',
  },
  ru: {
    title: 'Подпишитесь на нашу рассылку',
    placeholder: 'Ваш email',
    button: 'Подписаться',
    success: 'Вы успешно подписались на рассылку!',
    error: 'Произошла ошибка, попробуйте еще раз.',
  },
  ar: {
    title: 'اشترك في نشرتنا الإخبارية',
    placeholder: 'بريدك الإلكتروني',
    button: 'اشترك',
    success: 'تم الاشتراك في النشرة الإخبارية بنجاح!',
    error: 'حدث خطأ، يرجى المحاولة مرة أخرى.',
  },
}

export function Footer() {
  const params = useParams()
  const currentLang = (params?.lang as keyof typeof footerContent) || 'en'
  const content = footerContent[currentLang] || footerContent.en
  const newsletter = newsletterContent[currentLang] || newsletterContent.en
  
  const bg = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [userCountry, setUserCountry] = useState('')

  useEffect(() => {
    // Tarayıcı konum bilgisini al
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setUserCountry(data.country_name)
      })
      .catch(err => {
        console.error('Konum bilgisi alınamadı:', err)
      })
  }, [])

  const subscribeToNewsletter = async (email: string, country: string) => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          country,
          language: currentLang,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          userAgent: navigator.userAgent,
        })
      })

      const data = await response.json()
      
      if (response.ok) {
        toast({
          title: newsletter.success,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setEmail('')
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast({
        title: newsletter.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      subscribeToNewsletter(email, userCountry)
    }
  }

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

          <VStack align={currentLang === 'ar' ? 'flex-end' : 'flex-start'} spacing={4}>
            <Text fontWeight="bold">
              {newsletter.title}
            </Text>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Stack spacing={2} width="100%">
                <Input
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
                />
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={loading}
                  width="100%"
                >
                  {newsletter.button}
                </Button>
              </Stack>
            </form>
          </VStack>
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