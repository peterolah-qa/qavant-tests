import { test, expect } from '@playwright/test';

/**
 * SEO / shareability contract. For a freelancer's storefront, the meta layer
 * is the difference between a link that previews well in a DM and one that does not.
 */
test.describe('SEO & social metadata', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has a non-trivial title and meta description', async ({ page }) => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);

    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content', /.{50,}/); // a real sentence, not a stub
  });

  test('canonical points at the production origin', async ({ page }) => {
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://qavant.dev/',
    );
  });

  test('Open Graph essentials are present', async ({ page }) => {
    for (const prop of ['og:title', 'og:type', 'og:url', 'og:image', 'og:description']) {
      await expect(
        page.locator(`meta[property="${prop}"]`),
        `${prop} should be set`,
      ).toHaveAttribute('content', /.+/);
    }
  });

  test('declares all three locales for social previews', async ({ page }) => {
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', /sk/i);
    const alternates = page.locator('meta[property="og:locale:alternate"]');
    expect(await alternates.count()).toBeGreaterThanOrEqual(2); // en + de
  });

  test('ships valid JSON-LD structured data', async ({ page }) => {
    const blocks = page.locator('script[type="application/ld+json"]');
    const count = await blocks.count();
    expect(count, 'at least one JSON-LD block').toBeGreaterThanOrEqual(1);

    for (let i = 0; i < count; i++) {
      const raw = await blocks.nth(i).textContent();
      expect(() => JSON.parse(raw ?? ''), `JSON-LD block #${i} must parse`).not.toThrow();
    }
  });
});
