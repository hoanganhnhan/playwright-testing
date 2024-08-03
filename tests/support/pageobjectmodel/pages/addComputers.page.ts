import { expect, Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.section";
import ComputerDetails from "..//sections/computerDetails.section";

export default class AddComputerPages{
    page: Page;
    computerAction: ComputerActions
    computerDetails: ComputerDetails
    constructor(page: Page){
        this.page = page;
        this.computerAction = new ComputerActions(this.page);
        this.computerDetails = new ComputerDetails(this.page);
    }

    public async goto(){
        await this.page.goto("https://computer-database.gatling.io/computers/new")
    }

    public async addNewComputer(){
        await this.computerDetails.enterComputerDetails();
        await this.computerAction.clickCreateComputer();
    }

}