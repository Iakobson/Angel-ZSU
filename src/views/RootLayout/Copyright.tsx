// @/views/RootLayout/Copyright.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        '@media (min-width:600px)': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        },
      }}
    >
      <Typography variant="body2" sx={{ color: 'fadedLilac' }}>
        {'Copyright © '}
        <Link href="https://angelzsu.com/">Angel ZSU</Link>
        {' '}{new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="fadedLilac" sx={{ marginTop: { xs: '10px', md: '0' } }}>
        {'Site designed '}
        <Link href="https://github.com/SKindij" rel="noopener noreferrer" target="_blank">
		  by SKindij
        </Link>
      </Typography>
    </Box>
  );
};

export default Copyright;