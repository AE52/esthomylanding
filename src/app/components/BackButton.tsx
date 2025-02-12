'use client'

import React from 'react'
import { IconButton, Tooltip, Button } from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  lang: string
}

export function BackButton({ lang }: BackButtonProps) {
  const router = useRouter()

  const tooltipText = {
    tr: 'Geri Dön',
    en: 'Go Back',
    de: 'Zurück',
    fr: 'Retour',
    ru: 'Назад',
    ar: 'رجوع'
  }

  return (
    <Tooltip 
      label={tooltipText[lang as keyof typeof tooltipText]} 
      placement="right"
    >
      <Button
        leftIcon={<FaArrowLeft />}
        variant="outline"
        onClick={() => router.back()}
        position="fixed"
        top="100px"
        left="40px"
        zIndex="999"
        boxShadow="xl"
        px={6}
        py={4}
        fontSize="md"
        bg="white"
        borderWidth="2px"
        _hover={{
          transform: 'translateY(-2px) scale(1.02)',
          boxShadow: '2xl',
          bg: 'brand.primary.50',
          borderColor: 'brand.primary.300'
        }}
        _active={{
          transform: 'translateY(0)',
          bg: 'brand.primary.100'
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {lang === 'tr' ? 'Geri Dön' : 'Go Back'}
      </Button>
    </Tooltip>
  )
}