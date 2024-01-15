// @/views/Fund/FundBottomNavigation.tsx
'use client';
import { useState } from 'react';

import {NextLinkComposed} from '@/views/Fund/NextMuiLink';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// icons for navigation elements
import DonateIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReportsIcon from '@mui/icons-material/Assignment';

export default function FundBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 50, right: 0 }} elevation={3}>
      <BottomNavigation showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Збори" component={NextLinkComposed} to={{pathname: '/fund/campaigns'}} icon={<DonateIcon />} />
        <BottomNavigationAction label="Реквізити" component={NextLinkComposed} to={{pathname: '/fund/donate'}} icon={<AccountBalanceIcon />} />
        <BottomNavigationAction label="Звіти" component={NextLinkComposed} to={{pathname: '/fund/reports'}} icon={<ReportsIcon />} />
      </BottomNavigation>
    </Paper>
  );
}