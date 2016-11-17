## 整合,想写一个最简单的demo
#### 写在最前面
没分目录,到一定阶段再分  

功能   
webpack   
sass  

#### 注意
上传前一定要加 .gitignore 要不就把node_modules给上传到github上了


#### webpack 安装
npm install webpack --save-dev (要先全局安装)  
npm install style-loader css-loader image-webpack-loader webpack --save-dev  
webpack-dev-server可以自动生成一个小型的NodeJs Express服务器  
从而实现webpack十分实用的功能热替换(HMR)  

plugins  插件
loaders 

整体依赖于webpack.config.js的配制工作,有什么功能需要就加什么loader就成



#### sass整合 
安装 : sass-loader   
Webpack的sass-loader还是依赖于node-sass以及sass(gem)，  
npm install sass-loader node-sass webpack --save-dev
提前全局安装过sass 安装完成后在webpack.config.js中的loaders中配制如下
```
{
    test: /\.scss$/,
    loader: "style!css!sass"
}
```

#### react  
核心
npm install react react-dom –save  

react解析器babel安装  
npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev  

webpack配置文件编写

```
{
   test: /\.js$/,
   loader: 'babel',
   exclude:/node_modules/,
   query:{
       presets:['react']
   }
}
```
ps: exclude:/node_modules/,   babel要与webpack安装的位置要一致
