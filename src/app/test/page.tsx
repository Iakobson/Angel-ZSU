// @/app/test/page.tsc
// material-ui
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
// views components
import MainTypowriter from '@/views/Home/MainTypowriter';
import Tester from '@/views/Home/Tester';

export default function TestPage() {
  return (
    <>
      {/* test page */}
      <Box>
        <Container sx={{
		      marginBottom:2, padding:1, textAlign:'center',
		      color:'fadedLilac', letterSpacing:3, fontSize: { xs:'1.2rem', md:'1.6rem' }
        }}>
          {/* several run-on sentences */}
          <MainTypowriter />
        </Container>

        {/* color palette settings */}
        <Tester />


      </Box>
    </>
  );
}
