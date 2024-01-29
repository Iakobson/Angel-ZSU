// @/views/Home/blog/AwardsGrid.tsx
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Award from '@/views/Home/blog/Award';

// information from the database
import { ourAwards } from '@/services/fund-data';

const AwardsGrid = () => {

  return (
    <Container sx={{ mb:2 }}>
      <Grid container justifyContent="space-evenly"
        rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 6 }}
      >
        {ourAwards.map((award) => (
          <Grid item key={award.id} xs={12} sm={6} md={4}>
            <Award award={award} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AwardsGrid;