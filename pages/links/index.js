import { React } from 'react'
import {
  Icon,
  Stack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  Link,
} from '@chakra-ui/react'

import Container from '../../components/Container'
import Head from 'next/head'
import {
  FaFileLines,
  FaHackerrank,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMastodon,
  FaGitlab,
} from 'react-icons/fa6'
import { links } from '../../assets/data'
import { SiLeetcode, SiCodechef } from 'react-icons/si'

export default function Projects({ links }) {
  const icons = {
    Linkedin: FaLinkedin,
    Github: FaGithub,
    Mastodon: FaMastodon,
    Email: FaEnvelope,
    Phone: FaPhone,
    LeetCode: SiLeetcode,
    Gitlab: FaGitlab,
    CodeChef: SiCodechef,
    Resume: FaFileLines,
    HackerRank: FaHackerrank,
  }
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      <Container centerContent>
        <Head>
          <title>Links | Kunal Agrawal</title>
          <meta name="title" content="Links | Kunal Agrawal" />
          <meta
            name="description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Links | Kunal Agrawal" />
          <meta
            property="og:description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          mt={['15vh', '15vh', '15vh', '15vh']}
          mb={['15vh', '15vh', '5vh', '5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading
              textAlign="center"
              mx="auto"
              color="displayColor"
              fontSize={{ base: '4xl', md: '4xl' }}
            >
              Connect with me
            </Heading>
            <HStack mt={{ base: 8, md: 12 }} justifyContent="center">
              {links.slice(0, 6).map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  _hover={{ textDecoration: 'none' }}
                  _focus={{ outline: 'none' }}
                  isExternal
                >
                  <Text
                    color="displayColor"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={icons[link.name]}
                      style={{ marginRight: '8px' }}
                    />{' '}
                  </Text>
                </Link>
              ))}
            </HStack>
          </Stack>

          <SimpleGrid mt={4} columns="1" spacing={{ base: 2, md: 3 }}>
            {links.slice(6).map((link, index) => (
              <Link
                href={link.url}
                _hover={{ textDecoration: 'none' }}
                _focus={{ outline: 'none' }}
                key={index}
                isExternal
              >
                <VStack
                  alignItems="center"
                  _hover={{ bg: '#111' }}
                  transition="0.3s"
                  border="1px"
                  borderColor={{ base: '#333', md: 'borderColor' }}
                  borderRadius="10px"
                  p={4}
                  justifyContent="center"
                  space={2}
                  bg="#141414"
                  maxWidth="550px"
                  mx="auto"
                >
                  <Text
                    color="displayColor"
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="bold"
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon
                      as={icons[link.name]}
                      style={{ marginRight: '8px' }}
                    />{' '}
                    {link.name}
                  </Text>
                </VStack>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      links: links,
    },
  }
}
