import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import {chromium, Page, Browser, BrowserContext} from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser:Browser;
let page:Page;
let context:BrowserContext;

BeforeAll(async function(){
     browser = await chromium.launch({headless:false});
})
Before(async function(){
context =await browser.newContext();
 page = await browser.newPage();
pageFixture.page = page;
await page.goto("https://automationintesting.online");
})


After(async function({pickle, result}){
    //screenshot 
    if(result?.status == Status.FAILED){
   const img= await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`, type:"png"});
   await this.attach(img, "ïmage/png");
    }

await pageFixture.page.close(); 
await context.close();
})

AfterAll(async function () {
    await browser.close();
})