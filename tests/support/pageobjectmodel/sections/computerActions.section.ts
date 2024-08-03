import { Page } from "@playwright/test";
export default class ComputerDetails{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    //locators:
    createButton = () => this.page.getByText("Create this computer");

    //action
    public async clickCreateComputer(){
        await this.createButton().click();
    }
}