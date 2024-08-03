import { test, expect } from '@playwright/test';
import exp from 'constants';
test.skip ("test", async ({page}) =>{
    await page.goto("https://commitquality.com/")
    await page.pause()
    await page.locator('.filter-textbox').fill('test') //css selector
    await page.pause()
    await page.locator('[data-testid="filter-button"]').click() //attribute
    await page.pause()
    await page.locator('text=REset').click() //by text
    await page.pause()
    await page.locator('.edit-button', {hasText: "Show More"}).click() //by class+text
    await page.locator('[data-testid="show-more-button"]', {hasText: "Show More"}).click() //by attr+text   
    await page.pause()
 
})

test("first", async ({page}) =>{
    await page.goto("https://commitquality.com/")
    // await page.pause()
    console.log (await page.locator('.product-list-table tbody tr').count())
    //first
    console.log (await page.locator('.product-list-table tbody tr').first().getAttribute('data-testid'))
    let visible = await page.locator('.product-list-table tbody tr').first().isVisible()
    console.log(visible);
    expect (visible).toBe(true)
})


test("last", async ({page}) =>{
    await page.goto("https://commitquality.com/")
    // await page.pause()
    console.log (await page.locator('.product-list-table tbody tr').count())
    console.log (await page.locator('.product-list-table tbody tr').last().getAttribute('data-testid'))
    let visible = await page.locator('.product-list-table tbody tr').last().isVisible()
    console.log(visible);
    expect (visible).toBe(true)
})

test.only("nth", async ({page}) =>{
    await page.goto("https://commitquality.com/")
    await page.pause()
    let visible = await page.locator('.product-list-table tbody tr').nth(10).isHidden()
    expect (visible).toBe(true)
    console.log (await page.locator('.product-list-table tbody tr').count())
    // await page.getByTestId('show-more-button').click()
    // await page.getByText('Show More').click()
    await page.getByRole('button', {name: 'Show More'} ).click()
    console.log (await page.locator('.product-list-table tbody tr').nth(10).getAttribute('data-testid'))
    visible = await page.locator('.product-list-table tbody tr').nth(10).isVisible()
    expect (visible).toBe(true)
})