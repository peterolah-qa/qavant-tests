# qavant-tests

End-to-end, accessibility, i18n and SEO test suite for **[qavant.dev](https://qavant.dev)** —
written with Playwright + TypeScript.

The point of this repo is not to test a brochure site. It is to **treat my own
portfolio like a production fintech application**: continuous, multi-browser,
accessibility-gated, and run against the live site on every push and on a daily
schedule. The tests are the artifact — they show how I think about quality, not
just that I can click through a page.

## What is covered

| Suite | What it proves | Why it matters |
|-------|----------------|----------------|
| `smoke` | The page loads, the skeleton (hero, nav, all 8 sections, canvas) is intact, and there are **no console errors or uncaught exceptions**. | The cheapest, fastest regression net. |
| `i18n` | Language switching (SK/EN/DE) actually swaps copy, the choice **persists via `localStorage`**, **no translated element is ever empty**, no raw key leaks, and **German never causes horizontal overflow**. | The trilingual layer is a real regression surface — a missing key renders blank, and the longest language can break a fixed hero. |
| `contact-form` | The form exposes the contract **Netlify Forms** relies on, the honeypot is present but **off-screen**, and HTML5 validation rejects empty/malformed input. **The form is never actually submitted** — that would pollute the production inbox. | Side-effect-free verification of a no-backend form against a live target. |
| `data-driven` | Contact-form validation driven from a **scenario table** — a 7-case email matrix plus a required-field matrix — so cases live in data, not in logic. | Adding an edge case is a one-line change, and each case reports as its own pass/fail. |
| `api-ui-consistency` | Fetches both CI `status.json` files via the API, validates their schema (`passed ≤ total`, `passRate` matches the ratio), then asserts the live-metrics widget **renders totals that match the API** and drops its DEMO tags. | Catches a class of bug neither a pure-UI nor a pure-API suite sees — e.g. the UI silently falling back to demo data while the API is actually fine. |
| `accessibility` | **axe-core** WCAG 2 A/AA scan in **all three languages**, gated on serious/critical violations, plus single-H1 and `lang` checks. | Accessibility is part of quality, not a checkbox — and translations can introduce their own a11y issues. |
| `seo` | Title, meta description, canonical, Open Graph essentials, three declared locales, and **valid JSON-LD**. | A freelancer's link has to preview well and be found. |
| `responsive` | No horizontal scroll at 360px, hero + contact reachable on mobile. | Most visitors arrive on a phone. |
| `reduced-motion` | With `prefers-reduced-motion`, content is **visible immediately**, not stuck behind an entrance animation. | Motion-sensitive users must still get the content. |
| `visual` *(tagged `@visual`, quarantined)* | Screenshot baselines of the hero and services sections, with the dynamic metrics widget **masked out**. | Visual regression without destabilising the green pipeline — see *Design decisions*. |

## Design decisions

- **Runs against production by default** (`BASE_URL` defaults to `https://qavant.dev`),
  so CI doubles as a synthetic monitor. Point it elsewhere with `BASE_URL=…`.
- **Black-box i18n completeness** — instead of reaching into the page's private
  dictionary, the test renders each language and asserts nothing is blank. It tests
  what the user actually sees.
- **Data-driven over copy-paste** — the email matrix only includes cases all three
  engines agree on, because HTML5 `type=email` is deliberately lenient (`a@b` is
  valid). Knowing where the spec is loose is the difference between asserting
  *behaviour* and asserting *assumptions*.
- **Cross-layer checks** — `api-ui-consistency` exercises the API and the UI in one
  test; agreement between the two layers is itself the assertion.
- **Visual tests are quarantined** — they are tagged `@visual` and excluded from the
  blocking run (`npm test` uses `--grep-invert @visual`). Snapshot baselines are
  environment-specific (OS + browser render text and anti-aliasing differently), so
  they must be generated in the same environment that compares them. Running them in
  the daily pipeline without committed baselines would fail on the first run for the
  wrong reason. Generate with `npm run test:visual:update`, compare with `npm run test:visual`.
- **No destructive actions** — the contact form is validated, never sent. Good test
  hygiene against a live system.
- **Selectors centralised** in `tests/fixtures/constants.ts` — one place to maintain.
- **Cross-browser + mobile** — Chromium, Firefox, WebKit, Pixel 5, iPhone 13.

## Running locally

```bash
npm ci
npx playwright install --with-deps
npm test                    # all projects against https://qavant.dev (excludes @visual)
npm run test:smoke          # just the smoke suite
npm run test:a11y           # just accessibility
npm run report              # open the last HTML report
npm run test:visual         # visual regression (needs committed baselines)
npm run test:visual:update  # generate / refresh visual baselines
```

Target a local copy instead of production:

```bash
BASE_URL=http://localhost:8000 npm test
```

## CI

`.github/workflows/playwright.yml` runs the full matrix on every push/PR to `main`,
on a **daily schedule** (synthetic monitoring), and on demand. The HTML report is
uploaded as a build artifact. A red run is a blocked merge — the quality gate.

## Stack

Playwright Test · TypeScript · @axe-core/playwright · GitHub Actions

---

Built and maintained by **Peter** · [qavant.dev](https://qavant.dev)
