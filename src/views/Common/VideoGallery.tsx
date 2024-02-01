// @/views/Common/VideoGallery.tsx
import { Suspense } from 'react';
import { VideoCardSkeleton}  from '@/views/Common/Skeletons';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import { IOurVideos } from '@/models/interfaces';
interface VideoGalleryProps {
  videoUrls:IOurVideos[];
}

const VideoGallery:React.FC<VideoGalleryProps> = ({ videoUrls }) => {
  return (
    <Box p={1}>
      <Grid container rowSpacing={1} columnSpacing={{ xs:1, sm:2, md:3, lg:6 }}>
        {videoUrls.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Suspense fallback={<VideoCardSkeleton />}>
			<Card>
			  {/*
              <CardMedia title={`YouTube video ${video.title}`}
                component="iframe" src={video.url}
                width="100%" height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen loading="lazy"
              />
			  */}
			  <iframe
                title={`YouTube video ${video.title}`}
                src={video.url}
                width="100%" height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
              <CardContent>
                <Typography variant="body1">
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
			</Suspense>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default VideoGallery;
