import '@fontsource-variable/stix-two-text';
import '@fontsource-variable/inter';
import { extendTheme, theme as baseTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const colors = {
  primaryFont: {
    _light: '#8c8c8c',
    _dark: baseTheme.colors.white
  },
  secondaryFont: {
    _light: baseTheme.colors.gray['600'],
    _dark: baseTheme.colors.gray['400']
  },
  background: {
    _light: 'rgb(250,250,250)',
    _dark: baseTheme.colors.black
  },
  black: '#000'
};

export const customTheme = extendTheme({
  config,
  colors,

  fonts: {
    heading: '\'STIX Two Text Variable\', sans-serif',
    body: '\'Inter Variable\', sans-serif'
  },

  components: {
    Text: {
      baseStyle: {
        fontSize: '13px'
      }
    }
  },

  semanticTokens: {
    colors: {
      'chakra-body-text': colors.primaryFont,
      'chakra-placeholder-color': colors.secondaryFont,
      'chakra-body-bg': colors.background
    }
  }
});
