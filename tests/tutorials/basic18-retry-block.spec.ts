import {expect, test} from "@playwright/test"

test("Basic test", async ({page})=>{
    await expect(async()=> {
        await page.goto('https://computer-database.gatling.io/computers');
        await page.getByText("Add a new computer").click();
        await page.locator("#name").fill("Test adding computer")
        await page.locator("#introduced").fill("2024-01-01")
        await page.locator("#discontinued").fill("2024-11-11")
        await page.locator("#company").selectOption({label: "Apple Inc."})
        await page.getByText("Create this computer").click();
        await expect(page.getByText("Done ! Computer Tests adding computer has been created")).toBeVisible();
   }).toPass({timeout: 15000, intervals: [1000, 2000, 3000]});
    
})