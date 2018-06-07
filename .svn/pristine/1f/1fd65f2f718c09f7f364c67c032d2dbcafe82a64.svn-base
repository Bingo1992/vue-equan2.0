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
	// if(to.meta.title) {
		document.title = to.meta.title;
  // } 
  next();
  //  setTimeout(()=>{
  //       var _hmt = _hmt || [];
  //       (function() {
  //           //每次执行前，先移除上次插入的代码
  //           document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
  //           var hm = document.createElement("script");
  //           hm.src = "https://hm.baidu.com/hm.js?xxxx";
  //           hm.id = "baidu_tj"
  //           var s = document.getElementsByTagName("script")[0];
  //           s.parentNode.insertBefore(hm, s);
  //       })();
  //   },0);  
 
})