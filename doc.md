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