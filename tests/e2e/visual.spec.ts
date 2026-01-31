import { test, expect } from '@playwright/test';
import fs from 'fs';

test('visual check: homepage screenshot and console', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  // basic checks
  await expect(page.locator('h1')).toContainText('AI Dream Team');
  await expect(page.locator('text=Explore Projects')).toBeVisible();

  // screenshot
  const path = 'test-results/homepage-screenshot.png';
  await page.screenshot({ path, fullPage: true });
  expect(fs.existsSync(path)).toBeTruthy();

  // ensure no unexpected console errors (ignore hydration dev warnings)
  const unexpected = errors.filter(e => !e.includes('A tree hydrated') && !e.includes('HotReload'));
  expect(unexpected).toEqual([]);
});