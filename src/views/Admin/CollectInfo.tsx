// @/views/Admin/campaignsUI/CollectInfo.tsx
import Link from 'next/link';
// MUI components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// MUI icons
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { IFundRaising } from '@/models/interfaces';
type CollectCardProps = { collectData:IFundRaising } ;

import { getFundraisingImagePath } from '@/services/utils';

const CollectInfo = ( { collectData }:CollectCardProps ) => {
  const fundraisingImagePath = getFundraisingImagePath(collectData.variation);

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
	    {/* актульність та різновид збору */}
		<Typography variant="subtitle1" color="info.main" mb={1}>
          {collectData.is_actual ? 'Актуальний Збір' : 'Збір Закрито'}
        </Typography>
		<Typography paragraph>
          {collectData.variation}
        </Typography>
		
	    {/* Інформація щодо конкретного збору коштів */}
        <Typography variant="subtitle1" color="info.main" mb={1}>
          {collectData.purpose}
        </Typography>
        <Typography variant="body2" mb={1}>
          {collectData.info}
        </Typography>
        <Typography variant="subtitle2" color="primary.dark">
          Ціль: {collectData.value} грн {collectData.is_actual ? '' : 'досягнуто'}
        </Typography>

        {/* функціональні кнопки для відвідувача сайту */}
          <Box sx={{ mb:2,
		        display:'flex', gap:1, justifyContent:'center',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' }
		        }}
          >
            {/* conditional rendering for the button */}
            {collectData.requestVideoUrl && (
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube запиту
              </Button>
            )}
            {/* conditional rendering for the button */}
            {collectData.reportVideoUrl && (
              <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />}>
                YouTube звіту
              </Button>
            )}
          </Box>
		  <Typography variant="body1" mb={1}>
              {collectData.is_actual ? 'Задонатити на Збір' : 'Підтримати Фонд'}
          </Typography>
          <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', mb:2 }}>		    
            {collectData.is_actual && (
			<Link href={'/donate'} >
              <Button variant="contained" size="medium" color="success">
                на Mono банку
              </Button>
            </Link>
			)}
			<Link href={'/donate'} >
              <Button sx={{ mt:1 }} variant="contained" size="medium" color="success">
                за реквізитами
              </Button>
            </Link>			
          </Box>
		  
          {/* функціональні кнопки для адміністратора сайту */}
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb:2 }}>
            <Button variant="contained" size="small" color="secondary" startIcon={<EditNoteRoundedIcon />} >
              <Link href={`/admin/collect/${collectData.id}/edit`} >
                Редагувати
              </Link>
            </Button>
            <Button variant="contained" size="small" color="error" startIcon={<DeleteOutlineRoundedIcon />} >
              Видалити
            </Button>
          </Box>
        </CardActions>
     </Paper>
    </Box>
  );
};
export default CollectCard;
