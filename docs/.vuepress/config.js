module.exports = {
	dest: '.vuepress/vui-docs',
	base: '/docs/',
	title: 'vui-m',
	description: '基于 vuejs 2.x UI 框架，移动端 （for mobile）',
	head: [
		['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
	],	
	host: 'localhost',
	port: 8088,
	serviceWorker: true,
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '文档', link: '/guide/zh-CN/Toast' },
			{ text: '在线演示', link: 'https://gauseen.github.io/vui-m/#/home' },
		],
		sidebar: [
			['/guide/zh-CN/GettingStarted', '快速上手'],
			['/guide/zh-CN/Toast', '轻提示 Toast'],
			['/guide/zh-CN/Dialog', '弹框 Dialog'],
			['/guide/zh-CN/Masker', '遮罩层 Masker'],
			['/guide/zh-CN/Swipe', '轮播图 Swipe'],
			['/guide/zh-CN/ActionSheet', '行动操作 ActionSheet'],
			['/guide/zh-CN/InfiniteScroll', '上滑无限加载 InfiniteScroll'],
		]
	}
}