var path = require('path')
var webpack = require('webpack')
    /*
    extract-text-webpack-plugin插件，
    有了它就可以将你的样式提取到单独的css文件里，
    妈妈再也不用担心样式会被打包到js文件里了。
     */
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 配置入口文件，有几个写几个
    entry: {
        //main: './src/js/page/main.js',
        app: './src/js/page/app.js',
        showImg: './src/js/page/showImg.js'
    },
    output: {
        path: path.join(__dirname, './news_html'), // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '/news_html/', // 模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/common-[chunkhash].js', // 每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js' // chunk生成的配置
    },
    module: {
        // 加载器，关于各个加载器的参数配置，可自行搜索之。
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                // 配置css的抽取器、加载器。'-loader'可以省去
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            }, {
                test: /\.html$/,
                loader: 'html?attrs=img:src img:data-src'
            }, {
                // 文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=../fonts/[name].[ext]'
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ // 加载jq
            $: 'jquery'
        }),
        new ExtractTextPlugin('css/common-[contentHash].css'), // 单独使用link标签加载css并设置路径，
        new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
            favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
            filename: './app.html', // 生成的html存放路径，相对于path
            template: './src/view/app.html', // html模板路径
            inject: 'body', // js插入的位置，true/'head'/'body'/false
            hash: false, // 为静态资源生成hash值
            chunks: ['app'],
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            }
        }),
        new HtmlWebpackPlugin({ // 根据模板插入css/js等生成最终HTML
            favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
            filename: './showImg.html', // 生成的html存放路径，相对于path
            template: './src/view/showImg.html', // html模板路径
            inject: 'body', // js插入的位置，true/'head'/'body'/false
            hash: false, // 为静态资源生成hash值
            chunks: ['showImg'],
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            }
        }),
        //new webpack.HotModuleReplacementPlugin() // 热加载
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: false,
        //     },
        // })
    ],
    //使用webpack-dev-server，提高开发效率
    //devServer: {
    //  contentBase: './',
    //  host: 'localhost',
    //  port: 9090,
    //  inline: true,
    //  hot: true
    //}
    devtool: '#eval-source-map',
}
if (process.env.NODE_ENV === 'production') {
	console.log("ttt")
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"'
        //     }
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true,
            },
        }),
    ])
}