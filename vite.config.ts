import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
    ],
  },
})
