import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe('this is a test block 1', ()=>{
  // test.use({baseURL: 'https://playwright.dev'})
  test('test 1', async ({ page, browserName }) => {
    // test.fail()
    // test.fixme(browserName === 'chromium', 'This feature breaks in chromium for some reason'); //if this test run on chromium -> this test 1 will be skip // fixme = skip
    // test.slow() //x3 timeout
    await page.goto('/');
    // await page.locator('kop').click()
    console.log(page.url());
    
  });
  // test('test 1.1', async ({ page }) => {
  //   await page.goto('/');
  //   // await expect(page, "have the text").not.toHaveTitle(/Playwrights/, {timeout: 4000});
  //   console.log(page.url());
    
  // });

})
  
// test.describe.configure({mode: 'serial'}) //run tuần tự
test.describe('this is a sub test block', ()=>{
  test('test 2', async ({page}) => {
    await page.goto('/');
    expect(1).toEqual(1)
    expect(0).toBeFalsy()
    console.log(page.url());
  })
  // test('test 2.1', async ({page}) => {
  //   await page.goto('/');
  //   console.log(page.url());
  // })

})

// test('test 3', async ({page}) => {
//   await page.goto('/');
//   expect.soft(0, "pass").toEqual(0);
//   console.log(page.url());
// })

