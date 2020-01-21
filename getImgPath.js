const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://goodsmileshop.com/tw/%E9%A1%9E%E5%88%A5%E6%A0%B9%E7%9B%AE%E9%8C%84/%E6%AF%94%E4%BE%8B%E6%A8%A1%E5%9E%8B/%E5%90%89%E6%99%AE%E8%8E%89%E7%88%BE-%E5%B9%BC%E5%B0%8F%E5%A4%A9%E7%BF%BC%E7%A8%AEVer-/p/PHA_WD_00157')


  const imgPath = await page.evaluate(() => {
    imgPath = []
    const thumbImags = document.querySelectorAll('.thumbImag')
    thumbImags.forEach(thumbImg => {
      const path = thumbImg.dataset.primaryimagesrc
      imgPath.push(`https://goodsmileshop.com${path}`) 
    })

    return imgPath
  })

  console.log('imgPath', imgPath);

  await browser.close();
})();