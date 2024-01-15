// @/views/Layout/AppNavigation.tsx
'use client';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
// icons for navigation elements
import SecurityIcon from '@mui/icons-material/Security';
import Avatar from '@mui/material/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// icons for site-menu items
import HomeIcon from '@mui/icons-material/Home';
import DonateIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportsIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// Social Media Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
// design elements
import { AppBar } from '@/views/Layout/AppBar';
import { DrawerHeader } from '@/views/Layout/DrawerHeader';
import { Drawer } from '@/views/Layout/Drawer';
// data for site navigation elements
const MenuItems = [
  { label: 'Головна', href: '/', icon: <HomeIcon /> },
  { label: 'Збори', href: '/fund/campaigns', icon: <DonateIcon /> },
  { label: 'Реквізити', href: '/fund/donate', icon: <AccountBalanceIcon /> },
  { label: 'Звіти', href: '/fund/reports', icon: <ReportsIcon /> },

];
const PlaceholderLinks = [
  { label: 'Про нас', href: '/about', icon: <InfoIcon /> },
  { label: 'Контакти', href: '/contacts', icon: <ContactsIcon /> },
  { label: 'Admin', href: '/auth/signin', icon: <AdminPanelSettingsIcon /> },
];
const UserSettings = ['Profile', 'Logout'];
const UserSettingsLinks = [
  { label: 'Profile', href: '/profile' },
  { label: 'Logout', href: '/' }
];

const AppNavigation:React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  // side menu functionality
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // user menu functionality
  const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {/* Site AppBar */}
      <AppBar position="fixed" open={open} >
        <Toolbar>
		      {/* Open Side Menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
		      {/* App Icon and Logo */}
		      <SecurityIcon sx={{ mr: 1, color: 'blue' }} />
          <Typography variant="h5" noWrap component="div"
		        sx={{
			        mr: 2, fontWeight: 700,
              letterSpacing: '0.3rem', color: 'blue',
			        // additional styling for mobile phones
			        '@media screen and (max-width: 600px)': {
                fontSize: '1.2rem',
                letterSpacing: '0.1rem',
              },
            }}
		      >
            БО БФ &ldquo;Янгол ЗСУ&rdquo;
          </Typography>
          {/* Social Media Icons */}
	<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
          <Link href="https://t.me/angel_zsu" rel="noopener noreferrer" target="_blank" passHref>
            <IconButton color="inherit" size='medium'>
              <TelegramIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
          </Link>
          <Link href="https://www.facebook.com/groups/1383290902438768/?ref=share" rel="noopener noreferrer" target="_blank" passHref>
            <IconButton color="inherit" size='medium'>
              <FacebookIcon fontSize="medium" sx={{ color: 'blue' }} />
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" passHref>
            <IconButton color="inherit" size='medium'>
              <InstagramIcon sx={{ color: '#E1306C' }} />
            </IconButton>
          </Link>
	</Box>
		      {/* Menu User Settings */}
		      <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/avatars/defoultAvatar.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {UserSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Site Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Menu Items */}
        <List>
          {MenuItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          ))}
        </List>
        <Divider />
        {/* Placeholder Links */}
        <List>
          {PlaceholderLinks.map((link) => (
            <Link key={link.label} href={link.href} passHref>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AppNavigation;
