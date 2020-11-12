//公用的配置

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');   //在build之前自动删除dist文件
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // entry:'./src/page/index.js',
  entry:{
    app:'./src/page/index.js',
    print:'./src/page/print.js',
  },
  output:{
    filename: `[name].bundle.js`,
    publicPath: '/',
   // path: path.resolve(__dirname, 'dist')
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
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      }

    ]
  },

  //插件
  plugins:[
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template:'src/page/index.html'
    }),
  ],
  optimization:{
    splitChunks:{
      chunks:'all',
      automaticNameDelimiter: '.',   //打包之后的连接符
      cacheGroups:{
        commons:{
          name:'common',     //打包之后的包名称
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        }
      }
    }
  }
}