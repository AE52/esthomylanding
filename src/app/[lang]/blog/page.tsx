'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image as ChakraImage,
  Stack,
  LinkBox,
  LinkOverlay,
  AspectRatio,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const blogContent = {
  tr: {
    title: 'Blog',
    subtitle: 'Sağlık Turizmi Hakkında Güncel Bilgiler',
    readMore: 'Devamını Oku',
  },
  en: {
    title: 'Blog',
    subtitle: 'Latest Updates About Health Tourism',
    readMore: 'Read More',
  },
  de: {
    title: 'Blog',
    subtitle: 'Aktuelle Informationen zum Gesundheitstourismus',
    readMore: 'Weiterlesen',
  },
  fr: {
    title: 'Blog',
    subtitle: 'Dernières Actualités sur le Tourisme de Santé',
    readMore: 'Lire la Suite',
  },
  ru: {
    title: 'Блог',
    subtitle: 'Последние Новости о Медицинском Туризме',
    readMore: 'Читать Далее',
  },
  ar: {
    title: 'المدونة',
    subtitle: 'آخر التحديثات حول السياحة الصحية',
    readMore: 'اقرأ المزيد',
  }
}

// Örnek blog gönderileri
const samplePosts = {
  tr: [
    {
      id: 1,
      slug: 'turkiyede-saglik-turizmi-2024-rehberi',
      title: 'Türkiye\'de Sağlık Turizmi: 2024 Rehberi',
      excerpt: 'Türkiye\'nin sağlık turizmindeki yeri ve önemi, sunduğu avantajlar ve tedavi seçenekleri hakkında kapsamlı bir rehber.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 Mart 2024'
    },
    {
      id: 2,
      slug: 'estetik-operasyonlar-rehberi',
      title: 'Estetik Operasyonlar: Kapsamlı Rehber',
      excerpt: 'En popüler estetik operasyonlar, maliyetler, iyileşme süreçleri ve dikkat edilmesi gerekenler hakkında detaylı bilgiler.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      date: '10 Mart 2024'
    },
    {
      id: 3,
      slug: 'dis-tedavilerinde-son-teknolojiler',
      title: 'Diş Tedavilerinde Son Teknolojiler',
      excerpt: 'Modern diş tedavilerinde kullanılan son teknolojiler, dijital diş hekimliği ve tedavi süreçleri hakkında bilgiler.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
      date: '5 Mart 2024'
    }
  ],
  en: [
    {
      id: 1,
      slug: 'health-tourism-in-turkey-2024-guide',
      title: 'Health Tourism in Turkey: 2024 Guide',
      excerpt: 'A comprehensive guide about Turkey\'s place and importance in health tourism, its advantages, and treatment options.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      slug: 'aesthetic-procedures-guide',
      title: 'Aesthetic Procedures: Complete Guide',
      excerpt: 'Detailed information about the most popular aesthetic procedures, costs, recovery processes, and important considerations.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      date: 'March 10, 2024'
    },
    {
      id: 3,
      slug: 'latest-technologies-in-dental-treatments',
      title: 'Latest Technologies in Dental Treatments',
      excerpt: 'Information about the latest technologies used in modern dental treatments, digital dentistry, and treatment processes.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
      date: 'March 5, 2024'
    }
  ],
 
} as const

export default function BlogPage({ params }: { params: { lang: keyof typeof blogContent } }) {
  const content = blogContent[params.lang] || blogContent.en
  const posts = samplePosts[params.lang as keyof typeof samplePosts] || samplePosts.en

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Stack spacing={10}>
          {/* Header */}
          <Stack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl">
              {content.title}
            </Heading>
            <Text fontSize="xl" color="gray.600">
              {content.subtitle}
            </Text>
          </Stack>

          {/* Blog Posts Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {posts.map((post) => (
              <LinkBox
                key={post.id}
                as="article"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                transition="all 0.2s"
                height="full"
                display="flex"
                flexDirection="column"
              >
                <AspectRatio ratio={16/9}>
                  <Box position="relative" width="100%" height="100%">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                </AspectRatio>
                <Box p={6} flex="1" display="flex" flexDirection="column">
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {post.date}
                  </Text>
                  <Heading size="md" mb={2}>
                    <LinkOverlay as={Link} href={`/${params.lang}/blog/${post.slug}`}>
                      {post.title}
                    </LinkOverlay>
                  </Heading>
                  <Text color="gray.600" noOfLines={3} mb={4}>
                    {post.excerpt}
                  </Text>
                  <Text
                    color="blue.500"
                    fontWeight="semibold"
                    _hover={{ color: 'blue.600' }}
                    mt="auto"
                  >
                    {content.readMore} →
                  </Text>
                </Box>
              </LinkBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
} 