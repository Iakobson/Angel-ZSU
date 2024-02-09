// @/views/Home/team/TeamMember.tsx
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ITeamMember } from '@/models/interfaces';
interface MemberProps {
  member:ITeamMember;
};

export default function TeamMember({ member }:MemberProps) {
  const { name, photo, professional, description, territory } = member;

  return (
    <Box sx={{ px: 2, pt: 1, pb: 5 }}>

      <Box
        sx={{
          p: 2, borderRadius: 4,
          backgroundColor: 'bakeryBox',
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': { boxShadow: 2 },
        }}
      >
        <Box
          sx={{
            mb: 2, borderRadius: 3, aspectRatio: '4 / 3',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <Image alt={'Member ' + name}
		        src={photo || 'images/blog/Gratitude-Volounteer-Day.jpg'}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', // cover, contain, none
            }}
		      />
        </Box>
        {/*
        <Box
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Image alt={'Member ' + name}
		        src={photo || 'images/blog/Gratitude-Volounteer-Day.jpg'}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
		      />
        </Box>
        */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ fontSize: '1.4rem', }}>
		        {name}
		      </Typography>
          <Typography sx={{ mb:2, }}>
		        {professional}
		      </Typography>
          <Typography sx={{ mb:2, }} variant="body2">
            {description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            {/* eslint-disable-next-line */}
            <img src={territory?.logo} alt={territory?.city + ' logo'} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
};
