import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/FormPage.js';
import { readJsonData } from '../Helpers/helpers.js';
import {LoginPage} from '../Pages/LoginPage.js'; 
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../Env/.env'), override: true });
const formData = readJsonData(path.resolve(__dirname, '../test-data/formData.json'));

test('Submit valid registration form', async ({ page }) => {
    const formPage = new FormPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
    await loginPage.getTitle();

    await formPage.openFormPage();
    await formPage.getScreenShot('form-opened');
    await formPage.fillForm(formData);
    await formPage.submitForm();
    await formPage.getScreenShot('form-submission');

    console.log('Form submitted successfully with valid data.');
});