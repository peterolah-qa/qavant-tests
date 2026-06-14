import { test, expect } from '@playwright/test';
import { SEL } from './fixtures/constants';

/**
 * Visual regression — tagged @visual so it is EXCLUDED from the blocking CI run
 * (see package.json: `test` uses --grep-invert @visual). Reason: snapshot
 * baselines are environment-specific (OS + browser render text/AA differently),
 * so they must be generated in the same environment that will compare them.
 * Running them in the daily green pipeline without committed baselines would
 * fail on the first run for the wrong reason.
 *
 * How to use:
 *   npm run test:visual:update   # generate/refresh baselines (run on Linux/CI parity)
 *   npm run test:visual          # compare against committed baselines
 *
 * The live-metrics widget changes every CI run, so it is masked out — we test
 * layout, not the numbers (those are covered by api-ui-consistency.spec.ts).
 */
test.describe('Visual regression @visual', () => {
  test('hero matches its baseline', async ({ page }) => {
    await page.goto('/');
    // freeze animations so the snapshot is deterministic
    await page.addStyleTag({
      content: `*,*::before,*::after{animation-duration:0s!important;transition-duration:0s!important}`,
    });
    await expect(page.locator(SEL.hero)).toBeVisible();
    await expect(page).toHaveScreenshot('hero.png', {
      mask: [page.locator(SEL.liveMetrics)], // dynamic numbers — exclude
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
      fullPage: false,
    });
  });

  test('services section matches its baseline', async ({ page }) => {
    await page.goto('/#services');
    await page.addStyleTag({
      content: `*,*::before,*::after{animation-duration:0s!important;transition-duration:0s!important}`,
    });
    const services = page.locator('#services');
    await services.scrollIntoViewIfNeeded();
    await expect(services).toHaveScreenshot('services.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
