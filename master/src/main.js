import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;

// 示例
registerMicroApps([
  {
    name: "childrenApplication1", //必须和子应用configureWebpack.output.library 保持一致（非常重要）
    entry: "//localhost:8010", // 测试可以用端口号，生产直接指向对应子应用 nginx地址
    container: "#container", //应用挂载，固定写死
    activeRule: "/child-p1", //启动入口，随意定义
  },
  {
    name: "childrenApplication2",
    entry: "//localhost:8020",
    container: "#container",
    activeRule: "/child-p2",
  },
]);

// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
