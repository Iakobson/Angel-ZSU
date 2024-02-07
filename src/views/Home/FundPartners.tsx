// @/views/Home/FundPartners.tsx
import Box from '@mui/material/Box';
import SectionHeader from '@/views/Common/SectionHeader';

const FundPartners = () => {
  return (
    <Box id="fund-partners" sx={{ backgroundColor:'background.paper' }}>
      <SectionHeader
        title="Партнери нашого фонду"
        description="Їхні внески та співпраця є невід'ємною частиною нашої успішної роботи на благо спільноти"
      />
      {/* Додатковий вміст вашого розділу */}

    </Box>
  );
};
export default FundPartners;