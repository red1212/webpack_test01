//  //配置react的本地服务

const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{
  devtool:'inline-source-map',
  //服务器配置
  devServer:{
    open: true,   //自动打开浏览器
    port: 8080,
    contentBase:'./src'
  }
})