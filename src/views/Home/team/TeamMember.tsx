// @/views/Home/team/TeamMember.tsx
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ITeamMember } from '@/models/interfaces';
interface MemberProps {
  member:ITeamMember;
};

export default function TeamMember({ member }:ITeamMember) {
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
            height: 200, mb: 2, borderRadius: 3,
            lineHeight: 0, overflow: 'hidden',
          }}
        >
          <Image alt={'Member ' + name}
		    src={photo || 'images/blog/Gratitude-Volounteer-Day.jpg'}
            width={570} height={427}
		  />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ fontSize: '1.4rem' }}>
		    {name}
		  </Typography>
          <Typography sx={{ mb:2, color:'text.secondary' }}>
		    {professional}
		  </Typography>
          <Typography sx={{ mb:2, color:'text.secondary' }} variant="body2">
            {description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>
            {/* eslint-disable-next-line */}
            <img src={territory?.logo} alt={territory?.name + ' logo'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
