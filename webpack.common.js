//公用的配置

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `bundle.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  //loader
  module: {
    rules: [
      {
        test: /\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: ["@babel/preset-react", "@babel/preset-env"],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
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
  plugins: [
    //复制html到打包文件夹下
    new HtmlWebpackPlugin({
      template:'public/index.html',
      filename:'index.html',
      inject:true
    }),
  ],

}