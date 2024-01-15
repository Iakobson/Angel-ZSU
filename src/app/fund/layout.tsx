// @/app/fund/layout.tsx
import Box from '@mui/material/Box';
// views (design) elements
import FundBottomNavigation from '@/views/Fund/FundBottomNavigation';

export default function CategoriesLayout({
  children,
}:{ children:React.ReactNode;
}) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box component="section" sx={{ mb: 6 }}>
        {/*  */}
        {children}
      </Box>
      <FundBottomNavigation />
	  </Box>
  );
}