'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'

const aboutContent = {
  tr: {
    title: 'Hakkımızda',
    subtitle: 'Sağlık Turizminde Güvenilir Çözüm Ortağınız',
    description: [
      'Esthomy olarak, Türkiye\'nin önde gelen sağlık turizmi platformu olarak hizmet veriyoruz. Misyonumuz, dünyanın dört bir yanından gelen hastalarımıza Türkiye\'nin seçkin sağlık kuruluşlarında en kaliteli tedavi hizmetlerini sunmaktır.',
      'Deneyimli ekibimiz, tedavi sürecinizin başından sonuna kadar size rehberlik eder. Konaklama, ulaşım ve tercümanlık hizmetleri dahil olmak üzere tüm ihtiyaçlarınızı karşılıyoruz.',
      'Türkiye\'nin modern sağlık altyapısı, uzman doktorları ve uygun fiyatları ile sağlığınıza kavuşmanın en iyi adresindeyiz.'
    ],
    features: [
      {
        title: 'Uzman Ekip',
        description: '7/24 hizmet veren profesyonel sağlık danışmanlarımız',
      },
      {
        title: 'Kaliteli Hizmet',
        description: 'JCI akreditasyonlu hastaneler ve uzman doktorlar',
      },
      {
        title: 'Tam Destek',
        description: 'Tedavi sürecinizde A\'dan Z\'ye tam destek',
      }
    ]
  },
  en: {
    title: 'About Us',
    subtitle: 'Your Trusted Partner in Health Tourism',
    description: [
      'As Esthomy, we serve as Turkey\'s leading health tourism platform. Our mission is to provide the highest quality treatment services to our patients from around the world at Turkey\'s distinguished healthcare institutions.',
      'Our experienced team guides you throughout your treatment process. We meet all your needs, including accommodation, transportation, and interpretation services.',
      'With Turkey\'s modern healthcare infrastructure, expert doctors, and affordable prices, we are the best destination for your health journey.'
    ],
    features: [
      {
        title: 'Expert Team',
        description: 'Professional healthcare consultants serving 24/7',
      },
      {
        title: 'Quality Service',
        description: 'JCI-accredited hospitals and specialist doctors',
      },
      {
        title: 'Full Support',
        description: 'Complete support throughout your treatment process',
      }
    ]
  },
  de: {
    title: 'Über Uns',
    subtitle: 'Ihr vertrauenswürdiger Partner im Gesundheitstourismus',
    description: [
      'Als Esthomy sind wir die führende Plattform für Gesundheitstourismus in der Türkei. Unsere Mission ist es, unseren Patienten aus der ganzen Welt die qualitativ hochwertigsten Behandlungen in den renommierten Gesundheitseinrichtungen der Türkei anzubieten.',
      'Unser erfahrenes Team begleitet Sie während des gesamten Behandlungsprozesses. Wir kümmern uns um alle Ihre Bedürfnisse, einschließlich Unterkunft, Transport und Dolmetscherdienste.',
      'Mit der modernen Gesundheitsinfrastruktur der Türkei, erfahrenen Ärzten und günstigen Preisen sind wir die beste Adresse für Ihre Gesundheit.'
    ],
    features: [
      {
        title: 'Expertenteam',
        description: 'Professionelle Gesundheitsberater rund um die Uhr',
      },
      {
        title: 'Qualitätsservice',
        description: 'JCI-akkreditierte Krankenhäuser und Fachärzte',
      },
      {
        title: 'Volle Unterstützung',
        description: 'Komplette Betreuung während Ihres Behandlungsprozesses',
      }
    ]
  },
  fr: {
    title: 'À Propos',
    subtitle: 'Votre Partenaire de Confiance en Tourisme Médical',
    description: [
      'En tant qu\'Esthomy, nous sommes la principale plateforme de tourisme de santé en Turquie. Notre mission est d\'offrir les services de traitement de la plus haute qualité à nos patients du monde entier dans les établissements de santé distingués de Turquie.',
      'Notre équipe expérimentée vous guide tout au long de votre processus de traitement. Nous répondons à tous vos besoins, y compris l\'hébergement, le transport et les services d\'interprétation.',
      'Avec l\'infrastructure de santé moderne de la Turquie, des médecins experts et des prix abordables, nous sommes la meilleure destination pour votre parcours de santé.'
    ],
    features: [
      {
        title: 'Équipe Expert',
        description: 'Consultants en soins de santé professionnels disponibles 24/7',
      },
      {
        title: 'Service de Qualité',
        description: 'Hôpitaux accrédités JCI et médecins spécialistes',
      },
      {
        title: 'Support Complet',
        description: 'Accompagnement complet tout au long de votre traitement',
      }
    ]
  },
  ru: {
    title: 'О Нас',
    subtitle: 'Ваш надежный партнер в медицинском туризме',
    description: [
      'Esthomy - ведущая платформа медицинского туризма в Турции. Наша миссия - предоставить нашим пациентам со всего мира высококачественные услуги лечения в ведущих медицинских учреждениях Турции.',
      'Наша опытная команда сопровождает вас на протяжении всего процесса лечения. Мы обеспечиваем все ваши потребности, включая проживание, транспорт и услуги перевода.',
      'С современной медицинской инфраструктурой Турции, опытными врачами и доступными ценами мы являемся лучшим направлением для вашего здоровья.'
    ],
    features: [
      {
        title: 'Команда Экспертов',
        description: 'Профессиональные медицинские консультанты 24/7',
      },
      {
        title: 'Качественный Сервис',
        description: 'Больницы с аккредитацией JCI и врачи-специалисты',
      },
      {
        title: 'Полная Поддержка',
        description: 'Полное сопровождение в течение всего процесса лечения',
      }
    ]
  },
  ar: {
    title: 'من نحن',
    subtitle: 'شريكك الموثوق في السياحة الصحية',
    description: [
      'نحن في Esthomy المنصة الرائدة للسياحة الصحية في تركيا. مهمتنا هي تقديم أعلى جودة من خدمات العلاج لمرضانا من جميع أنحاء العالم في المؤسسات الصحية المتميزة في تركيا.',
      'يرشدك فريقنا ذو الخبرة طوال عملية العلاج. نلبي جميع احتياجاتك، بما في ذلك الإقامة والنقل وخدمات الترجمة.',
      'مع البنية التحتية الصحية الحديثة في تركيا، والأطباء الخبراء، والأسعار المعقولة، نحن الوجهة الأفضل لرحلتك الصحية.'
    ],
    features: [
      {
        title: 'فريق متخصص',
        description: 'مستشارون صحيون محترفون يعملون على مدار الساعة',
      },
      {
        title: 'خدمة عالية الجودة',
        description: 'مستشفيات معتمدة من JCI وأطباء متخصصون',
      },
      {
        title: 'دعم كامل',
        description: 'دعم شامل طوال عملية العلاج',
      }
    ]
  }
}

export default function AboutPage({ params }: { params: { lang: keyof typeof aboutContent } }) {
  const content = aboutContent[params.lang] || aboutContent.en

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Stack spacing={10}>
          {/* Hero Section */}
          <Stack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl">
              {content.title}
            </Heading>
            <Text fontSize="xl" color="gray.600">
              {content.subtitle}
            </Text>
          </Stack>

          {/* Main Content */}
          <Stack spacing={8} direction={{ base: 'column', lg: 'row' }} align="center">
            <Box flex={1}>
              <Stack spacing={6}>
                {content.description.map((paragraph, index) => (
                  <Text key={index} fontSize="lg">
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </Box>
            <Box flex={1}>
              <Image
                src="/images/about-hero.jpg"
                alt="About Esthomy"
                borderRadius="lg"
                objectFit="cover"
                w="full"
                h="400px"
              />
            </Box>
          </Stack>

          {/* Features */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} pt={10}>
            {content.features.map((feature, index) => (
              <Box key={index} p={6} borderRadius="lg" borderWidth="1px">
                <Heading size="md" mb={4}>
                  {feature.title}
                </Heading>
                <Text color="gray.600">
                  {feature.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
} 