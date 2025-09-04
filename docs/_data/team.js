// 实现参考Vite团队页
import socialIcons from "../.vitepress/theme/support/socialIcons.ts";

export const bst = [
	{
		avatar: "https://www.github.com/JXUT-BST.png",
		name: "JXUT BST",
		title: "蓝色技术工作室",
		links: [
			{ icon: "github", link: "https://github.com/JXUT-BST" },
			{ icon: { svg: socialIcons.qq }, link: "https://qm.qq.com/q/YDvNeYEt0c" },
			{
				icon: { svg: socialIcons.wechat },
				link: "https://mp.weixin.qq.com/s/jVg6DWfW3Tuc8HUj5zXkZQ",
			},
			{
				icon: { svg: socialIcons.map },
				link: "https://surl.amap.com/4XjAY6NOdarb",
			},
		],
		sponsor: "", // TODO 注册添加工作室sponsor方式，可选爱发电或者Github官方方式sponsor
	},
];

export const core = [
	{
		avatar: "https://www.github.com/Alaye-Dong.png",
		name: "Alaye Dong",
		title: "23团支书、24理事会干事",
		desc: "嵌入式软件、前端开发",
		links: [
			{ icon: "github", link: "https://github.com/Alaye-Dong" },
			{
				icon: { svg: socialIcons.bilibili },
				link: "https://space.bilibili.com/316372626",
			},
			{
				icon: { svg: socialIcons.email },
				link: "mailto:alayevast@outlook.com",
			},
		],
		sponsor: "https://afdian.com/a/alayedong",
	},
	{
		avatar: "https://www.github.com/huangjiawen123.png",
		name: "huangjiawen123",
		title: "23智能车队长、24理事会干事",
		desc: "嵌入式软件、前端开发",
		links: [{ icon: "github", link: "https://github.com/huangjiawen123" }],
	},
	{
		avatar: "https://github.com/Rain-m1st.png",
		name: "Rain-m1st",
		title: "24会长、24软件队长",
		desc: "C/C++算法、前端开发",
		links: [{ icon: "github", link: "https://github.com/Rain-m1st" }],
	},
	{
		// FIXME 本地图片不适合使用代码仓库存储，待更好的方法
		// avatar: "../assets/team/avatar/Zhang-Qiuwen.jpg",
		name: "Zhang Qiuwen",
		title: "24运营策划",
	},
	{
		name: "Zhu Wenyue",
		title: "24运营宣传",
	},
	{
		name: "Liu Chengxi",
		title: "24运营财务",
	},
	{
		name: "Xiao Shuiqing",
		title: "核心成员",
		desc: "三维建模设计、修图剪辑",
	},
	{
		avatar: "https://github.com/Serendipityxk.png",
		name: "Serendipityxk",
		title: "核心成员",
		desc: "后端开发",
		links: [{ icon: "github", link: "https://github.com/Serendipityxk" }],
	},
	{
		avatar: "https://github.com/Ryker-Zhong.png",
		name: "Ryker Zhong",
		title: "核心成员",
		desc: "单片机开发",
		links: [{ icon: "github", link: "https://github.com/Ryker-Zhong" }],
	},
];

export const emeriti = [
	{
		avatar: "https://github.com/FutureWL.png",
		name: "FutureWL",
		title: "15软件队长、16会长",
		org: "猎手猫",
		orgLink: "https://github.com/HUNTERCAT-DIGITAL",
		desc: "南昌猎手猫数字科技有限公司创始人",
		links: [{ icon: "github", link: "https://github.com/FutureWL" }],
		sponsor: "",
	},
	{
		avatar: "https://github.com/zhanghaitao2013.png",
		name: "zhanghaitao2013",
		title: "20团支书、21会长",
		links: [{ icon: "github", link: "https://github.com/zhanghaitao2013" }],
		sponsor: "",
	},
];
