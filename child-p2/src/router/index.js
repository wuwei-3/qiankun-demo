import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import page1 from "../views/page1.vue";
import page2 from "../views/page2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/page2",
    name: "page2",
    component: page2,
  },
  {
    path: "/page1",
    name: "page1",
    component: page1,
  },
];

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? "/child-p2/" : "/",
  mode: "history",
  routes,
});

export default router;
