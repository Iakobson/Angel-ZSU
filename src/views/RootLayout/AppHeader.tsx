// @/views/RootLayout/AppHeader.tsx
'use client';
import * as React from 'react';
import Link from 'next/link';
// MUI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// data for site navigation elements
import SecurityIcon from '@mui/icons-material/Security';
import { HeaderSocialLinks } from '@/views/RootLayout/SocialLinks';
import { HeaderNavLinks } from '@/views/RootLayout/AppNavLinks';

// menu and app site navigation
const AppHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // functions of showing and hiding menu elemetts
  const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ pl: { sm: 10 }, pr: { sm: 10 }, bgcolor: 'customBackground' }} disableGutters>
        <Toolbar disableGutters>
          {/* mobile header */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="menu-appbar"
              size="large"
              color="inherit"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* mobile site navigation */}
              <List>
                {HeaderNavLinks.map(item => (
                  <Link key={item.label} href={item.href} passHref>
                    <ListItemButton sx={{ minHeight: 48, px: 2.5, justifyContent: 'initial' }}>
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: 1 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} sx={{ opacity: 1 }} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Menu>
          </Box>
          {/* mobile App Icon and Logo */}
          <SecurityIcon
            sx={{
              mr: 1, color: 'inherit',
              display: { xs: 'flex', md: 'none' },
            }}
          />
          <Typography
            component="div" variant="h4" noWrap
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 2, flexGrow: 1,
              fontWeight: 700, color: 'inherit',
              letterSpacing: '0.3rem',
            }}
          >
            <Link href="/">БФ &ldquo;Янгол ЗСУ&rdquo;</Link>
          </Typography>
          {/* desktop App Icon and Logo */}
          <SecurityIcon
            sx={{
              mr: 1, color: 'inherit',
              display: { xs: 'none', md: 'flex' },
            }}
          />
          <Typography
            component="div" variant="h5" noWrap
            sx={{
              display: { xs: 'none', md: 'flex' }, mr: 2,
              fontWeight: 700, color: 'inherit',
              textDecoration: 'none', letterSpacing: '0.3rem',
            }}
          >
            <Link href="/">БО БФ &ldquo;Янгол ЗСУ&rdquo;</Link>
          </Typography>
          {/* desktop site navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 6 }}>
            {HeaderNavLinks.map(({ label, href }) => (
              <Link href={href} passHref key={label}>
                <Button
                  sx={{ display: 'block',
                    my: 2, px: 2,
                    color: 'white',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* desktop Social Media Icons */}
          <HeaderSocialLinks />
          {/* desktop authentication */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href="/auth/signin" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
