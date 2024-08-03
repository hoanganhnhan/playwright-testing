import { expect, Page } from "@playwright/test";

export default class ComputersPage{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public async goto(){
        await this.page.goto("https://computer-database.gatling.io/computers")
    }

    //locators
    addComputerButton = () => this.page.getByText("Add a new computer");
    assertText = () => this.page.getByText("Done ! Computer Test adding computer has been created");

    //actions
    public async clickAddNewComputer(){
        await this.addComputerButton().click();
    }
    public async assertComputerAdded(){
        await expect(this.assertText()).toBeVisible();
    }
}