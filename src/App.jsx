import { IconButton, Container, Typography, Grid, Tooltip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SpectaclePrescription from './components/SpectaclePrescription';


function App() {
  

  return (
    <>

      <Container maxWidth="md" sx={{ background: "#fdfdfd"}}>
        <Typography variant='h4' sx={{ martinBottom: "3rem"}}>Contact Lens Prescription Calculator</Typography>
        <Tooltip title="Spectacle Rx to Contact Rx calculator">
          <IconButton>
              <FeedbackIcon />
          </IconButton>
        </Tooltip>
      </Container>

      <Grid container spacing={2}>
        <Grid item>
          <Typography variant='h5' sx={{ martinBotom: "3rem"}}>OD</Typography>
        </Grid>      
      </Grid>

      <Grid container spacing={2}>
        <SpectaclePrescription />        
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
        <Typography variant='h5' sx={{ martinBottom: "3rem"}}>OS</Typography>
        </Grid>      
      </Grid>

      <Grid container spacing={2}>
        <SpectaclePrescription />        
      </Grid>
      
    </>
  )
}

export default App
