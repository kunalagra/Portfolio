import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'
import Head from 'next/head'
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #000;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }

          ::-webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet preload prefetch"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
            rel="stylesheet preload prefetch"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <meta name="theme-color" content="black" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="title" content="Kunal Agrawal - Software Engineer" />
          <meta
            name="description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Kunal Agrawal - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in India, an undergraduate student at University of Mumbai."
          />
        </Head>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
