// @/views/Layout/StickyFooter.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://angelzsu.com/">
        Angel ZSU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StickyFooter = () => {
  return (
    <Box component="footer"
      sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
            My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
export default StickyFooter;