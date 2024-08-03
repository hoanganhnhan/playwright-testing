import { Page } from "@playwright/test";
export default class ComputerActions{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    //locators:
    nameTextbox = () => this.page.locator("#name");
    introducedTextbox = () => this.page.locator("#introduced");
    discontinuedTextbox = () => this.page.locator("#discontinued");
    companySelect = () => this.page.locator("#company");

    // await page.locator("#name").fill("Test adding computer")
    // await page.locator("#introduced").fill("2024-01-01")
    // await page.locator("#discontinued").fill("2024-11-11")
    // await page.locator("#company").selectOption({label: "Apple Inc."})
    //actions
    public async enterComputerDetails(){
        await this.nameTextbox().fill("Test adding computer");
        await this.introducedTextbox().fill("2024-01-01");
        await this.discontinuedTextbox().fill("2024-11-11");
        await this.companySelect().selectOption({label: "Apple Inc."});
    }
}