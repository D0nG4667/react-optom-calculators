import { useContext } from 'react';
import { alpha, styled  } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
// import { green } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid, Typography, useMediaQuery } from '@mui/material/';
import { ContactContext } from '../context/ContactContext';

const SphericalEquivalentSwitch = () => {
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
    // Remove green color switch for not spherical equivalent
    // '& .MuiSwitch-switchBase': {
    //   color: green[600],
    //   '&:hover': {
    //     backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    //   },
    // },
    // '& .MuiSwitch-switchBase + .MuiSwitch-track': {
    //   backgroundColor: green[600],
    // },
  }));

  // Get Spherical Equivalent Boolean variable from ContactContext
  const {   
    sphericalEquivalent,
    setSphericalEquivalent,
  } = useContext(ContactContext);  

  const handleChange = (event) => {
    setSphericalEquivalent(event.target.checked);
  };

  // console.log(sphericalEquivalent);

  // Checking if screen is not mobile screen
  const notMobile = useMediaQuery('(min-width:500px)');
  // console.log(notMobile);

  return (
    <>
      <Grid item xs={10}>
        <Typography
          textAlign="left" 
          variant={(notMobile) ? "h5" : "body1"} 
          sx={{ marginBottom: "1rem" }}
        >
          {(sphericalEquivalent) ? "CL Rx (Spherical Equivalent)" : "CL Rx" }
        </Typography>
      </Grid>

      <Grid item xs={2} display="flex" justifyContent="right">
        <FormControlLabel 
          control={
            <PinkSwitch
              checked={sphericalEquivalent}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Spherical Equivalent Switch' }}
            />
          } 
          label="SE" 
        />
      </Grid>
    
    </>
  );
}

export default SphericalEquivalentSwitch;

