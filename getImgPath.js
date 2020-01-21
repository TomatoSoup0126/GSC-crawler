const puppeteer = require('puppeteer');

async function getImgPath(productPath) {
  try {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(productPath)


    const imgPaths = await page.evaluate(() => {
      imgPathArray = []
      const thumbImags = document.querySelectorAll('.thumbImag')
      thumbImags.forEach(thumbImg => {
        const path = thumbImg.dataset.primaryimagesrc
        imgPathArray.push(`https://goodsmileshop.com${path}`)
      })
      return imgPathArray
    })

    await browser.close()

    return imgPaths
    
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'serverError', message: err.toString() })
  }
}

module.exports = getImgPath

