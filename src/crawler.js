const puppeteer = require('puppeteer');
const fs = require('fs');

async function getVersion() {
  //const urls = ['http://producao.geomais.com.br/changelog.html','http://demo.geomais.com.br']  
  //const urls = ['https://geo.bc.sc.gov.br/changelog.html', 'http://201.59.100.253:3080/changelog.html', 'http://187.87.208.107:3390/changelog.html']
  const urls = [
    'http://geo.alfredochaves.es.gov.br/changelog.html',
    'https://geo.arapongas.pr.gov.br/changelog.html',
    'https://geo.bc.sc.gov.br/changelog.html',
    'http://geo.bigua.sc.gov.br/changelog.html',
    'http://geomais.camacari.ba.gov.br/changelog.html',
    'http://geo.ibirama.sc.gov.br:8082/changelog.html',
    'http://geo.itapema.sc.gov.br:8091/changelog.html',
    'http://162.214.203.123:8081/changelog.html',
    'http://geo.navegantes.sc.gov.br/changelog.html',
    'http://201.59.100.253:3080/changelog.html',
    'http://177.85.24.243:25480/changelog.html',
    'https://geo.timbo.sc.gov.br/changelog.html',
    'http://187.87.208.107:3390/changelog.html'
  ]

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

module.exports = getVersion