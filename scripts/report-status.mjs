// Reads Playwright's results.json and writes a compact status.json
// that the qavant.dev site fetches to show REAL CI metrics.
import { readFileSync, writeFileSync } from 'node:fs';

let report;
try {
  report = JSON.parse(readFileSync('results.json', 'utf8'));
} catch {
  console.error('results.json not found — did Playwright run with the json reporter?');
  process.exit(0); // do not fail the build over a missing report
}

let passed = 0, total = 0;
function walk(suite) {
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      total++;
      const last = (test.results || []).slice(-1)[0];
      if (last && last.status === 'passed') passed++;
    }
  }
  for (const child of suite.suites || []) walk(child);
}
(report.suites || []).forEach(walk);

// fallback to top-level stats if traversal found nothing
if (total === 0 && report.stats) {
  passed = report.stats.expected || 0;
  total = passed + (report.stats.unexpected || 0) + (report.stats.flaky || 0);
}

const passRate = total ? Math.round((passed / total) * 1000) / 10 : 0;

// carry forward an incrementing run counter from the previous status.json
let runs = 0;
try { runs = (JSON.parse(readFileSync('status.json', 'utf8')).runs || 0); } catch {}

const status = {
  passed,
  total,
  passRate,
  runs: runs + 1,
  lastRun: new Date().toISOString(),
};

writeFileSync('status.json', JSON.stringify(status, null, 2) + '\n');
console.log('status.json:', status);
