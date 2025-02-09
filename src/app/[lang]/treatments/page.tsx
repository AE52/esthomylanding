'use client'

import React from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
} from '@chakra-ui/react'
import { TreatmentCard } from '@/app/components/TreatmentCard'
import { Treatment, ParsedTreatment } from '@/types'

export default function TreatmentsPage({ params }: { params: { lang: string } }) {
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
          {params.lang === 'tr' ? 'Yükleniyor...' :
           params.lang === 'de' ? 'Wird geladen...' :
           params.lang === 'fr' ? 'Chargement...' :
           params.lang === 'ru' ? 'Загрузка...' :
           params.lang === 'ar' ? 'جار التحميل...' :
           'Loading...'}
        </Text>
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <Text textAlign="center" fontSize="xl" color="red.500">
          {params.lang === 'tr' ? 'Tedaviler yüklenirken bir hata oluştu.' :
           params.lang === 'de' ? 'Beim Laden der Behandlungen ist ein Fehler aufgetreten.' :
           params.lang === 'fr' ? 'Une erreur est survenue lors du chargement des traitements.' :
           params.lang === 'ru' ? 'Произошла ошибка при загрузке процедур.' :
           params.lang === 'ar' ? 'حدث خطأ أثناء تحميل العلاجات.' :
           'An error occurred while loading treatments.'}
        </Text>
      </Container>
    )
  }

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={2} textAlign="center">
          {params.lang === 'tr' ? 'Tedavi Seçenekleri' :
           params.lang === 'de' ? 'Behandlungsmöglichkeiten' :
           params.lang === 'fr' ? 'Options de Traitement' :
           params.lang === 'ru' ? 'Варианты Лечения' :
           params.lang === 'ar' ? 'خيارات العلاج' :
           'Treatment Options'}
        </Heading>
        <Text textAlign="center" mb={10}>
          {params.lang === 'tr' ? 'Türkiye\'nin en iyi sağlık merkezlerinde kaliteli tedavi hizmetleri' :
           params.lang === 'de' ? 'Qualitativ hochwertige Behandlungsdienste in den besten Gesundheitszentren der Türkei' :
           params.lang === 'fr' ? 'Services de traitement de qualité dans les meilleurs centres de santé de Turquie' :
           params.lang === 'ru' ? 'Качественные услуги лечения в лучших медицинских центрах Турции' :
           params.lang === 'ar' ? 'خدمات علاجية عالية الجودة في أفضل المراكز الصحية في تركيا' :
           'Quality treatment services in Turkey\'s best healthcare centers'}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {treatments.map((treatment) => {
            const translation = treatment.translations[params.lang] || treatment.translations.en
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
      </Container>
    </Box>
  )
} 
