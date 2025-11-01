import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import adsense from 'vite-plugin-adsense';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), adsense()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/material/styles",
      "@mui/system",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
});
