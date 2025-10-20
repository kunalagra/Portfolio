import { ChakraProvider, Flex, Stack, Text } from "@chakra-ui/react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import customTheme from "@/styles/theme";
import { Navbar, NotFound } from "@/components";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kunal Agrawal" },
      { name: "theme-color", content: "#439afe" },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <ChakraProvider value={customTheme}>
          <Navbar />
          <Flex as="main" justifyContent="center" flexDirection="column">
            <Outlet />
          </Flex>
          <Stack textAlign="center" mt="3" width="100%" align="center">
            <Text fontSize="sm" color="textSecondary">
              Designed and Developed by Kunal Agrawal.
            </Text>
          </Stack>
        </ChakraProvider>
        <Scripts />
      </body>
    </html>
  );
}
