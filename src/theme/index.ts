import { extendTheme } from '@chakra-ui/react'

// Renk paletimizi tanımlıyoruz
const colors = {
  brand: {
    // Ana renkler (Armut.com yeşili - daha koyu)
    primary: {
      50: '#e6fff2',
      100: '#b3ffd9',
      200: '#80ffbf',
      300: '#4dff99',
      400: '#1aff66',
      500: '#00cc44', // Ana yeşil rengimiz (daha koyu)
      600: '#00a836',
      700: '#008529',
      800: '#00621e',
      900: '#003311',
    },
    // İkincil renkler (Armut.com mavisi)
    secondary: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#0073e6',
      600: '#005cb3',
      700: '#004280',
      800: '#00284d',
      900: '#000d1a',
    }
  },
  // Gri tonları
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  // Özel renkler
  custom: {
    heroText: '#FFFFFF',
    heroSubtext: 'rgba(255, 255, 255, 0.9)',
  }
}

// Bileşen stilleri
const components = {
  Button: {
    baseStyle: {
      fontWeight: '500',
      borderRadius: 'full',
    },
    variants: {
      solid: {
        bg: 'brand.primary.500',
        color: 'white',
        _hover: {
          bg: 'brand.primary.600',
          _disabled: {
            bg: 'brand.primary.300',
          },
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.primary.500',
        color: 'brand.primary.600',
        _hover: {
          bg: 'brand.primary.50',
          borderColor: 'brand.primary.600',
        },
      },
      ghost: {
        color: 'brand.primary.600',
        _hover: {
          bg: 'brand.primary.50',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      color: 'brand.secondary.800',
    },
    variants: {
      hero: {
        color: 'custom.heroText',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      }
    }
  },
  Text: {
    baseStyle: {
      color: 'gray.700',
    },
    variants: {
      hero: {
        color: 'custom.heroSubtext',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
      }
    }
  },
}

// Genel tema ayarları
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// Tema nesnesini oluştur
const theme = extendTheme({
  colors,
  components,
  config,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
})

export default theme 