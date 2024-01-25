// @/views/Common/AppNavLinks.tsx

// icons for navigation elements
import HomeIcon from '@mui/icons-material/Home';
import DonateIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportsIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

const AppNavLinks = [
  { label: 'Головна', href: '/', icon: <HomeIcon /> },
  { label: 'Збори', href: '/fund/campaigns', icon: <DonateIcon /> },
  { label: 'Реквізити', href: '/fund/donate', icon: <AccountBalanceIcon /> },
  { label: 'Звіти', href: '/fund/reports', icon: <ReportsIcon /> },
  { label: 'Про нас', href: '/about', icon: <InfoIcon /> },
  { label: 'Контакти', href: '/contacts', icon: <ContactsIcon /> },
];

export default AppNavLinks;