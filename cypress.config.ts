import { defineConfig } from 'cypress'
import { readFile } from 'fs/promises'

export default defineConfig({
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  video: false,

  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1200,
    viewportHeight: 800,
  },

  env: {},
})
