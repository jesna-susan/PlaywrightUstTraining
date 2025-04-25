import {expect, test} from "@playwright/test";

test ('Verify Page title', async ({page}) =>{
    await page.goto('https://github.com/aryan1403');
    await expect(page).toHaveTitle("aryan1403 (Aaryan) · GitHub"); 
})

test ('Click on ', async ({page}) =>{
    await page.goto('https://github.com/aryan1403');
    const follow = page.locator("//a[text()='Aaryan']")
    test.slow();
    await follow.click();
})

test('Element to be visible', async ({page})=>{
    await page.goto('https://github.com/aryan1403');
    await expect(page.locator("//a[text()='Aaryan']")).toBeVisible();
  
})

test('Verify Text displayed', async ({page}) =>{
    await page.goto('https://github.com/aryan1403');
    const yarn = page.getByRole('link', { name: 'Aaryan', exact: true });
    console.log(await yarn.isVisible());
})

test('Verify Element Text', async ({ page }) => {
  await page.goto('https://github.com/aryan1403');
  const element = page.locator("//a[text()='Aaryan']");
  const text = await element.textContent();
  expect(text).toBe('Aaryan');
});





