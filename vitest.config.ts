import path from 'path'
import dotenv from 'dotenv'

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

dotenv.config({ path: '.env.test' })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/public': path.resolve(__dirname, './public'), // This alias must place before `@` alias
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
