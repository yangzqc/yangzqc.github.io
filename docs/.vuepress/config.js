import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "yangzqc",
  description: "Yang Ziqiang's Wonderful Journey",

  base: "/",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",

    navbar: ["/", "/beijing/index"],
  }),

  bundler: viteBundler(),
});
