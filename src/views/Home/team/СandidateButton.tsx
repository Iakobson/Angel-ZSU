// @/views/Home/team/СandidateButton.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AssistantTwoToneIcon from '@mui/icons-material/AssistantTwoTone';

const СandidateButton = () => {
  return (
    <Box sx={{ mt: 8, px: 2, textAlign: 'center' }}>
      <Link href="/candidate" passHref>
        <Button color="primary" variant="contained" size="large"
		      sx={{
            px: 6, letterSpacing: 3,
            '&:hover': {backgroundColor:'sassyYellow', color:'primary.dark', fontWeight:'bold'}
          }}
          startIcon={<AssistantTwoToneIcon/>}
        >
            Стати волонтером
        </Button>
      </Link>
    </Box>
  );
};
export default СandidateButton;