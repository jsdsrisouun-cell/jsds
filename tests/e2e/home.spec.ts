import { test, expect } from '@playwright/test';

test('basic navigation and contact form', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('AI Dream Team');

  await page.click('text=Explore Projects');
  await expect(page).toHaveURL(/.*\/projects/);
  await expect(page.locator('h1')).toContainText('Projects');

  await page.goto('http://localhost:3000');
  await page.locator('input[name="name"]').fill('Test User');
  await page.locator('input[name="email"]').fill('test@example.com');
  await page.locator('textarea[name="message"]').fill('Hello from E2E test');
  await page.click('text=Send Message');
  // Use .first() to tolerate multiple Toaster instances (flaky duplicates)
  await expect(page.locator('text=Message sent!').first()).toBeVisible({ timeout: 5000 });

  // Ignore hydration warnings from dev-mode overlays; assert no unexpected console errors
  const unexpected = errors.filter(e => !e.includes('A tree hydrated') && !e.includes('HotReload'));
  expect(unexpected).toEqual([]);
});