const { test, expect } = require("@playwright/test");

test("Verify Error Message", async ({ page }) => {
    
    await page.goto("https://practice.expandtesting.com/login");
    await page.locator("input[id='username']").fill("practi");
    await page.locator("input[type='password']").fill("SuperSecretPassword!");
    await page.locator("button[type='submit']").click();
    const errorMessageLocator = page.locator("#flash-message");
    await expect(errorMessageLocator).toBeVisible(); 
    const errorMessage = await errorMessageLocator.textContent();
    console.log("Error Message is: " + errorMessage);
    expect(errorMessage.includes("invalid!")).toBeTruthy();
});
