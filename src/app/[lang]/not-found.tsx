import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Locale } from '@/i18n-config'

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
  }
}

// 404 sayfası bileşeni
export default function NotFound({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = dictionary[lang as keyof typeof dictionary]

  return (
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
  )
} 
