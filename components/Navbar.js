import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar({ enableTransition }) {
  const isDesktop = useBreakpointValue({ base: false, md: true })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Bracket>&#123;</Bracket>K<Bracket>&#125;</Bracket>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <Link href="https://nyxcoder.hashnode.dev/" isExternal>
              <Button variant="ghost" fontSize="16px">
                  Blogs
                </Button>
              </Link>
              <NextLink href="/links" passHref>
                <Button variant="ghost" fontSize="16px">
                  Links
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        reverse
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        background="black"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="black"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="displayColor"
              fontWeight="bold"
              fontSize="32px"
            >
              <Bracket>&#123;</Bracket>K<Bracket>&#125;</Bracket>
            </Text>
          </NextLink>
          {isDesktop ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <Link href="https://nyxcoder.hashnode.dev/" isExternal>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Blogs
                </Button>
                </Link>
              <NextLink href="/links" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Links
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              {' '}
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
