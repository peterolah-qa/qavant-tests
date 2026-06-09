import { test, expect } from '@playwright/test';
import { SEL } from './fixtures/constants';

/**
 * The contact form is wired to Netlify Forms (no backend). These tests verify
 * the contract Netlify relies on, plus client-side validation.
 *
 * NOTE: we intentionally DO NOT submit the form. Submitting against production
 * would inject junk into the real Netlify inbox. Verifying the wiring + HTML5
 * validity is the correct, side-effect-free check for a live target.
 */
test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('is a POST form discoverable by Netlify', async ({ page }) => {
    const form = page.locator(SEL.form);
    await expect(form).toHaveAttribute('method', /post/i);
    // Netlify needs a hidden form-name matching the form name to route submissions
    await expect(page.locator(SEL.formName)).toHaveAttribute('value', 'contact');
  });

  test('hides the honeypot field from real users', async ({ page }) => {
    const honeypot = page.locator(SEL.honeypot);
    await expect(honeypot).toHaveCount(1);          // present for bots
    await expect(honeypot).not.toBeInViewport();    // but off-screen for humans
  });

  test('enforces required fields via HTML5 validation', async ({ page }) => {
    // Submitting empty should NOT navigate; the browser blocks it.
    await page.locator(SEL.submit).click();
    await expect(page.locator(SEL.form)).toBeVisible();

    for (const field of [SEL.input.name, SEL.input.email, SEL.input.message]) {
      const valid = await page.locator(field).evaluate(
        (el) => (el as HTMLInputElement).validity.valid,
      );
      expect(valid, `${field} should be invalid when empty`).toBe(false);
    }
  });

  test('rejects a malformed email', async ({ page }) => {
    await page.fill(SEL.input.email, 'not-an-email');
    const valid = await page
      .locator(SEL.input.email)
      .evaluate((el) => (el as HTMLInputElement).validity.valid);
    expect(valid).toBe(false);
  });

  test('accepts a fully completed form (without sending it)', async ({ page }) => {
    await page.fill(SEL.input.name, 'Test Runner');
    await page.fill(SEL.input.email, 'runner@example.com');
    await page.fill(SEL.input.company, 'Qavant QA');
    await page.fill(SEL.input.message, 'Automated validity check — not a real enquiry.');

    const valid = await page.locator(SEL.form).evaluate(
      (form) => (form as HTMLFormElement).checkValidity(),
    );
    expect(valid, 'a completed form should pass client-side validation').toBe(true);
  });
});
