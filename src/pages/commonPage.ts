import {expect,Locator, Page} from "@playwright/test"

export default class CommonPage{


   
    constructor(private page:Page){
       
    }

    async addDaysForBooking(daysStr: string): Promise<string> {
    const daysToAdd = parseInt(daysStr, 10);

    if (isNaN(daysToAdd)) {
        throw new Error(`Invalid number of days: ${daysStr}`);
    }

    const today = new Date();
    const future = new Date(today);
    future.setDate(today.getDate() + daysToAdd);

    const day = String(future.getDate()).padStart(2, '0');
    const month = String(future.getMonth() + 1).padStart(2, '0');
    const year = future.getFullYear();

    return `${day}/${month}/${year}`;
}
}