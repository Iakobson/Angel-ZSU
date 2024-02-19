// @/views/Home/FundCampaigns.tsx
'use client';
import Slider, { Settings } from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// views content components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import CollectCard from '@/views/Home/campaignsUI/CollectCard';
import ToVideoBButtons from '@/views/Home/campaignsUI/ToVideoButtons';
// info from data base
import { fundRaisingData } from '@/services/get-data';

const FundCampaigns = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('sm'));
  const matchTabletView = useMediaQuery(breakpoints.down('md'));
  
  const sliderConfig:Settings = {
    slidesToShow: matchMobileView ? 1 : (matchTabletView ? 2 : 3), 
	slidesToScroll: 1, dots: false
  };
  
  return (
    <Box id="fund-campaigns" sx={{ pt:1, pb:{xs:4, md:6} }}>
	  <Container maxWidth="lg">
	
        <SectionHeader
          title="Актуальні грошові збори"
          description="Приєднуйтеся до наших благодійних ініціатив.
            Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
        />
	  
        {/* Actual cash fees slider*/}
        <Slider {...sliderConfig}>         
           <CollectCard collectData={fundRaisingData[3]}/>
           <CollectCard collectData={fundRaisingData[2]}/>
           <CollectCard collectData={fundRaisingData[1]}/>
           <CollectCard collectData={fundRaisingData[0]}/>
        </Slider>
	  </Container>
      
	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />
      
    </Box>
  );
};
export default FundCampaigns;
