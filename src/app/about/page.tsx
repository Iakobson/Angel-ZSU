// @/app/about/page.tsx
import styles from './page.module.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import backPic from '../../../public/images/about-angels.jpg';

export default function AboutPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backPic.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Про нас
        </Typography>
        <Typography paragraph>
          <strong>Благодійний фонд &ldquo;Янгол ЗСУ&rdquo;</strong> — це ініціатива, створена з метою
          надання підтримки воїнам Збройних Сил України.
        </Typography>
        <Typography paragraph>
          Наш фонд покликаний забезпечувати допомогу воїнам-учасникам бойових дій у важкі часи.
          Ми віримо у важливість підтримки та допомоги тим, хто віддає своє життя за захист і безпеку України.
        </Typography>
        <Typography paragraph>
          <strong>Наша місія</strong> — надавати фінансову допомогу, психологічну підтримку та необхідні ресурси
          для поліпшення роботи наших героїв. Ми віримо в те, що кожен може внести свій вклад у створення кращого
          майбутнього для нашої країни.
        </Typography>
        <Typography paragraph>
          Приєднуйтеся до нашого фонду та допоможіть нам разом підтримати тих, хто віддає своє найкраще для
          безпеки і свободи України.
        </Typography>
      </Paper>
    </Box>
  );
}
