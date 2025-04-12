import { Stack } from '@chakra-ui/react'
import { projects, bioData, certificates, milestones } from '@/assets/data'
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
      <FeaturedProjects projects={projects} />
      <Certificates certificates={certificates} />
      <ContactMe introduction={bioData} />
    </Stack>
  )
}
