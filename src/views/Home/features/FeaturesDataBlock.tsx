// @/views/Home/features/FeaturesDataBlock.tsx
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import { IFundFeatures } from '@/models/interfaces';
/* ----- Особливості фонду ----- */
export const fundFeatures:IFundFeatures[] = [
  {
    title: 'Easy Accessable',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ArtTrackIcon />
  },
  {
    title: 'More Affordable Cost',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <AttachMoneyIcon />
  },
  {
    title: 'Flexible Study Time',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LocalLibraryIcon />
  },
  {
    title: 'Consultation With Mentor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ContactSupportIcon />
  },
];

const FeaturesDataBlock = () => {
  return (
    <Grid container spacing={2} >
      {fundFeatures.map(({ title, description, icon }, index) => (
        <Grid item key={title}  xs={12} md={6}>
          <Box
		        sx={{ display: 'flex', alignItems: 'center',
			        px: 2, py: 1.5, my: 1,
              boxShadow: 2, borderRadius: 4
		        }}
		      >
            <Box
              sx={{ display: 'flex',
                mr: 1, height: 36, width: 36, borderRadius: '50%',
                alignItems: 'center', justifyContent: 'center',
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                '& svg': { fontSize: 20 },
              }}
            >
              {icon}
            </Box>
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Typography variant="h5" sx={{ fontSize: '1.2rem', mb: 1, color: 'secondary.dark' }}>
                {title}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
export default FeaturesDataBlock;