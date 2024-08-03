import { test, expect } from '@playwright/test';

test.describe.configure({mode: "parallel", retries: 1, timeout: 3000})

test.only('test example', async({page})=>{
  await page.goto('https://playwright.dev/');
  await page.locator(".fake").waitFor();
});

//inside a describe
test.describe.only('group test example', ()=>{
  test.describe.configure({retries: 2, timeout: 2000})
  test("scrope test", async({page})=>{
    await page.goto('https://playwright.dev/')
    await page.locator(".fake").waitFor();
  })
})