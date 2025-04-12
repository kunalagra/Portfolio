'use client'

import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Cards } from '@/components'
import { ProjectsClientUIProps } from '@/types'

export function FeaturedProjects({ projects }: ProjectsClientUIProps) {
  if (!projects || projects.length < 3) {
    console.error(
      "FeaturedProjects requires at least 3 projects in the 'projects' array.",
    )
    return null
  }

  return (
    <>
      <Stack gap={8} w="full">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
          {' '}
          <Stack gap={1}>
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                color="displayColor"
              >
                All Creative Works.
              </Heading>
              <Link
                asChild
                display={{ base: 'block', md: 'none' }}
                fontSize={{ base: 'sm', md: 'xl' }}
                color="button1"
                _hover={{ color: 'button2' }}
              >
                <NextLink href="/projects" passHref>
                  {' '}
                  Explore more →
                </NextLink>
              </Link>
            </Flex>{' '}
            <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
              Here&apos;s some of my projects that I have worked on.
            </Text>
            <Link
              asChild
              display={{ base: 'none', md: 'block' }}
              fontSize={{ base: 'md', md: 'xl' }}
              _hover={{ color: 'button1' }}
            >
              <NextLink href="/projects">Explore more →</NextLink>
            </Link>
          </Stack>
          <Cards
            imageUrl={projects[0].imageUrl}
            title={projects[0].title}
            description={projects[0].description}
            githubLink={projects[0].githubLink}
            deployLink={projects[0].deployLink}
            tags={projects[0].tags}
          />
          <Box mt={{ md: '-50%' }}>
            <Cards
              imageUrl={projects[1].imageUrl}
              title={projects[1].title}
              description={projects[1].description}
              githubLink={projects[1].githubLink}
              deployLink={projects[1].deployLink}
              tags={projects[1].tags}
            />
          </Box>
          <Cards
            imageUrl={projects[2].imageUrl}
            title={projects[2].title}
            description={projects[2].description}
            githubLink={projects[2].githubLink}
            deployLink={projects[2].deployLink}
            tags={projects[2].tags}
          />
        </SimpleGrid>{' '}
      </Stack>
    </>
  )
}
