const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8010,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `childrenApplication1`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
    },
  },
});
