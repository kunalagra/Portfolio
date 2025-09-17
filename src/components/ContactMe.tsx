"use client";
import { Heading, HStack, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaFilePdf, FaLinkedin } from "react-icons/fa6";
import { SocialLinkButton } from "@/components";
import type { IntroductionProps } from "@/types";

export function ContactMe({ introduction }: IntroductionProps) {
  return (
    <Stack gap={10} w="100%" alignItems="center" justifyContent="center">
      <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center">
        Keep In Touch.
      </Heading>

      <HStack gap={4}>
        <SocialLinkButton
          href={introduction.linkedin}
          icon={<FaLinkedin color="var(--chakra-colors-button1)" />}
          label="LinkedIn"
        />
        <SocialLinkButton
          href={introduction.mailto}
          icon={<FaEnvelope color="var(--chakra-colors-button1)" />}
          label="Email"
        />
        <SocialLinkButton
          href={introduction.resume}
          icon={<FaFilePdf color="var(--chakra-colors-button1)" />}
          label="Resume"
        />
      </HStack>
    </Stack>
  );
}
