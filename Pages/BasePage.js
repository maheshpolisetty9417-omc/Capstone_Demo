import { expect } from '@playwright/test';
import { takeScreenshot } from '../Helpers/helpers.js';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async verifyTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
   // console.log(await this.page.title());
  }

  async enterUserName(locator, text) {
    await locator.fill(text);
  }

  async enterPassword(locator, text) {
    await locator.fill(text);
  }

  async click(locator) {
    await locator.click();
  }
  
  async submit(locator) {
    await locator.click();
  }
  
  async captureScreenshot(name = 'screenshot') {
    return await takeScreenshot(this.page, name);
  }

}