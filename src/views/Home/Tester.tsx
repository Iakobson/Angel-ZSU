// @/views/Home/Tester.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Tester = () => {
  return (
    <>
      <Box component="section"
	  display="flex" justifyContent="space-evenly" alignItems="center">
	  {/* текстовий блок */}
	  <Box sx={{
	    width: '100%', maxWidth: 500,
          m: 2, p: 2,
          border: '1px solid #ccc', borderRadius: 8,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
	  }}>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
          <Typography variant="subtitle1" gutterBottom>subtitle1. Quos blanditiis tenetur</Typography>
          <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum dolor amet.</Typography>
          <Typography variant="body1" gutterBottom>body1. Eum quasi quidem quibusdam.</Typography>
          <Typography variant="body2" gutterBottom>body2. Lorem consectetur adipisicing elit.</Typography>
        </Box>
	  {/* текстовий блок */}
	  <Paper elevation={2} sx={{
	    width: '100%', maxWidth: 500,
          m: 2, p: 2,
          border: '1px solid #ccc', borderRadius: 8,
	  }}>
          <Typography variant="h1" gutterBottom>h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>h2. Heading</Typography>
          <Typography variant="h3" gutterBottom>h3. Heading</Typography>
          <Typography variant="h4" gutterBottom>h4. Heading</Typography>
          <Typography variant="h5" gutterBottom>h5. Heading</Typography>
          <Typography variant="h6" gutterBottom>h6. Heading</Typography>
          <Typography variant="subtitle1" gutterBottom>subtitle1. Quos blanditiis tenetur</Typography>
          <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum dolor amet.</Typography>
          <Typography variant="body1" gutterBottom>body1. Eum quasi quidem quibusdam.</Typography>
          <Typography variant="body2" gutterBottom>body2. Lorem consectetur adipisicing elit.</Typography>
        </Paper>
      </Box>

      <Box display="flex" justifyContent="space-evenly" alignItems="center"
	    sx={{ py:2 }}
	  >
        {/* ряд з трьома кнопками */}
        <Button color="primary" variant="text">Primary Button</Button>
        <Button color="primary" variant="outlined">Outlined Primary Button</Button>
        <Button color="primary" variant="contained">Contained Primary Button</Button>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignItems="center"
	    sx={{ py:2 }}
	  >
        {/* ряд з трьома кнопками */}
        <Button color="secondary" variant="text">Secondary Button</Button>
        <Button color="secondary" variant="outlined">Outlined Secondary Button</Button>
        <Button color="secondary" variant="contained">Contained Secondary Button</Button>
      </Box>
	  <Box display="flex" justifyContent="space-evenly" alignItems="center"
	    sx={{ py:2 }}
	  >
        {/* ряд з трьома кнопками */}
        <Button color="secondary" variant="text">Secondary Button</Button>
        <Button color="secondary" variant="outlined">Outlined Secondary Button</Button>
        <Button color="secondary" variant="contained">Contained Secondary Button</Button>
      </Box>
    </>
  );
};

export default Tester;







