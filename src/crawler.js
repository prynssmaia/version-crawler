const puppeteer = require('puppeteer');
const fs = require('fs');
const res = require('express/lib/response');

(async () => {
  const urls = ['http://producao.geomais.com.br/changelog.html', 'http://demo.geomais.com.br/changelog.html']
  const fullxpath = '/html/body/div/div/div[2]/div[2]/a/text()[2]'
  const seletor = '#root > div > div.ant-col.sc-iJminA.kqnHRJ.ant-col-xs-24.ant-col-lg-10.ant-col-xl-8 > div.public-access > a'
  const browser = await puppeteer.launch( { headless: true } )
  const page = await browser.newPage()
  const versionResult = []

  for ( let i = 0; i < urls.length; i++) {
    const url = urls[i]
    await page.goto(url)
    const versionBase = await page.$eval('.content h2:nth-of-type(2)', element => element.textContent)
    const versaoSlice = versionBase.slice(0, 6)
    const version = versaoSlice

    const dateSlice = versionBase.slice(9, 26)
    const date = dateSlice

    const result = {version, date}
    versionResult.push(result)
  }
  
  //escrevendo os dados em um arquivo local (json)
  fs.writeFile('versao_data.json', JSON.stringify(versionResult, null, 2), err => {
    if(err) throw new Error('Something went wrong')

    console.log('Well done! Scraped data ')
  })

  await browser.close();
    
  })();  