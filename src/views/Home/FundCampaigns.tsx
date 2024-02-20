// @/views/Home/FundCampaigns.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
// MUI icons
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
// views content components
import SectionHeader from '@/views/CommonUI/SectionHeader';
// import RaiserCarousele from '@/views/Home/campaignsUI/RaiserCarousele';
import RaiserData from '@/views/Home/campaignsUI/RaiserData';
import ToVideoBButtons from '@/views/Home/campaignsUI/ToVideoButtons';

const FundCampaigns = () => {
  

  return (
    <Box id="fund-campaigns" sx={{ pt:1, pb:{xs:4, md:6} }}>
	  <Container maxWidth="lg">

        <SectionHeader
          title="Актуальні грошові збори"
          description="Приєднуйтеся до наших благодійних ініціатив.
            Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
        />

        {/* Actual cash fees slider*/}
        
          <RaiserData />
        
		
	  </Container>

	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />

    </Box>
  );
};
export default FundCampaigns;
