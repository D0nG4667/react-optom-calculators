import { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid } from '@mui/material/';
import { SpectacleContext } from '../context/SpectacleContext';

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
    sameBothEyes,
    setSameBothEyes,
  } = useContext(SpectacleContext);  

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

