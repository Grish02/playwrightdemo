const {test,expect} = require("@playwright/test")

test("Verify Dropdown", async ({page})=>{
    await page.goto("https://letcode.in/dropdowns")

    await page.locator("#fruits").selectOption({label:"Mango"})
    await expect(page.locator("body > app-root > app-dropdown > section > div > div > div.column.is-6-desktop.is-8-tablet > div > div > div:nth-child(1) > div > div.content > div > p",{label:"You have selected Mango"})).toBeVisible()
})
