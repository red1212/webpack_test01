//生产环境配置
const webpack = require('webpack')
const {merge} = require('webpack-merge');

const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports= merge(common,{
  plugins:[
    new UglifyJSPlugin(),
    //根据环境做出不同的操作
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    })
  ]
})