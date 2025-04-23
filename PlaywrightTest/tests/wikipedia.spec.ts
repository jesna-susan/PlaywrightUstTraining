import {expect, test} from "@playwright/test";

test('Verify Page Title',async({page})=>{
    await page.goto('https://www.wikipedia.org/');
    await expect (page).toHaveTitle("Wikipedia");
})


test('Click on', async ({ page }) => {
     await page.goto('https://www.wikipedia.org/');
     const searchInput = page.getByText('Read Wikipedia in your language');
     await searchInput.click();
});


test('Verify Language Link Visibility', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  const englishLink = page.locator('a#js-link-box-en');
  await expect(englishLink).toBeVisible();
});


test('Verify Search Functionality', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.fill('input#searchInput', 'Playwright');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*Playwright/);
});


test('Verify Footer Text', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  const footerText = page.locator('p.site-license');
  const textContent = await footerText.textContent();
  expect(textContent).toContain('This page is available under the Creative Commons Attribution-ShareAlike License');
});


    