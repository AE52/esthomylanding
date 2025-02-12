'use client'

import React from 'react'
import { IconButton, Box } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  // Scroll pozisyonunu kontrol et
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Yukarı kaydır
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Box
      position="fixed"
      bottom="80px"
      right="20px"
      zIndex={999}
      onClick={scrollToTop}
    >
      {isVisible && (
        <IconButton
          aria-label="Yukarı kaydır"
          icon={<FaArrowUp />}
          colorScheme="purple"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          _hover={{
            transform: 'translateY(-4px)',
            boxShadow: 'xl'
          }}
          transition="all 0.2s"
        />
      )}
    </Box>
  )
} 