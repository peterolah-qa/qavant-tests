import { test, expect } from '@playwright/test';
import { SEL, SECTIONS } from './fixtures/constants';

test.describe('Smoke — the site loads and its skeleton is intact', () => {
  test('home page responds and has the right title', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status(), 'HTTP status should be 2xx').toBeLessThan(400);
    await expect(page).toHaveTitle(/Qavant/i);
  });

  test('hero headline and 3D canvas are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(SEL.hero)).toBeVisible();
    // Canvas is decorative (aria-hidden) — it should exist but not be a content blocker.
    await expect(page.locator(SEL.heroCanvas)).toHaveCount(1);
  });

  test('primary navigation exposes all in-page anchors', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(SEL.nav)).toBeVisible();
    const links = page.locator(SEL.navLinks);
    expect(await links.count()).toBeGreaterThanOrEqual(6);
  });

  test('every content section is rendered in the DOM', async ({ page }) => {
    await page.goto('/');
    for (const id of SECTIONS) {
      await expect(page.locator(`#${id}`), `section #${id} should exist`).toHaveCount(1);
    }
  });

  test('ISTQB badge is a verifiable link to the official register', async ({ page }) => {
    await page.goto('/');
    const badge = page.locator(SEL.certBadge);

    await expect(badge, 'cert badge should be visible in the hero on load').toBeVisible();
    await expect(badge).toContainText('ISTQB');

    // We assert the link CONTRACT (where it points and how it opens), not the
    // destination itself — testing a third party's uptime would only make this
    // suite flaky for reasons outside our control.
    await expect(badge).toHaveAttribute('href', /^https:\/\/scr\.istqb\.org\/?$/);
    await expect(badge).toHaveAttribute('target', '_blank');
    await expect(badge, 'external link must carry rel=noopener').toHaveAttribute('rel', /noopener/);
  });

  test('page loads without console errors or uncaught exceptions', async ({ page }) => {
    const errors: string[] = [];
    const badResponses: string[] = [];

    page.on('console', (msg) => {
      // resource-load failures are checked precisely via the response handler below;
      // here we only care about real JS errors, not generic "failed to load" noise
      if (msg.type() === 'error' && !/Failed to load resource/i.test(msg.text())) {
        errors.push(`console.error: ${msg.text()}`);
      }
    });
    page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
    page.on('response', (res) => {
      // the site's own resources must all load; external best-effort fetches
      // (e.g. the live CI metrics JSON on GitHub before the first run publishes it)
      // are allowed to 404 because the widget degrades gracefully
      const host = new URL(res.url()).hostname;
      if (res.status() >= 400 && host.endsWith('qavant.dev')) {
        badResponses.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors, `JS errors:\n${errors.join('\n')}`).toEqual([]);
    expect(badResponses, `same-origin resource errors:\n${badResponses.join('\n')}`).toEqual([]);
  });
});
