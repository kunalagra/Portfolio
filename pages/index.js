import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import Certificate from '../components/Certificates'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Milestones from '../components/Timeline'
import {
  projectsData,
  bioData,
  certificatesData,
  milestones,
} from '../assets/data'

export default function Index() {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Kunal Agrawal - Software Engineer</title>
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction introduction={bioData} />
          <AboutMe />
          <Milestones milestones={milestones} />
          <FeaturedProjects projects={projectsData} />
          <Certificate
            certificates={certificatesData.sort(
              (a, b) => new Date(b.issueDate) - new Date(a.issueDate),
            )}
          />
          <ContactMe contactMe={bioData} />
        </Stack>
      </Container>
    </>
  )
}
