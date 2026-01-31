import { test, expect } from '@playwright/test';
import fs from 'fs';

test('mobile visual: homepage screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1')).toContainText('AI Dream Team');
  const path = 'test-results/homepage-screenshot-mobile.png';
  await page.screenshot({ path, fullPage: true });
  expect(fs.existsSync(path)).toBeTruthy();
});