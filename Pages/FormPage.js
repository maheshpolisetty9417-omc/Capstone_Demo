import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class FormPage extends BasePage {

    constructor(page) {
        super(page);

        this.customerMenu = page.locator('#menuCustomers');
        this.addCustomer = page.locator('#addCustomerBtn');
        this.FormTitle = page.getByText('Customer Details');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#email');
        this.phoneNumber = page.locator('#phone');
        this.city = page.locator('#city');
        this.customerTypeGold = page.locator("//*[@name = 'customerType' and @value = 'Gold']");
        this.saveButton = page.locator('#saveCustomerBtn');

    }
    
    async openFormPage() {
        await this.customerMenu.click();
        await this.page.waitForTimeout(5000);
        await this.addCustomer.click();
        await this.page.waitForTimeout(5000);
        console.log("Form page is opened successfully");
    } 
 
    async fillForm(data) {
        await expect(this.FormTitle).toBeVisible();
        console.log("Form title is visible: ", await this.FormTitle.textContent());
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
        await this.phoneNumber.fill(data.phoneNumber);
        await this.city.selectOption(data.city);
        await this.customerTypeGold.check();
        console.log("Form filled successfully with data: ", data);
    }
 
    async submitForm() {
        await this.saveButton.click();
        console.log("Form submitted successfully");
    }

    async getScreenShot(name = 'form-submission') {
        return await this.captureScreenshot(name);
    }
}