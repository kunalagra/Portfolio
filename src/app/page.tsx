import { Stack } from '@chakra-ui/react'
import {
  projectsData,
  bioData,
  certificatesData,
  milestones,
} from '@/assets/data.js'
import {
  AboutMe,
  Milestones,
  FeaturedProjects,
  Certificates,
  ContactMe,
  Introduction,
} from '@/components'

export default async function Page() {
  return (
    <Stack
      as="main"
      gap="144px"
      justifyContent="center"
      alignItems="flex-start"
      px={{ base: '5vw', md: '10vw' }}
      mt={{ base: '15vh', md: '22.5vh' }}
    >
      <Introduction introduction={bioData} />
      <AboutMe />
      <Milestones milestones={milestones} />
      <FeaturedProjects projects={projectsData} />
      <Certificates certificates={certificatesData} />
      <ContactMe introduction={bioData} />
    </Stack>
  )
}
