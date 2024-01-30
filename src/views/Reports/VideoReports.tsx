// @/views/Reports/VideoReports.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import VideoGallery from '@/views/Common/VideoGallery';
// information from the database
import { ourReportVideos } from '@/services/fund-data';

const VideoReports = () => {
  return (
    <Box >
      <VideoGallery videoUrls={ourReportVideos} />
    </Box>
  );
};
export default VideoReports;