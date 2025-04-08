const {test,expect} = require("@playwright/test")

test("Verify Simple Alert", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog', async dialog => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.accept();
  });
  
  await page.click("button[onclick='jsAlert()']"); 
})

test("Verify Confirmation alert",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('confirm',async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("I am a JS Confirm")
        await dialog.dismiss()
    })
    await page.click("button[onclick='jsConfirm()']")
})

test("Verify Prompt alert",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('prompt',async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("I am a JS prompt")
        await dialog.accept("Hello World")
        await expect(page.locator("#result")).toContainText("Hello World")
    })
    await page.click("button[onclick='jsPrompt()']")
})