'use client' // Required for useState

import React, { useState } from 'react' // Import useState
import {
  Button,
  Flex, // Keep Flex
  IconButton, // Import IconButton
  Link,
  Portal,
  Stack,
  Text,
  Drawer,
  Span,
  HStack,
  CloseButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const Bracket = ({ children }: { children: React.ReactNode }) => (
    <Span color="fg.muted" fontWeight="semibold">
      {children}
    </Span>
  )

  const NavbarDrawer = () => (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="end"
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            {' '}
            <Drawer.CloseTrigger position="absolute" top="3" right="3" />
            <Drawer.Header borderBottomWidth="1px" borderColor="border">
              {' '}
              <Drawer.Title>
                <Bracket>{'{'}</Bracket>K<Bracket>{'}'}</Bracket>
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Stack gap="4">
                {/* Use onClick to close drawer */}
                <Button
                  asChild
                  variant="ghost"
                  fontSize="md"
                  onClick={() => setOpen(false)}
                >
                  <NextLink href="/">Home</NextLink>
                </Button>
                <Button asChild variant="ghost" fontSize="md">
                  <Link
                    href="https://blog.kunalagrawal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: 'none' }}
                  >
                    Blogs
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  fontSize="md"
                  onClick={() => setOpen(false)}
                >
                  <NextLink href="/links">Links</NextLink>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  fontSize="md"
                  onClick={() => setOpen(false)}
                >
                  <NextLink href="/projects">Projects</NextLink>
                </Button>
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )

  return (
    // Removed outer Box, position sticky on Flex
    <Flex
      as="nav"
      position="sticky" // Apply sticky positioning
      top="0" // Stick to top
      zIndex="sticky" // Use theme zIndex token
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      px={{ base: '5vw', md: '8vw' }} // Adjusted padding slightly
      py="3"
      // borderBottomWidth="1px" // Use theme border width
      borderColor="border" // Use theme token
      bg="bg" // Use theme token
    >
      <Link asChild _hover={{ textDecoration: 'none' }}>
        <NextLink href="/">
          <Text color="displayColor" fontWeight="bold" fontSize="3xl">
            <Bracket>{'{'}</Bracket>K<Bracket>{'}'}</Bracket>
          </Text>
        </NextLink>
      </Link>

      <HStack
        as="nav"
        gap="3"
        display={{ base: 'none', md: 'flex' }}
        color="textSecondary"
      >
        <Button asChild variant="ghost" p="4" fontSize="md">
          <NextLink href="/">Home</NextLink>
        </Button>
        <Button asChild variant="ghost" p="4" fontSize="md">
          <Link
            href="https://blog.kunalagrawal.com/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none' }}
          >
            Blogs
          </Link>
        </Button>
        <Button asChild variant="ghost" p="4" fontSize="md">
          <NextLink href="/links">Links</NextLink>
        </Button>
        <Button asChild variant="ghost" p="4" fontSize="md">
          <NextLink href="/projects">Projects</NextLink>
        </Button>
      </HStack>

      <IconButton
        aria-label="Open Menu"
        onClick={() => setOpen(true)}
        variant="ghost"
        display={{ base: 'inline-flex', md: 'none' }}
        size={'lg'}
      >
        <AiOutlineMenu />
      </IconButton>

      <NavbarDrawer />
    </Flex>
  )
}
