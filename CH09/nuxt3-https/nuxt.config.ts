// https://nuxt.com/docs/api/configuration/nuxt-config

const config = {
  devServer: {
    https: {
      key: "./https/localhost+3-key.pem",
      cert: "./https/localhost+3.pem",
    },
  },
  vite: {
    server: {
      proxy: {},
    },
  },
};

if (process.env.NODE_ENV === "development") {
  config.vite.server.proxy = {
    "/VsWeb/api": {
      target: "https://www.vscinemas.com.tw/",
      changeOrigin: true,
    },
  };
}
export default defineNuxtConfig(config);
