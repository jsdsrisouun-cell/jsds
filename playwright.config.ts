import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: process.env.DEPLOY_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: true,
    timeout: 120000,
  }
});