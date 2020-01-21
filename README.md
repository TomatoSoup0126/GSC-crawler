## GSC商品頁爬蟲
- 自動抓取畫廊圖片至本機端

## 使用方法
- `git clone https://github.com/TomatoSoup0126/GSC-crawler.git`
- `cd 專案資料夾`
- `npm i` 安裝相關套件
- `code . ` 啟動編譯器
- 需自行新增`.env`並加入`IMGUR_CLIENT_ID`
- `getImgPath`line 38的路徑須更新成本機端的專案路徑
- 在`app.js`中的`getImgPath('資料夾名稱', 'GSC商品詳細網址')`填寫資料夾名稱與GSC的商品詳細網址
- `node app.js` 便會自動抓取該商品的畫廊圖片並上傳至imgur
- 圖片資料夾路徑於專案資料夾下
- imgur的回傳網址會以陣列形式consolo.log




## 使用套件
[puppeteer](https://github.com/puppeteer/puppeteer)
