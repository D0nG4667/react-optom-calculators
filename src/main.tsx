import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import SpectacleProvider from './context/SpectacleContext.tsx';
import ContactProvider from './context/ContactContext.tsx';
import { ThemeContextProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <SpectacleProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </SpectacleProvider>
    </ThemeContextProvider>
  </StrictMode>
);
