import { test, expect, selectors } from '@playwright/test';
import { Page } from '@playwright/test';


test.skip("vd 1: New GetBy method", async ({page})=> {
  await page.goto('https://todomvc.com/examples/preact/dist/')
  await page.pause()
  // let handle= page.getByPlaceholder('What needs to be done?') //phương thức này không trả về một Promise mà trả về một đối tượng ElementHandle đồng bộ. Vì vậy, không cần sử dụng await để chờ đợi kết quả trả về.
  // await handle.click()
  await page.getByPlaceholder('What needs to be done?').fill('video 8')
  await page.getByPlaceholder('What needs to be done?').press('Enter')
  // await page.pause()

  //getBy text
  await expect(page.getByText('video 8', {exact: true})).toBeVisible()
  // await page.pause()
  //getByTestID
  selectors.setTestIdAttribute("placeholder")  //ID
  await page.getByTestId('What needs to be done?').fill('not done') //What needs to be done?: value của id tr
  await page.getByPlaceholder('What needs to be done?').press('Enter')
  await page.pause()
})

test("vd 2: New GetBy method", async ({page})=> {
  await page.goto('https://google.com')
  await page.pause()
  await page.getByRole("combobox").fill("nhan test")
  // await page.getByRole('button', { name: 'Tìm trên Google' }).click() //name này là value của attribute aria-label, ko phải attribute name
  // await page.getByLabel('Công cụ nhập').click()
  await page.pause()
  // await page.getByRole('button', { name: 'Xem trang đầu tiên tìm được' }).click()
  // await page.getByText('Giới thiệu').click() //là cái text ví dụ <div name= ... clas=...>Text ở đây </div>
  await page.getByLabel('Tìm trên Google').click()
  //await page.getByPlaceholder('abc').click()
  await page.pause()
})