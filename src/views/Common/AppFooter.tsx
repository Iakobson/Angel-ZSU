// @/views/Common/AppFooter.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// data for site navigation elements
import { FooterSocialLinks } from '@/views/Common/SocialLinks';
import AppNavLinks from '@/views/Common/AppNavLinks';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color:'fadedLilac' }}>
      {'Copyright © '}
      <Link href="https://angelzsu.com/">
        Angel ZSU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const AppFooter = () => {
  return (
    <Box component="footer"
      sx={{ pt:6, pb:3, mt:'auto', bgcolor:'customBackground', color:'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              {/* footer info */}
			        <Typography component="h4" variant="h4" sx={{ mb: 2 }}>
                Благодійний фонд &ldquo;Янгол ЗСУ&rdquo;
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Мета - надання підтримки воїнам Збройних Сил України.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
		        {/* footer links */}
            <FooterSocialLinks />
		        {/* footer nav links */}
            <Grid container
              rowSpacing={{ xs: 1, sm: 2 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ mb: 3 }}
            >
              {AppNavLinks.map(({ label, href }) => (
                <Link href={href} passHref key={label}>
                  <Button  sx={{
				            pl: 2, pr: 2,
                    color: 'primary.contrastText',
                    '&:hover': { color: 'secondary.main'}
				          }} >
                    {label}
                  </Button>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
};
export default AppFooter;