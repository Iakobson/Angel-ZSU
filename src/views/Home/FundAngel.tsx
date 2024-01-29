// @/views/Home/FundAngel.tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';

import angelOnSUVPic from '../../../public/images/angel-on-SUV.jpg';
import MainTypowriter from '@/views/Home/MainTypowriter';


const FundAngel = () => {
  return (
    <Container sx={{ mb:2 }}>
      <Box
        sx={{
        // use relative position for the parent div
          position: 'relative', overflow: 'hidden',
          width:{xs:'100%', md:'85%'}, height:{ xs: 400, md: 600 },
        }}
      >
        <Image alt={'Angel defends car'}
          src={angelOnSUVPic}
          fill placeholder='blur' quality={90}
          sizes='100vw'
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
        <Box
          sx={{
          // use absolute position for the child element
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            // use higher zIndex than the image
            zIndex: 1,
          }}
        >
          {/* several run-on sentences */}
          <Container
            sx={{
              textAlign: 'center',
              fontSize: {xs:'1.4rem', md:'3.0rem'},
              color: 'primary.contrastText', letterSpacing: 3,
            }}
          >
            <MainTypowriter />
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default FundAngel;