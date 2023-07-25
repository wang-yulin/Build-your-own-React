import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig(() => ({
  server: {
    port: 3002,
  },
  plugins: [
    babel()
  ]
}))