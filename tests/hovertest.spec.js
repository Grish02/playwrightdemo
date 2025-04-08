const {test,expect} = require("@playwright/test")

test("Verify Mouse Hover", async ({page})=>{
    await page.goto("https://magento.softwaretestingboard.com/")
    await page.locator('#ui-id-4 > span:nth-child(2)').hover();  
    await page.locator('#ui-id-9').hover();
    await page.locator('#ui-id-13').click();  
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/women/tops-women/tees-women.html")
})

