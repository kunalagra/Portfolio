"use client";
import {
  Box,
  chakra,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLinkButton } from "@/components";
import type { IntroductionProps } from "@/types";

export function Introduction({ introduction }: IntroductionProps) {
  return (
    <Stack gap={10} justifyContent="flex-start" alignItems="flex-start">
      <Box position="relative">
        <Image
          src="/background.svg"
          filter="invert(0.1)"
          w={{ base: "70px", md: "150px" }}
          position="absolute"
          top={{ base: "0", md: "-15px" }}
          left={{ base: "-5px", md: "-10px" }}
          zIndex={0}
          alt=""
          aria-hidden="true"
        />
        <Text
          color="button1"
          fontSize="display2"
          fontWeight="medium"
          position="relative"
          zIndex={1}
        >
          Hey there!, I&apos;m-
        </Text>
      </Box>

      <Heading
        fontSize="display"
        lineHeight={"95%"}
        color="displayColor"
        letterSpacing={{ base: "-1.2px", md: "-1.8px" }}
        position="relative"
        zIndex={1}
      >
        {introduction.name}
      </Heading>

      <Heading
        color="textSecondary"
        fontSize="display2"
        fontWeight="medium"
        whiteSpace="pre-wrap"
        letterSpacing="-1.6px"
      >
        <chakra.span color="displayColor"> Software Engineer.</chakra.span> A
        self-taught developer with an{" "}
        <chakra.br display={{ base: "none", md: "inline" }} />
        interest in Computer Science.
      </Heading>

      <Text fontSize="display3" color="textSecondary">
        {" "}
        {"🚀"} {"Exploring opportunities and side projects."}
        <br />
      </Text>

      <HStack gap={4}>
        <SocialLinkButton
          href={introduction.github}
          icon={<FaGithub color="var(--chakra-colors-button1)" />}
          label="Github"
        />
        <SocialLinkButton
          href={introduction.linkedin}
          icon={<FaLinkedin color="var(--chakra-colors-button1)" />}
          label="LinkedIn"
        />
        <SocialLinkButton
          href={introduction.resume}
          icon={<FaFileAlt color="var(--chakra-colors-button1)" />}
          label="Resume"
        />
      </HStack>
    </Stack>
  );
}
