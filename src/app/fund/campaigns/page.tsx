// @/app/campaigns/page.tsx
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import VideoCampaigns from '@/views/Campaigns/VideoCampaigns';

export default function CampaignsPage() {
  return (
    <Container maxWidth="lg">
      <SectionHeader
        title="Відео запити"
        description="Що запитували військові"
      />
      {/* Додатковий вміст вашого розділу */}
      <VideoCampaigns />

    </Container>
  );
}