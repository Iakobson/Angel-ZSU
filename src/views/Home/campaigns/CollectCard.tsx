// @/views/Home/campaignsUI/CollectCard.tsx
import Link from 'next/link';
// MUI components
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { IFundRaising } from '@/models/interfaces';
type CollectCardProps = { collectData:IFundRaising } ;

import { getFundraisingImagePath } from '@/services/utils';

const CollectCard = ( { collectData }:CollectCardProps ) => {
  const fundraisingImagePath = getFundraisingImagePath(collectData.variation);

  return (
    <Box sx={{ px: 2, pt: 1, pb: 5 }}>
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 8 }}>
	    {/* актульність та різновид збору */}
	    <CardHeader
        sx={{ color: collectData.isActual ? 'warning.main' : 'text.primary' }}
        title={collectData.isActual ? 'Актуальний Збір' : 'Збір Закрито'}
        subheader={collectData.variation}
      />
	  {/* картинка, що залежить від різновиду збору */}
	  <CardMedia component="img"
        sx={{ objectFit: 'cover', height: '100%', }}
        image={fundraisingImagePath}
        alt={collectData.variation}
      />
	  {/* Інформація щодо конкретного збору коштів */}
      <CardContent>
        <Typography variant="h5" color="info.main" mb={1}>
          {collectData.purpose}
        </Typography>
        <Typography variant="body2" mb={1}>
          {collectData.info}
        </Typography>
        <Typography variant="body1" mt={2}>
          {collectData.value}
        </Typography>
      </CardContent>
      <CardActions sx={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
        {/* функціональні кнопки для відвідувача сайту */}
        <Box sx={{ mb:2,
		    display:'flex', gap:2, justifyContent:'center', 
			flexDirection: { xs: 'column', sm: 'column', md: 'row' }
		  }}
		>
          <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />} >
            YouTube запиту
          </Button>
          <Button variant="outlined" size="small" startIcon={<PlayCircleOutlinedIcon />} >
            YouTube звіту
          </Button>
        </Box>
        <Box sx={{ display:'flex', justifyContent:'center', mb:2 }}>
          <Link href={'/donate'} >
            <Button variant="contained" size="small" color="success">
              {collectData.isActual ? 'Задонатити на збір' : 'Підтримати команду'}
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
    </Card>
	</Box>
  );
};
export default CollectCard;
