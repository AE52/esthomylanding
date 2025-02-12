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
    details: 'Detaylar',
    benefits: 'Faydalar',
    bookAppointment: 'Randevu Al'
  },
  en: {
    details: 'Details',
    benefits: 'Benefits',
    bookAppointment: 'Book Appointment'
  },
  de: {
    details: 'Details',
    benefits: 'Vorteile',
    bookAppointment: 'Termin Vereinbaren'
  },
  fr: {
    details: 'Détails',
    benefits: 'Avantages',
    bookAppointment: 'Prendre Rendez-vous'
  },
  ru: {
    details: 'Подробности',
    benefits: 'Преимущества',
    bookAppointment: 'Записаться'
  },
  ar: {
    details: 'التفاصيل',
    benefits: 'الفوائد',
    bookAppointment: 'حجز موعد'
  }
}

export default function TreatmentDetail() {
  const router = useRouter()
  const params = useParams()
  const lang = params.lang as keyof typeof breadcrumbText
  const id = params.id as string
  
  const [treatment, setTreatment] = React.useState<Treatment | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const foundTreatment = treatments.find(t => t.id === Number(id))
    if (foundTreatment) {
      setTreatment(foundTreatment)
      setLoading(false)
    } else {
      setLoading(false)
      console.error('Treatment not found')
    }
  }, [id])

  if (loading) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text>Yükleniyor...</Text>
      </Container>
    )
  }

  if (!treatment) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text>Tedavi bulunamadı.</Text>
      </Container>
    )
  }

  const translation = treatment.translations[lang]
  const text = breadcrumbText[lang]
  const labels = detailsText[lang]

  const truncatedTitle = translation.title.split(' ').slice(0, 2).join(' ') + (translation.title.split(' ').length > 2 ? '...' : '')

  const handleNavigate = (path: string) => {
    router.push(path)
  }

  const handleAppointment = () => {
    window.open(`https://client.esthomy.com/appointmentRequest/${id}`, '_blank')
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
              variant="link"
              onClick={() => handleNavigate(`/${lang}`)}
              color="blue.500"
              fontWeight="normal"
            >
              {text.home}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button
              variant="link"
              onClick={() => handleNavigate(`/${lang}/treatments`)}
              color="blue.500"
              fontWeight="normal"
            >
              {text.treatments}
            </Button>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text color="gray.500">{truncatedTitle}</Text>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box
          borderRadius="3xl"
          overflow="hidden"
          bg="white"
          shadow="2xl"
          position="relative"
        >
          <Box 
            height="500px" 
            position="relative"
            overflow="hidden"
          >
            <Image
              src={treatment.image}
              alt={translation.title}
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center top',
                width: '100%',
                height: '100%'
              }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              height="120px"
              bgGradient="linear(to-t, blackAlpha.700, transparent)"
            />
          </Box>
          
          <VStack 
            spacing={8} 
            p={12} 
            align="start"
            bg="white"
          >
            <Heading 
              as="h1" 
              size="2xl" 
              color="blue.800"
              fontWeight="bold"
              lineHeight="shorter"
            >
              {translation.title}
            </Heading>
            
            <Text 
              fontSize="xl" 
              color="gray.600"
              lineHeight="tall"
            >
              {translation.description}
            </Text>

            <Box width="full">
              <Heading 
                as="h2" 
                size="xl" 
                mb={6}
                color="blue.800"
                position="relative"
                _after={{
                  content: '""',
                  width: '50px',
                  height: '3px',
                  bg: 'purple.500',
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0
                }}
              >
                {labels.details}
              </Heading>
              <Text 
                fontSize="lg" 
                color="gray.600"
                whiteSpace="pre-line"
                lineHeight="tall"
              >
                {translation.details}
              </Text>
            </Box>

            {translation.benefits && translation.benefits.length > 0 && (
              <Box width="full">
                <Heading 
                  as="h2" 
                  size="xl" 
                  mb={6}
                  color="blue.800"
                  position="relative"
                  _after={{
                    content: '""',
                    width: '50px',
                    height: '3px',
                    bg: 'purple.500',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0
                  }}
                >
                  {labels.benefits}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  {translation.benefits.map((benefit, index) => (
                    <HStack 
                      key={index} 
                      spacing={4}
                      p={6}
                      bg="blue.50"
                      borderRadius="xl"
                      alignItems="flex-start"
                    >
                      <Box
                        flexShrink={0}
                        bg="purple.500"
                        color="white"
                        p={2}
                        borderRadius="md"
                      >
                        <CheckCircleIcon boxSize={6} />
                      </Box>
                      <Text 
                        fontSize="lg" 
                        color="gray.700"
                        fontWeight="medium"
                      >
                        {benefit}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>
            )}

            <HStack spacing={6} mt={8} width="full" justifyContent="center">
              <Button 
                colorScheme="purple" 
                size="lg"
                onClick={handleAppointment}
                px={12}
                height="60px"
                fontSize="xl"
                borderRadius="xl"
                rightIcon={<span>→</span>}
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
              >
                {labels.bookAppointment}
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </>
  )
} 