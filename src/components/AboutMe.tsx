import {
  Box,
  chakra,
  Flex,
  Heading,
  HoverCard,
  Image,
  Portal,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type React from "react";
import type { MoreInfoProps } from "@/types";

const MoreInfo: React.FC<MoreInfoProps> = ({ text, content }) => {
  return (
    <HoverCard.Root
      positioning={{
        placement: "bottom-start",
        gutter: 8,
      }}
      lazyMount
      size={{ base: "xs", md: "sm" }}
    >
      <HoverCard.Trigger asChild>
        <chakra.span color="blue.500" cursor="help">
          {text}
        </chakra.span>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content
            bg="bg.surface"
            borderColor="blue.500"
            color="fg"
            maxW={{ base: "90vw", sm: "320px" }}
            pointerEvents="auto"
          >
            <HoverCard.Arrow bg="bg.surface" />
            <Box p={3} textStyle={{ base: "xs", md: "sm" }} color="fg">
              {content}
            </Box>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};

export function AboutMe() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
      <Stack gap={4}>
        <Heading fontFamily="Ubuntu" fontSize="2xl">
          ⚡ About Me
        </Heading>
        <Text
          color="fg.muted"
          fontSize={{ base: "sm", md: "md" }}
          whiteSpace="pre-line"
          lineHeight="tall"
        >
          Hey! I&apos;m Kunal Agrawal, I&apos;ve been close to a computer since
          an early age, and been passionate about it ever since. <br />
          <br /> I really liked to build stuff using{" "}
          <MoreInfo
            text="no-code tools"
            content="I built a website using blogspot back in primary school."
          />{" "}
          back in 2016, and from that, I explored how to code myself,
          fast-forward to today, I do programming in various languages and
          technologies, and participate in Hackathons like{" "}
          <MoreInfo
            text="Solving for India"
            content="Hackathon conducted by GFG, Google & AMD. Reached Regionals (50/500+ teams) with MediCall App."
          />{" "}
          &{" "}
          <MoreInfo
            text="Project Deep Blue"
            content="Hackathon conducted by Mastek. Reached Semifinals with SumUp App."
          />
          .
          <br />
          I&apos;m interested in building something awesome with code and
          automate tasks with code, currently focused on{" "}
          <MoreInfo
            text="Web Development"
            content="Building Web and Mobile Applications using Javascript Frameworks (React, Node and Next.js)"
          />
          ,{" "}
          <MoreInfo
            text="Open Source"
            content="I am passionate about open source and their impact on the internet today."
          />
          , and{" "}
          <MoreInfo
            text="Competitive Programming"
            content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
          />
          .
          <br />
          <br />
          Outside of coding, I enjoy cycling, watching shows, or reading books.
        </Text>
      </Stack>

      <Flex alignItems="center" justifyContent="center" position="relative">
        <Box
          maxW={{ base: "300px", lg: "350px" }}
          maxH={{ base: "300px", lg: "350px" }}
        >
          <Image
            src="/background.svg"
            filter="invert(0.1)"
            zIndex="docked"
            position="absolute"
            top={0}
            right={0}
            w={{ base: "100px", lg: "150px" }}
            alt=""
            aria-hidden="true"
          />
          <Image
            src="/photo.jpg"
            w={{ base: "300px", lg: "350px" }}
            h={{ base: "300px", lg: "350px" }}
            borderRadius="full"
            alt="Kunal Agrawal"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
