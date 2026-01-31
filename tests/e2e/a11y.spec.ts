import { test, expect } from '@playwright/test';
const axe = require('axe-core');

async function runAxe(page: any) {
  // inject axe-core
  await page.addScriptTag({ content: axe.source });
  const results = await page.evaluate(async () => {
    // @ts-ignore
    return await (window as any).axe.run(document, { runOnly: { type: 'tag', values: ['wcag2aa', 'wcag21aa'] } });
  });
  return results;
}

const pages = ['/', '/projects'];

for (const p of pages) {
  test(`a11y: ${p}`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL}${p}`);
    await page.waitForLoadState('networkidle');
    const results = await runAxe(page);

    // Log violations for inspection
    if (results.violations.length > 0) {
      console.error(`A11Y violations on ${p}:`, JSON.stringify(results.violations, null, 2));
    }

    expect(results.violations).toEqual([]);
  });
}
