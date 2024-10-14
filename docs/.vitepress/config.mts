import { defineConfig } from 'vitepress'

import { generateSidebar } from 'vitepress-sidebar';

import AutoSidebarPlugin from 'vitepress-auto-sidebar-plugin'

const vitepressSidebarOptions = {
  /* Options... */
  // documentRootPath: '/docs',
  // scanStartPath: 'about',
  // useTitleFromFileHeading: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig({


  lang: 'zh-CN',
  title: "JXUT-BST-IO-VitePress",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/bst-logo.svg" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/bst-logo.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about/index' }
    ],

    sidebar: generateSidebar(vitepressSidebarOptions),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  // vite: {
  //   plugins: [
  //     AutoSidebarPlugin({
  //       // 如果不指定 `srcDir`，则默认使用 `vitepress` 的 `srcDir`
  //       srcDir: './docs',

  //     }),
  //   ],
  // },
})
