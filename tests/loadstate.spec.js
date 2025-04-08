const {test,expect} = require("@playwright/test")

test("Dynamic call", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/login")
    await page.locator("input[id='username']").fill("practice")
    await page.locator("input[type='password']").fill("SuperSecretPassword!")
    await page.locator("button[type='submit']").click()
    await page.waitForLoadState("networkidle")
    expect(await page.locator("#username",{name:"Hi, practice!"})).toBeTruthy()
})
