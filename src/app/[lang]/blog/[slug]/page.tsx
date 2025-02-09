'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Icon,
  AspectRatio,
} from '@chakra-ui/react'
import { MdArrowBack, MdDateRange } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'

const blogDetailContent = {
  tr: {
    backToList: 'Blog Listesine Dön',
    date: 'Tarih',
    notFound: 'Blog yazısı bulunamadı.',
  },
  en: {
    backToList: 'Back to Blog List',
    date: 'Date',
    notFound: 'Blog post not found.',
  },
  de: {
    backToList: 'Zurück zur Blog-Liste',
    date: 'Datum',
    notFound: 'Blogbeitrag nicht gefunden.',
  },
  fr: {
    backToList: 'Retour à la Liste du Blog',
    date: 'Date',
    notFound: 'Article de blog introuvable.',
  },
  ru: {
    backToList: 'Вернуться к Списку Блога',
    date: 'Дата',
    notFound: 'Запись блога не найдена.',
  },
  ar: {
    backToList: 'العودة إلى قائمة المدونة',
    date: 'التاريخ',
    notFound: 'لم يتم العثور على مقال المدونة.',
  }
}

export default function BlogDetailPage({ 
  params 
}: { 
  params: { 
    lang: keyof typeof blogDetailContent
    slug: string 
  } 
}) {
  const router = useRouter()
  const content = blogDetailContent[params.lang] || blogDetailContent.en
  const posts = blogPosts[params.lang] || blogPosts.en
  const post = posts[params.slug]

  if (!post) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text textAlign="center" fontSize="xl" color="red.500">
          {content.notFound}
        </Text>
      </Container>
    )
  }

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          {/* Back Button */}
          <Button
            leftIcon={<Icon as={MdArrowBack} />}
            variant="ghost"
            onClick={() => router.push(`/${params.lang}/blog`)}
            alignSelf="flex-start"
          >
            {content.backToList}
          </Button>

          {/* Blog Post Content */}
          <Stack spacing={6}>
            <Heading as="h1" size="2xl">
              {post.title}
            </Heading>

            <Stack direction="row" align="center" color="gray.600">
              <Icon as={MdDateRange} />
              <Text>{content.date}: {post.date}</Text>
            </Stack>

            <AspectRatio ratio={16/9} width="100%" maxH="600px">
              <Box position="relative" width="100%" height="100%">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100vw"
                  priority
                />
              </Box>
            </AspectRatio>

            <Text fontSize="lg" whiteSpace="pre-wrap">
              {post.content}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 