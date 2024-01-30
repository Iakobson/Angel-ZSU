// @/app/contacts/page.tsx
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';


export default function ContactsPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >

      <Typography paragraph>
        Тут будуть наші контакти.
      </Typography>

    </Box>
  );
}