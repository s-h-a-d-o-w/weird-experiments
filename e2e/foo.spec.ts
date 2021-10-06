import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.type('text=User name', 'John Doe');
  await page.press('text=User name', 'Enter');

  await page.fill('text=User name', '');
  await page.type('text=User name', 'Jane Doe');
  await page.click('text=Create');

  expect(await page.$$('li')).toHaveLength(4);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
    'landing.png'
  );
});
