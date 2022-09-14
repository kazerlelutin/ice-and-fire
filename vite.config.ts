/// <reference types="vitest" />

import {configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals:true,
    setupFiles: [
      './setupFiles/extend.ts',
    ],
    coverage: {
      reporter: ['text','html'],
      all:true,
      exclude: [
        ...configDefaults.exclude, 
        '**/e2e/*',
      '**/.next/*',
      '**/db/*',
      'public/**',
      'styles/**',
      'pages/**/*.tsx',
      'types/**',
      '**/*.ts',
      '**/*.js'
      ],
    },
    exclude: [
      ...configDefaults.exclude, 
      '**/e2e/*',
      '**/.next/*',
      '**/db/*',
      'public/**',
      'styles/**',
      'types/**',
    ],
    
  },
})