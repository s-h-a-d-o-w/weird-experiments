import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const nameInput = page.locator('text=User name');

  await nameInput.type('John Doe');
  await nameInput.press('Enter');

  await nameInput.fill('');
  await nameInput.type('Jane Doe');
  await page.click('text=Create');

  expect(await page.locator('li').count()).toBe(4);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    'landing.png'
  );
});
