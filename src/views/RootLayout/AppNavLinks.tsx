// @/views/RootLayout/AppNavLinks.tsx
interface HeaderNavLink {
  label:string;
  href:string;
  icon:React.ReactNode;
}
export interface FooterNavLink {
  label:string;
  href:string;
}
// icons for navigation elements
import HomeIcon from '@mui/icons-material/Home';
import DonateIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportsIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

const HeaderNavLinks:HeaderNavLink[] = [
  { label: 'Головна', href: '/', icon: <HomeIcon /> },
  { label: 'Збори', href: '/fund/campaigns', icon: <DonateIcon /> },
  { label: 'Реквізити', href: '/fund/donate', icon: <AccountBalanceIcon /> },
  { label: 'Звіти', href: '/fund/reports', icon: <ReportsIcon /> },
  { label: 'Про нас', href: '/about', icon: <InfoIcon /> },
  { label: 'Контакти', href: '/contacts', icon: <ContactsIcon /> },
];

const CompanyNavLinks:FooterNavLink[] = [
  { label: HeaderNavLinks[0].label, href: HeaderNavLinks[0].href },
  { label: HeaderNavLinks[4].label, href: HeaderNavLinks[4].href },
  { label: HeaderNavLinks[5].label, href: HeaderNavLinks[5].href },
];

const FundNavLinks:FooterNavLink[] = [
  { label: HeaderNavLinks[1].label, href: HeaderNavLinks[1].href },
  { label: HeaderNavLinks[2].label, href: HeaderNavLinks[2].href },
  { label: HeaderNavLinks[3].label, href: HeaderNavLinks[3].href },
];

export { HeaderNavLinks, CompanyNavLinks, FundNavLinks };
