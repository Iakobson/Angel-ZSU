// @/views/Home/FundCampaigns.tsx
import Box from '@mui/material/Box';
import SectionHeader from '@/views/Common/SectionHeader';

const FundCampaigns = () => {
  return (
    <Box id="fund-campaigns" sx={{ }}>
      <SectionHeader
        title="Актуальні грошові збори"
        description="Приєднуйтеся до наших благодійних ініціатив.
          Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
      />
      {/* Додатковий вміст вашого розділу */}

    </Box>
  );
};
export default FundCampaigns;