const { defineConfig } = require('@vue/cli-service')
const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack:(config)=>{
    config.resolve.alias
      .set('@',resolve('./src'))
      .set('@api',resolve('./src/api'))
      .set('@assets',resolve('./src/assets'))
      .set('@pages',resolve('./src/pages'))
      .set('@utils',resolve('./src/utils'))
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [],
    },
  },
  devServer: {
    port: '8000', // 设置端口号
    proxy: {
      '/api': {
        target: 'http://192.168.98.86:7001', //API服务器的地址
        ws: false, //代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          // '^/api'是一个正则表达式，表示要匹配请求的url中，全部'http://localhost:8081/api' 转接为 http://localhost:8081/
          '^/api': '/api',
        }
      }
    },
  }
})
