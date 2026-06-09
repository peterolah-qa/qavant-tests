import { test, expect } from '@playwright/test';
import { SEL, LANGS, NAV_SERVICES, STORAGE_LANG_KEY, type Lang } from './fixtures/constants';

/**
 * The site ships SK / EN / DE from one DOM via data-i18n + a JS dictionary.
 * That is a real regression surface: a missing key renders blank, and the
 * longest translation (usually German) can overflow a fixed hero. These tests
 * treat the language layer as a first-class feature, not an afterthought.
 */
test.describe('Internationalization (SK / EN / DE)', () => {
  async function switchTo(page: import('@playwright/test').Page, lang: Lang) {
    await page.locator(SEL.langButton(lang)).click();
    // active state is the app's own signal that the switch completed
    await expect(page.locator(SEL.langButton(lang))).toHaveClass(/active/);
  }

  test('marks a valid language active on first visit (matches <html lang>)', async ({ page }) => {
    // First visit has no saved preference, so the app detects the browser
    // language. We assert internal consistency rather than a hard-coded locale:
    // exactly one button is active and it matches the document language.
    await page.goto('/');
    const active = page.locator('.lang-switch button.active');
    await expect(active).toHaveCount(1);
    const activeLang = await active.getAttribute('data-lang');
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    expect(activeLang).toBe(htmlLang);
    expect(LANGS).toContain(activeLang as Lang);
  });

  test('switching language actually changes the copy', async ({ page }) => {
    await page.goto('/');
    for (const lang of LANGS) {
      await switchTo(page, lang);
      const firstNav = page.locator(SEL.navLinks).first();
      await expect(firstNav).toHaveText(NAV_SERVICES[lang]);
    }
  });

  test('language choice persists across reloads (localStorage)', async ({ page }) => {
    await page.goto('/');
    await switchTo(page, 'de');

    const stored = await page.evaluate((k) => localStorage.getItem(k), STORAGE_LANG_KEY);
    expect(stored).toBe('de');

    await page.reload();
    await expect(page.locator(SEL.langButton('de'))).toHaveClass(/active/);
  });

  // --- The clever one: completeness without peeking at the dictionary internals ---
  test('no translated element is ever empty in any language', async ({ page }) => {
    await page.goto('/');

    for (const lang of LANGS) {
      await switchTo(page, lang);

      const blanks = await page.$$eval(SEL.i18nNodes, (nodes) =>
        nodes
          .filter((n) => {
            // a select renders its options; check the chosen option instead
            if (n.tagName === 'SELECT' || n.tagName === 'OPTION') return false;
            return (n.textContent ?? '').trim().length === 0;
          })
          .map((n) => n.getAttribute('data-i18n')),
      );

      expect(blanks, `empty translations in "${lang}": ${blanks.join(', ')}`).toEqual([]);
    }
  });

  test('a translated element never leaks its raw i18n key', async ({ page }) => {
    await page.goto('/');
    for (const lang of LANGS) {
      await switchTo(page, lang);
      const leaks = await page.$$eval(SEL.i18nNodes, (nodes) =>
        nodes
          .map((n) => ({ key: n.getAttribute('data-i18n') ?? '', text: (n.textContent ?? '').trim() }))
          // a leak looks like "nav.services" / "hero.t1" showing up verbatim as visible text
          .filter((e) => e.text === e.key && /\w+\.\w+/.test(e.key))
          .map((e) => e.key),
      );
      expect(leaks, `untranslated keys visible in "${lang}": ${leaks.join(', ')}`).toEqual([]);
    }
  });

  // --- Layout safety: the longest language must not break the page ---
  test('German content does not cause horizontal overflow', async ({ page }) => {
    await page.goto('/');
    await switchTo(page, 'de');

    const overflow = await page.evaluate(() => {
      const el = document.documentElement;
      return el.scrollWidth - el.clientWidth;
    });
    // allow a 2px rounding tolerance; anything more is a real layout bug
    expect(overflow, 'page should not scroll sideways in German').toBeLessThanOrEqual(2);
  });
});
