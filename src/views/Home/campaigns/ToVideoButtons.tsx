// @/views/Home/campaigns/ToVideoButtons.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import DvrTwoToneIcon from '@mui/icons-material/DvrTwoTone';

const ToVideoButtons = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
        Архів відеозаписів
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={8} md={4}>
          <Link href="/campaigns" passHref>
            <Button color="primary" variant="contained" size="medium"
              sx={{
                px: 1, letterSpacing: 2,
                '&:hover': {backgroundColor:'sassyYellow', color:'primary.dark' }
              }}
		          startIcon={<OndemandVideoTwoToneIcon/>} fullWidth
            >
            Дивитися відеозапити
            </Button>
          </Link>
        </Grid>
        <Grid item xs={8} md={4}>
          <Link href="/reports" passHref>
            <Button color="secondary" variant="contained" size="medium"
              sx={{
                px: 1, letterSpacing: 2, color: 'primary.dark',
                '&:hover': { color:'secondary.contrastText' }
              }}
              startIcon={<DvrTwoToneIcon/>} fullWidth
            >
            Дивитися відеозвіти
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>

  );
};
export default ToVideoButtons;