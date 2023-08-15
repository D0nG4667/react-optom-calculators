import { useContext, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid } from '@mui/material/';
import { SpectacleContext } from '../context/SpectacleContext';
import { ContactContext } from '../context/ContactContext';

const SameBothEyesSwitch = () => {
  const BlueSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: blue[600],
      '&:hover': {
        backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: blue[600],
    },
  }));

  // Get Both Eyes Boolean variable from SpectacleContext
  const { 
    setSphere,
    setCylinder,
    setAxis,  
    sameBothEyes,
    setSameBothEyes,
  } = useContext(SpectacleContext);  

  // Get Contact Rx setters from ContactContext
  const {
    setClSphere,
    setClCylinder,
    setClAxis,
} = useContext(ContactContext);

let targetValue = {};
targetValue["OS"] = "";

useEffect(() => {
  if (!sameBothEyes)
  {
    setClCylinder((c) => ({...c, ...targetValue}));
    setSphere((s) => ({...s, ...targetValue}));
    setAxis((a) => ({...a, ...targetValue}));
    setCylinder((c) => ({...c, ...targetValue}));
    setClSphere((s) => ({...s, ...targetValue}));
    setClAxis((a) => ({...a, ...targetValue}));
    // console.log(sameBothEyes);
    
  }
}, [sameBothEyes])


  const handleChange = (event) => {
    setSameBothEyes(event.target.checked);        
  };

  // console.log(sameBothEyes);

  return (
    <>
      <Grid item xs={2} display="flex" justifyContent="right">
        <FormControlLabel 
          control={
            <BlueSwitch
              checked={sameBothEyes}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Same Rx Both Eyes Switch' }}
            />
          } 
          label="OU" 
        />        
      </Grid>        
    </>
  );
}

export default SameBothEyesSwitch;

