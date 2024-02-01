// @/views/ThemeRegistry/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme, Palette, Theme } from '@mui/material/styles';
import { indigo, amber } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface CustomPaletteOptions {
  customBackground:string;
  lostLavender:string;
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
      main: indigo[800],
      contrastText: '#fbfbfb',
    },
    secondary: {
      main: amber[700],
      contrastText: '#fbfbfb',
    },
    background: {
      default: '#f7f7f7', // Gray97
      paper: '#f1f1f1', // White Smoke
    },
    customBackground: '#343331', // Sinister Minister
    lostLavender: '#8E7F8E',
    fadedLilac: '#92A3BD',
    bakeryBox: '#F7F9F8',
    polliwog: '#e3c71f',
    sassyYellow: '#F0CC70'
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