const path = require('path')
const development = require('./config/rspack.dev.config')
const production = require('./config/rspack.prod.config')
const images = require('./config/rspack.image.config')
const styles = require('./config/rspack.styles.config')

const alias = {
  '@': path.resolve(__dirname, 'src')
}

const config = {
  context: __dirname,
  mode: process.env.NODE_ENV,
  devServer: {
    hot: true,
    compress: true, // 是否启用 gzip 压缩
    historyApiFallback: true, // 解决前端路由刷新404现象
    client: {
      logging: 'info',
      overlay: false
    },
    open: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias
  },
  entry: {
    main: path.join(__dirname, './src/app.tsx')
  },
  // contenthash 内容变了才会更新
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugin: [],
  builtins: {
    html: [
      {
        template: './index.html',
        inject: 'head' // js文件引入存放的位置
      }
    ],
    css: {
      modules: {}
    }
  },
  module: {
    rules: [...images, ...styles]
  }
}

// 环境配置
const envConfig = {
  development,
  production
}

module.exports = function (e, v) {
  return {
    ...config,
    ...envConfig[process.env.NODE_ENV]
  }
}
