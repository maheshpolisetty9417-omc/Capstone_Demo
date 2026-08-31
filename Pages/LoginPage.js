import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {

    constructor(page) {
    super(page);
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#loginBtn');
    this.dashboardHeading = page.locator('h1');
    this.logoutButton = page.locator('.danger-btn');
    this.errormsg = page.locator('.error-message');
  
  }

  async openLoginPage() {
    await this.navigate('https://smarterp-wgaw.onrender.com/');
  }

  async login(user, pass) {
    await this.enterUserName(this.username, user);
    await this.enterPassword(this.password, pass);
    await this.click(this.loginButton);
  }

  async getTitle(){
    await this.verifyTitle("SmartERP Dashboard");
    console.log("Page Title: "+ await this.page.title());
  }
};
