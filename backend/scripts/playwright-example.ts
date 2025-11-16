import { chromium, Browser, Page, Download } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

/**
 * This script demonstrates how to use Playwright to:
 * 1. Navigate to a web page.
 * 2. Perform an action (clicking a download link).
 * 3. Wait for a file to be downloaded.
 * 4. Save the downloaded file to a specific location.
 */
async function main() {
  // Launch a browser. You can use chromium, firefox, or webkit.
  // 'headless: false' will show the browser UI, which is useful for debugging.
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  try {
    // 1. Navigate to a site
    console.log('Navigating to the download page...');
    await page.goto('https://the-internet.herokuapp.com/download', { waitUntil: 'networkidle' });

    // 2. Perform actions and initiate a download
    console.log('Looking for the download link...');
    
    // Start waiting for the download event BEFORE clicking the link
    const downloadPromise = page.waitForEvent('download');
    
    // Replace 'some-file.txt' with the name of the file you want to download
    await page.getByText('some-file.txt').click();
    
    const download: Download = await downloadPromise;
    console.log(`Download started for: ${download.suggestedFilename()}`);

    // 3. Save the downloaded file
    const downloadsDir = path.join(__dirname, 'downloads');
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir);
    }
    
    const filePath = path.join(downloadsDir, download.suggestedFilename());
    await download.saveAs(filePath);

    console.log(`File saved to: ${filePath}`);

    // You can now interact with the file using Node.js 'fs' module
    // For example, to read the file content:
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log('File content:');
    console.log(fileContent.substring(0, 100) + '...'); // Print first 100 chars

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // 4. Close the browser
    await browser.close();
  }
}

main();
