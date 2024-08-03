import {test, expect} from '@playwright/test'

test("multiple tabs", async({page, context}) => {
    await page.goto("https://www.amazon.co.uk")
  
    //create second tab:
    const newTab = await context.newPage();
    await newTab.goto("https://www.ebay.co.uk")

    //bring amazon to the front
    await page.bringToFront();
    
    //interact with second tab:
    await newTab.getByPlaceholder('Search for anything').fill("something");

    await page.pause();
    await newTab.close();
    await page.pause();
})