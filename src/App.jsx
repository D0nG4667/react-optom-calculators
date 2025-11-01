import { useContext } from 'react';
import { IconButton, Container, Typography, Grid, Tooltip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SpectaclePrescription from './components/SpectaclePrescription';
import { SpectacleContext } from './context/SpectacleContext';
import ContactPrescription from './components/ContactPrescription';
import Footer from './components/Footer';

// Vercel Analytics
import { inject } from '@vercel/analytics'
import GoogleAdsense from './components/GoogleAdsense';
import SphericalEquivalentSwitch from './components/SphericalEquivalentSwitch';
import SameBothEyesSwitch from './components/SameBothEyesSwitch';


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

   // Get Both Eyes Boolean variable from SpectacleContext
   const {   
    sameBothEyes,
  } = useContext(SpectacleContext); 
  
    return (
    <>
      {/* // Vercel Analytics */}
      {inject()}
      
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant='h4'>Contact Lens Calculator</Typography>
        <Tooltip title="Spectacle Rx to Contact Rx calculator" sx={{ marginBottom: "2rem"}}>
          <IconButton>
              <FeedbackIcon />
          </IconButton>
        </Tooltip>        

        {
          (sameBothEyes) ? (
            // Render only one eye- itenary if sameBothEyes is true
            <>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Typography textAlign="left" variant='h5' sx={{ marginBottom: "1rem"}}>OU</Typography>          
                </Grid>
                <SameBothEyesSwitch />     
              </Grid>

              <Grid container spacing={2}>
                <SpectaclePrescription eye="OD" />        
              </Grid>            
            </>

          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Typography textAlign="left" variant='h5' sx={{ marginBottom: "1rem"}}>OD</Typography>          
                </Grid>
                <SameBothEyesSwitch />     
              </Grid>

              <Grid container spacing={2}>
                <SpectaclePrescription eye="OD" />        
              </Grid>
            
              <Grid container spacing={2}>
                <Grid item>
                <Typography textAlign="left" variant='h5' sx={{ marginBottom: "1rem"}}>OS</Typography>
                </Grid>      
              </Grid>

              <Grid container spacing={2}>
                <SpectaclePrescription eye="OS" />        
              </Grid>
            </>

          )
        }

        <Grid container spacing={2}>          
          <SphericalEquivalentSwitch />
        </Grid>

        <Grid container spacing={1}>                           
          <ContactPrescription />            
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
