'use client'

import { useState } from 'react'
import { Cards } from '@/components'
import { Box, Tabs, Stack, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { ProjectsClientUIProps } from '@/types'

const ProjectCardsGrid = ({ projects }: ProjectsClientUIProps) => {
  if (!projects || projects.length === 0) {
    return (
      <Text textAlign="center" color="fg.muted" mt={4}>
        No projects match your search or filter.
      </Text>
    )
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
      {projects.map((project) => (
        <Cards
          key={project.id || project.title}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          deployLink={project.deployLink}
          tags={project.tags}
        />
      ))}
    </SimpleGrid>
  )
}

export function ProjectsClientUI({ projects }: ProjectsClientUIProps) {
  const [query] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(e.target.value)
  // }
  const tabs = [
    { label: 'All', value: 'all', typeFilter: undefined },
    { label: 'Web Development', value: 'web', typeFilter: 'Web' },
    { label: 'Machine Learning', value: 'ml', typeFilter: 'ML' },
    { label: 'Product Teardown', value: 'pm', typeFilter: 'PM' },
    { label: 'App Development', value: 'app', typeFilter: 'App' },
  ]

  // Filter projects based on current tab and search query
  const currentTypeFilter = tabs.find(
    (tab) => tab.value === activeTab,
  )?.typeFilter
  const filteredProjects = projects
    .filter(
      (project) =>
        !currentTypeFilter || project.type?.includes(currentTypeFilter),
    )
    .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <Stack
      gap={10}
      justifyContent="center"
      // Consider removing px/my here if the parent Container handles it
      px={{ base: '5vw', md: '10vw' }}
      my={{ base: '15vh', md: '22.5vh' }}
      w="full"
    >
      <Stack gap={5}>
        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
          Projects
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="textSecondary">
          I love building projects and practice my engineering skills,
          here&apos;s an archive of things that I&apos;ve worked on.
        </Text>
      </Stack>
      <Tabs.Root
        variant="subtle"
        colorPalette="blue"
        lazyMount
        value={activeTab}
        onValueChange={(details) => setActiveTab(details.value ?? 'all')}
        w="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* <InputGroup
          mt={5}
          maxW="400px"
          mx="auto"
          endElement={<FaMagnifyingGlass />}
        >
          <Input
            type="text"
            placeholder="Search projects"
            value={query}
            onChange={handleChange}
            pr="10"
            borderRadius="full"
          />
        </InputGroup> */}
        <Tabs.List display="flex" flexWrap="wrap" justifyContent="center">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              fontSize={{ base: 'sm', md: 'md' }}
              borderRadius="full"
              m="1"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Box mt={6}>
          {' '}
          <ProjectCardsGrid projects={filteredProjects} />
        </Box>
      </Tabs.Root>
    </Stack>
  )
}
