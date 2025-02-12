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
        colorScheme="purple"
        variant="solid"
        onClick={() => router.back()}
        position="fixed"
        top="80px"
        left="20px"
        zIndex="999"
        borderRadius="full"
        boxShadow="lg"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'xl'
        }}
        transition="all 0.2s"
      >
        {lang === 'tr' ? 'Geri' : 'Back'}
      </Button>
    </Tooltip>
  )
}