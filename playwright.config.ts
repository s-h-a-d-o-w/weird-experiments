import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  timeout: 3000,
  retries: 1,
  use: {
    // headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    trace: 'on-first-retry',
  },
};
export default config;
