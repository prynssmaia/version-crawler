const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const urls = ['http://producao.geomais.com.br/changelog.html', 'http://demo.geomais.com.br/changelog.html']
  const fullxpath = '/html/body/div/div/div[2]/div[2]/a/text()[2]'
  const seletor = '#root > div > div.ant-col.sc-iJminA.kqnHRJ.ant-col-xs-24.ant-col-lg-10.ant-col-xl-8 > div.public-access > a'

  
  for ( let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const browser = await puppeteer.launch( { headless: false } )
    const page = await browser.newPage()
    await page.goto(`${url}`)
    await page.screenshot({ path: `example${i}.png` });

    const versao = await page.evaluate( () => { 
      const nodeList = document.querySelectorAll('.content')

      const versionArray = [...nodeList]

      const versaoList = versionArray.map(function(elemento, indice, arrayBase) {

        const versionBase = elemento.querySelector('.content h2:nth-of-type(2)').textContent
        const versaoSlice = versionBase.slice(0, 6)
        const version = versaoSlice

        return version
      })

      return versaoList
    })
    console.log(versao)

    await browser.close();

  }
    
  })();
  
  // //escrevendo os dados em um arquivo local (json)
  // fs.writeFile('versao_data.json', JSON.stringify(versaoList, null, 2), err => {
  //   if(err) throw new Error('Something went wrong')

  //   console.log('Well done! Scraped data ')
  // })
  
  