---
title: 开发文档
order: 1
---
# 蓝色技术工作室官网开发文档

::: warning 注意
🚧文档正在建设中~
:::

## 简介

### 项目背景

旧官网由于已暂停维护和更新多年，项目结构不符合工作室当前的需求。因此，我们决定对官网进行重构，采用现代化的技术栈来提升性能、用户体验和可维护性。本次重构的目标不仅是技术更新，同时也希望通过该项目提升工作室成员的协作开发能力，打造更具前瞻性和实用性的工作室官网。

### 项目目标

- **全新形象展示**：通过官网的重构，展示工作室的新形象和理念，提升认知度。
- **现代化技术栈**：选用 VitePress 作为开发框架，结合 HTML、CSS、TypeScript 和 Vue3，保证技术的前瞻性与高效性。
- **提升团队协作**：在项目开发过程中，团队成员将共同协作，提升项目管理和团队协作的能力，为工作室未来的开发工作积累经验。
- **易于维护和扩展**：确保官网的架构具有良好的可扩展性和易维护性，便于今后的内容更新和功能扩展。

### 技术栈

- **HTML**：标准的网页结构语言，用于定义网站内容和布局。
- **CSS**：用于美化页面布局，提供响应式设计，确保网站在各种设备上均有良好展示。
- **TypeScript**：增强 JavaScript 的类型检查功能，提升开发体验和代码质量。
- **Vue3**：现代化的前端框架，提供高效的组件化开发模式，增强页面交互能力。
- **VitePress**：一个基于 Vue3 和 Vite 的静态网站生成器，轻量级、性能优异，非常适合开发文档类和博客类网站。

通过上述技术栈的结合，网站的开发将不仅满足当前的需求，同时具备较强的可扩展性，以支持未来的功能和内容更新。

## 环境搭建

### 安装开发环境

在开始项目开发之前，需要确保本地开发环境的工具和依赖已正确安装。以下是基础环境搭建的步骤：

- **安装 Node.js 和 pnpm**：Node.js 是一个 JavaScript 运行环境，pnpm 是一个高效的包管理工具，能够加快依赖安装速度并减少磁盘空间的占用。可以通过以下步骤安装：
  1. 访问 [Node.js 官网](https://nodejs.org/)，下载并安装最新的稳定版本。
  2. 安装完成后，通过命令行输入 `node -v` 和 `npm -v` 确保 Node.js 和 npm 已成功安装。
  3. 安装 pnpm，执行命令：`npm install -g pnpm`。

- **安装 Git**：Git 是版本控制工具，用于管理源代码的更改历史。确保已安装 Git 并配置好用户信息：
  1. 访问 [Git 官网](https://git-scm.com/)，下载并安装适合您操作系统的 Git 版本。
  2. 安装完成后，在命令行中输入 `git --version` 检查 Git 是否已正确安装。
  3. 配置 Git 用户信息：执行 `git config --global user.name "Your Name"` 和 `git config --global user.email "your.email@example.com"`。

- **安装 Visual Studio Code**：Visual Studio Code (VS Code) 是一款轻量级、功能强大的源代码编辑器，适合前端开发。可以通过以下步骤安装：
  1. 访问 [VS Code 官网](https://code.visualstudio.com/)，下载并安装最新版的 Visual Studio Code。
  2. 安装完毕后，建议安装一些常用插件，如 Prettier、ESLint 和 git-commit-plugin，提升开发体验。

### 初始化项目

在环境搭建完成后，接下来是项目初始化过程，确保可以顺利开始开发工作。

#### 克隆项目文件

首先需要从远程仓库克隆项目文件到本地计算机。执行以下命令：

```shell
git clone https://github.com/JXUT-BST/JXUT-BST.github.io.git
```
::: warning 建议 
为了更好地进行开发和贡献，建议先在 GitHub 上 🔱 [Fork](https://github.com/JXUT-BST/JXUT-BST.github.io/fork) 该项目到个人账户。可以在自己的仓库中完成开发和验证后，再向源仓库提交 Pull Request（[PR](https://github.com/JXUT-BST/JXUT-BST.github.io/pulls)）进行贡献。 
:::

#### 安装项目依赖包

通过包管理器 `pnpm` 安装，打开项目所在目录，执行以下命令：

```shell
pnpm install
```

## 开发流程

### 快速开始

在项目文件夹打开终端，启动具有即时热更新的本地开发服务器。使用以下命令运行它：

```shell
pnpm run docs:dev
```

### 编码规范

- 代码风格
- 命名规范

### 版本控制

- Git 基础操作
- 分支管理

### 调试与测试

- 调试工具
- 单元测试

## 部署与维护

### 部署流程

目前官网使用 Github Page 托管部署，使用自定义域名`www.lansejishu.com`。如果需要对网站内容进行更新，推送代码到仓库 `main` 分支即可，Github Action 会对 `main` 分支内容自动进行构建部署。

### 维护策略

- 监控
- 故障排除

## 工具与资源

### 开发工具

- 编辑器
- 版本控制
- 调试工具

### 学习资源

- [VitePress 快速上手中文教程](https://vitepress.yiov.top/)

## 贡献指南

### 贡献者协议

### 贡献流程

### 问题反馈

有任何问题及反馈，请移步 [issues](https://github.com/JXUT-BST/JXUT-BST.github.io/issues)。

## 附录

### 常见问题解答

### 术语表
