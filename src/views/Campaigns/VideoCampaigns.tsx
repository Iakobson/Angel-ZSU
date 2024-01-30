// @/views/Campaigns/VideoCampaigns.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoGallery from '@/views/Common/VideoGallery';
// information from the database
import { ourCampaignVideos } from '@/services/fund-data';

const VideoCampaigns = () => {
  return (
    <Box >
      <VideoGallery videoUrls={ourCampaignVideos} />
    </Box>
  );
};
export default VideoCampaigns;