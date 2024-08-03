import {test, expect, chromium} from "@playwright/test"
import { ChildProcess } from "child_process";

test("without fixtures", async ({}) => {
    const browser = await chromium.launch(); //create a chrome browser
    const context = await browser.newContext(); //create isolated context
    const page = await context.newPage(); //create a page
    await page.goto("https://www.amazone.co.uk");

    console.log(await context.cookies());
   // console.log("After clear");
   // await context.clearCookies(); //user content to remove cookies
    //console.log(await context.cookies());


    //create another new isolated browser context
    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    // const page2 = await browser.newPage()
    await page2.goto("https://www.google.com")
    
    //make a request
    const req = await page.request.get("https://jsonplaceholder.typicode.com/todos/1");
    const res = await req.json();
    console.log(res);
    // console.log(await browser._name);
})

test.only("with fixtures", async ({page, context, browser, request, browserName}) => {
    
    await page.goto("https://www.amazone.co.uk");
    console.log(await context.cookies());
    console.log("After clear---------------------------------");
    await context.clearCookies(); //user content to remove cookies
    console.log(await context.cookies());


    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto("https://www.google.com")
    
    //make a request
    const req = await request.get("https://jsonplaceholder.typicode.com/todos/1");
    const res = await req.json();
    console.log(res);

    console.log(browserName);
})





