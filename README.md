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
| `accessibility` | **axe-core** WCAG 2 A/AA scan in **all three languages**, gated on serious/critical violations, plus single-H1 and `lang` checks. | Accessibility is part of quality, not a checkbox — and translations can introduce their own a11y issues. |
| `seo` | Title, meta description, canonical, Open Graph essentials, three declared locales, and **valid JSON-LD**. | A freelancer's link has to preview well and be found. |
| `responsive` | No horizontal scroll at 360px, hero + contact reachable on mobile. | Most visitors arrive on a phone. |
| `reduced-motion` | With `prefers-reduced-motion`, content is **visible immediately**, not stuck behind an entrance animation. | Motion-sensitive users must still get the content. |

## Design decisions

- **Runs against production by default** (`BASE_URL` defaults to `https://qavant.dev`),
  so CI doubles as a synthetic monitor. Point it elsewhere with `BASE_URL=…`.
- **Black-box i18n completeness** — instead of reaching into the page's private
  dictionary, the test renders each language and asserts nothing is blank. It tests
  what the user actually sees.
- **No destructive actions** — the contact form is validated, never sent. Good test
  hygiene against a live system.
- **Selectors centralised** in `tests/fixtures/constants.ts` — one place to maintain.
- **Cross-browser + mobile** — Chromium, Firefox, WebKit, Pixel 5, iPhone 13.

## Running locally

```bash
npm ci
npx playwright install --with-deps
npm test                 # all projects against https://qavant.dev
npm run test:smoke       # just the smoke suite
npm run test:a11y        # just accessibility
npm run report           # open the last HTML report
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
