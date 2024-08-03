// import {expect, test} from "@playwright/test"
import {test} from "./fixtures/basePage"


test.only("basic pom advance", async ({computersPage, addComputerPage}) => {
    await computersPage.goto();
    await computersPage.clickAddNewComputer();

    await addComputerPage.addNewComputer();
    await computersPage.assertComputerAdded();
})