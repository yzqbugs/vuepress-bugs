import { defineClientConfig } from "vuepress/client";

import vuePkg from "vue/package.json";

import vp from "vuepress/package.json";
import Hello from "./component/Hello.vue";
function showBadge(name, version, nameStyle, versionStyle) {
  console.log(
    "%c ".concat(name, " %c ").concat(version, " "),
    "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat(nameStyle, ";"),
    "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(versionStyle, ";"),
  );
}
showBadge("vue", vuePkg.version, "#606060", "RGB(20,117,178)");
showBadge("vuepress", vp.version, "#606060", "RGB(20,117,178)");

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("Hello", Hello);
    router.addRoute({
      path: "/hi",
      name: "hi",
      component: Hello,
    });
  },
});
