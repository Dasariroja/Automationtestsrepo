import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.currys.co.uk/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Currys | Washing Machines, Laptops, TVs, Consoles/);
});

test('main navigation', async ({ page }) => {
    await page.goto('https://www.currys.co.uk/');
    await expect(page).toHaveURL('https://www.currys.co.uk');
  });