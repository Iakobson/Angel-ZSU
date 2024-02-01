// @/views/Reports/VideoReports.tsx
import Box from '@mui/material/Box';
// views component
import VideoGallery from '@/views/Common/VideoGallery';
// information from the database
import {
  reportOfCarsVideos, reportOfMedicalInstruments, reportOfUFOvideos, reportOfUsefulThingsVideos
} from '@/services/fund-YouTube-data';

const VideoOfCarsReports = () => {
  return (
    <Box >
      <VideoGallery videoUrls={reportOfCarsVideos} />
    </Box>
  );
};

const VideoOfMedicalInstrumentsReports = () => {
  return (
    <Box >
      <VideoGallery videoUrls={reportOfMedicalInstruments} />
    </Box>
  );
};

const VideoOfUFOreports = () => {
  return (
    <Box >
      <VideoGallery videoUrls={reportOfUFOvideos} />
    </Box>
  );
};

const VideoOfUsefulThingsReports = () => {
  return (
    <Box >
      <VideoGallery videoUrls={reportOfUsefulThingsVideos} />
    </Box>
  );
};

export { VideoOfCarsReports, VideoOfMedicalInstrumentsReports, VideoOfUFOreports, VideoOfUsefulThingsReports };