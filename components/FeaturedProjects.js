import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function FeaturedProjects({ projects }) {
  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="displayColor"
                  fontFamily="Ubuntu"
                >
                  All Creative Works.
                </Heading>
                <NextLink href="/projects" passHref>
                  <Link>
                    <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                      color="button1"
                      _hover={{ color: 'button2' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <NextLink href="/projects">
                <Link>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Cards
              imageURL={projects[0].imageUrl}
              title={projects[0].title}
              desc={projects[0].description}
              githubLink={projects[0].githubLink}
              deployLink={projects[0].deployLink}
              tag={projects[0].tags}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: '-50%' }}>
              <Cards
                imageURL={projects[1].imageUrl}
                title={projects[1].title}
                desc={projects[1].description}
                githubLink={projects[1].githubLink}
                deployLink={projects[1].deployLink}
                tag={projects[1].tags}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              imageURL={projects[2].imageUrl}
              title={projects[2].title}
              desc={projects[2].description}
              githubLink={projects[2].githubLink}
              deployLink={projects[2].deployLink}
              tag={projects[2].tags}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
