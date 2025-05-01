import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "yangzqc",
  description: "Yang Ziqiang's Wonderful Journey",
  base: "/",
  head: [["link", { rel: "icon", href: "/images/favicon.svg" }]],
  theme: defaultTheme({
    // logo: "https://vuejs.press/images/hero.png",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "城市",
        children: [
          {
            text: "深圳",
            link: "/picture/shenzhen/",
          },
          {
            text: "清远",
            link: "/picture/qingyuan/",
          },
          {
            text: "西安",
            link: "/picture/xian/",
          },
          {
            text: "北京",
            link: "/picture/beijing/",
          },
        ],
      },
      {
        text: "视频",
        link: "/video/tianshui/",
      },
    ],
  }),
  plugins: [photoSwipePlugin()],
  bundler: viteBundler(),
});
