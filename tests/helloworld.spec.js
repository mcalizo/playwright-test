import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await expect(page.getByText('GREENKART', { exact: true })).toBeVisible();
  await page.getByPlaceholder('Search for Vegetables and').click();
  await page.getByPlaceholder('Search for Vegetables and').fill('ca');
  await page.locator('div').filter({ hasText: /^Carrot - 1 Kg56–\+ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('combobox').selectOption('Philippines');
  await expect(page.getByRole('link', { name: 'Terms & Conditions' })).toBeVisible();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Proceed' }).click();  
  await expect(page.getByText('GREENKART', { exact: true })).toBeVisible();
});