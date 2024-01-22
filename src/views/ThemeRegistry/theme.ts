// @/views/ThemeRegistry/theme.jsx
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import { purple } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',

  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '1.8rem',
      fontWeight: 800,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 600,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 400,
      margin: '1rem 0',
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
});

export default theme;
/*

*/