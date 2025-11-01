import React from 'react';
import { IconButton, Container, Typography, Grid, Tooltip, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7, Feedback as FeedbackIcon } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import SpectaclePrescription from '@/components/SpectaclePrescription';
import ContactPrescription from '@/components/ContactPrescription';
import Footer from '@/components/Footer';
import GoogleAdsense from '@/components/GoogleAdSense';
import SphericalEquivalentSwitch from '@/components/SphericalEquivalentSwitch';
import SameBothEyesSwitch from '@/components/SameBothEyesSwitch';

import { useThemeContext } from '@/context/ThemeContext';
import { useSpectacle } from '@/context/SpectacleContext';

// Vercel Analytics
import { inject } from '@vercel/analytics';

const App: React.FC = () => {
  // ----------------------
  // Theme & mode handling
  // ----------------------
  const theme = useTheme();
  const { mode, toggleMode } = useThemeContext();

  const boxStyles = {
    background: theme.palette.background.paper,
    mt: 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    p: 4,
    boxShadow: theme.shadows[3],
    position: 'relative' as const,
  };

  // ----------------------
  // Get Both Eyes Boolean variable from SpectacleContext
  // ----------------------
  const { sameBothEyes } = useSpectacle();

  return (
    <>
      {/* Vercel Analytics */}
      {inject()}

      <Container maxWidth="md" sx={boxStyles}>
        {/* Toggle dark/light mode */}
        <IconButton
          onClick={toggleMode}
          sx={{ position: 'absolute', top: 16, right: 16 }}
          aria-label="Toggle light/dark mode"
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        <VisibilityIcon sx={{ mr: 1 }} />
        {/* Header */}
        <Typography variant="h4" sx={{ mb: 2 }}>
          Contact Lens Calculator
        </Typography>

        <Tooltip title="Spectacle Rx to Contact Rx calculator">
          <IconButton>
            <FeedbackIcon />
          </IconButton>
        </Tooltip>

        {/* Spectacle Prescription Inputs */}
        {sameBothEyes ? (
          // ----------------------
          // Same Rx for both eyes
          // ----------------------
          <>
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 10 }}>
                <Typography textAlign="left" variant="h5" sx={{ mb: 1 }}>
                  OU
                </Typography>
              </Grid>
              <SameBothEyesSwitch />
            </Grid>

            <Grid container spacing={2}>
              <SpectaclePrescription eye="OD" />
            </Grid>
          </>
        ) : (
          // ----------------------
          // Separate Rx for OD and OS
          // ----------------------
          <>
            {/* OD */}
            <Grid container spacing={2} alignItems="center">
              <Grid size={{ xs: 10 }}>
                <Typography textAlign="left" variant="h5" sx={{ mb: 1 }}>
                  OD
                </Typography>
              </Grid>
              <SameBothEyesSwitch />
            </Grid>
            <Grid container spacing={2}>
              <SpectaclePrescription eye="OD" />
            </Grid>

            {/* OS */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Typography textAlign="left" variant="h5" sx={{ mb: 1 }}>
                  OS
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <SpectaclePrescription eye="OS" />
            </Grid>
          </>
        )}

        {/* Spherical Equivalent Switch */}
        <Grid container spacing={2}>
          <SphericalEquivalentSwitch />
        </Grid>

        {/* Contact Prescription */}
        <Grid container spacing={1}>
          <ContactPrescription />
        </Grid>

        {/* Footer */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Footer />
        </Grid>
      </Container>

      {/* Google Adsense */}
      <Container sx={{ mt: 4 }}>
        <GoogleAdsense
          adSlot={import.meta.env.VITE_ADSENSE_SLOT || '6024584031'}
          adFormat="auto"
          fullWidth="true"
        />
      </Container>
    </>
  );
};

export default App;
