// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueLazyload from "vue-lazyload";

// import infiniteScroll from 'vue-infinite-scroll'
import App from "./App";
import router from "./router";
import store from "./store/index";
import { userInfo } from "./api/api";
import { setStore, getStore } from "./utils/storage";

import "./assets/css/fonts";
import "./assets/scss/style";
import "./utils/rem";

// Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  loading: "/static/images/loading.png"
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

 
// const whiteList = [
//   "/",
//   "/login",
//   "/focus",
//   "/home",
//   "/proList",
//   "/sort",
//   "/proList/productDetail",
//   "/home/productDetail",
//   "/productDetail"
// ]; // 不需要登陆的页面

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (to.path) {
    //百度统计
    var _hmt = window._hmt || [];
    _hmt.push(["_trackPageview", "/#" + to.fullPath]);
  }
  
  next();

    // if (getStore('state') == 0) {
     
    //   //未关注
    //   if (whiteList.indexOf(to.path) !== -1) {
    //     next();
    //   } else {
    //     next("/focus");
    //   }
    // } else if (!getStore("mobile") || getStore("mobile") == "undefined" || getStore("mobile") == "") {
    //   //已关注未登录
    //   if (whiteList.indexOf(to.path) !== -1) {
    //     next();
    //   } else { 
    //     next("/login");
    //   }
    // } 
    // else {
    //   //已登录
    //   next();
    // }
  
});
