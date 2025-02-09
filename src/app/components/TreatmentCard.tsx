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
  id: string | number
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

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
      bg="white"
      shadow="md"
      onClick={handleClick}
      cursor="pointer"
      role="group"
    >
        <Box position="relative" width="100%" height="200px">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </Box>
      <VStack p={6} align="start" spacing={3}>
        <Heading size="md">{truncatedTitle}</Heading>
        <Text color="gray.600" noOfLines={3}>
          {description}
        </Text>
        <HStack spacing={2} width="100%">
          <Button 
            colorScheme="blue" 
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              handleClick()
            }}
            _groupHover={{ bg: 'blue.50' }}
            flex={1}
          >
            Detayları Gör
          </Button>
          <Button 
            colorScheme="green" 
            size="sm"
            onClick={handleAppointment}
            _groupHover={{ bg: 'green.600' }}
            flex={1}
          >
            Randevu Al
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
} 