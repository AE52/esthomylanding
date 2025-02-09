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

type BlogPost = {
  title: string;
  content: string;
  image: string;
  date: string;
}

type BlogPosts = {
  [key: string]: {
    [slug: string]: BlogPost;
  };
}

const sampleBlogPosts: BlogPosts = {
  tr: {
    'turkiyede-saglik-turizmi-2024-rehberi': {
      title: 'Türkiye\'de Sağlık Turizmi: 2024 Rehberi',
      content: `Türkiye, son yıllarda sağlık turizminde dünya çapında önemli bir destinasyon haline geldi. Modern hastaneleri, deneyimli doktorları ve uygun fiyatlarıyla her yıl binlerce hastaya hizmet veriyor.

Neden Türkiye'yi Tercih Etmelisiniz?

1. Yüksek Kaliteli Sağlık Hizmetleri
- JCI akreditasyonlu hastaneler
- Son teknoloji tıbbi ekipmanlar
- Deneyimli ve uzman doktorlar

2. Uygun Fiyatlar
- Avrupa ve Amerika'ya göre %50-70 daha ekonomik
- Kapsamlı tedavi paketleri
- Şeffaf fiyatlandırma politikası

3. Kolay Ulaşım ve Konaklama
- Dünya'nın her yerinden direkt uçuşlar
- Lüks ve konforlu konaklama seçenekleri
- Şehir merkezlerine yakın hastaneler

4. Kişiselleştirilmiş Hizmet
- Çok dilli sağlık personeli
- 7/24 hasta destek hizmetleri
- Özel transfer ve tercümanlık hizmetleri`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: '15 Mart 2024'
    },
    'estetik-operasyonlar-rehberi': {
      title: 'Estetik Operasyonlar: Kapsamlı Rehber',
      content: `Estetik operasyonlar, kişilerin kendilerini daha iyi hissetmelerini sağlayan önemli tıbbi müdahalelerdir. Bu rehberde, en popüler estetik operasyonlar hakkında detaylı bilgiler bulacaksınız.

En Popüler Estetik Operasyonlar:

1. Yüz Estetiği
- Burun estetiği (Rinoplasti)
- Yüz germe
- Göz kapağı estetiği

2. Vücut Estetiği
- Liposuction
- Karın germe
- Meme estetiği

3. Saç Ekimi
- FUE yöntemi
- DHI yöntemi
- Saç mezoterapisi

İyileşme Süreçleri ve Dikkat Edilmesi Gerekenler:
- Operasyon öncesi hazırlık
- İyileşme süreci tavsiyeleri
- Kontrol randevuları`,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      date: '10 Mart 2024'
    },
    'dis-tedavilerinde-son-teknolojiler': {
      title: 'Diş Tedavilerinde Son Teknolojiler',
      content: `Modern diş hekimliği, teknolojinin gelişmesiyle birlikte hastalara daha konforlu ve etkili tedavi seçenekleri sunuyor. İşte diş tedavilerinde kullanılan son teknolojiler:

1. Dijital Diş Hekimliği
- 3D tarama sistemleri
- CAD/CAM teknolojisi
- Dijital röntgen sistemleri

2. İmplant Teknolojileri
- All-on-4 implant sistemi
- Bilgisayar destekli implant planlaması
- Yüksek başarı oranları

3. Estetik Diş Hekimliği
- Dijital gülüş tasarımı
- Porselen lamina veneerler
- Zirkonyum kaplamalar

4. Konforlu Tedavi Yöntemleri
- Ağrısız anestezi sistemleri
- Lazer tedavileri
- Tek seanslık tedaviler`,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
      date: '5 Mart 2024'
    }
  },
  en: {
    'health-tourism-in-turkey-2024-guide': {
      title: 'Health Tourism in Turkey: 2024 Guide',
      content: `Turkey has become a major destination for health tourism in recent years. With its modern hospitals, experienced doctors, and affordable prices, it serves thousands of patients every year.

Why Choose Turkey?

1. High-Quality Healthcare Services
- JCI-accredited hospitals
- State-of-the-art medical equipment
- Experienced and specialist doctors

2. Affordable Prices
- 50-70% more economical compared to Europe and America
- Comprehensive treatment packages
- Transparent pricing policy

3. Easy Access and Accommodation
- Direct flights from around the world
- Luxury and comfortable accommodation options
- Hospitals close to city centers

4. Personalized Service
- Multilingual healthcare staff
- 24/7 patient support services
- Private transfer and interpretation services`,
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561',
      date: 'March 15, 2024'
    },
    'aesthetic-procedures-guide': {
      title: 'Aesthetic Procedures: Complete Guide',
      content: `Aesthetic procedures are important medical interventions that help people feel better about themselves. In this guide, you'll find detailed information about the most popular aesthetic procedures.

Most Popular Aesthetic Procedures:

1. Facial Aesthetics
- Rhinoplasty
- Face lift
- Eyelid surgery

2. Body Aesthetics
- Liposuction
- Tummy tuck
- Breast aesthetics

3. Hair Transplantation
- FUE method
- DHI method
- Hair mesotherapy

Recovery Processes and Important Considerations:
- Pre-operation preparation
- Recovery process recommendations
- Follow-up appointments`,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      date: 'March 10, 2024'
    },
    'latest-technologies-in-dental-treatments': {
      title: 'Latest Technologies in Dental Treatments',
      content: `Modern dentistry offers more comfortable and effective treatment options with the advancement of technology. Here are the latest technologies used in dental treatments:

1. Digital Dentistry
- 3D scanning systems
- CAD/CAM technology
- Digital X-ray systems

2. Implant Technologies
- All-on-4 implant system
- Computer-aided implant planning
- High success rates

3. Aesthetic Dentistry
- Digital smile design
- Porcelain laminate veneers
- Zirconium crowns

4. Comfortable Treatment Methods
- Painless anesthesia systems
- Laser treatments
- Single-session treatments`,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe',
      date: 'March 5, 2024'
    }
  }
} as const

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
  const posts = sampleBlogPosts[params.lang as keyof typeof sampleBlogPosts] || sampleBlogPosts.en
  const post = posts[params.slug as keyof typeof posts] as BlogPost | undefined

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