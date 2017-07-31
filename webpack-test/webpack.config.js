var htmlWebpackPlugin=require("html-webpack-plugin");
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var publicPath = 'http://localhost:8080/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
//var path = require("path");
module.exports={
	entry:{
		main: ["./src/script/main.js",hotMiddlewareScript],
		a:[ "./src/script/a.js",hotMiddlewareScript],
		index:[ "./src/script/index.js",hotMiddlewareScript]
	},
	output:{
		path: "./dist",
		//filename: "js/[name]-compress.js",
		publicPath : '/asset/',
		filename:'js/[id]-[hash].js'
		//publicPath:"http://cdn.com/",//表示你的项目上线后的地址。http://cdn.com/将替换"./dist",地址
	},
	//加载器  
  module: {
	  rules: [
		  {
			  test: /\.vue$/,
			  loader: 'vue-loader'
		  },
		  {
			  test: /\.css$/,
			  loader: 'style-loader!css-loader'
		  },
		  {
			  test: /\.js$/,
			  loader: 'babel-loader',
	     },
	  ]
  },  
	plugins:[  //注意这个插件是一个数组
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new htmlWebpackPlugin({
			//title: '简单页面',
			filename: "index-compress.html",
			template:"index.html",
			inject:false,
			//inject:'head',  //指定js是放在head中还是body中 inject的值可以为false表示不把js注入到head或者body中
			title: "this is a webpack",
			/*date:new Date(),*/
			//minify:{
			//	removeComments:true,
			//	collapseWhitespace:true,
			//} //压缩
		}),
		new htmlWebpackPlugin({
			//title: '简单页面',
			filename: "a-compress.html",
			template:"a.html",
			//inject:false,
			inject:'head',  //指定js是放在head中还是body中 inject的值可以为false表示不把js注入到head或者body中
			title: "this is a webpack",
			date:new Date(),
			//minify:{
			//	removeComments:true,
			//	collapseWhitespace:true,
			//} //压缩
		}),
		new webpack.ProvidePlugin({
			$:"jquery",
			jQuery:"jquery",
			"window.jQuery":"jquery"
		})

		/*new htmlWebpackPlugin({
			//title: '简单页面',
			filename: "template111-compress.html",
			template:"template111.html",
			//inject:false,
			//inject:'head',  //指定js是放在head中还是body中 inject的值可以为false表示不把js注入到head或者body中
			//title: "this is a webpack",
			//date:new Date(),
			minify:{
				removeComments:true,
				collapseWhitespace:true,
			} //压缩
		}),*/
		//new wp.optimize.UglifyJsPlugin({
		//	name: "main", filename: "main-compress.js"
		//}),  //压缩，加密js文件
	],
	//热加载
	devServer: {
		hot: true
	}
}