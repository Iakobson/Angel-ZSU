// @/views/Common/VideoGallery.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IOurVideos } from '@/models/interfaces';

interface VideoGalleryProps {
  videoUrls:IOurVideos[];
}

const VideoGallery:React.FC<VideoGalleryProps> = ({ videoUrls }) => {
  return (
    <Box p={1}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 6 }}>
        {videoUrls.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <iframe
              width="100%" height="315"
              src={video.url}
              title={`YouTube video ${video.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen loading="lazy"
            ></iframe>
            <Typography variant="body1" align="center">
              {video.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default VideoGallery;