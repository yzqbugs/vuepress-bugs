import { createPage, type Page, type PluginFunction } from "vuepress/core";
export const helloPlugin =
  (options?: any): PluginFunction =>
  (app) => {
    console.log("hello");
    return {
      name: "hello",
      async onInitialized(app) {
        // 如果主页不存在

        // 创建一个主页
        const helloPage = await createPage(app, {
          path: "/hello",
          // 设置 frontmatter
          frontmatter: { title: "hello" },
          // 设置 markdown 内容
          content: `\
# 欢迎来到 ${app.options.title}

这是 hello
`,
        });
        // 把它添加到 `app.pages`
        app.pages.push(helloPage);
        console.log(app.pages);
      },
    };
  };
