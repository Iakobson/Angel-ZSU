// @/views/ThemeRegistry/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme, Palette, Theme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface CustomPaletteOptions {
  customBackground:string;
  lostLavender:string;
  deepWater:string;
  fadedLilac:string;
  bakeryBox:string;
  polliwog:string;
  sassyYellow:string;
}
interface CustomTheme extends Theme {
  palette:Palette & CustomPaletteOptions;
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#9FF1D2',
      main: '#127C71',
      dark: '#0D6A69',
      contrastText: '#fbfbfb',
    },
    secondary: {
      light: '#FDE6A8',
      main: '#ffaf35',
      dark: '#D0821C',
      contrastText: '#fbfbfb',
    },
    background: {
      default: '#f7f7f7', // Gray97
      paper: '#f1f1f1', // White Smoke
    },
    customBackground: '#343331', // Sinister Minister
    lostLavender: '#8E7F8E',
    deepWater: '#254A8C',
    fadedLilac: '#92A3BD',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '2.4rem',
      fontWeight: 800,
      lineHeight: 1.3
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '2.0rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h5: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: 1.3
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.3
    },
    subtitle1: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
	  lineHeight: 1.3
    },
    subtitle2: {
      fontSize: '1.15rem', // 18px
      fontWeight: 500,
      lineHeight: 1.3
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
} as CustomTheme);

export default theme;