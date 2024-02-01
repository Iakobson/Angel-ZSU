// @/views/Common/SectionHeader.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionHeaderProps {
  title:string;
  description:string;
}

const SectionHeader:React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <Box sx={{ my: 3, px: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, textAlign:'center' }}>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ textAlign:'center' }}>
        {description}
      </Typography>
    </Box>
  );
};
export default SectionHeader;