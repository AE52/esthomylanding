'use client'

import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { TreatmentCard } from '../components/TreatmentCard'
import { Treatment, ParsedTreatment } from '@/types'
import { useParams } from 'next/navigation'

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

  const [treatments, setTreatments] = React.useState<ParsedTreatment[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatments`)
        if (!res.ok) throw new Error('Failed to fetch treatments')
        const data: Treatment[] = await res.json()
        
        // Parse JSON strings in translations
        const parsedTreatments: ParsedTreatment[] = data.map(treatment => ({
          ...treatment,
          translations: JSON.parse(treatment.translations)
        }))
        
        setTreatments(parsedTreatments)
      } catch (error) {
        console.error('Error fetching treatments:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchTreatments()
  }, [])

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
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" mb={16}>
        <Heading as="h1" size="2xl" mb={4}>
          {text.title}
        </Heading>
        <Text fontSize="xl" mb={8}>
          {text.subtitle}
        </Text>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          {text.sectionTitle}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {treatments.map((treatment) => {
            const translation = treatment.translations[lang] || treatment.translations.en
            return (
              <TreatmentCard
                key={treatment.id}
                id={treatment.id}
                title={translation?.title || ''}
                description={translation?.description || ''}
                image={treatment.imageUrl}
              />
            )
          })}
        </SimpleGrid>
      </Box>
    </Container>
  )
} 