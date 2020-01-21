const getImgPath = require('./getImgPath.js')

//＠範例
// getImgPath('奈奈祈','https://goodsmileshop.com/tw/%E9%A1%9E%E5%88%A5%E6%A0%B9%E7%9B%AE%E9%8C%84/%E9%BB%8F%E5%9C%9F%E4%BA%BA/%E9%BB%8F%E5%9C%9F%E4%BA%BA-%E5%A5%88%E5%A5%88%E7%A5%88%EF%BC%88%E5%86%8D%E8%B2%A9%EF%BC%89/p/GSC_WD_00279')
// .then(paths => {
//   console.log('完工了')
// })

getImgPath('資料夾名稱', 'GSC商品詳細網址')
  .then(paths => {
    console.log(paths)
  })



