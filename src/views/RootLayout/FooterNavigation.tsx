// @/views/RootLayout/FooterNavigation.tsx
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// data for site navigation elements
import { FooterSocialLinks } from '@/views/RootLayout/SocialLinks';
import { CompanyNavLinks, FundNavLinks } from '@/views/RootLayout/AppNavLinks';
import { FooterNavLink } from '@/views/RootLayout/AppNavLinks';

const NavItem = ({ label, href }:FooterNavLink) => {
  return (
    <Link href={href} passHref key={label}>
      <Button
        sx={{
          pl: 1,
          pr: 1,
          color: 'primary.contrastText',
          '&:hover': { color: 'secondary.main' },
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

const FooterNavigation = () => {
  return (
    <Grid container spacing={1}>
      {/* footer site nav links */}
      <Grid item xs={4} md={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
            Інформація:
          </Typography>
          {CompanyNavLinks.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={4} md={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
            Діяльність:
          </Typography>
          {FundNavLinks.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </Box>
      </Grid>
      {/* footer media links */}
      <FooterSocialLinks />
    </Grid>
  );
};

export default FooterNavigation;
