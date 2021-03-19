/*
 * @Description: 
 * @Author: Friends233
 */

module.exports = {
  publicPath: './', // 设置静态打包路径
  // devServer 选项单独配置
  devServer: {
    // https: false,
    // open: true,
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        target: "http://192.168.0.24:3000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}