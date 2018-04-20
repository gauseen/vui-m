module.exports = {
	dest: '.vuepress/vui-docs',
	base: '/docs/',
	title: 'vui-m',
	description: '基于 vuejs 2.x UI 框架，移动端 （for mobile）',
	head: [
		['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
	],	
	host: 'localhost',
	serviceWorker: true,
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '文档', link: '/guide/zh-CN/Toast' },
			{ text: '在线演示', link: 'https://gauseen.github.io/vui-m/#/home' },
		],
		sidebar: [
			['/guide/zh-CN/GettingStarted', '快速上手'],
			['/guide/zh-CN/Toast', 'Toast'],
			['/guide/zh-CN/Masker', 'Masker'],
			['/guide/zh-CN/Swipe', 'Swipe'],
			['/guide/zh-CN/ActionSheet', 'ActionSheet'],
			['/guide/zh-CN/InfiniteScroll', 'InfiniteScroll'],
		]
	}
}