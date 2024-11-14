import { ViteMinifyPlugin } from "vite-plugin-minify";

import { resolve } from "path";

import { sync } from "glob";

export default {
  base: "./",
  resolve: {
    alias: {
      "@js": resolve(__dirname, "src/assets/js"),
    },
  },
  plugins: [ViteMinifyPlugin()],
  appType: "mpa",
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: sync("./src/**/*.html".replace(/\\/g, "/")),
    },
  },
};