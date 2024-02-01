// @/views/Campaigns/VideoCampaigns.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoGallery from '@/views/Common/VideoGallery';
// information from the database
import {
  requestsForCarsVideos, requestFromMilitaryMedicsVideos, requestForUFOvideos, requestForMilitaryEquipmentVideos
} from '@/services/fund-YouTube-data';

const VideoRequestsForCars = () => {
  return (
    <Box >
      <VideoGallery videoUrls={requestsForCarsVideos} />
    </Box>
  );
};

const VideoRequestFromMilitaryMedics = () => {
  return (
    <Box >
      <VideoGallery videoUrls={requestFromMilitaryMedicsVideos} />
    </Box>
  );
};

const VideoRequestForUFO = () => {
  return (
    <Box >
      <VideoGallery videoUrls={requestForUFOvideos} />
    </Box>
  );
};

const VideoRequestForMilitaryEquipment = () => {
  return (
    <Box >
      <VideoGallery videoUrls={requestForMilitaryEquipmentVideos} />
    </Box>
  );
};
export { VideoRequestsForCars, VideoRequestFromMilitaryMedics, VideoRequestForUFO, VideoRequestForMilitaryEquipment };