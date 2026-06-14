import { test, expect } from '@playwright/test';
import { SEL } from './fixtures/constants';

/**
 * Data-driven validation of the contact form.
 *
 * One scenario table → many generated tests. This keeps the *logic* in one
 * place and the *cases* in data, so adding a new edge case is a one-line change
 * and every case reports as its own pass/fail in the run.
 *
 * As elsewhere, we never submit against production — we assert the browser's
 * native HTML5 validity, which is the side-effect-free contract that matters.
 */

// --- email validity matrix -------------------------------------------------
// Only cases that all engines (Chromium/Firefox/WebKit) agree on. HTML5
// type=email is deliberately lenient (e.g. "a@b" is valid), so the invalid
// rows below are unambiguous: missing @, missing parts, spaces, double @.
type EmailCase = { input: string; valid: boolean; why: string };

const EMAIL_CASES: EmailCase[] = [
  { input: 'peter@qavant.dev',        valid: true,  why: 'standard address' },
  { input: 'p.olah+jobs@sub.qa.co',   valid: true,  why: 'subdomain + plus tag' },
  { input: 'plainaddress',            valid: false, why: 'no @ at all' },
  { input: '@no-local.dev',           valid: false, why: 'missing local part' },
  { input: 'no-domain@',              valid: false, why: 'missing domain' },
  { input: 'two@@ats.dev',            valid: false, why: 'double @' },
  { input: 'has space@qavant.dev',    valid: false, why: 'whitespace in local part' },
];

test.describe('Contact form — data-driven validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  for (const c of EMAIL_CASES) {
    test(`email "${c.input}" is ${c.valid ? 'accepted' : 'rejected'} (${c.why})`, async ({ page }) => {
      await page.fill(SEL.input.email, c.input);
      const isValid = await page
        .locator(SEL.input.email)
        .evaluate((el) => (el as HTMLInputElement).validity.valid);
      expect(isValid, `${c.input} — ${c.why}`).toBe(c.valid);
    });
  }

  // --- required-field matrix ------------------------------------------------
  // Fill everything EXCEPT one required field, and prove the form stays invalid.
  // Driven from the list of required fields so the test mirrors the markup.
  const FILLED = {
    [SEL.input.name]: 'Test Runner',
    [SEL.input.email]: 'runner@example.com',
    [SEL.input.message]: 'Side-effect-free validity check.',
  };
  const REQUIRED = [
    { omit: SEL.input.name, label: 'name' },
    { omit: SEL.input.email, label: 'email' },
    { omit: SEL.input.message, label: 'message' },
  ];

  for (const r of REQUIRED) {
    test(`form is invalid when "${r.label}" is missing`, async ({ page }) => {
      for (const [selector, value] of Object.entries(FILLED)) {
        if (selector === r.omit) continue;
        await page.fill(selector, value);
      }
      const formValid = await page
        .locator(SEL.form)
        .evaluate((f) => (f as HTMLFormElement).checkValidity());
      expect(formValid, `omitting ${r.label} must keep the form invalid`).toBe(false);
    });
  }
});
