import { defineConfig } from "vitepress";
import { enSidebar } from "./sidebar/en";
import { zhSidebar } from "./sidebar/zh";

export default defineConfig({
  title: "libreforge & EcoEnchants",
  description:
    "Complete bilingual documentation for the libreforge effect framework and EcoEnchants enchantment configuration",
  lang: "en-US",
  cleanUrls: true,
  // 文档源目录：.vitepress 已移至项目根，文档源位于 docs/
  srcDir: "docs",
  // GitHub Pages 项目页部署：base 为 /eco-enchants-guide/
  base: process.env.NODE_ENV === "production" ? "/eco-enchants-guide/" : "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.svg`,
      },
    ],
  ],

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/guide/" },
          { text: "Effects", link: "/effects/" },
          { text: "Triggers", link: "/triggers/" },
          { text: "Conditions", link: "/conditions/" },
          { text: "Mutators", link: "/mutators/" },
          { text: "Filters", link: "/filters/" },
          { text: "Examples", link: "/examples/" },
        ],
        sidebar: enSidebar,
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/" },
          { text: "效果", link: "/zh/effects/" },
          { text: "触发器", link: "/zh/triggers/" },
          { text: "条件", link: "/zh/conditions/" },
          { text: "变异器", link: "/zh/mutators/" },
          { text: "过滤器", link: "/zh/filters/" },
          { text: "示例", link: "/zh/examples/" },
        ],
        sidebar: zhSidebar,
      },
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Search", buttonAriaLabel: "Search" },
          modal: {
            noResultsText: "No results for",
            resetButtonTitle: "Clear search criteria",
            footer: {
              selectText: "to select",
              navigateText: "to navigate",
              closeText: "to close",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Auxilor/EcoEnchants" },
    ],
    footer: {
      message:
        "Documentation based on the official Auxilor plugin wiki (plugins.auxilor.io)",
      copyright: "Made with VitePress · libreforge & EcoEnchants docs",
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    outline: {
      level: [2, 3],
      label: "On this page",
    },
  },
});
