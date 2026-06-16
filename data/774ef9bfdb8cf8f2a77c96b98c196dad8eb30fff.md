# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility (axe-core, WCAG 2 A/AA) >> no serious or critical violations — DE
- Location: tests/accessibility.spec.ts:14:9

# Error details

```
Error: page.goto: Operation was cancelled; maybe frame was detached?
Call log:
  - navigating to "https://qavant.dev/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | import { SEL, LANGS } from './fixtures/constants';
  4  | 
  5  | /**
  6  |  * Automated WCAG checks with axe-core. We gate on serious/critical impact —
  7  |  * the violations that actually lock people out — and scan every language,
  8  |  * since translated content can introduce its own contrast/label issues.
  9  |  *
  10 |  * The decorative WebGL canvas is excluded: it is aria-hidden by design.
  11 |  */
  12 | test.describe('Accessibility (axe-core, WCAG 2 A/AA)', () => {
  13 |   for (const lang of LANGS) {
  14 |     test(`no serious or critical violations — ${lang.toUpperCase()}`, async ({ page }) => {
> 15 |       await page.goto('/');
     |                  ^ Error: page.goto: Operation was cancelled; maybe frame was detached?
  16 |       if (lang !== 'sk') {
  17 |         await page.locator(SEL.langButton(lang)).click();
  18 |         await expect(page.locator(SEL.langButton(lang))).toHaveClass(/active/);
  19 |       }
  20 | 
  21 |       const results = await new AxeBuilder({ page })
  22 |         .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  23 |         .exclude(SEL.heroCanvas)
  24 |         .analyze();
  25 | 
  26 |       const blocking = results.violations.filter(
  27 |         (v) => v.impact === 'serious' || v.impact === 'critical',
  28 |       );
  29 | 
  30 |       // Helpful failure output: which rule, where.
  31 |       const summary = blocking
  32 |         .map((v) => `• [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node/s)`)
  33 |         .join('\n');
  34 | 
  35 |       expect(blocking, `axe violations (${lang}):\n${summary}`).toEqual([]);
  36 |     });
  37 |   }
  38 | 
  39 |   test('document exposes a language and a single H1', async ({ page }) => {
  40 |     await page.goto('/');
  41 |     await expect(page.locator('html')).toHaveAttribute('lang', /.+/);
  42 |     expect(await page.locator('h1').count(), 'exactly one H1 for structure').toBe(1);
  43 |   });
  44 | });
  45 | 
```