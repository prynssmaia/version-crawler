const puppeteer = require('puppeteer');
const fs = require('fs');
const counties = require('../municipios.json')

async function getVersion() {
  const browser = await puppeteer.launch( { headless: true } )
  const page = await browser.newPage()
  const versionResult = []

  for ( let i = 0; i < counties.length; i++) {
    const county = counties[i]
    const url = county.url
    console.log('== Analisando versão do município de', county.municipio)
    await page.goto(url)
    const versionBase = await page.$eval('.content h2:nth-of-type(2)', element => element.textContent)
    const versaoSlice = versionBase.slice(0, 6)
    const version = versaoSlice

    const dateSlice = versionBase.slice(9, 26)
    const date = dateSlice

    const result = {url, version, date}
    versionResult.push(result)
  }
  console.table(versionResult)

  //escrevendo os dados em um arquivo local (json)
  fs.writeFile('versao_data.json', JSON.stringify(versionResult, null, 2), err => {
    if(err) throw new Error('Something went wrong')

    console.log('Well done! Saved data')
  })

await browser.close();

}
//getVersion()
module.exports = getVersion