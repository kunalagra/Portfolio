import { Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Stack as="footer" textAlign="center" mt="3" width="100%" align="center">
      <Text fontSize="sm" color="textSecondary">
        Designed and Developed by Kunal Agrawal.
      </Text>
    </Stack>
  );
}
