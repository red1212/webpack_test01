//作为包的配置 主要是入口和输出

const path = require('path')
module.exports = {
  entry: './src/page.js',//'./src/index.js',      //本地测试用src/index.js，作为包使用src/page.js
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: "testReact", 
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

}