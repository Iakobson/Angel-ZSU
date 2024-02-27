// @/app/admin/collect/[id]/edit/page.tsx
import { notFound } from 'next/navigation';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// get information from the database


type Props = {
  params:{ // only property that is an object
    id:string;
  };
};

export default async function CollectEditPage({params: {id}}:Props) {
  // get data of a specific collect and necessary lists of data


  if (!id) {
    notFound();
  }

  return (
    <Container>
      {/* зміна інформації про збір */}
      <Typography variant="h2">
      Редагування картки існуючого збору.
      </Typography>


    </Container>
  );
}