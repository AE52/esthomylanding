'use client'

import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, Button } from '@chakra-ui/react'
import { TreatmentCard } from '../components/TreatmentCard'
import { Treatment, ParsedTreatment } from '@/types'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { treatments } from '@/data/treatments'
import { blogPosts } from '@/data/blog'

const welcomeText = {
  tr: {
    title: 'Esthomy\'ye Hoş Geldiniz',
    subtitle: 'Türkiye\'nin önde gelen sağlık turizmi platformu',
    sectionTitle: 'Tedavi Seçenekleri',
    loading: 'Yükleniyor...',
    error: 'Tedaviler yüklenirken bir hata oluştu.'
  },
  en: {
    title: 'Welcome to Esthomy',
    subtitle: 'Turkey\'s leading health tourism platform',
    sectionTitle: 'Treatment Options',
    loading: 'Loading...',
    error: 'An error occurred while loading treatments.'
  },
  de: {
    title: 'Willkommen bei Esthomy',
    subtitle: 'Die führende Plattform für Gesundheitstourismus in der Türkei',
    sectionTitle: 'Behandlungsmöglichkeiten',
    loading: 'Wird geladen...',
    error: 'Beim Laden der Behandlungen ist ein Fehler aufgetreten.'
  },
  fr: {
    title: 'Bienvenue sur Esthomy',
    subtitle: 'La principale plateforme de tourisme de santé en Turquie',
    sectionTitle: 'Options de Traitement',
    loading: 'Chargement...',
    error: 'Une erreur est survenue lors du chargement des traitements.'
  },
  ru: {
    title: 'Добро пожаловать в Esthomy',
    subtitle: 'Ведущая платформа медицинского туризма в Турции',
    sectionTitle: 'Варианты Лечения',
    loading: 'Загрузка...',
    error: 'Произошла ошибка при загрузке процедур.'
  },
  ar: {
    title: 'مرحباً بكم في Esthomy',
    subtitle: 'المنصة الرائدة للسياحة الصحية في تركيا',
    sectionTitle: 'خيارات العلاج',
    loading: 'جار التحميل...',
    error: 'حدث خطأ أثناء تحميل العلاجات.'
  }
}

export default function Home() {
  const params = useParams()
  const lang = (params?.lang as keyof typeof welcomeText) || 'en'
  const text = welcomeText[lang] || welcomeText.en
  const router = useRouter()

  // Mock datayı direkt kullanacağız, API çağrısına gerek yok
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  // treatments verisi artık direkt mock datadan geliyor
  const parsedTreatments = treatments.map(treatment => ({
    ...treatment,
    translations: treatment.translations
  }))

  // Blog verilerini hazırlama
  const latestBlogs = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  if (loading) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text textAlign="center" fontSize="xl">
          {text.loading}
        </Text>
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text textAlign="center" fontSize="xl" color="red.500">
          {text.error}
        </Text>
      </Container>
    )
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        bg="white"
        color="gray.800"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center">
            <Heading 
              as="h1" 
              size="2xl" 
              fontWeight="bold"
              color="gray.800"
            >
              {text.title}
            </Heading>
            <Text 
              fontSize="xl" 
              maxW="2xl" 
              color="gray.600"
            >
              {text.subtitle}
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Tedavi Kartları Bölümü */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={16}>
          <Box textAlign="center">
            <Heading 
              as="h2" 
              size="xl" 
              mb={4}
              position="relative"
              _after={{
                content: '""',
                width: '60px',
                height: '3px',
                bg: 'brand.primary.500',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {text.sectionTitle}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              {params.lang === 'tr' 
                ? 'En son teknolojilerle donatılmış merkezlerimizde siz değerli hastalarımıza özel çözümler sunuyoruz'
                : 'We offer special solutions for our valued patients in our centers equipped with the latest technologies'}
            </Text>
          </Box>

          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={10}
            w="full"
          >
            {parsedTreatments.map((treatment) => {
              const translation = treatment.translations[lang] || treatment.translations.en
              return (
                <TreatmentCard
                  key={treatment.id}
                  id={treatment.id}
                  title={translation?.title || ''}
                  description={translation?.description || ''}
                  image={treatment.image}
                />
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Blog Bölümü */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading 
              as="h2" 
              size="xl"
              position="relative"
              _after={{
                content: '""',
                width: '60px',
                height: '3px',
                bg: 'brand.primary.500',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {params.lang === 'tr' ? 'Son Blog Yazıları' : 
               params.lang === 'en' ? 'Latest Blog Posts' :
               params.lang === 'de' ? 'Neueste Blogbeiträge' :
               params.lang === 'fr' ? 'Derniers articles de blog' :
               params.lang === 'ru' ? 'Последние записи в блоге' :
               params.lang === 'ar' ? 'أحدث المقالات' : 'Latest Posts'}
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {latestBlogs.map((post) => {
                const translation = post.translations[lang] || post.translations.en
                return (
                  <Box
                    key={post.id}
                    as="article"
                    bg="white"
                    borderRadius="2xl"
                    overflow="hidden"
                    shadow="lg"
                    _hover={{ transform: 'translateY(-5px)' }}
                    transition="transform 0.3s"
                    onClick={() => router.push(`/${lang}/blog/${post.slugs[lang]}`)}
                    cursor="pointer"
                    role="group"
                    position="relative"
                  >
                    <Box h="250px" position="relative">
                      <Image
                        src={post.image}
                        alt={translation.title}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        loading="lazy"
                      />
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                        h="100px"
                      />
                    </Box>
                    <VStack p={6} spacing={4} align="start" h="300px">
                      <Box>
                        <Text 
                          fontSize="sm" 
                          color="brand.primary.500" 
                          fontWeight="semibold"
                          mb={2}
                          display="flex"
                          alignItems="center"
                          gap={2}
                        >
                          {post.category && (
                            <>
                              <Text as="span">{post.category}</Text>
                              <Text as="span" color="gray.400">•</Text>
                            </>
                          )}
                          <Text as="time" dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </Text>
                        </Text>
                        <Heading 
                          as="h3" 
                          size="md" 
                          color="gray.800"
                          _groupHover={{ color: 'brand.primary.500' }}
                          transition="color 0.2s"
                          mb={3}
                          noOfLines={2}
                        >
                          {translation.title}
                        </Heading>
                        <Text 
                          noOfLines={4} 
                          color="gray.600"
                          fontSize="md"
                          lineHeight="tall"
                        >
                          {translation.excerpt}
                        </Text>
                      </Box>
                      
                      <Box mt="auto">
                        <Text 
                          color="brand.primary.500"
                          fontWeight="medium"
                          fontSize="sm"
                          _groupHover={{ textDecoration: 'underline' }}
                          display="flex"
                          alignItems="center"
                          gap={1}
                        >
                          {lang === 'tr' ? 'Devamını Oku' :
                           lang === 'en' ? 'Read More' :
                           lang === 'de' ? 'Weiterlesen' :
                           lang === 'fr' ? 'Lire la suite' :
                           lang === 'ru' ? 'Читать далее' :
                           lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                           <Text as="span" aria-hidden="true">→</Text>
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                )
              })}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
} 