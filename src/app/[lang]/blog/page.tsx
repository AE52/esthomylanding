'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'

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

export default function BlogPage({ params }: { params: { lang: keyof typeof blogContent } }) {
  const content = blogContent[params.lang] || blogContent.en
  const posts = blogPosts[params.lang] || blogPosts.en

  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" mb={16}>
        <Heading as="h1" size="2xl" mb={4}>
          {content.title}
        </Heading>
        <Text fontSize="xl">
          {content.subtitle}
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {Object.entries(posts).map(([slug, post]) => (
          <LinkBox 
            key={slug} 
            as="article" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition="all 0.2s"
          >
            <AspectRatio ratio={16/9}>
              <Box position="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            </AspectRatio>

            <Stack p={6} spacing={3}>
              <Heading as="h3" size="md">
                <LinkOverlay as={Link} href={`/${params.lang}/blog/${slug}`}>
                  {post.title}
                </LinkOverlay>
              </Heading>
              <Text color="gray.600" noOfLines={3}>
                {post.content.split('\n\n')[0]}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {post.date}
              </Text>
            </Stack>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  )
} 