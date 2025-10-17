// https://vitepress.dev/guide/custom-theme

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style/index.css";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";

import { NolebaseUnlazyImg } from "@nolebase/vitepress-plugin-thumbnail-hash/client";
import "@nolebase/vitepress-plugin-thumbnail-hash/client/style.css";

import "@theojs/lumen/icon"; /* 图标 */
import { Underline } from "@theojs/lumen";

import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

import Footer from "./components/Footer.vue";
import Layout from "./Layout.vue";

export default {
	extends: DefaultTheme,
	Layout: Layout,
	enhanceApp({ app }) {
		// 注册全局组件
		app.component("Footer", Footer);
		app.component("HeroTextUnderline", Underline);
		app.component("NolebaseUnlazyImg", NolebaseUnlazyImg);
		app.use(NolebaseGitChangelogPlugin, {
			// https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-git-changelog/configure-ui#%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9
			// 把选项填写在这里吧...
		});
	},
	setup() {
		// Get frontmatter and route
		const { frontmatter } = useData();
		const route = useRoute();

		// giscus配置
		giscusTalk(
			{
				repo: "JXUT-BST/JXUT-BST.github.io", //仓库
				repoId: "R_kgDOM_5JJQ", //仓库ID
				category: "Announcements", // 讨论分类
				categoryId: "DIC_kwDOM_5JJc4CkzXy", //讨论分类ID
				mapping: "pathname",
				inputPosition: "bottom",
				lang: "zh-CN",
			},
			{
				frontmatter,
				route,
			},
			//默认值为true，表示已启用，此参数可以忽略；
			//如果为false，则表示未启用
			//您可以使用“comment:true”序言在页面上单独启用它
			true,
		);
	},
} satisfies Theme;
