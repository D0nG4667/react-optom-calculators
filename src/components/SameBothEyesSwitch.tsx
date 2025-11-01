import { useEffect, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { Switch, FormControlLabel, Grid } from '@mui/material';
import { useSpectacle } from '@/context/SpectacleContext';
import { useContact } from '@/context/ContactContext';
import type { EyeValues } from '@/types/eye';

/**
 * Toggle switch to copy the OD values to OS
 */
const SameBothEyesSwitch = () => {
  // ----------------------
  // Styled MUI Switch
  // ----------------------
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

  // ----------------------
  // Get Both Eyes Boolean variable from SpectacleContext
  // ----------------------
  const { setSphere, setCylinder, setAxis, sameBothEyes, setSameBothEyes } = useSpectacle();

  // ----------------------
  // Get Contact Rx setters from ContactContext
  // ----------------------
  const { setClSphere, setClCylinder, setClAxis } = useContact();

  // ----------------------
  // Reset OS values if 'sameBothEyes' is false
  // ----------------------
  const resetValues = useMemo((): Partial<EyeValues> => ({ OS: '' }), []);

  useEffect(() => {
    if (!sameBothEyes) {
      setSphere((s) => ({ ...s, ...resetValues }));
      setCylinder((c) => ({ ...c, ...resetValues }));
      setAxis((a) => ({ ...a, ...resetValues }));
      setClSphere((s) => ({ ...s, ...resetValues }));
      setClCylinder((c) => ({ ...c, ...resetValues }));
      setClAxis((a) => ({ ...a, ...resetValues }));
    }
  }, [
    sameBothEyes,
    resetValues,
    setSphere,
    setCylinder,
    setAxis,
    setClSphere,
    setClCylinder,
    setClAxis,
  ]);

  // ----------------------
  // Handle toggle switch
  // ----------------------
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSameBothEyes(event.target.checked);
  };

  return (
    <Grid size={{ xs: 2 }} display="flex" justifyContent="flex-end">
      <FormControlLabel
        control={
          <BlueSwitch
            checked={sameBothEyes}
            onChange={handleChange}
            slotProps={{
              input: { 'aria-label': 'Same Rx Both Eyes Switch' },
            }}
          />
        }
        label="OU"
      />
    </Grid>
  );
};

export default SameBothEyesSwitch;
