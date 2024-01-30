// @/views/Home/FundHero.tsx
import React from 'react';
import Image from 'next/image';
// MUI components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// use local images
import angelBrendPic from '../../../public/images/layout/angel-zsu-brend-480.png';
// views content components
import Slogan from '@/views/Home/hero/Slogan';
import ScrollingButtons from '@/views/Home/hero/ScrollingButtons';
import Achievements from '@/views/Home/hero/Achievements';

const FundHero = () => {
  return (
    <Box id="fund-hero" sx={{ position:'relative', pt:1, pb: { xs:3, md:6 } }}>
      <Container maxWidth="lg">

        <Grid container spacing={0} sx={{ flexDirection: { xs:'column', md:'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{ display: 'flex', height: '100%',
                textAlign: { xs:'center', md:'left' },
                flexDirection:'column', justifyContent:'center',
              }}
            >
              {/* motivational motto */}
              <Slogan />
			        {/* eslint-disable-next-line */}
              <Box sx={{ mb: 4, width: { xs:'100%', md:'70%' } }}>
                <Typography sx={{ color:'text.secondary', lineHeight:1.6, fontWeight:'medium' }}>
                  {'Наша команда закриває запити у досить короткі терміни та відвозить все необхідне у найгарячіші точки України.'}
                </Typography>
              </Box>
			        {/* scroll to fund-campaigns or fund-blog */}
              <ScrollingButtons />
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Ukrainian Trident */}
            <Box
              sx={{ position: 'absolute', zIndex: 1,
                bottom: { xs: -50, md: 30 }, left: { xs: 50, md: -250 },
                boxShadow: 1, borderRadius: 3,
                px: 2,  py: 1.4, width: 280,
                backgroundColor: 'background.paper',
                display: 'flex', alignItems: 'flex-start'
              }}
            >
              <Box
                sx={{ display: 'flex',
                  boxShadow: 1, borderRadius: '50%',
                  width: 44, height: 44, mr: 2,
                  alignItems: 'center', justifyContent: 'center',
                  '& img': { width:'32px !important', height:'auto' },
                }}
              >
                <Image alt="Ukrainian Trident"
                  src="/images/layout/trident.png" quality={97}
                  width={50} height={50}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ color:'secondary.main', fontWeight:700 }}>
                  Слава нації
                </Typography>
                <Typography variant="subtitle2" sx={{ color:'primary.main', fontWeight:700 }}>
                  Смерть ворогам
                </Typography>
              </Box>
            </Box>
            {/* Angel ZSU brend */}
            <Box sx={{ position: 'relative', height:{ xs:'400px', md:'510px'} }}>
              <Image alt="Angel zsu brend" priority={true}
                src={angelBrendPic} fill
                // full-width on mobile, in 2-column layout on tablet, in 3-column layout on desktop
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: 'contain', // cover, none
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Fund Achievements */}
        <Achievements />

      </Container>
    </Box>
  );
};
export default FundHero;