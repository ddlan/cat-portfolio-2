
// 1. Import `extendTheme`
import { extendTheme, theme as baseTheme } from "@chakra-ui/react"

// 2. Objects can be created inside the extendTheme function or elsewhere and imported
const colors = {
  primaryFont: {
    _light: baseTheme.colors.gray["700"],
    _dark: baseTheme.colors.gray["200"],
  },
  secondaryFont: {
    _light: baseTheme.colors.gray["600"],
    _dark: baseTheme.colors.gray["400"],
  },
}

// 3. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,

  colors: colors,

  semanticTokens: {
    colors: {
      'chakra-body-text': colors.primaryFont,
      'chakra-placeholder-color': colors.secondaryFont, 
    },
  },
})
