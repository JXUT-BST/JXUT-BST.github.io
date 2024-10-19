import { defineConfig } from 'vitepress'

import { generateSidebar } from 'vitepress-sidebar';

import { generateI18nLocale, generateI18nSearch } from 'vitepress-i18n';

// https://vitepress-sidebar.cdget.com/zhHans/introduction
const vitepressSidebarOptions = [
  /* Options... */
  {
    documentRootPath: '/docs',
    scanStartPath: 'api-docs',
    basePath: '/api-docs/',
    resolvePath: '/api-docs/',
    collapsed: false,
    capitalizeFirst: true,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    frontmatterOrderDefaultValue: 9,
    sortMenusByFrontmatterOrder: true,
  },
  {
    debugPrint: true,
    documentRootPath: '/docs',
    scanStartPath: 'about',
    basePath: '/about/',
    resolvePath: '/about/',
    collapsed: true,
    collapseDepth: 3,
    capitalizeFirst: true,
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortMenusByFrontmatterOrder: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "JXUT-BST-IO-VitePress",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/bst-logo.svg" }]],
  lastUpdated: true,

  locales: generateI18nLocale({
    defineLocales: [
      { label: 'zhHans', translateLocale: 'zhHans' },
    ],
    rootLocale: 'zhHans',
  }),

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/bst-logo.svg',

    // 设置搜索框的样式
    search: generateI18nSearch({
      defineLocales: [{ label: 'zhHans', translateLocale: 'zhHans' }],
      rootLocale: 'zhHans',
      provider: 'local'
    }),

    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about/about-bst' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JXUT-BST' }
    ],

    editLink: {
      pattern: 'https://github.com/JXUT-BST/JXUT-BST-IO-VitePress/issues',
    },
  },
})
