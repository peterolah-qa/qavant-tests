import { test, expect } from '@playwright/test';
import { SEL } from './fixtures/constants';

test.describe('Responsive layout', () => {
  test('no horizontal scroll on a 360px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 780 });
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'site must not scroll sideways on small phones').toBeLessThanOrEqual(2);
  });

  test('hero and a contact CTA remain reachable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator(SEL.hero)).toBeVisible();

    // jumping to the contact anchor should bring the form into view
    await page.goto('/#contact');
    await expect(page.locator(SEL.form)).toBeVisible();
  });
});

test.describe('Reduced motion', () => {
  test('content is visible immediately when motion is reduced', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    // The hero text must not stay hidden behind an entrance animation
    // for users who opted out of motion.
    await expect(page.locator(SEL.hero)).toBeVisible();
    const opacity = await page
      .locator(SEL.hero)
      .evaluate((el) => parseFloat(getComputedStyle(el).opacity));
    expect(opacity, 'hero should be fully opaque, not mid-animation').toBeGreaterThan(0.9);
  });
});
