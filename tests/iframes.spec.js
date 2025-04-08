const {test,expect} = require("@playwright/test")

test("Verify Iframe", async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const iframe = await page.frameLocator("frame[name='packageFrame']")
    await iframe.locator("body > div > ul > li:nth-child(6) > a").click()
    await page.pause()
})