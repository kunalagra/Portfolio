import {
  Link,
  Button,
  chakra,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope, FaFileLines } from 'react-icons/fa6'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import useMediaQuery from '../hook/useMediaQuery'

export default function ContactMe({ contactMe }) {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <Stack spacing={10} w="100%" alignItems="center" justifyContent="center">
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4} mb="20">
            <Link href={contactMe.linkedin} isExternal>
              <Button
                leftIcon={<FaLinkedin fill="#439afe" />}
                position="static"
                size={isDesktop ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href={contactMe.mailto} isExternal>
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#439afe" />}
                transition="0.3s"
                position="static"
                size={isDesktop ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
            <Link href={contactMe.resume} isExternal>
              <Button
                leftIcon={<FaFileLines fill="#439afe" />}
                position="static"
                size={isDesktop ? 'md' : 'sm'}
                color="white"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
