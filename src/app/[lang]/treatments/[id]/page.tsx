'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  VStack,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  SimpleGrid,
} from '@chakra-ui/react'
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter, useParams } from 'next/navigation'
import { Treatment } from '@/data/treatments'
import { treatments } from '@/data/treatments'
import { FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import { ScrollToTop } from '@/app/components/ScrollToTop'
import { BackButton } from '@/app/components/BackButton'

const breadcrumbText = {
  tr: {
    home: 'Ana Sayfa',
    treatments: 'Tedaviler',
  },
  en: {
    home: 'Home',
    treatments: 'Treatments',
  },
  de: {
    home: 'Startseite',
    treatments: 'Behandlungen',
  },
  fr: {
    home: 'Accueil',
    treatments: 'Traitements',
  },
  ru: {
    home: 'Главная',
    treatments: 'Процедуры',
  },
  ar: {
    home: 'الرئيسية',
    treatments: 'العلاجات',
  },
}

const detailsText = {
  tr: {
    home: 'Ana Sayfa',
    treatments: 'Tedaviler',
    details: 'Detaylar',
    benefits: 'Faydalar',
    bookAppointment: 'Randevu Al'
  },
  en: {
    home: 'Home',
    treatments: 'Treatments',
    details: 'Details',
    benefits: 'Benefits',
    bookAppointment: 'Book Appointment'
  },
  de: {
    home: 'Startseite',
    treatments: 'Behandlungen',
    details: 'Details',
    benefits: 'Vorteile',
    bookAppointment: 'Termin Vereinbaren'
  },
  fr: {
    home: 'Accueil',
    treatments: 'Traitements',
    details: 'Détails',
    benefits: 'Avantages',
    bookAppointment: 'Prendre Rendez-vous'
  },
  ru: {
    home: 'Главная',
    treatments: 'Процедуры',
    details: 'Подробности',
    benefits: 'Преимущества',
    bookAppointment: 'Записаться'
  },
  ar: {
    home: 'الرئيسية',
    treatments: 'العلاجات',
    details: 'التفاصيل',
    benefits: 'الفوائد',
    bookAppointment: 'حجز موعد'
  }
}

export default function TreatmentDetail() {
  const router = useRouter()
  const params = useParams()
  const lang = (params?.lang as keyof typeof detailsText) || 'en'
  const id = params?.id as string
  const text = detailsText[lang] || detailsText.en

  // ID'ye göre tedaviyi bul
  const treatment = treatments.find(t => t.id.toString() === id)
  if (!treatment) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text>Treatment not found.</Text>
      </Container>
    )
  }

  const translation = treatment.translations[lang] || treatment.translations.en
  const truncatedTitle = translation.title.length > 50 
    ? translation.title.substring(0, 47) + '...' 
    : translation.title

  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <Box position="fixed" top="80px" left={4} zIndex={999}>
        <BackButton lang={lang} />
      </Box>
      
      <Box position="fixed" bottom="80px" right={4} zIndex={999}>
        <ScrollToTop />
      </Box>
      
      <Container maxW="container.xl" py={10} mt={24}>
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
              {text.home}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button
              variant="ghost"
              onClick={() => handleNavigate(`/${lang}/treatments`)}
              color="brand.primary.500"
              fontWeight="normal"
            >
              {text.treatments}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text color="gray.500">{truncatedTitle}</Text>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box bg="white" borderRadius="xl" overflow="hidden" boxShadow="xl">
          {/* Hero Image */}
          <Box position="relative" h="400px">
            <Image
              src={treatment.image}
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
              <VStack spacing={4} color="white" textAlign="center" px={4}>
                <Heading as="h1" size="2xl" variant="hero">
                  {translation.title}
                </Heading>
              </VStack>
            </Box>
          </Box>

          {/* Content */}
          <Box p={8}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
              {/* Details Section */}
              <Box>
                <Heading as="h2" size="lg" mb={6} color="brand.secondary.700">
                  {text.details}
                </Heading>
                <Text whiteSpace="pre-wrap" fontSize="lg">
                  {translation.description}
                </Text>
              </Box>

              {/* Benefits Section */}
              <Box>
                <Heading as="h2" size="lg" mb={6} color="brand.secondary.700">
                  {text.benefits}
                </Heading>
                <List spacing={4}>
                  {translation.benefits.map((benefit, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={CheckCircleIcon} color="brand.primary.500" boxSize={5} />
                      <Text fontSize="lg">{benefit}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SimpleGrid>

            {/* CTA Button */}
            <Box mt={12} textAlign="center">
              <Button
                size="lg"
                variant="solid"
                leftIcon={<FaCheckCircle />}
                onClick={() => handleNavigate(`/${lang}/contact`)}
                px={12}
                py={7}
              >
                {text.bookAppointment}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
} 