"<template>
  <div id="app">
      <keep-alive >
         <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { userInfo } from "/api/api";
import { setStore, getStore } from "/utils/storage";
export default {
  name: "App",
  created() {
    // this._getUserInfo();
  },
  methods: {
    // _getUserInfo() {
    //   userInfo().then(res => {
    //     setStore("mobile", res.obj.mobile);
    //     setStore("state", res.obj.state);
    //     // setStore("mobile", undefined);
    //     // setStore("state", res.obj.state);
    //     // alert("mobile："+ getStore('mobile')+'---'+"state:"+ getStore('state'));
    //     var list = [
    //       "/",
    //       "/login",
    //       "/focus",
    //       "/home",
    //       "/proList",
    //       "/sort",
    //       "/proList/productDetail",
    //       "/home/productDetail",
    //       "/productDetail"
    //     ]; // 不需要登陆的页面
 
    //     if (getStore("state") == 0) {
    //       //未关注
    //       if (list.indexOf(this.$route.path) < 0) {
             
    //         this.$router.push('/focus');
    //       } 
    //     } else if (!getStore("mobile") || getStore("mobile") == "undefined" || getStore("mobile") == "") {
    //       //已关注未登录
    //       if (list.indexOf(this.$route.path) < 0) {
    //         this.$router.push('/login');
    //       } 
    //     }
    //   });
    // }
  }
};
</script>

<style>
body,
html,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
p,
span,
table,
tr,
th,
td,
header,
nav,
section,
article,
aside,
footer,
button,
img,
a,
s,
i {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html {
  font-size: 20px;
  /* background-color: #fafafa; */
}
body {
  /* font: 14px/24px "Helvetica Neue", Helvetica, STHeiTi, sans-serif; */
  font:  14px/24px -apple-system, BlinkMacSystemFont, "PingFang SC","Helvetica Neue",STHeiti,"Microsoft Yahei",Tahoma,Simsun,sans-serif;

  -webkit-user-select: none;
  color: #333;
  background-color: #fff;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  /* max-width: 414px;
  margin: 0 auto; */
  
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: normal;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
fieldset,
img {
  border: 0;
}
li {
  list-style: none;
}
input,
button,
textarea,
select,
option {
  font: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
  -webkit-appearance: none;
}
a,
button,
input,
select,
textarea,
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus,
[onclick] {
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
a {
  text-decoration: none;
  color: #333;
  outline: 0;
  -webkit-touch-callout: none;
}

img {
  width: 100%;
  display: block;
}

h6 {
  font-size: 12px;
  line-height: 20px;
}
h5 {
  font-size: 14px;
}
h4 {
  font-size: 16px;
}
h3 {
  font-size: 18px;
}
h2 {
  font-size: 20px;
}
h1 {
  font-size: 24px;
}

.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
/*html, body {  
  width: 100%;  
  height: 100%;  
  margin: 0;  
  padding: 0;  
  position: relative;  
}  
#app {  
  width: 100%;  
  height: 100%;  
  background: #fff;  
  overflow: scroll;  
  -webkit-overflow-scrolling: touch;  
  position: absolute;  
  left:0;  
  top:0;  
}  */
</style>
"