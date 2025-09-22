const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8020,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `childrenApplication2`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
    },
  },
});
