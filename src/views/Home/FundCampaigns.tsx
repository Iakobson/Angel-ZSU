// @/views/Home/FundCampaigns.tsx
'use client';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
// MUI icons
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
// views content components
import SectionHeader from '@/views/CommonUI/SectionHeader';
import FundRaiserData from '@/views/Home/campaignsUI/RaiserData';
import ToVideoBButtons from '@/views/Home/campaignsUI/ToVideoButtons';

interface SliderArrowArrow {
  onClick?:()=>void;
  type:'next'|'prev';
  className?:'string';
};
const SliderArrow:FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton className={className} aria-label='flip through picture slides'
      disableRipple color="inherit" onClick={onClick}
      sx={{
	    bottom: '-18px !important', left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        backgroundColor: 'sassyYellow',
        color: 'primary.dark', boxShadow: 1,
        '&:hover': {backgroundColor:'primary.main', color:'primary.contrastText'},
        zIndex: 10,
      }}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const FundCampaigns = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('sm'));
  const matchTabletView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig:Settings = {
    slidesToShow: matchMobileView ? 1 : (matchTabletView ? 2 : 3),
    slidesToScroll: 1, dots: false,
    prevArrow: <SliderArrow type="prev" />, nextArrow: <SliderArrow type="next" />,
  };

  return (
    <Box id="fund-campaigns" sx={{ pt:1, pb:{xs:4, md:6} }}>
	  <Container maxWidth="lg">

        <SectionHeader
          title="Актуальні грошові збори"
          description="Приєднуйтеся до наших благодійних ініціатив.
            Ваш внесок допомагає підтримати важливі проекти та надати допомогу тим, хто цього найбільше потребує."
        />

        {/* Actual cash fees slider*/}
        <Slider {...sliderConfig}>
          <FundRaiserData />
        </Slider>
	  </Container>

	    {/* Buttons to go to pages with videos */}
	    <ToVideoBButtons />

    </Box>
  );
};
export default FundCampaigns;
