// @/views/Home/campaigns/ToVideoButtons.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ToVideoButtons = () => {
  return (
    <Box sx={{ '& button': { mr: { xs:1, md:3 } } }}>
      <Link href="/campaigns" passHref>
        <Button color="primary" variant="contained" size="large"
		  startIcon={<SendIcon/>}
		>
            Дивитися відеозапити
        </Button>
      </Link>
      <Link href="/reports" passHref>
        <Button color="primary" variant="outlined" size="large"
          startIcon={<SendIcon/>}
        >
            Дивитися відеозвіти
        </Button>
      </Link>
    </Box>

  );
};
export default ToVideoButtons;
