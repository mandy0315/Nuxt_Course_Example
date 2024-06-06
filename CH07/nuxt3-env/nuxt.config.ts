// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig: {
  //   token: "",
  //   public: {
  //     apiUrl: "",
  //   },
  // },
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
