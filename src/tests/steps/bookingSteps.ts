
import {Given , Then} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import BookingPage from "../../pages/bookingPage";
import CommonPage from "../../pages/commonPage";


let checkOutDate:string;
let homePage:BookingPage;
let commonPage:CommonPage;

Given('user has succesfully navigated', async function () {
    homePage = new BookingPage(pageFixture.page);
    commonPage = new CommonPage(pageFixture.page);
    homePage.expectTitleToBePresent();
    });

Given('select todays date and {string} days', async function (daysStr) {

        checkOutDate = await commonPage.addDaysForBooking(daysStr);
        // Fill Check Out
        await homePage.selectCheckoutBoxAndFill(checkOutDate);
        await homePage.clickBookAvailability();
    });

  Given('click on book now', async function () {
          await homePage.clickBookNow();
    });


    Given('insert {string},{string},{string},{string} as details and click Reserve now', async function (firstName, lastName, email, phone) {
            await homePage.clickReserveNow();
           await homePage.fillFirstName(firstName);
            await homePage.fillLastName(lastName);
            await homePage.fillEmail(email);
            await homePage.fillPhone(phone);
            await homePage.clickReserveNow();
    });

    Then('user should be able to see errors', async function () {
         await homePage.expectFirstNameError();
     });

    Then('user should see success message', async function () {
        await homePage.expectBookingConfirmed();
    });
