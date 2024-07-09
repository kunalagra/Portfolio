import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
  Image,
  Wrap,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaJs,
  FaCode,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa6'
import {
  SiNextdotjs,
  SiChakraui,
  SiFlask,
  SiMongodb,
  SiOpenai,
  SiDjango,
  SiKotlin,
  SiFirebase,
  SiJetpackcompose,
  SiGooglesheets,
  SiJupyter,
  SiPlotly,
  SiProducthunt,
  SiHugo,
  SiMarkdown,
  SiJitsi,
  SiTensorflow,
} from 'react-icons/si'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { FaChartLine, FaMagnifyingGlassChart, FaNodeJs  } from 'react-icons/fa6'

// import useMediaQuery from '../hook/useMediaQuery'

// import Image from './ChakraNextImage'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Product') {
      values[0] = 'pink'
      values[1] = SiProducthunt
    } else if (tag == 'Flask') {
      values[0] = 'teal'
      values[1] = SiFlask
    } else if (tag == 'gspread') {
      values[0] = 'teal'
      values[1] = SiGooglesheets
    } else if (tag == 'OpenAI') {
      values[0] = 'blue'
      values[1] = SiOpenai
    } else if (tag == 'MongoDB') {
      values[0] = 'green'
      values[1] = SiMongodb
    } else if (tag == 'Node.js') {
      values[0] = 'teal'
      values[1] = FaNodeJs
    } else if (tag == 'React Mative') {
      values[0] = 'blue'
      values[1] = SiReact 
    } else if (tag == 'Django') {
      values[0] = 'red'
      values[1] = SiDjango
    } else if (tag == 'Firebase') {
      values[0] = 'yellow'
      values[1] = SiFirebase
    } else if (tag == 'Kotlin') {
      values[0] = 'red'
      values[1] = SiKotlin
    } else if (tag == 'Jetpack') {
      values[0] = 'orange'
      values[1] = SiJetpackcompose
    } else if (tag == 'Tensorflow') {
      values[0] = 'red'
      values[1] = SiTensorflow
    } else if (tag == 'Jupyter') {
      values[0] = 'orange'
      values[1] = SiJupyter
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'Hugo') {
      values[0] = 'purple'
      values[1] = SiHugo
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if (tag == 'Jitsi') {
      values[0] = 'blue'
      values[1] = SiJitsi
    } else if (tag == 'Growth') {
      values[0] = 'red'
      values[1] = FaChartLine
    } else if (tag == 'Analysis') {
      values[0] = 'purple'
      values[1] = FaMagnifyingGlassChart
    } else if (['Linear Regression', 'OpenCV', 'LSTM'].includes(tag)) {
      values[0] = 'blue'
      values[1] = GiArtificialIntelligence
    } else if (['Matplotlib', 'Analysis', 'Chart.js'].includes(tag)) {
      values[0] = 'pink'
      values[1] = SiPlotly
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if (tag == 'Next.js') {
      values[0] = 'gray'
      values[1] = SiNextdotjs
    } else if (tag == 'Markdown') {
      values[0] = 'gray'
      values[1] = SiMarkdown
    } else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isDesktop = useBreakpointValue({ base: false, md: true })

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isDesktop ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      // minH="320px"
      // maxH="560px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <Link href={deployLink} isExternal>
        <ScaleFade in={true} transition={{ duration: 1 }}>
          <Image
            // width={1250}
            // height={600}
            w="100%"
            // h="auto"
            src={imageURL}
            transition="0.3s"
            borderRadius="10px 10px 0px 0px"
            alt="project image"
            d="inline-block"
          ></Image>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link href={githubLink} color="white" isExternal>
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link href={deployLink} color="white" isExternal>
                    <FaArrowUpRightFromSquare
                      aria-label="project link"
                      size={20}
                    />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Wrap>{Tags}</Wrap>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
