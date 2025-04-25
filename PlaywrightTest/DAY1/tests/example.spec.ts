import {expect, test} from "@playwright/test";

//page title is the name of the test
test('Page Title', async ({page}) => {
  // test.setTimeout(100); //means waits for a maximum of 100 ms 
  await page.goto('https://www.typescriptlang.org/');

  // title should match (title, web_title)
  await expect(page).toHaveTitle("TypeScript: JavaScript With Syntax For Types.");
})

test('Click Try ts btn', async ({page}) => {
  // test.slow(); // triples the timeout --> 1000ms x 3
  await page.goto('https://www.typescriptlang.org/');

  // page.locator('#tsf > dkjbsd > divjjs') //to find element by xpath
  // this await function already waits for the page to load so by that time the elements will be loaded thats why in the next line we are not using await
 
  const getStarted = page.getByText('Try TypeScript Now');
  await getStarted.click();

})

test('playwright test', async ({page})=>{

  await page.goto('https://playwright.dev/docs/intro');
  await expect(page.locator("//h1[text()='Installation']")).toBeVisible();

})

test('Verify Text displayed', async ({page}) =>{
    await page.goto('https://www.typescriptlang.org/');
    const yarn = page.getByText('Online or via npm');
    console.log(await yarn.isVisible());
})

test('Verify Element Text', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  const element = page.locator("//h1[text()='Installation']");
  const text = await element.textContent();
  expect(text).toBe('Installation');
});

test('Get Text Content', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  const element = page.locator("//h1[text()='Installation']");
  const textContent = await element.textContent();
  console.log(`The text content is: ${textContent}`);
});

