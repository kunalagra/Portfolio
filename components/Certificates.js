import { Heading } from '@chakra-ui/layout'
import { PiCertificate } from 'react-icons/pi'
import {
  Image,
  Box,
  Flex,
  Link,
  Stack,
  Text,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import dateFormat from 'dateformat'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import NextLink from 'next/link'

export default function Certificate({ certificates }) {
  return (
    <Stack
      spacing={10}
      w="100%"
      display={certificates.length < 2 ? 'none' : 'block'}
    >
      <SlideUpWhenVisible>
        <Flex alignItems="center" justifyContent="space-between" mb="5">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily="Ubuntu">
            <Box display="flex" alignItems="center">
              <PiCertificate />
              <Text marginLeft="2">Certificates</Text>
            </Box>
          </Heading>
        </Flex>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {certificates.map((certificate) => (
          <SlideUpWhenVisible key={certificate.id}>
            <Link
              href={certificate.link}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                // bg="secondary"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                p={5}
                justifyContent="flex-start"
                space={2}
                bg="#141414"
              >
                <Text
                  color="displayColor"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {certificate.title.length > 54 ? (
                    <>{certificate.title.substring(0, 54)}...</>
                  ) : (
                    certificate.title
                  )}
                </Text>
                <Text color="textSecondary" fontSize="sm">
                  {certificate.organization}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {dateFormat(
                    Date.parse(certificate.issueDate),
                    'mmmm dd, yyyy',
                  )}
                </Text>
              </Stack>
            </Link>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
