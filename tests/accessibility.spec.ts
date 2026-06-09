import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { SEL, LANGS } from './fixtures/constants';

/**
 * Automated WCAG checks with axe-core. We gate on serious/critical impact —
 * the violations that actually lock people out — and scan every language,
 * since translated content can introduce its own contrast/label issues.
 *
 * The decorative WebGL canvas is excluded: it is aria-hidden by design.
 */
test.describe('Accessibility (axe-core, WCAG 2 A/AA)', () => {
  for (const lang of LANGS) {
    test(`no serious or critical violations — ${lang.toUpperCase()}`, async ({ page }) => {
      await page.goto('/');
      if (lang !== 'sk') {
        await page.locator(SEL.langButton(lang)).click();
        await expect(page.locator(SEL.langButton(lang))).toHaveClass(/active/);
      }

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude(SEL.heroCanvas)
        .analyze();

      const blocking = results.violations.filter(
        (v) => v.impact === 'serious' || v.impact === 'critical',
      );

      // Helpful failure output: which rule, where.
      const summary = blocking
        .map((v) => `• [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node/s)`)
        .join('\n');

      expect(blocking, `axe violations (${lang}):\n${summary}`).toEqual([]);
    });
  }

  test('document exposes a language and a single H1', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
    expect(await page.locator('h1').count(), 'exactly one H1 for structure').toBe(1);
  });
});
