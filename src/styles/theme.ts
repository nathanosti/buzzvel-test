// ** Styled-Components Imports
import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#fff',
    blue: {
      primary: '#007DFA',
      secondary: '#004899',
      dark: '#050A24',
    },
    black: {
      primary: '#101012',
      secondary: '#5A5A5D',
      tertiary: '#BEBEBF',
    },
    red: {
      primary: '#E22E2E',
    },
  },
  colorsOpacity: {
    blue: {
      primary: (opacity: number) => `rgba(34, 45, 49, ${opacity})`,
    },
    black: {
      primary: (opacity: number) => `rgba(16, 16, 18, ${opacity})`,
      secondary: (opacity: number) => `rgba(90, 90, 93, ${opacity})`,
      tertiary: (opacity: number) => `rgba(190, 190, 191, ${opacity})`,
    },
    white: {
      primary: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    },
  }
};
