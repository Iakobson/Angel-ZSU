// @/views/RootLayout/SocialLinks.tsx
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// Social Media Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

interface SocialLink {
  name:string;
  href:string;
  color:string;
  icon:React.ReactNode;
}
const socialMediaLinks:SocialLink[] = [
  {
    name: 'Telegram',
    href: 'https://t.me/angel_zsu',
    color: '#1DA1F2',
    icon: <TelegramIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/angel_zsu?igsh=OGVmMjZkZmE2dDA3',
    color: '#E1306C',
    icon: <InstagramIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/PEgJw9DYBixr19YL/?mibextid=%22%22',
    color: 'blue',
    icon: <FacebookIcon />,
  },
];

const SocialLinkButton:React.FC<{ link:SocialLink }> = ({ link }) => (
  <Link href={link.href} rel="noopener noreferrer" target="_blank" passHref>
    <IconButton aria-label={link.name}
      size="medium"
      sx={{
        marginRight: 2,
        '&:hover': { backgroundColor: 'secondary.main' },
      }}
    >
      {link.icon}
    </IconButton>
  </Link>
);

const HeaderSocialLinks = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {socialMediaLinks.map(({ name, href, color, icon }, index) => (
        <Link key={name} href={href} rel="noopener noreferrer" target="_blank" passHref>
          <IconButton aria-label={name}
            color="inherit" size="medium"
            sx={{ marginRight: 2, '&:hover': { backgroundColor:'secondary.main' } }}
          >
            {icon}
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};

const FooterSocialLinks = () => {
  return (
    <Grid item xs={4} md={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="subtitle1" sx={{ color: 'primary.contrastText' }}>
          Ми в:
        </Typography>
        {socialMediaLinks.map(({ name, href, color, icon }, index) => (
          <Link key={name} href={href} rel="noopener noreferrer" target="_blank" passHref>
            <div style={{ display: 'flex', alignItems: 'center' }}> {/* Замініть на Box, якщо потрібно */}
              <IconButton aria-label={name}
			    color="inherit" size="medium"
				  sx={{ '&:hover': { backgroundColor: 'secondary.main' } }}
			  >
                {icon}
              </IconButton>
              <span style={{ marginLeft: '4px' }}>{name}</span>
            </div>
          </Link>
        ))}
      </Box>
    </Grid>
  );
};
export { HeaderSocialLinks, FooterSocialLinks };
