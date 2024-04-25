import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileLines } from 'react-icons/fa6'

export default function Introduction({ introduction }) {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there!, I'm-
            </Text>
          </Box>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            {introduction.name}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              Software Engineer.
            </Box>{' '}
            A self-taught developer{' '}
            {isDesktop
              ? 'with an\ninterest in Computer Science.'
              : 'with an interest in Computer Science.'}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            {'🚀'} {'Exploring opportunities and side projects.'}
            <br />
            {/* <Stack isInline spacing={1}>
              <Box>{introduction[1].fields.emoji}</Box>
              <Box>
                {introduction[1].fields.description}{' '}
                {introduction[1].fields.companyUrl ? (
                  <Link
                    isExternal
                    rel="noreferrer"
                    href={introduction[1].fields.companyUrl}
                    onClick={() => handleClick('Introduction_companyUrl')}
                  >
                    {introduction[1].fields.company}
                  </Link>
                ) : (
                  <Box as="span" color="button1">{introduction[1].fields.company}</Box>
                )}
                .
              </Box>
            </Stack> */}
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href={introduction.github} isExternal>
              <Button
                leftIcon={<FaGithub color="#439afe" />}
                position="static"
                size={isDesktop ? 'md' : 'sm'}
                color="white"
              >
                Github
              </Button>
            </Link>
            <Link href={introduction.linkedin} isExternal>
              <Button
                leftIcon={<FaLinkedin color="#439afe" />}
                position="static"
                size={isDesktop ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            {/* <Link href={introduction.mailto} isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#439afe" />}
                transition="0.3s"
                position="static"
                size={isDesktop ? 'md' : 'sm'}
                color="white"
              >
                Email
              </Button>
            </Link> */}
            <Link href={introduction.resume} isExternal>
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
        </SlideFade>
      </Stack>
    </>
  )
}
