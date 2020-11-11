//自定义server服务

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{
  publicPath:config.output.publicPath
}))

//设置端口号
app.listen(3000,function(){
  console.log('端口号')
})