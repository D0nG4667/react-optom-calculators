import { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { green, pink } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid, Typography } from '@mui/material/';
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
    '& .MuiSwitch-switchBase': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
  }));

  // Get Contact Rx from ContactContext
  const {   
    sphericalEquivalent,
    setSphericalEquivalent,
  } = useContext(ContactContext);  

  const handleChange = (event) => {
    setSphericalEquivalent(event.target.checked);
  };

  // console.log(sphericalEquivalent);

  return (
    <>
      <Grid item xs>
        <Typography 
          variant={(sphericalEquivalent) ? "body1" : "h5"} 
          sx={{ marginBottom: "1rem"}}
        >
          {(sphericalEquivalent) ? "CL Rx (Spherical Equivalent)" : "CL Rx" }
        </Typography>
      </Grid>
    
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
    </>
  );
}

export default SphericalEquivalentSwitch;

