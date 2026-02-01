import { test, expect } from '@playwright/test';

// あなたの本番URL
const BASE_URL = 'https://ai-dream-team-sigma.vercel.app';

test('本番サイトが正常に表示されるかチェック', async ({ page }) => {
  // 1. サイトにアクセスする
  await page.goto(BASE_URL);

  // 2. URLが正しいか確認
  await expect(page).toHaveURL(BASE_URL + '/');

  // 3. ページタイトルが空でないことを確認
  const title = await page.title();
  console.log(`Page Title: ${title}`);
  expect(title).not.toBe('');
  
  // 4. 証拠写真を撮る
  await page.screenshot({ path: 'production-screenshot.png' });
});