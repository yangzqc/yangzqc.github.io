import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "yangzqc",
  description: "Yang Ziqiang's Wonderful Journey",
  base: "/",
  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    navbar: ["/", "/beijing/index", "/shenzhen/index"],
  }),
  plugins: [photoSwipePlugin()],
  bundler: viteBundler(),
});
