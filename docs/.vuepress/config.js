import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { viteBundler } from "@vuepress/bundler-vite";
import { getThemeNavbar } from "./utils/index.js";

export default defineUserConfig({
  lang: "en-US",
  title: "yangzqc",
  description: "Yang Ziqiang's Wonderful Journey",
  base: "/",
  head: [["link", { rel: "icon", href: "/images/favicon.svg" }]],
  theme: defaultTheme({
    // logo: "https://vuejs.press/images/hero.png",
    navbar: getThemeNavbar(),
  }),
  plugins: [photoSwipePlugin()],
  bundler: viteBundler(),
});
