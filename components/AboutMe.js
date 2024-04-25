import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useBreakpointValue,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function AboutMe() {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isDesktop ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span color="button1" cursor="help">
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="button1" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Kunal Agrawal, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really liked to build stuff using{' '}
              <MoreInfo
                text="no-code tools"
                content="I built a  website using blogspot back in primary school."
              />
              back in 2016, and from that, I explored how to code myself,
              fast-forward to today, I do programming in various languages and
              technologies, and participate in Hackathons like
              <MoreInfo
                text="Solving for India"
                content="Hackathon conducted by GFG, Google & AMD. Reached Regionals (50/500+ teams) with MediCall App."
              />
              &{' '}
              <MoreInfo
                text="Project Deep Blue"
                content="Hackathon conducted by Mastek. Reached Semifinals with SumUp App."
              />
              <br />
              I'm interested in building something awesome with code and
              automate tasks with code, currently focused on
              <MoreInfo
                text="Web  Development,"
                content="Building Web and Mobile Applications using Javascript Frameworks (React, Node and Next.js)"
              />
              <MoreInfo
                text="Open Source"
                content="I am passionate about open source and their impact on the internet today."
              />
              and
              <MoreInfo
                text="Competitive Programming"
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
              />
              <br />
              <br />
              Outside of coding, I enjoy cycling, watching shows, or reading
              books.
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="/photo.jpg"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius="50%"
                alt="Kunal Agrawal"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
