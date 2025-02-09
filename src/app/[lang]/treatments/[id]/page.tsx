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
} from '@chakra-ui/react'
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter, useParams } from 'next/navigation'
import { Treatment, ParsedTreatment } from '@/types'

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
  
  const [treatment, setTreatment] = React.useState<ParsedTreatment | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatments/${id}`)
        if (!res.ok) throw new Error('Failed to fetch treatment')
        const data: Treatment = await res.json()
        
        const parsedTreatment: ParsedTreatment = {
          ...data,
          translations: JSON.parse(data.translations)
        }
        
        setTreatment(parsedTreatment)
      } catch (error) {
        console.error('Error fetching treatment:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTreatment()
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
    <Container maxW="container.xl" py={10}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        mb={8}
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
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        shadow="xl"
      >
        <Image
          src={treatment.imageUrl}
          alt={translation.title}
          width="100%"
          height="400px"
          objectFit="cover"
        />
        
        <VStack spacing={6} p={8} align="start">
          <Heading as="h1" size="2xl">
            {translation.title}
          </Heading>
          
          <Text fontSize="xl" color="gray.600">
            {translation.description}
          </Text>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              {labels.details}
            </Heading>
            <Text>
              {translation.details}
            </Text>
          </Box>

          {translation.benefits && translation.benefits.length > 0 && (
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                {labels.benefits}
              </Heading>
              <List spacing={3}>
                {translation.benefits.map((benefit, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {benefit}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          <HStack spacing={4} mt={4}>
            <Button 
              colorScheme="blue" 
              size="lg"
              onClick={handleAppointment}
            >
              {labels.bookAppointment}
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
} 