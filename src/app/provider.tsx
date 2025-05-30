'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

import customTheme from '@/styles/theme'

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={customTheme}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
