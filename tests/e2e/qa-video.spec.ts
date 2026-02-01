import { test, expect } from '@playwright/test';

// Enable video for this file
test.use({ video: 'on' });

const pages = ['/', '/projects'];

for (const p of pages) {
  test(`record interaction and screenshot for ${p}`, async ({ page, baseURL }) => {
    const url = `${baseURL}${p}`;
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    // small interaction: if on home, click explore projects
    if (p === '/') {
      const explore = page.locator('text=Explore Projects');
      if (await explore.isVisible()) {
        await explore.click();
        await page.waitForURL('**/projects');
        await page.waitForLoadState('networkidle');
      }
    }
    // take a full page screenshot
    await page.screenshot({ path: `test-results/qa-${p.replace('/', 'home' )}-screenshot.png`, fullPage: true });
    // keep a short pause to capture a bit of video
    await page.waitForTimeout(1500);
    expect(await page.title()).toBeTruthy();
  });
}
