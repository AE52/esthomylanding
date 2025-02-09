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

const treatments = {
  tr: [
    {
      id: 'dental-implant',
      title: 'Dental İmplant',
      description: 'Kalıcı diş çözümü: İmplant tedavisi ile doğal gülüşlere kavuşun.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'Diş Beyazlatma',
      description: 'İstanbul\'da profesyonel diş beyazlatma ile ışıldayan gülüşler.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'Dental Kuron',
      description: 'Diş kuronları ile dişlerinizi güçlendirin ve güzelleştirin.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'Alın Botoksu',
      description: 'Alın çizgilerinden botoks ile kurtulun.',
      image: '/images/botox.jpg'
    }
  ],
  en: [
    {
      id: 'dental-implant',
      title: 'Dental Implant',
      description: 'Permanent tooth solution: Get natural smiles with implant treatment.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening in Istanbul for radiant smiles.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'Dental Crown',
      description: 'Strengthen and beautify your teeth with dental crowns.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'Forehead Botox',
      description: 'Get rid of forehead lines with botox.',
      image: '/images/botox.jpg'
    }
  ],
  de: [
    {
      id: 'dental-implant',
      title: 'Zahnimplantat',
      description: 'Dauerhafte Zahnlösung: Natürliches Lächeln durch Implantatbehandlung.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'Zahnaufhellung',
      description: 'Professionelle Zahnaufhellung in Istanbul für strahlende Lächeln.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'Zahnkrone',
      description: 'Stärken und verschönern Sie Ihre Zähne mit Zahnkronen.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'Stirn-Botox',
      description: 'Beseitigen Sie Stirnfalten mit Botox.',
      image: '/images/botox.jpg'
    }
  ],
  fr: [
    {
      id: 'dental-implant',
      title: 'Implant Dentaire',
      description: 'Solution dentaire permanente : Retrouvez un sourire naturel avec le traitement par implant.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'Blanchiment des Dents',
      description: 'Blanchiment professionnel des dents à Istanbul pour des sourires éclatants.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'Couronne Dentaire',
      description: 'Renforcez et embellissez vos dents avec des couronnes dentaires.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'Botox du Front',
      description: 'Éliminez les rides du front avec le botox.',
      image: '/images/botox.jpg'
    }
  ],
  ru: [
    {
      id: 'dental-implant',
      title: 'Зубной Имплант',
      description: 'Постоянное решение: Получите естественную улыбку с помощью имплантации.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'Отбеливание Зубов',
      description: 'Профессиональное отбеливание зубов в Стамбуле для сияющей улыбки.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'Зубная Коронка',
      description: 'Укрепите и украсьте свои зубы с помощью зубных коронок.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'Ботокс для Лба',
      description: 'Избавьтесь от морщин на лбу с помощью ботокса.',
      image: '/images/botox.jpg'
    }
  ],
  ar: [
    {
      id: 'dental-implant',
      title: 'زراعة الأسنان',
      description: 'حل دائم للأسنان: احصل على ابتسامة طبيعية مع علاج الزراعة.',
      image: '/images/dental-implant.jpg'
    },
    {
      id: 'teeth-whitening',
      title: 'تبييض الأسنان',
      description: 'تبييض الأسنان المهني في اسطنبول للحصول على ابتسامة مشرقة.',
      image: '/images/teeth-whitening.jpg'
    },
    {
      id: 'dental-crown',
      title: 'تيجان الأسنان',
      description: 'قوي وجمل أسنانك مع تيجان الأسنان.',
      image: '/images/dental-crown.jpg'
    },
    {
      id: 'botox',
      title: 'بوتكس الجبين',
      description: 'تخلص من خطوط الجبين مع البوتكس.',
      image: '/images/botox.jpg'
    }
  ]
} as const

export default function TreatmentsPage({ params }: { params: { lang: keyof typeof treatments } }) {
  const currentTreatments = treatments[params.lang] || treatments.en

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={2} textAlign="center">
          {params.lang === 'tr' ? 'Tedavilerimiz' :
           params.lang === 'de' ? 'Unsere Behandlungen' :
           params.lang === 'fr' ? 'Nos Traitements' :
           params.lang === 'ru' ? 'Наши Процедуры' :
           params.lang === 'ar' ? 'علاجاتنا' :
           'Our Treatments'}
        </Heading>
        <Text textAlign="center" mb={10}>
          {params.lang === 'tr' ? 'Modern diş hekimliği hizmetleri ile yanınızdayız' :
           params.lang === 'de' ? 'Wir sind an Ihrer Seite mit modernen zahnmedizinischen Dienstleistungen' :
           params.lang === 'fr' ? 'Nous sommes à vos côtés avec des services dentaires modernes' :
           params.lang === 'ru' ? 'Мы рядом с вами с современными стоматологическими услугами' :
           params.lang === 'ar' ? 'نحن بجانبك مع خدمات طب الأسنان الحديثة' :
           'We are by your side with modern dental services'}
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {currentTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              id={treatment.id}
              title={treatment.title}
              description={treatment.description}
              image={treatment.image}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
} 
