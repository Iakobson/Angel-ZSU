/* eslint-disable @next/next/no-img-element */
// @/views/Common/YouTubeFrame.tsx
'use client';
import { useRef } from 'react';
import Box from '@mui/material/Box';

export type YouTubeFrameProps = {
  video:string;
  width:string;
  height:string;
};

const YouTubeFrame:React.FC<YouTubeFrameProps> = ({
  video,
  width,
  height,
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const makeFrame = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = '';
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <Box position="relative"
      overflow="hidden" borderRadius={4}
      sx={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 4, cursor: 'pointer',
        '& img': {
          width: '100%', height: '100%',
          objectFit: 'cover', borderRadius: 4,
        },
      }}
      ref={divRef}
    >
      <img alt="YouTube Video Thumbnail"
        onClick={makeFrame}
        loading="lazy"
        src={`https://i.ytimg.com/vi/${video}/mqdefault.jpg`}
      />
    </Box>
  );
};
export default YouTubeFrame;