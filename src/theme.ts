
import '@fontsource/nunito/300.css';
import { extendTheme, theme as baseTheme } from "@chakra-ui/react"

const colors = {
  primaryFont: {
    _light: baseTheme.colors.gray["700"],
    _dark: baseTheme.colors.white,
  },
  secondaryFont: {
    _light: baseTheme.colors.gray["600"],
    _dark: baseTheme.colors.gray["400"],
  },
  backgroundColor: {
    _light: baseTheme.colors.white,
    _dark: baseTheme.colors.black,
  }
}

export const customTheme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,

  colors: colors,

  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`,
  },

  semanticTokens: {
    colors: {
      'chakra-body-text': colors.primaryFont,
      'chakra-placeholder-color': colors.secondaryFont, 
      'chakra-body-bg': colors.backgroundColor
    },
  },
})
