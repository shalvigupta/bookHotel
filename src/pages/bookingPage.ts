import {expect,Locator, Page} from "@playwright/test"

export default class BookingPage{
   private readonly homeTitleLocator: Locator;
   private readonly checkOutBox: Locator;
   private readonly checkAvailaibility: Locator;
   private readonly secondBookNowButton: Locator;
   private readonly firstNameLocator: Locator;
   private readonly lastNameLoactor: Locator;
   private readonly emailLocator: Locator;
   private readonly phoneLocator: Locator;
   private readonly reserveNow: Locator;
   private readonly fNameError:Locator;
   private readonly bookingConfirmed:Locator;

    constructor(private page:Page){
        this.homeTitleLocator = this.page.getByRole('link', { name: 'Shady Meadows B&B' });
        this.checkOutBox = this.page.locator('div').filter({hasText: 'Check Out' }).getByRole('textbox').nth(1); 
        this.checkAvailaibility = this.page.getByRole('button', { name: 'Check Availability' });
        this.secondBookNowButton = this.page.getByRole('link', { name: 'Book now' }).nth(1);
        this.firstNameLocator = this.page.getByRole('textbox', { name: 'Firstname' });
        this.lastNameLoactor = this.page.getByRole('textbox', { name: 'Lastname' });
        this.emailLocator = this.page.getByRole('textbox', { name: 'Email' });
        this.phoneLocator = this.page.getByRole('textbox', { name: 'Phone' });
        this.reserveNow = this.page.getByRole('button', { name: 'Reserve Now' });
        this.fNameError = this.page.getByRole('alert').filter({ hasText: 'size must be between 3 and' });
        this.bookingConfirmed = this.page.locator('h2', { hasText: 'Booking Confirmed' });

        
    }

    async expectTitleToBePresent(){
            await expect(this.homeTitleLocator).toBeVisible();
    }

    async selectCheckoutBoxAndFill(date:string){
          await this.checkOutBox.fill(date);
    }

    async clickBookAvailability(){
            await this.checkAvailaibility.click();
    }

     async clickBookNow(){
            await this.secondBookNowButton.click();
    }

    async fillFirstName(fName:string){
          await this.firstNameLocator.fill(fName);
    }

     async fillLastName(lName:string){
          await this.lastNameLoactor.fill(lName);
    }

     async fillEmail(email:string){
          await this.emailLocator.fill(email);
    }

     async fillPhone(phone:string){
          await this.phoneLocator.fill(phone);
    }

    async clickReserveNow(){
            await this.reserveNow.click();
    }

    async expectFirstNameError(){
           await expect(this.fNameError).toBeVisible();
    }

     async expectBookingConfirmed(){
           await expect(this.bookingConfirmed).toBeVisible();
    }


    

}

