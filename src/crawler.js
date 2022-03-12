const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const urls = ['https://google.com','https://youtube.com']
  
  for ( let i = 0; i < urls.length; i++) {
    const page = urls[i]
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`${url}`)
    await page.screenshot({ path: `example${i}.png` });
    await browser.close();
  }

    
  })();





  //   const browser = await puppeteer.launch();

  //   const geo = 'https://geo.bc.sc.gov.br/changelog.html'

  //   const page = await browser.newPage();

  //   await page.goto(geo);

  //   const versaoList = await page.evaluate( () => {

  //     const nodeList = document.querySelectorAll('.content')
  //     const dataArray = [...nodeList]

  //     // transformar os elementos html em objeto js
  //     const versaoList = dataArray.map(function(elemento, indice, arrayBase) {

  //       // buscando número da versão
  //       const versaoBase = elemento.querySelector('.content h2:nth-of-type(2)').textContent
  //       const versaoSlice = versaoBase.slice(0,6)
  //       const versao = versaoSlice

  //       return { versao: versao }

  //     })

  //     return versaoList 

  //   })

  // //escrevendo os dados em um arquivo local (json)
  // fs.writeFile('versao_data.json', JSON.stringify(versaoList, null, 2), err => {
  //   if(err) throw new Error('Something went wrong')

  //   console.log('Well done! Scraped data ')
  // })
  
  