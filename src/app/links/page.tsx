import React from 'react'
import {
  Icon,
  Stack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Link,
} from '@chakra-ui/react'

import {
  FaFilePdf,
  FaHackerrank,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMastodon,
  FaGitlab,
} from 'react-icons/fa6'
import { links as linksData } from '@/assets/data'
import { SiLeetcode, SiCodechef } from 'react-icons/si'
import { FaFile } from 'react-icons/fa'
import { LinkInfo } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Find me on various platforms',
  openGraph: {
    title: 'Links | Kunal Agrawal',
    description: 'Find me on various platforms',
  },
}

const icons: { [key: string]: React.ElementType } = {
  Linkedin: FaLinkedin,
  Github: FaGithub,
  Mastodon: FaMastodon,
  Email: FaEnvelope,
  Phone: FaPhone,
  LeetCode: SiLeetcode,
  Gitlab: FaGitlab,
  CodeChef: SiCodechef,
  Resume: FaFilePdf,
  HackerRank: FaHackerrank,
}

export default function LinksPage() {
  const links: LinkInfo[] = linksData

  return (
    <>
      <Stack
        gap={10}
        justifyContent="center"
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '15vh' }}
        mb={{ base: '15vh', md: '5vh' }}
      >
        <Stack gap={5}>
          {' '}
          <Heading
            textAlign="center"
            mx="auto"
            color="displayColor"
            fontSize={{ base: '4xl', md: '4xl' }}
          >
            Connect with me
          </Heading>
          <HStack mt={{ base: 8, md: 12 }} justifyContent="center" gap={4}>
            {' '}
            {links.slice(0, 6).map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: 'none' }}
                title={link.name}
              >
                <Icon
                  _hover={{ color: '#999' }}
                  color="displayColor"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  aria-label={link.name}
                >
                  {React.createElement(icons[link.name] || FaFile)}
                </Icon>
              </Link>
            ))}
          </HStack>
        </Stack>

        <SimpleGrid mt={4} columns={1} gap={{ base: 2, md: 3 }}>
          {links.slice(6).map((link, index) => (
            <VStack
              key={link.name || index} // Use unique key
              alignItems="center"
              _hover={{ bg: 'borderColor' }}
              borderWidth="1px" // Use borderWidth
              borderColor={{ base: 'border.muted', md: 'borderColor' }}
              borderRadius="lg" // Match parent Link
              p={4}
              justifyContent="center"
              gap={2}
              bg="bg.surface"
              maxW="550px"
              mx="auto"
              w="full"
              asChild
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: 'none' }}
                borderRadius="lg"
                transition="background 0.3s ease"
              >
                <HStack>
                  {' '}
                  <Icon
                    color="displayColor"
                    fontSize={{ base: 'md', md: 'lg' }}
                  >
                    {React.createElement(icons[link.name] || FaFile)}
                  </Icon>
                  <Text
                    color="displayColor"
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="bold"
                  >
                    {link.name}
                  </Text>
                </HStack>
              </Link>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}
