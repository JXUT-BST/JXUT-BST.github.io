# VitePress Plugin Docs

## VitePress Siderbar

功能强大的自动侧边栏生成器

[Github仓库](https://github.com/jooy2/vitepress-sidebar)

### 常用配置项

- `useFolderLinkFromIndexFile`:默认为 `false`，表示可达index.md文件页面

## VitePress i18n

可以很容易地在默认主题和搜索工具中翻译文本。它将默认布局转换为一个简单的设置，并且可以在多个项目中使用，而不需要重复的代码。

[Github仓库](https://github.com/jooy2/vitepress-i18n)

## Lumen
Enhanced Theme

✨ 集成 Vue 功能组件和主题美化的 VitePress 插件

[Github仓库](https://github.com/Theo-Messi/Theo-Docs)

## @nolebase/vitepress-plugin-git-changelog

在 VitePress 站点中添加一个基于 Git 的页面历史记录功能

[Github仓库](https://github.com/Theo-Messi/Theo-Docs)

[配置文档](https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/)

### 配置示例
```ts
 mapAuthors: [
        {
          name: 'Neko',
          username: 'nekomeowww',
          mapByNameAliases: ['Neko Ayaka', 'Ayaka Neko'],
          mapByEmailAliases: ['neko@ayaka.moe'],
        },
        {
          name: 'Rizumu',
          username: 'LittleSound',
          mapByNameAliases: ['Rizumu Ayaka', 'Ayaka Rizumu'],
          mapByEmailAliases: ['rizumu@ayaka.moe'],
        },
        {
          name: 'Nisekoi5',
          username: 'Nisekoi5',
        },
        {
          name: 'Northword',
          username: 'northword',
        },
        {
          name: 'intel-i5-13400',
          username: 'damokeris', 
          mapByEmailAliases: 'xxxxx@qq.com'
        },
        {
          name: 'ThinkPad T14',
          username: 'damokeris', 
          mapByEmailAliases: ['xxxxx@qq.com'] 
        },
      ],
```