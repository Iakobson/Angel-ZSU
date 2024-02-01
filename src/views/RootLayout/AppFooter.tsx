// @/views/RootLayout/AppFooter.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// data for site navigation elements
import FooterNavigation from '@/views/RootLayout/FooterNavigation';
import Copyright from '@/views/RootLayout/Copyright';

const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 6, pb: 3, mt: 'auto',
        bgcolor: 'customBackground',
        color: 'primary.contrastText',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {/* footer info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Благодійний фонд <br />&ldquo;Янгол ЗСУ&rdquo;
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Мета - надання підтримки воїнам Збройних Сил України.
              </Typography>
            </Box>
          </Grid>
          {/* footer site and media links  */}
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
      {/* footer botton info */}
      <Copyright />
    </Box>
  );
};
export default AppFooter;
