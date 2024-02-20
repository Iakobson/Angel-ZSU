// @/views/Home/campaignsUI/RaiserData.tsx
import CollectCard from '@/views/Home/campaignsUI/CollectCard';

// get info from data base
import { fetchAllFundRaiserData } from '@/services/get-data';


export default async function FundRaiserData() {
  const fundRaisers = await fetchAllFundRaiserData();

  if (!fundRaisers || fundRaisers.length === 0) {
    console.log('No Fund Raisers data received.');
    return <p>No Fund Raisers available.</p>;
  }

  return (
    <>
      {fundRaisers.map((fundRaiser, index) => (
        <CollectCard key={index} collectData={fundRaiser} />
      ))}

    </>
  );
}