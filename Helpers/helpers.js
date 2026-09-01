import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function readJsonData(filePath) {
    // Convert URL object to file path if necessary
    const p = filePath instanceof URL ? fileURLToPath(filePath) : filePath;
    const data = fs.readFileSync(p, 'utf-8');
    return JSON.parse(data);
}

export async function takeScreenshot(page, name = 'screenshot') {
    const screenshotsDir = path.resolve(process.cwd(), './test-results', 'screenshots');
    fs.mkdirSync(screenshotsDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${name}-${timestamp}.png`;
    const filepath = path.join(screenshotsDir, filename);
    await page.screenshot({ path: filepath, fullPage: true });
    return filepath;
}