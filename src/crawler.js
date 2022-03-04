const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://producao.geomais.com.br/');
    await page.screenshot({ path: 'example.png' });
  
    // await browser.close();
  })();