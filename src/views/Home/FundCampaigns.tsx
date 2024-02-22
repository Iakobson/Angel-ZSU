// @/views/Home/FundCampaigns.tsx
import { cache } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// views content components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import RaiserCarousele from '@/views/Home/campaignsUI/RaiserCarousele';
import ToVideoBButtons from '@/views/Home/campaignsUI/ToVideoButtons';
import CollectCard from '@/views/Home/campaignsUI/CollectCard';

import {IFundRaising} from '@/models/interfaces';
// get info from data base
import { fetchAllFundRaiserData } from '@/services/get-data';
// extract function with database calls into separate function
const getAllFundRaiserData = cache(async () => {
	return await fetchAllFundRaiserData();
});

const FundCampaigns = async () => {
  const fundRaisers:IFundRaising[] = await getAllFundRaiserData();
  
  if (!fundRaisers || fundRaisers.length === 0) {
    console.log('No Fund Raisers data received.');
    return <p>No Fund Raisers info available.</p>;
  }
  console.log('Received fundRaisers data!');

  return (
    <Box id="fund-campaigns" sx={{ pt:1, pb:{xs:4, md:6} }}>

	    <Container maxWidth="lg">
        <SectionHeader
          title="Актуальні грошові збори"
          description="Приєднуйтеся до наших благодійних ініціатив.
            Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
        />

        {/* Actual cash fees slider*/}
        <RaiserCarousele>
          {fundRaisers.map((fundRaiser) => (
            <CollectCard key={fundRaiser.id} collectData={fundRaiser} />
          ))}
        </RaiserCarousele>

	    </Container>

	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />

    </Box>
  );
};
export default FundCampaigns;
