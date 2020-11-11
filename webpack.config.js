const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');   //在build之前自动删除dist文件
module.exports = {
  // entry:'./src/page/index.js',
  entry:{
    app:'./src/page/index.js',
    print:'./src/page/print.js',
  },
  output:{
    filename: `[name].bundle.js`,
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
  //服务器配置
  devServer:{
    open: true,   //自动打开浏览器
    port: 8080,
    contentBase:'./dist'
  },
  //插件
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'src/page/index.html'
    })
  ],
}