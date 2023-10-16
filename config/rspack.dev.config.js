module.exports = {
  devtool: 'source-map',
  // 最小化监听
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: true
  },
  // // 按需编译
  experiments: {
    lazyCompilation: true
  },
  // 并行压缩
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimize: false,
    concatenateModules: false,
    usedExports: false,
    minimizer: []
  }
}
