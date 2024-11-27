# JXUT-BST-IO-VitePress
 使用VitePress构建的蓝色技术工作室官网

## 文件结构
```
├── docs/                    # VitePress 文档主目录
│   ├── .vitepress/           # VitePress 配置目录
│   │   ├── config.js         # VitePress 配置文件（导航栏、侧边栏等配置）
│   │   ├── theme/            # 自定义主题文件夹
│   │   │   └── index.css     # 自定义样式
│   │   └── dist/             # 网站构建输出目录
│   ├── index.md              # 首页内容
│   ├── about/                # 关于我们页面目录
│   │   └── index.md          # 关于我们页面内容
│   ├── projects/             # 项目展示页面目录
│   │   ├── index.md          # 项目列表页
│   │   └── project-1.md      # 项目1详情页
│   │   └── project-2.md      # 项目2详情页
│   ├── events/               # 活动与新闻页面目录
│   │   ├── index.md          # 活动列表页
│   │   └── event-1.md        # 活动1详情页
│   │   └── event-2.md        # 活动2详情页
│   ├── resources/            # 资源与教程页面目录
│   │   ├── index.md          # 资源列表页
│   │   └── tutorial-1.md     # 教程1详情页
│   │   └── tutorial-2.md     # 教程2详情页
│   ├── contact/              # 联系我们页面目录
│   │   └── join-us.md        # 加入我们页面内容
│   └── partners/             # 合作伙伴页面目录
│       └── index.md          # 合作伙伴页面内容
├── public/                   # 公共资源文件（如图片、字体）
│   └── logo.png              # 网站 logo
├── package.json              # 项目依赖和脚本
├── pnpm-lock.yaml            # 锁定依赖版本
├── .gitignore                # Git 忽略文件
└── README.md                 # 项目说明文档
```