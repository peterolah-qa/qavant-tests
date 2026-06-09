import { defineConfig, devices } from '@playwright/test';

/**
 * Tests run against the LIVE production site by default (synthetic monitoring style).
 * Override with:  BASE_URL=http://localhost:8000 npm test
 */
const BASE_URL = process.env.BASE_URL ?? 'https://qavant.dev';
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,            // axe-core on a live site needs headroom
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: isCI,            // a stray test.only fails the CI build
  retries: isCI ? 2 : 0,
  workers: 2,                 // cap parallelism: 5 heavy browsers on a live site starve each other
  reporter: isCI
    ? [['github'], ['html', { open: 'never' }], ['json', { outputFile: 'results.json' }], ['list']]
    : [['html', { open: 'never' }], ['json', { outputFile: 'results.json' }], ['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
  ],
});
