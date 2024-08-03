import {test as base} from "@playwright/test"
import ComputersPage from "../support/pageobjectmodel/pages/computers.page"
import AddComputerPages from "../support/pageobjectmodel/pages/addComputers.page"

export const test = base.extend<{
    computersPage: ComputersPage; 
    addComputerPage: AddComputerPages}>
({
    //define a fixture
    computersPage: async({page}, use) => {
        await use(new ComputersPage(page))
    },
    addComputerPage: async({page}, use) => {
        await use(new AddComputerPages(page))
    }
});