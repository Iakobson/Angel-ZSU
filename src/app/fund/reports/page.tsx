// @/app/reports/page.tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import VideoReports from '@/views/Reports/VideoReports';

export default function ReportsPage() {
  return (
    <Container maxWidth="lg">
      <SectionHeader
        title="Відео звіти"
        description="Що було виконано."
      />
      {/* Додатковий вміст вашого розділу */}
      <VideoReports />


    </Container>
  );
}