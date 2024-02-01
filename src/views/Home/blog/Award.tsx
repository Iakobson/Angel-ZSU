// @/views/Home/blog/Award.tsx
import Image from 'next/image';
// surface-level container for grouping related components
import Card from '@mui/material/Card';
// an optional wrapper for the Card header
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';
// container for displaying background images and gradient layers
import CardMedia from '@mui/material/CardMedia';
// the wrapper for the Card content
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { IOurAward } from '@/models/interfaces';

interface AwardProps {
  award:IOurAward;
};

export default function Award({ award }:AwardProps) {
  const { id, title, image, body } = award;
  // import awardPic from image;

  return (
    <Card sx={{ boxShadow: 4, borderRadius: 4 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="award"
            sx={{ bgcolor:'polliwog', color:'primary.main' }}
          >
              ЗСУ
          </Avatar>
        }
        action={
          <IconButton aria-label="gratitude" size="large">
            <VolunteerActivismTwoToneIcon color='primary'/>
          </IconButton>
        }
        title={title}
      />
      <CardMedia component="img" alt={title}
        sx={{ objectFit: 'cover', height: '380px', }}
        image={image || '/images/blog/Gratitude-Volounteer-Day.jpg'}
      />	  
	  {/*
	  <CardMedia
        sx={{ position: 'relative' }}>
        <Image
          src={image}
          width={320}
          height={360}
          alt={title}
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
	  */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
