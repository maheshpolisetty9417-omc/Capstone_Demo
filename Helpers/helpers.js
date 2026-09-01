import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function readJsonData(filePath) {
    try {
        // Convert URL object to file path if necessary
        const p = filePath instanceof URL ? fileURLToPath(filePath) : filePath;
        const data = fs.readFileSync(p, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to read JSON data: ${error.message}`);
    }
}

export async function takeScreenshot(page, name = 'screenshot') {
    try {
        const screenshotsDir = path.resolve(__dirname, '../test-results/screenshots');
        fs.mkdirSync(screenshotsDir, { recursive: true });
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `${name}-${timestamp}.png`;
        const filepath = path.join(screenshotsDir, filename);
        await page.screenshot({ path: filepath, fullPage: true });
        return filepath;
    } catch (error) {
        throw new Error(`Failed to take screenshot: ${error.message}`);
    }
}