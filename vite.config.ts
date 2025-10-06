import { defineConfig } from "vite";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import {
	GitChangelog,
	GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import { ThumbnailHashImages } from "@nolebase/vitepress-plugin-thumbnail-hash/vite";

export default defineConfig({
	resolve: {
		alias: {
			"@theme": path.resolve(__dirname, "./.vitepress/theme"),
			"@docs": path.resolve(__dirname, "./docs"),
		},
	},
	plugins: [
		tailwindcss(),

		GitChangelog({
			repoURL: () => "https://github.com/JXUT-BST/JXUT-BST.github.io",
			mapAuthors: [
				{
					name: "JXUT-BST",
					username: "JXUT-BST",
					mapByNameAliases: ["JXUT-BST", "JXUT BST", "蓝色技术工作室"],
				},
				{
					name: "Alaye-Dong",
					username: "Alaye-Dong",
				},
				{
					name: "Rain-m1st",
					username: "Rain-m1st",
					mapByNameAliases: ["Averyjhy"],
				},
			],
		}),

		GitChangelogMarkdownSection(),

		ThumbnailHashImages(),
	],
	optimizeDeps: {
		exclude: ["vitepress", "@nolebase-ui"],
	},
	ssr: {
		noExternal: ["@nolebase-ui"],
	},
});
