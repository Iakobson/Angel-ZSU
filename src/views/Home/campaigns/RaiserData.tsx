// @/views/Home/campaignsUI/RaiserData.tsx
import CollectCard from '@/views/Home/campaignsUI/CollectCard';

import {IFundRaising} from '@/models/interfaces';
// get info from data base
import { fetchAllFundRaiserData } from '@/services/get-data';

const RaiserData = async () => {
  try {
    const fundRaisers = await fetchAllFundRaiserData();

    if (!fundRaisers || fundRaisers.length === 0) {
      console.log('No Fund Raisers data received.');
      return <p>No Fund Raisers info available.</p>;
    }

    return (
      <div>
        {fundRaisers.map((fundRaiser, index) => (
          <CollectCard key={index} collectData={fundRaiser} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching fund raiser data:', error);
    return <p>Error fetching fund raiser data. Please try again later.</p>;
  }
};
export default RaiserData;
