'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const contactContent = {
  tr: {
    title: 'İletişim',
    subtitle: 'Sizinle İletişime Geçelim',
    description: 'Sağlık yolculuğunuz için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmak için hazır.',
    form: {
      name: 'Adınız',
      email: 'E-posta Adresiniz',
      phone: 'Telefon Numaranız',
      message: 'Mesajınız',
      submit: 'Gönder',
    },
    contact: {
      address: {
        title: 'Adres',
        value: 'Maslak, Büyükdere Caddesi No:255, İstanbul, Türkiye'
      },
      phone: {
        title: 'Telefon',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'E-posta',
        value: 'info@esthomy.com'
      }
    },
    success: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
    error: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
  },
  en: {
    title: 'Contact',
    subtitle: 'Let\'s Get in Touch',
    description: 'Contact us for your health journey. Our expert team is ready to help you.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone Number',
      message: 'Your Message',
      submit: 'Send',
    },
    contact: {
      address: {
        title: 'Address',
        value: 'Maslak, Buyukdere Street No:255, Istanbul, Turkey'
      },
      phone: {
        title: 'Phone',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'Email',
        value: 'info@esthomy.com'
      }
    },
    success: 'Your message has been sent successfully. We will get back to you soon.',
    error: 'An error occurred while sending your message. Please try again later.'
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Lassen Sie uns in Kontakt treten',
    description: 'Kontaktieren Sie uns für Ihre Gesundheitsreise. Unser Expertenteam steht bereit, Ihnen zu helfen.',
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      phone: 'Ihre Telefonnummer',
      message: 'Ihre Nachricht',
      submit: 'Senden',
    },
    contact: {
      address: {
        title: 'Adresse',
        value: 'Maslak, Büyükdere Straße Nr. 255, Istanbul, Türkei'
      },
      phone: {
        title: 'Telefon',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'E-Mail',
        value: 'info@esthomy.com'
      }
    },
    success: 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.',
    error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
  },
  fr: {
    title: 'Contact',
    subtitle: 'Entrons en Contact',
    description: 'Contactez-nous pour votre parcours de santé. Notre équipe d\'experts est prête à vous aider.',
    form: {
      name: 'Votre Nom',
      email: 'Votre Email',
      phone: 'Votre Numéro de Téléphone',
      message: 'Votre Message',
      submit: 'Envoyer',
    },
    contact: {
      address: {
        title: 'Adresse',
        value: 'Maslak, Avenue Büyükdere N°255, Istanbul, Turquie'
      },
      phone: {
        title: 'Téléphone',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'Email',
        value: 'info@esthomy.com'
      }
    },
    success: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt.',
    error: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.'
  },
  ru: {
    title: 'Контакты',
    subtitle: 'Свяжитесь с Нами',
    description: 'Свяжитесь с нами для вашего путешествия за здоровьем. Наша команда экспертов готова помочь вам.',
    form: {
      name: 'Ваше Имя',
      email: 'Ваш Email',
      phone: 'Ваш Номер Телефона',
      message: 'Ваше Сообщение',
      submit: 'Отправить',
    },
    contact: {
      address: {
        title: 'Адрес',
        value: 'Маслак, Проспект Бююкдере №255, Стамбул, Турция'
      },
      phone: {
        title: 'Телефон',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'Email',
        value: 'info@esthomy.com'
      }
    },
    success: 'Ваше сообщение успешно отправлено. Мы скоро свяжемся с вами.',
    error: 'При отправке вашего сообщения произошла ошибка. Пожалуйста, попробуйте позже.'
  },
  ar: {
    title: 'اتصل بنا',
    subtitle: 'دعنا نتواصل',
    description: 'اتصل بنا لرحلتك الصحية. فريقنا من الخبراء مستعد لمساعدتك.',
    form: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      phone: 'رقم هاتفك',
      message: 'رسالتك',
      submit: 'إرسال',
    },
    contact: {
      address: {
        title: 'العنوان',
        value: 'مسلك، شارع بيوكديري رقم 255، اسطنبول، تركيا'
      },
      phone: {
        title: 'الهاتف',
        value: '+90 (850) 123 45 67'
      },
      email: {
        title: 'البريد الإلكتروني',
        value: 'info@esthomy.com'
      }
    },
    success: 'تم إرسال رسالتك بنجاح. سنعود إليك قريباً.',
    error: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً.'
  }
}

export default function ContactPage({ params }: { params: { lang: keyof typeof contactContent } }) {
  const content = contactContent[params.lang] || contactContent.en
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Burada form verilerini backend'e gönderme işlemi yapılacak
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simüle edilmiş API çağrısı
      
      toast({
        title: content.success,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: content.error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Stack spacing={10}>
          {/* Header */}
          <Stack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl">
              {content.title}
            </Heading>
            <Text fontSize="xl" color="gray.600">
              {content.subtitle}
            </Text>
            <Text color="gray.600">
              {content.description}
            </Text>
          </Stack>

          {/* Contact Info & Form */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Contact Information */}
            <VStack spacing={8} align="start">
              <Box>
                <Stack direction="row" align="center" mb={2}>
                  <Icon as={MdLocationOn} boxSize={6} color="blue.500" />
                  <Heading size="md">{content.contact.address.title}</Heading>
                </Stack>
                <Text>{content.contact.address.value}</Text>
              </Box>

              <Box>
                <Stack direction="row" align="center" mb={2}>
                  <Icon as={MdPhone} boxSize={6} color="blue.500" />
                  <Heading size="md">{content.contact.phone.title}</Heading>
                </Stack>
                <Text>{content.contact.phone.value}</Text>
              </Box>

              <Box>
                <Stack direction="row" align="center" mb={2}>
                  <Icon as={MdEmail} boxSize={6} color="blue.500" />
                  <Heading size="md">{content.contact.email.title}</Heading>
                </Stack>
                <Text>{content.contact.email.value}</Text>
              </Box>
            </VStack>

            {/* Contact Form */}
            <Box as="form" onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>{content.form.name}</FormLabel>
                  <Input type="text" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>{content.form.email}</FormLabel>
                  <Input type="email" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>{content.form.phone}</FormLabel>
                  <Input type="tel" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>{content.form.message}</FormLabel>
                  <Textarea rows={4} />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  isLoading={isSubmitting}
                >
                  {content.form.submit}
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
} 