// @/views/Admin/FundCollects.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// views content components
 import CollectInfo from '@/views/Admin/CollectInfo.tsx';

import {IFundRaising} from '@/models/interfaces';
// get info from data base
import { fetchAllFundRaiserData } from '@/services/get-data';

const FundCollects = async () => {
  const fundRaisers:IFundRaising[] = await fetchAllFundRaiserData();
  
  if (!fundRaisers || fundRaisers.length === 0) {
    console.log('No Fund Raisers data received.');
    return <p>No Fund Raisers info available.</p>;
  }
  console.log('Received Collects Info!');

  return (
    <Box sx={{ py: 2, my: 2 }}>    

      {fundRaisers.map((fundRaiser) => (
        <CollectInfo key={fundRaiser.id} collectData={fundRaiser} />
      ))}

    </Box>
  );
};
export default FundCollects;
