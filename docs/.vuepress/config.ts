import { defineUserConfig } from "@vuepress/cli";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
export default defineUserConfig({
  base: "/vuepress-bugs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },
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
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [
    prismjsPlugin({
      preloadLanguages: ["autohotkey", "dart", "r"],
    }),
  ],
});
