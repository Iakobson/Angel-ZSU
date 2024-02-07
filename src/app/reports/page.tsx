// @/app/reports/page.tsx
import Container from '@mui/material/Container';
// views components
import SectionHeader from '@/views/Common/SectionHeader';
import {
  VideoOfCarsReports, VideoOfMedicalInstrumentsReports, VideoOfUFOreports, VideoOfUsefulThingsReports
} from '@/views/Reports/VideoReports';

export default function ReportsPage() {
  return (
    <Container maxWidth="lg">
      {/* Reports on cars provided by the fund */}
      <SectionHeader
        title="Звіти про надані фондом автівки"
        description="відео повідомлення"
      />
      <VideoOfCarsReports />
      {/* Reports on medical equipment provided by the fund */}
      <SectionHeader
        title="Звіти про надану фондом допомогу медикам"
        description="відео повідомлення"
      />
      <VideoOfMedicalInstrumentsReports />
      {/* Reports on unmanned aerial vehicles provided by the fund */}
      <SectionHeader
        title="Звіти про надані фондом безпілотні літальні апарати"
        description="відео повідомлення"
      />
      <VideoOfUFOreports />
      {/* Reports on useful things for the military provided by the fund */}
      <SectionHeader
        title="Звіти про надані фондом корисні речі для військових"
        description="відео повідомлення"
      />
      <VideoOfUsefulThingsReports />
    </Container>
  );
}