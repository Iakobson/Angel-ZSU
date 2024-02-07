// @/views/Home/hero/ScrollingButtons.tsx
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ScrollingButtons = () => {
  return (
    <Box sx={{ '& button': { mr: { xs:1, md:3 } } }}>
      <Link href="/#fund-campaigns" passHref>
        <Button color="primary" variant="contained" size="large">
            Актуальні збори
        </Button>
      </Link>
      <Link href="/#fund-blog" passHref>
        <Button color="primary" variant="outlined" size="large"
          startIcon={<SendIcon/>}
        >
            Наш блог
        </Button>
      </Link>
    </Box>

  );
};
export default ScrollingButtons;