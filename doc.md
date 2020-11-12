## webpack
--> 首先知心 npm init -y 初始化
--> 局部安装 webpack webpack-cli -D 防止影响其他项目

--> package.json 里面配置 "build": "webpack" 编译脚本后，执行npm run build 进行打包

-->创建webpack.config.js配置文件

## 2020年11月11日
-->webpack-dev-server 自动加载编译后代码，不需要刷新浏览器
目前不兼容webpack5的版本

--> webpack-devmiddleware 是一个容器,它可以把webpack处理后的文件传递给一个服务器（server）

-->自定义server服务

## 2020年11月12日 生成环境构建
每个环境编写独立的webpack配置，webpack-merge合并配置，减少重复代码 npm install --save-dev webpack-merge
uglifyjs-webpack-plugin 代码压缩

--> 之前用于去掉重复的引用CommonsChunkPlugin被移除，现在采用splitChunks进行代码分离
  一、webpack中的三个概念module、chunk和bundle
. module: 就是js的模块化webpack支持commonJs,ES6等模块化规范，简单来说就是你通过import语句引入的代码
. chunk: chunk 是webpack根据功能拆分出来的，包含三种情况：
  1、你的项目入口(entry)
  2、通过import动态引入的代码
  3、通过splitChunks拆分出来的代码
. bundle:bundle是webpack打包之后的各个文件，一般就是和chunk是一对一的关系，bundle就是对chunk进行编译压缩打包等处理之后产出
