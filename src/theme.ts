import '@fontsource/nunito';
import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const colors = {
  primaryFont: {
    _light: baseTheme.colors.gray['700'],
    _dark: baseTheme.colors.white
  },
  secondaryFont: {
    _light: baseTheme.colors.gray['600'],
    _dark: baseTheme.colors.gray['400']
  },
  background: {
    _light: baseTheme.colors.white,
    _dark: baseTheme.colors.black
  }
};

export const customTheme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,

  colors,

  fonts: {
    heading: '\'Nunito\', sans-serif',
    body: '\'Nunito\', sans-serif'
  },

  semanticTokens: {
    colors: {
      'chakra-body-text': colors.primaryFont,
      'chakra-placeholder-color': colors.secondaryFont,
      'chakra-body-bg': colors.background
    }
  }
});
