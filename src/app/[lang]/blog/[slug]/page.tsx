'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useParams } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import type { BlogPost } from '@/data/blog'
import { FaCalendar } from 'react-icons/fa'
import Link from 'next/link'
import { ScrollToTop } from '@/app/components/ScrollToTop'
import { BackButton } from '@/app/components/BackButton'

// Dil bazlı içerik
const content = {
  tr: {
    breadcrumb: {
      home: 'Ana Sayfa',
      blog: 'Blog'
    },
    notFound: 'Blog yazısı bulunamadı.'
  },
  en: {
    breadcrumb: {
      home: 'Home',
      blog: 'Blog'
    },
    notFound: 'Blog post not found.'
  },
  de: {
    breadcrumb: {
      home: 'Startseite',
      blog: 'Blog'
    },
    notFound: 'Blogbeitrag nicht gefunden.'
  },
  fr: {
    breadcrumb: {
      home: 'Accueil',
      blog: 'Blog'
    },
    notFound: 'Article de blog introuvable.'
  },
  ru: {
    breadcrumb: {
      home: 'Главная',
      blog: 'Блог'
    },
    notFound: 'Запись блога не найдена.'
  },
  ar: {
    breadcrumb: {
      home: 'الرئيسية',
      blog: 'المدونة'
    },
    notFound: 'لم يتم العثور على المقال.'
  }
}

export default function BlogPost() {
  const params = useParams()
  const lang = (params?.lang as keyof typeof content) || 'en'
  const slug = params?.slug as string
  const pageContent = content[lang] || content.en

  // Slug'a göre blog yazısını bul
  const currentPost: BlogPost | undefined = blogPosts.find(post => post.slugs[lang] === slug)

  if (!currentPost) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text>{pageContent.notFound}</Text>
      </Container>
    )
  }

  const translation = currentPost.translations[lang] || currentPost.translations.en

  return (
    <>
      <BackButton lang={lang} />
      <ScrollToTop />
      
      {/* Hero Section */}
      <Box position="relative" h="400px">
        <Image
          src={currentPost.image}
          alt={translation.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0,0,0,0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="container.xl">
            <VStack spacing={4} color="white" textAlign="center">
              <Heading as="h1" size="2xl">
                {translation.title}
              </Heading>
              <HStack spacing={2}>
                <Icon as={FaCalendar} />
                <Text>{new Date(currentPost.date).toLocaleDateString(lang)}</Text>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Breadcrumb */}
      <Container maxW="container.xl" py={4}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={`/${lang}`}>
              {pageContent.breadcrumb.home}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={`/${lang}/blog`}>
              {pageContent.breadcrumb.blog}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Text>{translation.title}</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      {/* İçerik */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Text fontSize="xl" color="gray.600">
            {translation.excerpt}
          </Text>
          <Box>
            {translation.content.split('\n\n').map((paragraph: string, index: number) => (
              <Text key={index} mb={4}>
                {paragraph}
              </Text>
            ))}
          </Box>
        </VStack>
      </Container>
    </>
  )
} 