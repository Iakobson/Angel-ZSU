// @/app/page.tsc
import { Fragment } from 'react';
import styles from './page.module.css';
// material-ui
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
// views components
import MainTypowriter from '@/views/Home/MainTypowriter';
import mainPic from '../../public/images/angels.jpg';

export default function Home() {
  return (
    <Fragment>
      {/* home page */}
      <Box className={styles.type}
        sx={{display: 'flex', justifyContent: 'center'}}>
        {/* several run-on sentences */}
        <MainTypowriter />
      </Box>
    </Fragment>
  );
}
