//
var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    // 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk
    //chunk：code splitting 后的产物，也就是按需加载的分块，装载了不同的 module
    entry: {
        m1: './app/js/index',
        m2: './app/js/components/productBox'
    },
        // ['./app/js/'],
    // 生成文件，是模块构建的终点，包括输出文件与输出路径。
    output: {
        path: path.join(__dirname, 'dist'), //打包后的文件存放的地方 = ./dist
        filename: '[name].bundle.js' //打包后输出文件的文件名
    },
    //本地服务器 端口7777
    devServer: {
        inline: true,
        port: 7777,
        // contentBase: "./public",//本地服务器所加载的页面所在的目录
        // colors: true,//终端中输出结果为彩色
        // historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    // webpack 各插件对象，在 webpack 的事件流中执行对应的方法。webpack 的插件实体
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        HtmlWebpackPluginConfig
        // new HtmlwebpackPlugin({
        //     title: 'Webpack-demos',
        //     filename: 'index.html'
        // }),
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:9999'
        // })

    ],
    module: {
        // 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。
        //loader：能转换各类资源，并处理成对应模块的加载器。loader 间可以串行使用。
        loaders: [
            {//bable转义 jsx语法
                test: /\.jsx?$/,//一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
                loader: 'babel-loader',//loader的名称（必须）,在webpack的module部分的loaders里进行配置即可
                exclude:/node_modules/, //bable和webpack安装的位置不同会有问题 手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
                // query: {//为loaders提供额外的设置选项（可选）
                //     presets: ['es2015', 'react']
                // }
            },
            {//require引入css
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {//require引入图
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                devtool: "source-map", // or "inline-source-map"
                test: /\.scss$/,
                // loader: "style!css!sass"
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    }
}