// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
	// 基准大小 baseSize，需要和rem.js中相同
	remUnit: 16
})

// 使用等比适配插件
module.exports = {
	lintOnSave: true,
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					postcss
				]
			}
		}
	},
	// 选项...
	/* 部署应用包的基本URL */
	publicPath: './',

	/* 当运行 vue-cli-service build 时生成的生产环境构建文件的目录 defalut: dist */
	outputDir: './dist',
	//可根据不同环境打包不同地址
	//outputDir: process.env.NODE_ENV == 'production' ?
	// '../../../../dist-mobile/product/course' : process.env.NODE_ENV == 'stage' ?
	// '../../../../dist-mobile/stage/course' : process.env.NODE_ENV == 'qa' ?
	//'../../../../dist-mobile/qa/course' : '../../../../dist-mobile/run/course',

	/* 放置生成的静态文件目录（js css img） */
	assetsDir: 'static',

	/* 指定生成的index.html 输出路径 相对 default: index.html */
	indexPath: 'index.html',

	/* 指定生成文件名中包含hash default: true */
	filenameHashing: true,

	// 所有 webpack-dev-server 的选项都支持。
	
	devServer: {
		proxy: {
			'/api': {
				target:'https://safe.shougang.com.cn', // 代理服务器路径
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		},
		configureWebpack: {
		        externals: {
		          'AMap': 'AMap' // 高德地图配置
		        }
		    },
	}
}
