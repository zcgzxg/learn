const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  runtimeCompiler: true // Compile at run time 开启后支持模板对象
})
