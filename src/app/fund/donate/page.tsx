// @/app/donate/page.tsx
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import qrCode from '../../../../public/images/donate/qr-pb-donate.webp';

export default function DonatePage() {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '5px',
      }}
    >
      <Paper
        sx={{
          padding: '20px', maxWidth: '1000px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Важливо!!! Отримувач тільки Крутоголов Юлія Сергіївна
        </Typography>
        <Image
          src={qrCode} alt="ПриватБанк QR Code"
          width={300} height={300}
        />
        <Typography paragraph>
          <strong>АТ КБ Приватбанк</strong>
        </Typography>
        <Typography paragraph>
          Отримувач: Крутоголов Юлія Сергіївна
        </Typography>
        <Typography paragraph>
          Р/р: UA243052990000026004045030722
        </Typography>
        <Typography paragraph>
          Код отримувача: 45089754
        </Typography>
        <Typography paragraph>
          IBAN: UA243052990000026004045030722
        </Typography>
        <Typography paragraph>
          Призначення платежу: Добровільні внески БО БФ ЯНГОЛ ЗСУ
        </Typography>
      </Paper>
    </Box>
  );
}
