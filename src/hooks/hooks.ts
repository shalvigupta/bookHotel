import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";
import { fixture } from "./pageFixture";


 let browser:Browser;
  let page:Page;
BeforeAll(async function(){
 browser = await chromium.launch({headless:false});
                page = await browser.newPage();
                fixture.page = page;
                await page.goto("https://automationintesting.online");


} );

AfterAll(async function() {
await page.close();
await browser.close();
})
