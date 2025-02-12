'use client'

import React from 'react'
import {
  Box,
  Text,
  VStack,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import Image from 'next/image'

interface TreatmentCardProps {
  id: number
  title: string
  description: string
  image: string
}

export function TreatmentCard({ id, title, description, image }: TreatmentCardProps) {
  const params = useParams()
  const router = useRouter()
  const lang = params.lang

  // Başlığı ilk iki kelimeye sınırla
  const truncatedTitle = title.split(' ').slice(0, 2).join(' ') + (title.split(' ').length > 2 ? '...' : '')

  const handleClick = () => {
    router.push(`/${lang}/treatments/${id}`)
  }

  const handleAppointment = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(`https://client.esthomy.com/appointmentRequest/${id}`, '_blank')
  }

  // Buton metinleri için dil desteği
  const buttonText = {
    tr: { details: 'Detayları Gör', appointment: 'Randevu Al' },
    en: { details: 'View Details', appointment: 'Book Now' },
    de: { details: 'Details Sehen', appointment: 'Termin Vereinbaren' },
    fr: { details: 'Voir les Détails', appointment: 'Prendre Rendez-vous' },
    ru: { details: 'Подробности', appointment: 'Записаться' },
    ar: { details: 'عرض التفاصيل', appointment: 'حجز موعد' }
  }

  return (
    <Box
      width="100%"
      height="500px"
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{ 
        transform: 'translateY(-5px)',
        shadow: 'xl',
      }}
      bg="white"
      shadow="lg"
      position="relative"
      onClick={handleClick}
      cursor="pointer"
      role="group"
      display="flex"
      flexDirection="column"
    >
      <Box 
        position="relative" 
        width="100%" 
        height="300px" 
        flexShrink={0}
        overflow="hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
          className="group-hover:scale-105"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="80px"
          bgGradient="linear(to-t, blackAlpha.600, transparent)"
        />
      </Box>
      
      <VStack 
        p={6} 
        align="start" 
        spacing={4} 
        flex={1}
        justify="space-between"
        width="100%"
        bg="white"
      >
        <VStack align="start" spacing={3} width="100%">
          <Heading 
            size="lg" 
            noOfLines={2}
            color="blue.800"
            fontWeight="semibold"
          >
            {truncatedTitle}
          </Heading>
          <Text 
            color="gray.600" 
            noOfLines={3}
            fontSize="md"
            lineHeight="tall"
          >
            {description}
          </Text>
        </VStack>
        
        <HStack spacing={3} width="100%">
          <Button 
            colorScheme="blue" 
            size="md"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              handleClick()
            }}
            _hover={{ 
              bg: 'blue.50',
              transform: 'scale(1.02)'
            }}
            flex={1}
            borderRadius="lg"
          >
            {buttonText[lang as keyof typeof buttonText]?.details || 'View Details'}
          </Button>
          <Button 
            colorScheme="purple" 
            size="md"
            onClick={handleAppointment}
            _hover={{ 
              bg: 'purple.600',
              transform: 'scale(1.02)'
            }}
            flex={1}
            borderRadius="lg"
            rightIcon={<span>→</span>}
          >
            {buttonText[lang as keyof typeof buttonText]?.appointment || 'Book Now'}
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
} 