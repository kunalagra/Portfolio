'use client'

import React from 'react'
import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  chakra,
} from '@chakra-ui/react'
import { PiCertificate } from 'react-icons/pi'
import { CertificateProps } from '@/types'

export function Certificates({ certificates }: CertificateProps) {
  const formatDate = (date: string | number | Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }).format(new Date(date))
  }

  if (!certificates || certificates.length === 0) {
    return null
  }
  certificates = certificates.sort(
    (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime(),
  )

  return (
    <Stack gap={10} w="100%">
      <Flex alignItems="center" justifyContent="space-between" mb="5">
        <Heading size={{ base: 'xl', md: '2xl' }}>
          <Flex alignItems="center">
            <PiCertificate />
            <Text ml="2">Certificates</Text>
          </Flex>
        </Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 2, md: 4 }}>
        {certificates.map((certificate, index) => (
          <Stack
            key={index}
            w="100%"
            borderWidth="1px"
            borderColor={{ base: 'border.muted', md: 'borderColor' }}
            borderRadius="lg"
            p={5}
            justifyContent="flex-start"
            gap={2}
            bg="bg.surface"
            h="100%"
            _hover={{ bg: 'borderColor' }}
          >
            <Link
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              w="100%"
              borderRadius="lg"
              transition="background 0.3s ease"
              display="block"
              _hover={{ textDecoration: 'none' }}
            >
              <Text
                color="displayColor"
                fontSize={{ base: 'md', md: 'xl' }}
                fontWeight="bold"
                lineClamp={2}
              >
                {certificate.title}
              </Text>
              <Text color="textSecondary" fontSize="sm">
                {certificate.organization}{' '}
                <chakra.span fontSize="xs">•</chakra.span>{' '}
                {formatDate(certificate.issueDate)}
              </Text>
            </Link>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
