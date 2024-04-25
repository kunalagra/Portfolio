import React, { useEffect, useState } from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar'

const Container = ({ enableTransition, children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {}, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // fix hydration mismatch from using useMediaQuery hooks
  if (mounted)
    return (
      <>
        <Navbar enableTransition={enableTransition} />
        <Flex as="main" justifyContent="center" flexDirection="column" mb={30}>
          {children}
        </Flex>
        <Stack
          position="absolute"
          bottom="5px"
          textAlign="center"
          width="100%"
          mb={1}
        >
          <Text textAlign="center" fontSize="sm">
            Designed and Developed by Kunal Agrawal.
          </Text>
        </Stack>
      </>
    )
}

export default Container
