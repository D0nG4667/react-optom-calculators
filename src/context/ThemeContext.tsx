import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { getTheme } from '../theme';
import type { ThemeContextType, ThemeMode, ThemeContextProviderProps } from '@/types/theme';

// Create context with undefined initial value for safety
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const saved = localStorage.getItem('themeMode') as ThemeMode | null;
    if (saved) {
      setMode(saved);
    } else {
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, [prefersDark]);

  const toggleMode = () => {
    setMode((prev) => {
      const next: ThemeMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', next);
      return next;
    });
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook with runtime safety
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};
