        import {Given, When , Then} from "@cucumber/cucumber"
        import {chromium, Page, Browser, expect} from "@playwright/test";

        let browser:Browser;
        let page:Page;
        let todayDate:string;
        let checkOutDate:string;

        Given('user navigates to the application', async function () {
                browser = await chromium.launch({headless:false});
                page = await browser.newPage();
                await page.goto("https://automationintesting.online");

                });

                Given('has succesfully navigated', async function () {
                await expect(page.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();
                });

              Given('select todays date and {string} days', async function (daysStr) {
    const daysToAdd = parseInt(daysStr, 10);

    // Helper function to get future date formatted as DD/MM/YYYY
    function getFutureDateFormatted(addDays: number): string {
        const today = new Date();
        const future = new Date(today); // clone today
        future.setDate(today.getDate() + addDays); // add days safely
        const day = String(future.getDate()).padStart(2, '0');
        const month = String(future.getMonth() + 1).padStart(2, '0');
        const year = future.getFullYear();
        return `${day}/${month}/${year}`;
    }

     todayDate = getFutureDateFormatted(0);
     checkOutDate = getFutureDateFormatted(daysToAdd);
    // Fill Check Out
const checkOutBox = page.locator('div').filter({
        hasText: 'Check Out' 
    }).getByRole('textbox').nth(1); 

    await checkOutBox.fill(checkOutDate);
    // Click Check Availability
    await page.getByRole('button', { name: 'Check Availability' }).click();
});




         Given('click on book now for {string}', async function (roomType) {
    switch(roomType){
    case 'Single':
    await page.locator('div')
    .filter({ hasText: new RegExp('^£100 per nightBook now$') })
    .getByRole('link')
    .click();
break;


    case 'Double':
 await page.locator('div')
    .filter({ hasText: new RegExp('^£150 per nightBook now$') })
    .getByRole('link')
    .click();
break;

    case 'Suite':
 await page.locator('div')
    .filter({ hasText: new RegExp('^£225 per nightBook now$') })
    .getByRole('link')
    .click();
    break;

     case 'Default':
          console.log('No such room');


                }
            });


 Given('insert {string},{string},{string},{string} as details and click Reserve now', async function (firstName, lastName, email, phone) {
         
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Lastname' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Phone' }).fill(phone);
  await page.getByRole('button', { name: 'Reserve Now' }).click();


});

           Then('user should be able to see errors', async function () {
           await expect(page.getByRole('alert').filter({ hasText: 'size must be between 3 and' })).toBeVisible();
         });

         Then('user should see success message', async function () {
          await expect(page.locator('h2', { hasText: 'Booking Confirmed' })).toBeVisible();
          //await expect(page.locator('strong')).toContainText([todayDate, checkOutDate]);
         });

// No condition to check
        // Given('user sees TV icon in TV room', async function () {
                
        //         });

// No condition to check
        //         Given('no TV icon in no TV room', async function () {
                
        //         });