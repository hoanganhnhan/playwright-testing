import {expect, test} from "@playwright/test"

test("Basic test", async ({page})=>{
    
    await page.goto('https://computer-database.gatling.io/computers');
    //console.log(await page.locator('tbody td a').count());
    // for (let index = 0; index < await page.locator('tbody td a').count(); index++) {
    //     const element = page.locator("tbody td a").nth(index)
    //     await element.click();
    //     await page.pause();
    //     await page.goBack();
    // }

    for (const element   of await page.locator('tbody td a').all()) {
        await element.click();
        await page.pause();
        await page.goBack();
    }
    
})