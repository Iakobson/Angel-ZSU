// @/views/Home/FundFeatures.tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
// views components
import angelOnSUVPic from '../../../public/images/angel-on-SUV.png';
import MainTypowriter from '@/views/Home/features/MainTypowriter';
import FeaturesDataBlock from '@/views/Home/features/FeaturesDataBlock';


const FundFeatures = () => {
  return (
    <Box id="features" sx={{ bgcolor:'background.paper', py: { xs: 1, md: 2 } }}>
      <Container maxWidth="lg">

        <Grid container spacing={2} sx={{ flexDirection: { xs:'column', md:'unset' } }}>
		      {/* image with Angel */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', height:'340px' }}>
              <Image alt={'Angel defends car'}
			          src={angelOnSUVPic} fill
                // full-width on mobile, in 2-column layout on tablet, in 3-column layout on desktop
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'contain', // cover, none
                }}
			        />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
		        <Box
              sx={{ display: 'flex', height: '100%',
                textAlign: { xs:'center', md:'left' },
                flexDirection:'column', justifyContent:'space-around',
              }}
            >
              {/* several run-on sentences */}
              <Container
                sx={{
                  textAlign: 'center', height: {xs:'70px', md:'90px'},
                  fontSize: {xs:'1.4rem', md:'2.0rem'}, lineHeight: 1,
                  color: 'primary.dark', letterSpacing: 3,
                }}
              >
                <MainTypowriter />
              </Container>
              {/* block about fund features */}
              <FeaturesDataBlock />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default FundFeatures;