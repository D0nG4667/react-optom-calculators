import React, { useContext } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { ContactContext } from '@/context/ContactContext';
import type { ContactContextType } from '@/types/contact';

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
}));

const SphericalEquivalentSwitch: React.FC = () => {
  // ----------------------
  // Get Spherical Equivalent Boolean variable from ContactContext
  // ----------------------
  const { sphericalEquivalent, setSphericalEquivalent } = useContext(
    ContactContext
  ) as ContactContextType;

  // ----------------------
  // Handle toggle change
  // ----------------------
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSphericalEquivalent(event.target.checked);
  };

  // ----------------------
  // Check if screen is not mobile
  // ----------------------
  const notMobile = useMediaQuery('(min-width:500px)');

  return (
    <>
      <Grid size={{ xs: 10 }}>
        <Stack direction="row" spacing={1} alignItems="baseline">
          <Typography textAlign="left" variant={notMobile ? 'h4' : 'h5'}>
            CL Rx
          </Typography>
          {sphericalEquivalent && (
            <Typography variant={notMobile ? 'h5' : 'body1'} color="text.secondary">
              (Spherical Equivalent)
            </Typography>
          )}
        </Stack>
      </Grid>

      <Grid size={{ xs: 2 }} display="flex" justifyContent="flex-end">
        <FormControlLabel
          control={
            <PinkSwitch
              checked={sphericalEquivalent}
              onChange={handleChange}
              slotProps={{
                input: {
                  'aria-label': 'Spherical Equivalent Switch',
                },
              }}
            />
          }
          label="SE"
        />
      </Grid>
    </>
  );
};

export default SphericalEquivalentSwitch;
