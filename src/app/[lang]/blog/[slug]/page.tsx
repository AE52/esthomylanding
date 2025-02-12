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
  Button,
  IconButton,
  OrderedList,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useParams, useRouter } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import type { BlogPost } from '@/data/blog'
import { FaCalendar, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { BackButton } from '@/app/components/BackButton'
import { ScrollToTop } from '@/app/components/ScrollToTop'

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
  const router = useRouter()
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

  const handleNavigate = (path: string) => {
    router.push(path)
  }

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
          bg="rgba(0,0,0,0.4)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="container.xl">
            <VStack spacing={4} color="white" textAlign="center">
              <Heading as="h1" size="2xl" variant="hero">
                {translation.title}
              </Heading>
              <HStack spacing={2} color="custom.heroSubtext">
                <Icon as={FaCalendar} />
                <Text>{new Date(currentPost.date).toLocaleDateString(lang)}</Text>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Breadcrumb */}
      <Container maxW="container.xl" py={8}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb={8}
          fontSize="sm"
        >
          <BreadcrumbItem>
            <Button
              variant="ghost"
              onClick={() => handleNavigate(`/${lang}`)}
              color="brand.primary.500"
              fontWeight="normal"
            >
              {pageContent.breadcrumb.home}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button
              variant="ghost"
              onClick={() => handleNavigate(`/${lang}/blog`)}
              color="brand.primary.500"
              fontWeight="normal"
            >
              {pageContent.breadcrumb.blog}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text color="gray.500">{translation.title}</Text>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <Box 
          bg="white" 
          borderRadius="xl" 
          p={{ base: 6, md: 12 }}
          boxShadow="xl"
          fontSize="lg"
          lineHeight="tall"
          maxW="4xl"
          mx="auto"
          className="blog-content"
        >
          {/* Meta Bilgileri */}
          <VStack spacing={6} align="start" mb={10}>
            <HStack 
              spacing={4} 
              color="gray.600"
              fontSize="md"
              divider={<Text color="gray.400">•</Text>}
            >
              <HStack spacing={2}>
                <Icon as={FaCalendar} />
                <Text>
                  {new Date(currentPost.date).toLocaleDateString(lang, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Text>
              </HStack>
              {currentPost.category && (
                <Text>{currentPost.category}</Text>
              )}
            </HStack>

            <Heading 
              as="h1" 
              size="2xl" 
              color="gray.800"
              lineHeight="1.2"
              fontWeight="bold"
            >
              {translation.title}
            </Heading>

            <Text 
              fontSize="xl" 
              color="gray.600"
              fontWeight="medium"
            >
              {translation.excerpt}
            </Text>
          </VStack>

          {/* İçerik */}
          <Box
            className="prose prose-lg max-w-none"
            sx={{
              'h2, h3, h4': {
                color: 'gray.800',
                fontWeight: 'bold',
                mt: 8,
                mb: 4,
              },
              'h2': {
                fontSize: '2xl',
                borderBottom: '2px solid',
                borderColor: 'gray.200',
                pb: 2,
              },
              'h3': {
                fontSize: 'xl',
              },
              'p': {
                my: 4,
                lineHeight: 'tall',
                color: 'gray.700',
              },
              'ul, ol': {
                my: 4,
                pl: 6,
              },
              'li': {
                my: 2,
                color: 'gray.700',
              },
              'strong': {
                color: 'gray.800',
                fontWeight: 'semibold',
              },
              'blockquote': {
                borderLeft: '4px solid',
                borderColor: 'brand.primary.500',
                pl: 4,
                py: 2,
                my: 4,
                bg: 'gray.50',
                color: 'gray.700',
                fontStyle: 'italic',
              },
            }}
          >
            {translation.content.split('\n\n').map((paragraph, index) => {
              // Başlık kontrolü
              if (paragraph.startsWith('#')) {
                const headingMatch = paragraph.match(/^#+/);
                if (headingMatch) {
                  const level = Math.min(headingMatch[0].length, 6); // h1-h6 arası sınırlama
                  const text = paragraph.replace(/^#+\s/, '');
                  const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
                  const headingTag = headingTags[level - 1];
                  return (
                    <Heading
                      key={index}
                      as={headingTag}
                      size={level === 1 ? "2xl" : level === 2 ? "xl" : "lg"}
                      mt={8}
                      mb={4}
                    >
                      {text}
                    </Heading>
                  );
                }
              }
              
              // Liste kontrolü
              if (paragraph.startsWith('-') || paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n');
                const isOrdered = items[0].match(/^\d+\./);
                
                return isOrdered ? (
                  <OrderedList key={index} spacing={2} mt={4} mb={6}>
                    {items.map((item, i) => (
                      <ListItem key={i}>{item.replace(/^\d+\.\s/, '')}</ListItem>
                    ))}
                  </OrderedList>
                ) : (
                  <UnorderedList key={index} spacing={2} mt={4} mb={6}>
                    {items.map((item, i) => (
                      <ListItem key={i}>{item.replace(/^-\s/, '')}</ListItem>
                    ))}
                  </UnorderedList>
                );
              }

              // Normal paragraf
              return (
                <Text key={index} mb={4}>
                  {paragraph}
                </Text>
              );
            })}
          </Box>

          {/* Paylaşım Butonları */}
          <HStack spacing={4} mt={12} pt={6} borderTop="1px" borderColor="gray.200">
            <Text color="gray.600" fontWeight="medium">
              {lang === 'tr' ? 'Paylaş:' : 
               lang === 'en' ? 'Share:' :
               lang === 'de' ? 'Teilen:' :
               lang === 'fr' ? 'Partager:' :
               lang === 'ru' ? 'Поделиться:' :
               lang === 'ar' ? 'مشاركة:' : 'Share:'}
            </Text>
            <IconButton
              aria-label="Share on Twitter"
              icon={<Icon as={FaTwitter} />}
              colorScheme="twitter"
              variant="ghost"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(translation.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
            />
            <IconButton
              aria-label="Share on Facebook"
              icon={<Icon as={FaFacebook} />}
              colorScheme="facebook"
              variant="ghost"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
            />
            <IconButton
              aria-label="Share on LinkedIn"
              icon={<Icon as={FaLinkedin} />}
              colorScheme="linkedin"
              variant="ghost"
              onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(translation.title)}`, '_blank')}
            />
          </HStack>
        </Box>
      </Container>
    </>
  )
} 