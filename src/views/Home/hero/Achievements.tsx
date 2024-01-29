// @/views/Home/hero/Achievements.tsx
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// information from the database
import { IOurAchievement } from '@/models/interfaces';
import { ourAchievements } from '@/services/fund-data';

interface AchievItemProps {
  item:IOurAchievement;
};

const AchievItem = ({ item }:AchievItemProps) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color:'secondary.main', mb:1, fontSize: { xs:30, md:40 }, fontWeight:'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="subtitle2">
        {label}
      </Typography>
    </Box>
  );
};

const Achievements = () => {
  return (
    <Box sx={{ boxShadow: 2, mt:{ xs: 8, md: 0 }, py: 3, px: 7, borderRadius: 4 }}>
      <Grid container spacing={2}>
        {ourAchievements.map((item) => (
          <Grid item key={item.id}  xs={12} md={4}>
            <AchievItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Achievements;
