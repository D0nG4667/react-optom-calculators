import { IconButton, Container, Typography, Grid, Tooltip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SpectaclePrescription from './components/SpectaclePrescription';
import ContactPrescription from './components/ContactPrescription';
import ContactProvider from './context/ContactContext.jsx';
import Footer from './components/Footer';

// Vercel Analytics
import { inject } from '@vercel/analytics'
import GoogleAdsense from './components/GoogleAdsense';


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
      {/* // Vercel Analytics */}
      {inject()}
      
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h4'>Contact Lens Prescription Calculator</Typography>
        <Tooltip title="Spectacle Rx to Contact Rx calculator" sx={{ marginBottom: "2rem"}}>
          <IconButton>
              <FeedbackIcon />
          </IconButton>
        </Tooltip>
        <Grid container spacing={2}>
        <Grid item>
          <Typography variant='h5' sx={{ marginBottom: "1rem"}}>OD</Typography>
        </Grid>      
        </Grid>

        <Grid container spacing={2}>
          <SpectaclePrescription eye="OD" />        
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
          <Typography variant='h5' sx={{ marginBottom: "1rem"}}>OS</Typography>
          </Grid>      
        </Grid>

        <Grid container spacing={2}>
          <SpectaclePrescription eye="OS" />        
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            <Typography variant='h5' sx={{ marginBottom: "1rem"}}>CL Rx</Typography>
          </Grid>      
        </Grid>

        <Grid container spacing={1}> 
          <ContactProvider>      
              <ContactPrescription />  
          </ContactProvider>   
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "2rem"}}>
          <Footer />
        </Grid>                  

          
      </Container>

      {/* Google Adsense Container */}
      <Container>
        <GoogleAdsense />
      </Container>              
    </>
  )
}

export default App
