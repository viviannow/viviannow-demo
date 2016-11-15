最近前端新东西实在太多,个人感觉有必要做一个整合demo。

#### webpack 安装 
```
npm install webpack --save-dev

npm install style-loader css-loader image-webpack-loader webpack --save-dev



webpack-dev-server可以自动生成一个小型的NodeJs Express服务器从而实现webpack十分实用的功能热替换(HMR)

plugins

loaders

webpack.config.js

// webpack.config.js
var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: ['./src/index'],  //entry 是指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({//webpack内置的插件
                                               
            compressor: {
                warnings: false,
            },
        })
    ],
    module: {
    loaders 一个含有wepback中能处理不同文件的加载器的数组
    test 用来匹配相对应文件的正则表达式
    loaders 告诉webpack要利用哪种加载器来处理test所匹配的文件
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }]
    }
}


```