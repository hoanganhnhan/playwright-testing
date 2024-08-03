import {expect, test} from "@playwright/test"
import ComputerPage from "./support/pageobjectmodel/pages/computers.page"
import AddComputerPages from "./support/pageobjectmodel/pages/addComputers.page";

test("Basic test", async ({page})=>{
    await page.goto('https://computer-database.gatling.io/computers');
    await page.getByText("Add a new computer").click();
    await page.locator("#name").fill("Test adding computer")
    await page.locator("#introduced").fill("2024-01-01")
    await page.locator("#discontinued").fill("2024-11-11")
    await page.locator("#company").selectOption({label: "Apple Inc."})
    await page.getByText("Create this computer").click();
    await expect(page.getByText("Done ! Computer Test adding computer has been created")).toBeVisible();


})

test.only("basic pom", async ({page}) => {
    const computerPage = new ComputerPage(page);
    const addComputerPage = new AddComputerPages(page);
    await computerPage.goto();
    await computerPage.clickAddNewComputer();

    await addComputerPage.addNewComputer();
    await computerPage.assertComputerAdded();
})