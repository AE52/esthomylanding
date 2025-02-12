"use client"

import { Button, Container, Heading, Text, VStack, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

// Basit bir dictionary objesi oluşturuyoruz
const dictionary = {
  tr: {
    title: "Sayfa Bulunamadı",
    description: "Aradığınız sayfa bulunamadı veya taşınmış olabilir.",
    backHome: "Ana Sayfaya Dön"
  },
  en: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home"
  },
  de: {
    title: "Seite nicht gefunden",
    description: "Die gesuchte Seite wurde nicht gefunden oder wurde verschoben.",
    backHome: "Zur Startseite"
  },
  fr: {
    title: "Page non trouvée",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil"
  },
  ru: {
    title: "Страница не найдена",
    description: "Запрашиваемая страница не найдена или была перемещена.",
    backHome: "На главную"
  },
  ar: {
    title: "الصفحة غير موجودة",
    description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    backHome: "العودة إلى الصفحة الرئيسية"
  }
}

// 404 sayfası bileşeni
export default function NotFound() {
  // URL'den dil parametresini al
  const params = useParams()
  const lang = params?.lang as string || 'tr'
  const dict = dictionary[lang as keyof typeof dictionary] || dictionary.tr

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box flex="1">
        <Container maxW="container.xl" py={20}>
          <VStack spacing={8} align="center" justify="center" minH="60vh">
            {/* Büyük 404 yazısı */}
            <Heading 
              size="4xl" 
              bgGradient="linear(to-r, brand.primary.500, brand.secondary.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              404
            </Heading>

            {/* Ana başlık */}
            <Heading size="xl" textAlign="center" color="gray.700">
              {dict.title}
            </Heading>

            {/* Açıklama metni */}
            <Text fontSize="lg" textAlign="center" color="gray.600" maxW="600px">
              {dict.description}
            </Text>

            {/* Ana sayfaya dön butonu */}
            <Link href={`/${lang}`} passHref>
              <Button
                size="lg"
                colorScheme="brand.primary"
                variant="solid"
              >
                {dict.backHome}
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  )
} 