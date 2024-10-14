import { defineConfig } from 'vitepress'

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

    sidebar: [
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '关于我们',
        items: [
          { text: '关于工作室', link: '/about/index' },
          { text: '历届负责人', link: '/about/bster/leader/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
