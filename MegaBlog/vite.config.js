import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Client } from 'appwrite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
