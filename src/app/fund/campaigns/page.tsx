// @/app/campaigns/page.tsx
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import {
  VideoRequestsForCars, VideoRequestFromMilitaryMedics, VideoRequestForUFO, VideoRequestForMilitaryEquipment
} from '@/views/Campaigns/VideoCampaigns';

export default function CampaignsPage() {
  return (
    <Container maxWidth="lg">
      {/* requests for cars and auto goods */}
      <SectionHeader
        title="Запити на автомобілі та автотовари"
        description="відео звернення"
      />
      <VideoRequestsForCars />
      {/* requests from military medics */}
      <SectionHeader
        title="Запити від військових медиків"
        description="відео звернення"
      />
      <VideoRequestFromMilitaryMedics />
      {/* requests for unmanned aerial vehicles */}
      <SectionHeader
        title="Запити на безпілотні літальні апарати"
        description="відео звернення"
      />
      <VideoRequestForUFO />
      {/* requests for military equipment */}
      <SectionHeader
        title="Запити на військове та інше обладнання"
        description="відео звернення"
      />
      <VideoRequestForMilitaryEquipment />
    </Container>
  );
}