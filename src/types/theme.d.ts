import type { ReactNode } from 'react';

/**
 * The current theme mode: light or dark
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Context values for theme toggling
 */
export interface ThemeContextType {
    mode: ThemeMode;
    toggleMode: () => void;
}

/**
 * Props for the ThemeContext provider
 */
export interface ThemeContextProviderProps {
    children: ReactNode;
}

