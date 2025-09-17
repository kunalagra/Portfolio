import { Box, Center, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <Box
      css={{
        "--header-height": "104px",
        "--content-height": "calc(100dvh - var(--header-height))",
      }}
    >
      <Center minH="90dvh">
        <VStack gap="4">
          <Icon fontSize="8xl" color="blue.500">
            <TbError404 />
          </Icon>
          <Heading size="2xl">404. Page not found</Heading>
          <Text>The page you are looking for does not exist.</Text>
        </VStack>
      </Center>
    </Box>
  );
}
