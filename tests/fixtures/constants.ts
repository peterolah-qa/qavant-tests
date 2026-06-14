/**
 * Central selectors / constants. One place to update if the markup changes —
 * the tests read from here instead of hard-coding strings everywhere.
 */
export const LANGS = ['sk', 'en', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export const SECTIONS = [
  'services',
  'showcase',
  'interlude',
  'about',
  'mission',
  'process',
  'contact',
] as const;

export const SEL = {
  hero: '#heroTitle',
  heroCanvas: '#hero3d',
  nav: 'nav.nav-links',
  navLinks: 'nav.nav-links a[href^="#"]',
  langSwitch: '.lang-switch',
  langButton: (l: Lang) => `.lang-switch button[data-lang="${l}"]`,
  i18nNodes: '[data-i18n]',
  form: 'form[name="contact"]',
  formName: 'input[name="form-name"]',
  honeypot: 'input[name="bot-field"]',
  input: {
    name: '#name',
    email: '#email',
    company: '#company',
    topic: '#topic',
    message: '#message',
  },
  submit: 'form[name="contact"] button[type="submit"]',
  certBadge: 'a.cert-badge',
  liveMetrics: '#liveMetrics',
  metricUi: '#metricTests',
  metricApi: '#metricApi',
  demoUi: '.demo-tag.demo-ui',
  demoApi: '.demo-tag.demo-api',
} as const;

/** The CI status feeds the site reads for its live metrics widget. */
export const METRICS = {
  ui:  'https://raw.githubusercontent.com/peterolah-qa/qavant-tests/main/status.json',
  api: 'https://raw.githubusercontent.com/peterolah-qa/qavant-api-tests/main/status.json',
} as const;

/** A known nav string per language — used to prove translation actually swapped. */
export const NAV_SERVICES: Record<Lang, RegExp> = {
  sk: /Služby/i,
  en: /Services/i,
  de: /Leistungen|Services/i,
};

export const STORAGE_LANG_KEY = 'qavant.lang';
