import { IconButton, Container, Typography, Grid, Tooltip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SpectaclePrescription from './components/SpectaclePrescription';


function App() {
  const boxStyles = { 
    background: "#fdfdfd",
    marginTop: "1rem",
    textAlign: "center",
    color: "#222",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }
  

  return (
    <>

      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h4' sx={{ martinBottom: "2rem"}}>Contact Lens Prescription Calculator</Typography>
        <Tooltip title="Spectacle Rx to Contact Rx calculator">
          <IconButton>
              <FeedbackIcon />
          </IconButton>
        </Tooltip>
        <Grid container spacing={2}>
        <Grid item>
          <Typography variant='h5' sx={{ martinBotom: "2rem"}}>OD</Typography>
        </Grid>      
        </Grid>

        <Grid container spacing={2}>
          <SpectaclePrescription eye="OD" />        
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
          <Typography variant='h5' sx={{ martinBottom: "2rem"}}>OS</Typography>
          </Grid>      
        </Grid>

        <Grid container spacing={2}>
          <SpectaclePrescription eye="OS" />        
        </Grid>
      </Container>      
      
    </>
  )
}

export default App
