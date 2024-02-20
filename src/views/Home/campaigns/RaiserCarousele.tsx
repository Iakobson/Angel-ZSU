// @/views/Home/campaignsUI/RaiserCarousele.tsx
'use client';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// MUI components
import IconButton from '@mui/material/IconButton';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';

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

// pass Server Component as a child or prop
const RaiserCarousele = ( {children}:{children:React.ReactNode} ) => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('sm'));
  const matchTabletView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig:Settings = {
    slidesToShow: matchMobileView ? 1 : (matchTabletView ? 2 : 3),
    slidesToScroll: 1, dots: false,
    prevArrow: <SliderArrow type="prev" />, nextArrow: <SliderArrow type="next" />,
  };

  return (
    <>
      {/* Actual cash fees slider*/}
      <Slider {...sliderConfig}>
        {children}
      </Slider>
    </>
  );
};
export default RaiserCarousele;
