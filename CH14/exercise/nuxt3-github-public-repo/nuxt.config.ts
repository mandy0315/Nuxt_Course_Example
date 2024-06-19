export default defineNuxtConfig({
  imports: {
    dirs: ["stores"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  vite: {
    define: {
      "process.env": process.env,
    },
  },
});
