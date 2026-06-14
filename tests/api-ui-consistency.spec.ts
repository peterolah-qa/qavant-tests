import { test, expect } from '@playwright/test';
import { SEL, METRICS } from './fixtures/constants';

/**
 * API + UI consistency.
 *
 * The site's live-metrics widget is fed by status.json files that each test
 * repo's CI publishes. This spec checks both layers and that they agree:
 *
 *   1. API layer  — fetch the status.json directly, validate its schema.
 *   2. UI layer   — load the page and assert the widget renders numbers
 *                   consistent with what the API returned.
 *
 * This is the kind of cross-layer check that catches a whole class of bugs a
 * pure-UI or pure-API suite would miss (e.g. the UI silently falling back to
 * demo data while the API is actually fine).
 */

type Status = { passed: number; total: number; passRate: number; runs: number; lastRun: string };

async function fetchStatus(request: import('@playwright/test').APIRequestContext, url: string): Promise<Status> {
  const res = await request.get(url, { headers: { 'cache-control': 'no-cache' } });
  expect(res.ok(), `GET ${url} -> ${res.status()}`).toBeTruthy();
  return res.json();
}

function assertSchema(s: Status, label: string) {
  expect(typeof s.passed, `${label}.passed`).toBe('number');
  expect(typeof s.total, `${label}.total`).toBe('number');
  expect(s.passed, `${label}: passed <= total`).toBeLessThanOrEqual(s.total);
  expect(s.total, `${label}: total > 0`).toBeGreaterThan(0);
  // passRate should match passed/total within rounding
  const expected = Math.round((s.passed / s.total) * 1000) / 10;
  expect(Math.abs(s.passRate - expected), `${label}: passRate matches ratio`).toBeLessThanOrEqual(0.1);
  expect(Number.isFinite(Date.parse(s.lastRun)), `${label}: lastRun is a date`).toBeTruthy();
}

/** Reads the "/NN" denominator a metric card renders (e.g. "134/145" -> 145). */
async function renderedTotal(page: import('@playwright/test').Page, selector: string): Promise<number> {
  const txt = await page.locator(selector).innerText();
  const m = txt.match(/\/\s*(\d+)/);
  expect(m, `could not parse total from "${txt}"`).not.toBeNull();
  return Number(m![1]);
}

test.describe('API + UI consistency (live metrics)', () => {
  test('status.json endpoints return a valid schema', async ({ request }) => {
    assertSchema(await fetchStatus(request, METRICS.ui), 'ui');
    assertSchema(await fetchStatus(request, METRICS.api), 'api');
  });

  test('the metrics widget renders totals that match the API', async ({ page, request }) => {
    const [ui, api] = await Promise.all([
      fetchStatus(request, METRICS.ui),
      fetchStatus(request, METRICS.api),
    ]);

    await page.goto('/');
    // the widget reveals on scroll (IntersectionObserver) — bring it into view
    await page.locator(SEL.liveMetrics).scrollIntoViewIfNeeded();

    // totals are set straight from the fetched payload (not animated), so they
    // are the stable thing to compare; the passed-count animates from 0.
    await expect
      .poll(() => renderedTotal(page, SEL.metricUi), { timeout: 10_000 })
      .toBe(ui.total);
    await expect
      .poll(() => renderedTotal(page, SEL.metricApi), { timeout: 10_000 })
      .toBe(api.total);
  });

  test('DEMO tags disappear once real data loads', async ({ page }) => {
    await page.goto('/');
    await page.locator(SEL.liveMetrics).scrollIntoViewIfNeeded();
    // when the live fetch succeeds the app removes the per-source DEMO tag
    await expect(page.locator(SEL.demoUi)).toBeHidden({ timeout: 10_000 });
    await expect(page.locator(SEL.demoApi)).toBeHidden({ timeout: 10_000 });
  });
});
