import { useState } from 'react'
import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import { projectsData } from '../../assets/data'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react'

const ProjectCardsGrid = ({ projects, query, typeFilter }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
      {projects
        .filter((project) => !typeFilter || project.type.includes(typeFilter))
        .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
        .map((project) => (
          <Cards
            key={project.title}
            imageURL={project.imageUrl}
            title={project.title}
            desc={project.description}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
            tag={project.tags}
          />
        ))}
    </SimpleGrid>
  )
}

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Container>
        <Head>
          <title>Projects | Kunal Agrawal</title>
          <meta name="title" content="Projects | Kunal Agrawal" />
          <meta
            name="description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Projects | Kunal Agrawal" />
          <meta
            property="og:description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
          </Stack>
          <Tabs align="center" variant="soft-rounded" colorScheme="blue" isLazy>
            <TabList
              display={'flex'}
              flexDirection={'row'}
              flexWrap={isMobile ? 'wrap' : 'nowrap'}
            >
              <Tab fontSize={isMobile ? 'sm' : 'md'}>All</Tab>
              <Tab fontSize={isMobile ? 'sm' : 'md'}>Web Development</Tab>
              <Tab fontSize={isMobile ? 'sm' : 'md'}>Machine Learning</Tab>
              <Tab fontSize={isMobile ? 'sm' : 'md'}>Product Teardown</Tab>
              <Tab fontSize={isMobile ? 'sm' : 'md'}>App Development</Tab>
            </TabList>
            <InputGroup mt={5} maxW="400px" align="center">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>

            <Divider mt={4} mb={4} />

            <TabPanels>
              <TabPanel>
                <ProjectCardsGrid projects={projects} query={query} />
              </TabPanel>
              <TabPanel>
                <ProjectCardsGrid
                  projects={projects}
                  query={query}
                  typeFilter="Web"
                />
              </TabPanel>
              <TabPanel>
                <ProjectCardsGrid
                  projects={projects}
                  query={query}
                  typeFilter="ML"
                />
              </TabPanel>
              <TabPanel>
                <ProjectCardsGrid
                  projects={projects}
                  query={query}
                  typeFilter="PM"
                />
              </TabPanel>
              <TabPanel>
                <ProjectCardsGrid
                  projects={projects}
                  query={query}
                  typeFilter="App"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: projectsData.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      ),
    },
  }
}
