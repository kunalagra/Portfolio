import { Inter } from 'next/font/google'
import Provider from './provider'
import { Navbar } from '@/components'
import { Flex, Stack, Text } from '@chakra-ui/react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Kunal Agrawal',
    default: 'Kunal Agrawal',
  },
  description: 'Portfolio Website',
  openGraph: {
    title: 'Kunal Agrawal',
    description: 'Portfolio Website',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Navbar />
          <Flex
            as="main"
            justifyContent="center"
            flexDirection="column"
            mb={30}
          >
            {children}
          </Flex>
          <Stack textAlign="center" width="100%" mb={1} align="center">
            <Text fontSize="sm">Designed and Developed by Kunal Agrawal.</Text>
          </Stack>
        </Provider>
      </body>
    </html>
  )
}
