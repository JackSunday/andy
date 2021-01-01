module.exports = {
	title: 'jacksunday 个人博客', // 设置网站标题
	description: '我的个人网站',
	base: '/repository/',
	themeConfig: {
		nav: [
			{
				text: '首页',
				link: '/',
			},
			{
				text: '库',
				link: '/repository/',
			},
			{
				text: '网站',
				link: '/website/',
			},
			{ text: '组件使用', link: '/components/' },
			{ text: '博客', link: '/boke' },
		],
		sidebar: {
			'/': [
				'/', //指的是根目录的md文件 也就是 README.md 里面的内容
				'ITable', //根目录创建 apiword.md文件
				'ISearch', //根目录创建 api.md文件
				'error', //根目录创建 error.md文件
			],
		},
		sidebarDepth: 2,
	},
}
