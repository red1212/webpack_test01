//公用的配置

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');   //在build之前自动删除dist文件
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry:'./src/page/index.js',
  // entry:{
  //   app:'./src/page/index.js',
  //   print:'./src/page/print.js',
  // },
  output:{
    filename: `bundle.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  //loader
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          //创建style标签将js的样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
          //将less文件编译成css文件
          'less-loader'
        ]
      },
    ]
  },

  //插件
  plugins:[
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    // new HtmlWebpackPlugin({
    //   template:'src/page/index.html'
    // }),
  ],

}