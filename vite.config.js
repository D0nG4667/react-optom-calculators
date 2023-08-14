import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import adsense from 'vite-plugin-adsense'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), adsense()],  
})

