const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const url = process.argv[2] || 'http://localhost:4000';
const filename = process.argv[3] || 'screenshot.png';
const screenshotDir = './screenshots';

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log(`Capturing: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    
    const filepath = path.join(screenshotDir, filename);
    await page.screenshot({ path: filepath, fullPage: true });
    
    console.log(`✓ Screenshot saved: ${filepath}`);
  } finally {
    await browser.close();
  }
})();
