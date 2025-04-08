const { test, expect } = require('@playwright/test');
const { parse } = require('path');
const { stringify } = require('querystring');

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))
test.describe("Data Driven Login Test",()=>{
    for(const data of testdata )
    {
        test.describe(`Login with users ${data.id}`,()=>{

            test('Login To Application',async ({page})=>{
                await page.goto("https://practice.expandtesting.com/login")
                await page.locator("input[id='username']").fill(data.username)
                await page.locator("input[type='password']").fill(data.password)
                await page.locator("button[type='submit']").click()
            })
        })
    }
})
