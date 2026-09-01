import { test, expect } from '../Fixtures/LoginFixture.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../Env/.env'), override: true });

test.describe('SmartERP Login Test', () => {
  test('Verify successful login with Admin creds', async ({ loginPage }) => {
    
    await loginPage.openLoginPage();
    await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
    await loginPage.getTitle();
    await loginPage.captureScreenshot('login-successful');
    console.log("Loggedin successfully and Dashboard page is loading")
  });

});