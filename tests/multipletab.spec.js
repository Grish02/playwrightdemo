const { test, expect } = require("@playwright/test");

test("Multiple Tabs", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://practice.expandtesting.com/windows");

    //  Wait for the 'page' event correctly
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  //  Wait for a new tab to open
        page1.click("#core > div > div > div > a")   // Click that triggers the new tab
    ]);

    await newPage.waitForLoadState(); // Ensure the new tab is fully loaded
    console.log("New tab URL:", newPage.url());

    // Open another tab manually
    const page2 = await context.newPage();
    await page2.goto("https://playwright.dev");

    // Bring the original page to the front
    await page1.bringToFront();

    // Close the second manually opened tab
    await page2.close();
});
