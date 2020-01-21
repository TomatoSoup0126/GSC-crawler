const puppeteer = require('puppeteer')
const fs = require('fs')

async function getImgPath(folderName,productPath) {
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

    for (let index = 0; index < imgPaths.length; index++) {
      const imgPath = imgPaths[index]
      var imgSource = await page.goto(imgPath)
      //新增資料夾
      fs.mkdir(`${folderName}`, function (err) {})
      //下載圖檔
      fs.writeFile(`./${folderName}/${index}.jpg`, await imgSource.buffer(), function (err){})
      console.log(`image_${index} download complete`)
    }

    await browser.close()

    return imgPaths
    
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'serverError', message: err.toString() })
  }
}

module.exports = getImgPath

