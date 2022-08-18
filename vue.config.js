const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  runtimeCompiler: true,// Compile at run time 开启后支持模板对象
  // devServer: {
  //   // 中转服务器
  //   // proxy: {
  //   //   // 通过代理实现跨域
  //   //   "/serve": {
  //   //     target: "http://localhost/", // 替换的服务端地址
  //   //     changeOrigin: true, // 开启代理，允许跨域
  //   //     pathRewrite:{
  //   //       '^/serve':''
  //   //     }
  //   //   },
  //   // },
  //     proxy:'http://127.0.0.1:80'
  // },
})
