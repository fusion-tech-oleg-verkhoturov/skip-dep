import type { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  font: {
    family: '"Mulish", sans-serif',
  },
  mainTheme: {
    shadow: {
      small: '0px 2px 4px rgba(38, 63, 113, 0.12)',
      medium: '0px 4px 8px -2px rgba(38, 63, 113, 0.1)',
      large: '0px 6px 12px -3px rgba(38, 63, 113, 0.1)',
      extraLarge: '0px 8px 16px -4px rgba(38, 63, 113, 0.08)',
    },
    color: {
      background: '#FFFFFF',
      green: '#72CA95',
      yellow: '#E7B929',
      typography: {
        blackText: '#030B05',
        greyText: '#434343',
        lightGreyText: '#ACACAC',
        whiteText: '#FFFFFF',
      },
      grey: {
        dark: '#262626',
        lightElements: '#E1E1E1',
        background: '#F1F1F1',
        lightBackground: '#F0F0F0',
      },
      red: {
        primary: '#A21F22',
        dark: '#880F12',
        bright: '#DE2A2D',
        light: '#E36F71',
        lightBackground: '#FFFBFB',
      },
    },
  },
};

export default defaultTheme;
