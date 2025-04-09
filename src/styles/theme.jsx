import {
  defineConfig,
  createSystem,
  defaultConfig,
  defineRecipe,
  defineSemanticTokens,
  defineTokens,
} from '@chakra-ui/react'

// --- Fluid Typography Function (remains the same) ---
const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100
  let YY = (100 * (maxFont - minFont)) / (1920 - 768)
  let ZZ = minFont / 16
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
}

// --- Define Link Recipe (v3 equivalent of component style) ---

// --- Define Tokens (using defineTokens helper) ---
const tokens = defineTokens({
  colors: {
    // Wrap all color values in { value: ... }
    background: { value: '#12141D' },
    secondary: { value: '#080808' },
    complement: { value: '#FA934F' },
    displayColor: { value: '#FFFFFF' },
    textPrimary: { value: '#D1D5DB' },
    textSecondary: { value: '#8F9094' },
    button1: { value: '#439afe' },
    button2: { value: '#F6A20E' },
    button3: { value: '#5132BF' },
    borderColor: { value: '#111111' },
    cardbg: { value: '#141414' },
    cardPoint: { value: 'transparent #141414' },
  },
  fonts: {
    // Wrap font values in { value: ... }
    body: {
      value: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    heading: {
      value: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
  },
  fontWeights: {
    // Wrap values in { value: ... } and ensure they are strings
    normal: { value: '300' },
    medium: { value: '600' },
    bold: { value: '700' },
  },
  fontSizes: {
    // Wrap values (including fluidType results) in { value: ... }
    display: { value: fluidType(80, 144) },
    display2: { value: fluidType(24, 36) },
    display3: { value: fluidType(16, 24) },
    // If you uncomment the others, wrap them too:
    // xs: { value: fluidType(6, 12) },
    // sm: { value: fluidType(7, 14) },
    // md: { value: fluidType(8, 16) },
    // lg: { value: fluidType(9, 18) },
    // xl: { value: fluidType(10, 20) },
    // '2xl': { value: fluidType(12, 24) },
    // '3xl': { value: fluidType(14, 28) },
    // '4xl': { value: fluidType(18, 36) },
    // '5xl': { value: fluidType(20, 40) },
    // '6xl': { value: fluidType(24, 48) },
    // '7xl': { value: fluidType(32, 64) },
    // '8xl': { value: fluidType(36, 72) },
  },
})

const semanticTokens = defineSemanticTokens({
  colors: {
    // Map semantic roles to your specific colors or default grays
    // Adjust the base (light mode) values as needed for your design
    bg: {
      surface: {
        // Used for Card bg. Was #141414 dark. Light equivalent? e.g., white or light gray
        value: { base: '{colors.white}', _dark: '{colors.cardbg}' }, // map to your #080808? or keep #141414?
      },
    },
    fg: {
      // Used for main text, maps to your displayColor
      value: { base: '{colors.gray.800}', _dark: '{colors.displayColor}' }, // e.g. Dark gray for light mode
    },
    'fg.muted': {
      // Used for secondary text, maps to your textSecondary
      value: { base: '{colors.gray.600}', _dark: '{colors.textSecondary}' }, // e.g. Medium gray for light mode
    },
    border: {
      // Used for timeline line. Was gray.200 / gray.700
      value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' },
    },
    'border.emphasized': {
      // Used for timeline dot. Was gray.600 / gray.200
      value: { base: '{colors.gray.600}', _dark: '{colors.gray.200}' },
    },
  },
})

// --- Define the Main Configuration ---
const config = defineConfig({
  // Standard v3 config options
  cssVarsRoot: ':where(:root, :host)',
  cssVarsPrefix: 'ck', // Or your preferred prefix
  theme: {
    // Breakpoints go directly under theme
    breakpoints: {
      // Use string values directly
      base: '0em',
      sm: '30em',
      md: '48em',
      lg: '80em',
      xl: '80em', // Still duplicated, confirm if needed
    },
    // Assign defined tokens
    tokens: tokens,
    semanticTokens: semanticTokens, // Add the new semantic tokens

    // Assign defined recipes

    // You can add/override other categories like semanticTokens, layerStyles etc. here
  },
  // Add other config options if needed (e.g., strictTokens: true)
})

// --- Create the System ---
const customTheme = createSystem(defaultConfig, config)

export default customTheme
