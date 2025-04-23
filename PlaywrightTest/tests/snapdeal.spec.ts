import { expect, test } from "@playwright/test";


test('Verify Footer Links', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  const footerLinks = page.locator('div.footerInner a');
  const linkCount = await footerLinks.count();
  console.log(`Number of footer links: ${linkCount}`);
  expect(linkCount).toBeGreaterThan(0);
});


test('Verify Navigation to Login Page', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  await page.click('span.accountUserName');
  await expect(page).toHaveURL('https://www.snapdeal.com/login');
});


test('Verify Cart Icon Visibility', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  const cartIcon = page.locator('div.cartContainer');
  await expect(cartIcon).toBeVisible();
});


test('Verify Search Functionality', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  await page.fill('input#inputValEnter', 'laptop');
  await page.click('span.searchTextSpan');
  await expect(page).toHaveURL(/.*keyword=([^&]+)/);
});


test('Verify Page Title', async ({ page }) => {
  await page.goto('https://www.snapdeal.com/');
  await expect(page).toHaveTitle('Shop Online for Men, Women & Kids Clothing, Shoes, Home Decor Items');
});
