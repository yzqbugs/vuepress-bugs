import { defineUserConfig } from "vuepress/cli";
// import { prismjsPlugin } from "vuepress/plugin-prismjs";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import { viteBundler } from "@vuepress/bundler-vite";
import { helloPlugin } from "./plugin/helloPlugin";
export default defineUserConfig({
  base: "/vuepress-bugs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: defaultTheme({
    repo: "yzqbugs/vuepress-bugs",
    docsDir: "docs",
    locales: {
      "/": {
        sidebar: sidebar,
        navbar: navbar,
      },
    },
  }),
  markdown: {
    anchor: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [
    helloPlugin(),
    // prismjsPlugin({
    //   preloadLanguages: ["autohotkey", "dart", "r"],
    // }),
  ],
});
