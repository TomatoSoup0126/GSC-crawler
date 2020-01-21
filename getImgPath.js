const puppeteer = require('puppeteer')
const fs = require('fs')
const imgur = require('imgur')
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
imgur.setClientId(IMGUR_CLIENT_ID)

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

    let imgurPaths = []

    //新增資料夾
    fs.mkdir(`${folderName}`, function (err) { })

    for (let index = 0; index < imgPaths.length; index++) {
      const imgPath = imgPaths[index]
      var imgSource = await page.goto(imgPath)

      //下載圖檔
      fs.writeFile(`./${folderName}/${index}.jpg`, await imgSource.buffer(), function (err){})
      console.log(`image_${index} download complete`)
      // //上傳到imgur
      // const localPath = '/Users/jonathantang/Projects/GSC_crawler'
      // const imgurPath =  (await imgur.uploadFile(`${localPath}/${folderName}/${index}.jpg`)).data.link
      // imgurPaths.push(imgurPath)
     
    }
    await browser.close()

    // fs.unlink(folderName, function () {
    //   console.log('圖檔已刪除!');
    // });

    return imgurPaths
    
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'serverError', message: err.toString() })
  }
}

module.exports = getImgPath

