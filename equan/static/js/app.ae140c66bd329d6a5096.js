webpackJsonp([21],{HLOr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("cTzj"),r=n.n(a),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App"},i,!1,function(t){n("HLOr")},null,null).exports,u=n("/ocq"),l=function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("Qvnf")];t.apply(null,e)}.bind(this)).catch(n.oe)};o.a.use(u.a);var s,p=new u.a({routes:[{path:"",redirect:"/home"},{path:"/home",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("nU8l")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Home",meta:{title:"e券商城"},children:[{path:"productDetail",component:l,meta:{title:"商品详情"}}]},{path:"/cart",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("AOoF")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Cart",meta:{title:"购物车"}},{path:"/ticket",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("LJ0u")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Ticket",meta:{title:"企业赠券"}},{path:"/user",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("2AnY")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"User",meta:{title:"个人中心"}},{path:"/proList",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("3uSt")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:""},children:[{path:"productDetail",component:l,name:"ProDetail",meta:{title:"商品详情"}}]},{path:"/productDetail",component:l,name:"ProDetail",meta:{title:"商品详情"}},{path:"/orderConfirm",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("K2tD")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"OrderConfirm",meta:{title:"订单确认"}},{path:"/pay",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("Meru")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"OrderPay",meta:{title:"订单支付"}},{path:"/result",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("oQUZ")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Result",meta:{title:"订单结果"},children:[{path:"productDetail",component:l,name:"ProDetail",meta:{title:"商品详情"}}]},{path:"/orderList",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("OuNA")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"OrderList",meta:{title:"我的订单"}},{path:"/chooseAddress",component:function(t){return Promise.all([n.e(0),n.e(15)]).then(function(){var e=[n("kXmu")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"ChooseAddress",meta:{title:"选择地址"}},{path:"/addressManage",component:function(t){return Promise.all([n.e(0),n.e(17)]).then(function(){var e=[n("qb4N")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AddressManage",meta:{title:"地址管理"}},{path:"/addAddress",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("MzG9")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"AddAddress",meta:{title:"添加地址"}},{path:"/account",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("jY8t")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Account",meta:{title:"我的账户"}},{path:"/exchange",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("QAVE")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Exchange",meta:{title:"兑换服务"}},{path:"/rpLucky",component:function(t){return n.e(18).then(function(){var e=[n("tF/r")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"RpLucky",meta:{title:"红包活动"}},{path:"/ticketCode",component:function(t){return Promise.all([n.e(0),n.e(16)]).then(function(){var e=[n("lofG")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"TicketCode",meta:{title:"积分卡充值"}},{path:"/login",component:function(t){return Promise.all([n.e(0),n.e(19)]).then(function(){var e=[n("QlWu")];t.apply(null,e)}.bind(this)).catch(n.oe)},name:"Login",meta:{title:"登录中心"}},{path:"/rechargeCenter",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("1R2s")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"充值中心"},name:"RechargeCenter",children:[{path:"productDetail",component:l,name:"ProDetail",meta:{title:"商品详情"}}]}]}),d=n("NYxO"),h=n("bOdI"),m=n.n(h),f=n("VKKs"),v=(s={},m()(s,"INIT_BUYCART",function(t){var e=Object(f.a)("buyCart");e&&(t.cartList=JSON.parse(e))}),m()(s,"ADD_CART",function(t,e){var n=e.productId,o=e.productImg,a=e.productName,r=e.currCost,i=e.currPrice,c=(e.check,e.total),u=void 0===c?1:c,l=e.ebuy,s=t.cartList,p=!0,d={productId:n,productImg:o,productName:a,currCost:r,currPrice:i,ebuy:l};s.length&&s.forEach(function(t){t.productId===n&&t.total>=0&&(p=!1,t.total+=u)}),s.length&&!p||(d.total=u,d.check=!1,s.push(d)),t.cartList=s,Object(f.c)("buyCart",s)}),m()(s,"EDIT_CART",function(t,e){var n=e.productid,o=e.quality,a=e.check,r=t.cartList;n?r.forEach(function(t){t.productId===n&&(t.total=o,t.check=a)}):r.forEach(function(t){t.check=!!a}),t.cartList=r,Object(f.c)("buyCart",t.cartList)}),m()(s,"DELETE_CART",function(t,e){var n=t.cartList;e&&e.forEach(function(t,e){n.forEach(function(e,o){e.productId===t&&n.splice(o,1)})}),t.cartList=n,Object(f.c)("buyCart",t.cartList)}),m()(s,"CHOOSE_ADDRESS",function(t,e){var n=e.address,o=e.id,a=e.index;t.chooseAddress=n,t.addressId=o,t.addressIndex=a}),m()(s,"CHOOSE_PROSORT",function(t,e){var n=e.sortPro,o=e.index;t.sortProIndex=o,t.sortPro=n}),s);o.a.use(d.a);var b=new d.a.Store({state:{cartList:[],checkID:[],chooseAddress:[],addressId:0,addressIndex:0,sortProIndex:0,sortPro:"全部分类"},mutations:v});n("QsYS"),n("pOKD"),n("UoMW");o.a.use(r.a,{loading:"/static/images/loading.png"}),o.a.config.productionTip=!1,new o.a({el:"#app",router:p,store:b,components:{App:c},template:"<App/>"}),p.beforeEach(function(t,e,n){document.title=t.meta.title,n()})},QsYS:function(t,e){},UoMW:function(t,e){var n,o,a,r,i;n=document,o=window,a=n.documentElement,r="orientationchange"in window?"orientationchange":"resize",i=function(){var t=a.clientWidth;t&&(a.style.fontSize=t/375*20+"px")},n.addEventListener&&(o.addEventListener(r,i,!1),n.addEventListener("DOMContentLoaded",i,!1))},VKKs:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c});var o=n("mvHQ"),a=n.n(o),r=function(t,e){t&&("string"!=typeof e&&(e=a()(e)),window.sessionStorage.setItem(t,e))},i=function(t){if(t)return window.sessionStorage.getItem(t)},c=function(t){t&&window.sessionStorage.removeItem(t)}},pOKD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ae140c66bd329d6a5096.js.map