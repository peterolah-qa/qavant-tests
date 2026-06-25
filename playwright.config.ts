import { defineConfig, devices } from '@playwright/test';

/**
 * Target environment.
 *
 * Pick the environment with ENV (defaults to prod, so CI keeps acting as a
 * synthetic monitor against the live site):
 *     ENV=prod npm test      -> https://qavant.dev   (default)
 *     ENV=qa   npm test      -> local/staging build
 *
 * BASE_URL still wins if set, so a one-off target keeps working:
 *     BASE_URL=http://localhost:8000 npm test
 */
const ENVS = {
  prod: 'https://qavant.dev',
  qa: 'http://localhost:8000',
} as const;

type EnvName = keyof typeof ENVS;
const ENV = (process.env.ENV as EnvName) in ENVS ? (process.env.ENV as EnvName) : 'prod';
const BASE_URL = process.env.BASE_URL ?? ENVS[ENV];
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 1,
  workers: 2,
  reporter: isCI
    ? [['github'], ['html', { open: 'never' }], ['json', { outputFile: 'results.json' }], ['list']]
    : [['html', { open: 'never' }], ['json', { outputFile: 'results.json' }], ['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 45_000,
  },

  projects: [
    { name: 'chromium',      use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',       use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
    ...(isCI ? [] : [
      { name: 'webkit',        use: { ...devices['Desktop Safari'] } },
      { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
    ]),
  ],
});