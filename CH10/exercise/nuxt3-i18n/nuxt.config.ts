export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    compilation: {
      strictMessage: false,
    },
    strategy: "no_prefix", // 不使用路徑定義語系
    locales: [
      // 定義語系
      {
        code: "zh-TW",
        file: "zh-TW.json",
      },
      {
        code: "en-US",
        file: "en-US.json",
      },
      {
        code: "ja-JP",
        file: "ja-JP.json",
      },
    ],
    langDir: "language", // 語系檔案目錄
    defaultLocale: "zh-TW", // 預設語系
    detectBrowserLanguage: {
      useCookie: true, // 啟用 cookie 紀錄語系
    },
  },
});
