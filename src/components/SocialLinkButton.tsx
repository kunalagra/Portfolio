'use client'
import React from 'react'
import { Button, Link, Text } from '@chakra-ui/react'
import { SocialLinkButtonProps } from '@/types'

export const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({
  href,
  icon,
  label,
}) => {
  return (
    <Button
      asChild
      size={{ base: 'sm', md: 'md' }}
      variant="outline"
      colorPalette="blue"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ textDecoration: 'none' }}
      >
        {icon}
        <Text as="span" ml={2}>
          {label}
        </Text>
      </Link>
    </Button>
  )
}
