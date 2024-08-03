import {test as base, expect} from '@playwright/test'

//fixture into playhook
let y:number

type newFixture = {
    fixOne: any;
    fixTwo: any;
}

const test = base.extend<newFixture>({
    fixOne: async({}, use)=>{
        const fixOne1 = undefined;
        y = 1;
        await use(fixOne1)
    },
    
    fixTwo: async({}, use)=>{
        const fixTwo = undefined;
        y = 2;
        await use(fixTwo)
    }
})

test("basic one", async ({fixOne}) => {
    expect(y).toBe(1)
})

test("basic two", async ({fixTwo}) => {
    expect(y).toBe(2)
})

