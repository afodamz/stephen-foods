const { defineConfig } = require('@vue/cli-service')
var path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler:true,
  configureWebpack: {
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      "@/*": ["./src/*", "./dist/*"]
    },
  },
},
lintOnSave: false,
})