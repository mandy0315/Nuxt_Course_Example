import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineNuxtConfig({
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/icons")],
        symbolId: "[dir]/[name]",
        customDomId: "__svg__icons__dom__",
      }),
    ],
  },
});
