const { config } = require('process')

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  lintOnSave:false,
  devServer: {
    // host:'192.168.0.169',
    port: 8080,
  },
  chainWebpack:config => {
      config.resolve.alias
        .set('@',resolve('src'))
  }
} 