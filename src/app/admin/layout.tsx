// @/app/admin/layout.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Layout({ children }:{ children:React.ReactNode }) {
  return (
    <Container>
      <Typography variant="h1" color="info.main">
        Панель адміністратора
      </Typography>
      {children}
    </Container>
  );
}