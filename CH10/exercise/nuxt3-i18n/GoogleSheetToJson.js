// GoogleSheetToJson.js
const fs = require("fs-extra"); // JSON 格式寫入指定的文件
const unflatten = require("flat").unflatten;
const { extractSheets } = require("spreadsheet-to-json"); // Google Spreadsheets to JSON
const path = require("path");
extractSheets(
  {
    // Google Sheet Key (來自 URL)
    spreadsheetKey: '1f40MT6m_LU_h0LG09zGZOgoEdZxbUVBe2S2KRrH4U_I',
    // google 憑證資格檔
    credentials: require("./google/nuxt3-test-425703-68ca53105a77.json"),
    // Google Sheet 分頁名稱（要英文）
    sheetsToExtract: ['index', 'about'],
  },
  (err, data) => {
    // data = Google Sheet 取回資料
    // console.log("data ", data);

    if (err) throw err;
    const read = [...data['index'], ...data['about']];
    const result = {};
    const files = [];

    // 取得 files 檔案名稱
    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    // 取得 result 資料
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });

    for (const fileName of files) {
      // 建立目錄
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, "./language", `${fileName}.json`)
        )
      );
      /** 寫入 JSON 檔案
       * 三個參數: 1.文件路徑 2.要寫入的對象 3.可選的選項對象 */
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 } // JSON 應使用2個空格縮進
      );
    }

  }
);
