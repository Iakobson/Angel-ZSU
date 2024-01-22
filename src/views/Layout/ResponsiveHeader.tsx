// @/views/Layout/ResponsiveHeader.tsx
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons for navigation elements
import SecurityIcon from '@mui/icons-material/Security';
import HomeIcon from '@mui/icons-material/Home';
import DonateIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportsIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
// Social Media Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
// data for site navigation elements
const MenuItems = [
  { label: 'Головна', href: '/', icon: <HomeIcon /> },
  { label: 'Збори', href: '/fund/campaigns', icon: <DonateIcon /> },
  { label: 'Реквізити', href: '/fund/donate', icon: <AccountBalanceIcon /> },
  { label: 'Звіти', href: '/fund/reports', icon: <ReportsIcon /> },
  { label: 'Про нас', href: '/about', icon: <InfoIcon /> },
  { label: 'Контакти', href: '/contacts', icon: <ContactsIcon /> },
];
const socialMediaLinks = [
  { href: 'https://t.me/angel_zsu', color: '#1DA1F2', icon: <TelegramIcon /> },
  { href: 'https://www.instagram.com/angel_zsu?igsh=OGVmMjZkZmE2dDA3', color: '#E1306C', icon: <InstagramIcon /> },
  { href: 'https://www.facebook.com/groups/1383290902438768/?ref=share', color: 'blue', icon: <FacebookIcon fontSize="medium" /> },
];
const UserSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const isLogin = false;
// menu and app site navigation
const ResponsiveHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  // functions of showing and hiding menu elemetts
  const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent"
      sx = {{mt: '11px', borderBottom: '1px solid #e5e5e5', boxShadow: 0}}
    >
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Toolbar disableGutters>
          {/* mobile header */}
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'} }}>
            <IconButton aria-controls="menu-appbar" size="large" color="inherit"
              aria-label="account of current user" aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: 'block', md: 'none'} }}
            >
			        {/* mobile site navigation */}
              <List>
                {MenuItems.map((item) => (
                  <Link key={item.label} href={item.href} passHref>
                    <ListItemButton sx={{ minHeight: 48, px: 2.5, justifyContent: 'initial' }}>
                      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: 1 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.label} sx={{ opacity:  1 }} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Menu>
          </Box>
          {/* mobile App Icon and Logo */}
		      <SecurityIcon sx={{ mr: 1, color: 'inherit', display: {xs: 'flex', md: 'none'} }} />
		      <Typography variant="h4" noWrap component="div"
		        sx={{
			        display: { xs: 'flex', md: 'none' },
			        mr: 2, flexGrow: 1, fontWeight: 700,
              letterSpacing: '0.3rem', color: 'inherit',
            }}
		      >
		        <Link href="/">БФ &ldquo;Янгол ЗСУ&rdquo;</Link>
          </Typography>
          {/* desktop App Icon and Logo */}
		      <SecurityIcon sx={{ mr: 1, color: 'inherit', display: { xs: 'none', md: 'flex' } }} />
		      <Typography variant="h5" noWrap component="div"
		        sx={{
			        display: { xs: 'none', md: 'flex' },
			        mr: 2, fontWeight: 700, textDecoration: 'none',
              letterSpacing: '0.3rem', color: 'inherit',
            }}
		      >
            <Link href="/">БО БФ &ldquo;Янгол ЗСУ&rdquo;</Link>
          </Typography>
          {/* desktop site navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 6 }}>
            {MenuItems.map(({ label, href }) => (
              <Link href={href} passHref key={label}>
                <Button  sx={{ my: 2, display: 'block', textTransform: 'none', pl: 2, pr: 2 }}>
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
          {/* desktop Social Media Icons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {socialMediaLinks.map(({ href, color, icon }, index) => (
              <Link key={index} href={href} rel="noopener noreferrer" target="_blank" passHref>
                <IconButton color="inherit" size='medium' sx={{ marginRight: 2 }}>
                  {React.cloneElement(icon, { sx: { color } })}
                </IconButton>
              </Link>
            ))}
          </Box>

          {/* logged in User Settings */}
          {!isLogin && <Box>
            <Button variant="outlined">
              Login
            </Button>
          </Box>}
          {isLogin && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/avatars/defoultAvatar.jpg" />
              </IconButton>
            </Tooltip>
            <Menu id="menu-appbar" keepMounted
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {UserSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveHeader;