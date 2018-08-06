// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'
import store from './store/index'

import './assets/css/fonts'
import './assets/scss/style'
import './utils/rem'


// Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  loading: '/static/images/loading.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// const whiteList = ['/home', '/proList', '/login'] // 不需要登陆的页面
// router.beforeEach(function (to, from, next) {
//   if(!localStorage.getItem('tokenID')) {
//     if (whiteList.indexOf(to.path) !== -1) { // 白名单
//         next();
//       } else {
//         next('/login');
//       } 
//   }
// })

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    if (to.path) {
      var _hmt = window._hmt || [];
       _hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
   
})