"use client"; // Still needed if other client hooks remain or for potential future use

import {
  Box,
  Container,
  chakra,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Milestone, MilestonesProps } from "@/types";

type CardProps = Milestone & { id: number };

const Card = ({ id, title, description, date, url }: CardProps) => {
  const isEvenId = id % 2 === 0;

  const cardPointerStyles = {
    "--card-before-left": "spacing.-4", // Usin theme token reference
    "--card-before-right": "auto",
    "--card-before-borderWidth": "{spacing.4} {spacing.4} {spacing.4} 0", // Use theme tokens

    md: {
      "--card-before-left": isEvenId ? "spacing.-4" : "auto",
      "--card-before-right": isEvenId ? "auto" : "spacing.-4",
      "--card-before-borderWidth": isEvenId
        ? "{spacing.4} {spacing.4} {spacing.4} 0"
        : "{spacing.4} 0 {spacing.4} {spacing.4}",
    },
  };

  return (
    <HStack
      flex={1}
      p={6}
      bg="bg.surface"
      gap={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      css={cardPointerStyles}
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent #141414 transparent`, // Reference bg directly
        borderStyle: "solid",
        borderWidth: "var(--card-before-borderWidth)", // Use CSS variable
        position: "absolute",
        left: "var(--card-before-left)", // Use CSS variable
        right: "var(--card-before-right)", // Use CSS variable
        display: "block",
      }}
    >
      <Box flex={1}>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>
        <VStack gap={2} mb={3} textAlign="left" alignItems="flex-start">
          <Heading
            as="h2"
            size="xl"
            lineHeight="tight"
            fontWeight="bold"
            w="100%"
          >
            <Flex alignItems="center">
              <Text as="span"> {title} </Text>
              <Spacer />
              {url && (
                <Link
                  href={url}
                  color="white" // Or fg.inverted
                  _hover={{
                    color: isEvenId ? "teal.400" : "blue.400",
                    textDecoration: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link for ${title}`}
                >
                  <FaArrowUpRightFromSquare size={20} />
                </Link>
              )}
            </Flex>
          </Heading>
          <Text fontSize="md" whiteSpace="pre-line">
            {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "10", md: "10" }}
      ml={{ base: "0", md: "10" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor="border"
        top="0px"
      />
      <Box pos="relative" p="2.5">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg="border.emphasized"
          borderRadius="full"
          backgroundImage="none"
          opacity={1}
        />
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={1} p={{ base: 0, md: 6 }} />;
};

export const Milestones = ({ milestones }: MilestonesProps) => {
  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <Heading as="h3" size="3xl" mb={18} textAlign="center">
        Experience
      </Heading>
      {milestones.map((milestone, index) => {
        const idx = index + 1;
        const isEvenId = idx % 2 === 0;
        return (
          <Flex
            key={`${milestone.title}-${milestone.date}-${milestone.url || ""}`}
            mb="2.5"
          >
            <Box flex={1} display={{ base: "none", md: "block" }}>
              {isEvenId ? <EmptyCard /> : <Card {...milestone} id={idx} />}
            </Box>

            <LineWithDot />

            <Box flex={1} display="block">
              {" "}
              <Box display={{ base: "block", md: isEvenId ? "block" : "none" }}>
                <Card {...milestone} id={idx} />
              </Box>
              <Box display={{ base: "none", md: isEvenId ? "none" : "block" }}>
                <EmptyCard />
              </Box>
            </Box>
          </Flex>
        );
      })}
    </Container>
  );
};
