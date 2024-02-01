// @/views/Donate/BankDetails.tsx
import Image from 'next/image';
// MUI components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import qrCode from '../../../public/images/donate/qr-pb-donate.webp';

const BankDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', mb: 5,
      }}
    >
      <Paper
        sx={{
          padding: '20px', maxWidth: '1000px',
          textAlign: 'center', boxShadow: 3
        }}
      >
        <Typography variant="h5" gutterBottom>
          АТ КБ Приватбанк
        </Typography>
        <Image
          src={qrCode} alt="ПриватБанк QR Code"
          width={200} height={200}
        />
        <Typography paragraph>
          <strong>Отримувач:</strong> Крутоголов Юлія Сергіївна
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
};
export default BankDetails;