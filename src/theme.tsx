import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            background: { default: '#f9f9f9', paper: '#ffffff' },
            text: { primary: '#222', secondary: '#555' },
          }
        : {
            primary: { main: '#90caf9' },
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#fdfdfd', secondary: '#aaa' },
          }),
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h4: {
        fontWeight: 600,
        fontSize: '1.75rem',
        color: mode === 'light' ? '#222' : '#fdfdfd',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
        color: mode === 'light' ? '#333' : '#e0e0e0',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: mode === 'light' ? '#444' : '#ccc',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            textAlign: 'center',
            padding: '4rem 2rem',
            position: 'relative',
          },
        },
      },
    },
  });
