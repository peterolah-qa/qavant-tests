# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact form >> rejects a malformed email
- Location: tests/contact-form.spec.ts:43:7

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/firefox-1522/firefox/firefox
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.60.0.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.61.1-noble ║
║ - required: mcr.microsoft.com/playwright:v1.60.0-noble ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```