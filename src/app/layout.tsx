// @/app/layout.tsx
import { Metadata } from 'next';
import ThemeRegistry from '@/views/ThemeRegistry/ThemeRegistry';
import './globals.css';
import './react-slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// MUI components
import Box from '@mui/material/Box';
// views (design) elements
import AppHeader from '@/views/RootLayout/AppHeader';
import AppFooter from '@/views/RootLayout/AppFooter';

export const metadata:Metadata = {
  title: 'Янгол ЗСУ',
  description: 'Благодійний фонд Янгол Збройних Сил України.',
  keywords: 'благодійний фонд, Янгол ЗСУ, благодійність, Україна',
  authors: 'SKindij',
  openGraph: {
    title: 'Test-Angel',
    description: 'Тестовий сайт, що розробляється для благодійного фонду.',
    url: 'https://test-fond-zsu.vercel.app/',
    siteName: 'test-fond-zsu.vercel.app',
    locale: 'uk',
    type: 'website',
  },
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* menu and app site navigation */}
            <AppHeader />
            <Box component="main">
              {/* the main content of the site */}
              {children}
            </Box>
            {/* bottom content of site */}
			      <AppFooter />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
