// @/views/Home/FundFrame.tsx
import Link from 'next/link';
import YouTubeFrame from '@/views/CommonUI/YouTubeFrame';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const FundFrame:React.FC = () => {
  const videoId = 'ZRwwa9RFv70';

  return (
    <Box sx={{ bgcolor:'background.paper', py: {xs: 2, md: 4} , px: {xs: 2, md: 0} }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
		    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea sx={{ flex: 1 }}>
                <YouTubeFrame
                  video={videoId}
                  width='100%' height='600'
                />
                <CardContent>
                  <Typography variant="body2">
                    🔥 Мегазбір на автомобілі та дрони для військовослужбовців в гарячих точках! 🔥 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom color="primary.main">
              Мега збір на 3 000 000 грн
            </Typography>
            <Typography variant="body1" paragraph>
              Долучайтесь до збору та отримайте змогу виграти один з сотні ексклюзивних подарунків!
            </Typography>
            <Typography variant="body1" paragraph>
              Головний ЛОТ збору - прапор з підписом Валерія ЗАЛУЖНОГО!
            </Typography>
			<Box >
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={9} >
			  <Link href={'https://send.monobank.ua/jar/8W7xqUd953'}
                rel="noopener noreferrer" target="_blank" passHref >
                <Button color="primary" variant="contained" size="large"
				  sx={{
                    px: 4, py: 1, letterSpacing: 3,
                    '&:hover': {backgroundColor:'sassyYellow', color:'primary.dark', fontWeight:'bold'}
                  }}
				>
                  донат на Mono банку
                </Button>
              </Link>
			  </Grid>
              <Grid item xs={9} >
              <Link href={'/'} >
                <Button variant="outlined" size="large" color="success"
				  sx={{px: 2, py: 1, letterSpacing: 3 }}
				>
                  донат за реквізитами
                </Button>
              </Link>
			  </Grid>
              <Grid item xs={9} >
			  <Link href={'https://linktr.ee/BFAngelZSU'}
                rel="noopener noreferrer" target="_blank" passHref >
                <Button
				color="secondary" variant="contained" size="large"
              sx={{
                px: 5, py: 1, letterSpacing: 3, color: 'primary.dark',
                '&:hover': { color:'secondary.contrastText' }
              }}
				>
                  подарунки за донат
                </Button>
              </Link>
			  </Grid>
             </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FundFrame;
