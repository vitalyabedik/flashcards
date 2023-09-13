import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
    ],
  },
})
