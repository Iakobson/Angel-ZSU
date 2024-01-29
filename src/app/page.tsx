// @/app/page.tsc
import { Fragment } from 'react';
// material-ui
import Typography from '@mui/material/Typography';
import Link from 'next/link';
// views components
import FundHero from '@/views/Home/FundHero';
import FundAngel from '@/views/Home/FundAngel';
import FundCampaigns from '@/views/Home/FundCampaigns';
import FundTeam from '@/views/Home/FundTeam';
import FundBlog from '@/views/Home/FundBlog';

export default function Home() {
  return (
    <div>
      {/* welcome content block */}
      <FundHero />
      {/* Angel Image block */}
      <FundAngel />
	    {/* actual cash fees */}
	    <FundCampaigns />
      {/* members of our fund */}
	    <FundTeam />
	    {/* some more information */}
	    <FundBlog />
    </div>
  );
};