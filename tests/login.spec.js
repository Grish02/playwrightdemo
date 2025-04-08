const {test,expect} = require("@playwright/test")

test("Verify Application Title", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/login")
    await page.locator("input[id='username']").fill("practice")
    await page.locator("input[type='password']").fill("SuperSecretPassword!")
    await page.locator("button[type='submit']").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL("https://practice.expandtesting.com/secure")
    await page.locator("#core > div > div > a").click()
    await expect(page).toHaveURL("https://practice.expandtesting.com/login")

})