    import {Given , Then} from "@cucumber/cucumber"
    import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

        
            let checkOutDate:string;


                    Given('user has succesfully navigated', async function () {
                    await expect(pageFixture.page.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();
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
    const checkOutBox = pageFixture.page.locator('div').filter({
            hasText: 'Check Out' 
        }).getByRole('textbox').nth(1); 

        await checkOutBox.fill(checkOutDate);
        // Click Check Availability
        await pageFixture.page.getByRole('button', { name: 'Check Availability' }).click();
    });




            Given('click on book now', async function () {
    const secondBookNowButton = pageFixture.page.getByRole('link', { name: 'Book now' }).nth(1);
await secondBookNowButton.click();
                });


    Given('insert {string},{string},{string},{string} as details and click Reserve now', async function (firstName, lastName, email, phone) {
            
    await pageFixture.page.getByRole('button', { name: 'Reserve Now' }).click();
    await pageFixture.page.getByRole('textbox', { name: 'Firstname' }).fill(firstName);
    await pageFixture.page.getByRole('textbox', { name: 'Lastname' }).fill(lastName);
    await pageFixture.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await pageFixture.page.getByRole('textbox', { name: 'Phone' }).fill(phone);
    await pageFixture.page.getByRole('button', { name: 'Reserve Now' }).click();


    });

            Then('user should be able to see errors', async function () {
            await expect(pageFixture.page.getByRole('alert').filter({ hasText: 'size must be between 3 and' })).toBeVisible();
            });

            Then('user should see success message', async function () {
            await expect(pageFixture.page.locator('h2', { hasText: 'Booking Confirmed' })).toBeVisible();
            });
