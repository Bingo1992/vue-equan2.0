webpackJsonp([10],{K2tD:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Dd8w"),i=a.n(e),r=a("NYxO"),o=a("KgXo"),c=a("BzkK"),n=a("P9l9"),l=a("VKKs"),d=a("Dqno"),h={name:"orderConfirm",data:function(){return{showLoading:!1,proList:[],unCheckCartList:[],address:[],paramsList:[],remark:"",curAdsId:0,total_price2:0,total_ebuy:0,userEbuy:0,userIntegeral:0,failPay:!1,alertText:"",showAlertTip:!1,flag:!1,formLoading:!1,pay:{egou:0,ebi:0,money:0}}},components:{loading:o.a,alertTip:c.a},mixins:[d.b,d.c],created:function(){document.title="订单确认",this._initData()},computed:i()({},Object(r.c)(["chooseAddress","addressId","cartList"])),methods:i()({},Object(r.b)(["CHOOSE_ADDRESS","INIT_BUYCART"]),{_initData:function(){var t=this;this.proList=JSON.parse(Object(l.a)("buyPro")),Object(l.a)("unCheckCartList")||(this.cartList.forEach(function(s,a){s.check||t.unCheckCartList.push(s)}),Object(l.c)("unCheckCartList",this.unCheckCartList));var s=0;this.proList.forEach(function(a,e){2==a.type&&s++;var i=a.productId+":"+a.total;t.paramsList.push(i)}),s==this.proList.length&&(this.flag=!0),this._initAddress(),this.calcTotalMoney(),this._getUserTotal()},calcTotalMoney:function(){var t=this;return this.total_price2=0,this.proList&&this.proList.forEach(function(s,a){t.total_price2+=s.total*s.currCost}),Number(this.total_price2)},calcTotalEbuy:function(){var t=this;return this.total_ebuy=0,this.proList&&this.proList.forEach(function(s,a){1==s.ebuy&&(t.total_ebuy+=s.total*s.currCost)}),Number(this.total_ebuy)},_getUserTotal:function(){var t=this;Object(n.q)().then(function(s){if(t.userEbuy=s.userEbuy,t.userIntegeral=s.userIntegeral,t.userEbuy)if(t.userEbuy>=t.calcTotalEbuy()){t.pay.egou=t.calcTotalEbuy();var a=t.calcTotalMoney()-t.calcTotalEbuy();t.integeralPay(t.userIntegeral,a)}else{t.pay.egou=t.userEbuy;var e=t.calcTotalMoney()-t.userEbuy;t.integeralPay(t.userIntegeral,e)}else t.integeralPay(t.userIntegeral,t.calcTotalMoney())})},integeralPay:function(t,s){t?t>=s?this.pay.ebi=s:(this.pay.ebi=t,this.pay.money=s-t):this.pay.money=s},gotoPay1:function(){var t=this;this.showAlertTip=!0,this.formLoading=!0,this.alertText="提交中，请稍候";var s="{"+this.paramsList.join(",")+"}";Object(n.o)({params:{addressid:this.curAdsId,params:s,remark:this.remark}}).then(function(s){0==s.success?(t.formLoading=!1,t.showHideAlert(s.msg)):Number(s.attributes.wxPayTotal)>0?(window.location.href=t.getUrlPath("/pay.html?orderNo="+s.attributes.payOrderId),Object(l.c)("buyCart",Object(l.a)("unCheckCartList")),t.INIT_BUYCART()):(t.$router.push("/result"),Object(l.c)("buyCart",Object(l.a)("unCheckCartList")),t.INIT_BUYCART())})},_initAddress:function(){var t=this;0===this.chooseAddress.length?Object(n.d)().then(function(s){t.address=s.resultList,t.address.length>0&&t.address.forEach(function(s,a){1==s.isdefault&&(t.CHOOSE_ADDRESS({address:s,id:s.id,index:a}),t.curAdsId=s.id)})}):this.curAdsId=this.addressId},showHideAlert:function(t){var s=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){s.showAlertTip=!1},1e3)}}),watch:{$route:"_initData"}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"orderConfirm banner-b"},[t.showLoading?a("loading"):t._e(),t._v(" "),t.showLoading?t._e():a("section",[a("div",{staticClass:"logistics bg-show"},[a("router-link",{staticClass:"list-box",attrs:{to:"/chooseAddress"}},[a("i",{staticClass:"icon-map font-gray pdr"}),t._v(" "),0===t.chooseAddress.length?a("h5",{staticClass:"list-info-v pdt pdb"},[t._v("请添加一个收货地址")]):a("div",{staticClass:"list-info-v"},[a("div",[a("h4",[a("span",{staticClass:"pdr"},[t._v(t._s(t.chooseAddress.username))]),t._v(" "),a("span",[t._v(t._s(t.chooseAddress.mobile))])]),t._v(" "),a("p",{staticClass:"font-gray nowrap-2"},[t._v(t._s(t.chooseAddress.province)+t._s(t.chooseAddress.city)+t._s(t.chooseAddress.district)+t._s(t.chooseAddress.detailaddress))])])]),t._v(" "),a("i",{staticClass:"icon-right"})])],1),t._v(" "),a("ul",{staticClass:"confirm-order"},t._l(t.proList,function(s,e){return a("li",{key:e,staticClass:"list-box border-bottom"},[a("img",{staticClass:"list-img",attrs:{src:t.getImgPath(s.productImg)}}),t._v(" "),a("div",{staticClass:"list-info-v"},[a("div",[a("div",{staticClass:"list-box"},[a("div",{staticClass:"list-info-h"},[a("h5",{staticClass:"nowrap-2 top-text"},[t._v(t._s(s.productName))])]),t._v(" "),a("h5",{staticClass:"pdl"},[t._v("X"+t._s(s.total))])]),t._v(" "),a("div",{staticClass:"price-big"},[a("span",{staticClass:"font-orange"},[a("i",{staticClass:"icon-coin"}),t._v(t._s(s.currCost))]),t._v(" "),a("s",{staticClass:"font-gray"},[t._v("市场价：￥"+t._s(s.currPrice))])])])])])})),t._v(" "),a("div",{staticClass:"bg-mgShow"},[t._m(0),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticClass:"txtArea",attrs:{cols:"30",rows:"3",placeholder:"请输入留言"},domProps:{value:t.remark},on:{input:function(s){s.target.composing||(t.remark=s.target.value)}}})]),t._v(" "),0!=t.pay.egou?a("div",{staticClass:"bg-mgShow"},[t._m(1),t._v(" "),a("ul",[a("li",{staticClass:"list-box"},[a("p",{staticClass:"list-info-h"},[t._v("可用e购账户抵扣"),a("span",{staticClass:"font-red"},[t._v(t._s(t.pay.egou))]),t._v("元")]),t._v(" "),t._m(2)])])]):t._e(),t._v(" "),0!=t.pay.money||0!=t.pay.ebi?a("div",{staticClass:"bg-mgShow"},[t._m(3),t._v(" "),a("ul",[0!=t.pay.ebi?a("li",{staticClass:"list-box"},[a("p",{staticClass:"list-info-h"},[t._v("e币支付"),a("span",{staticClass:"pdr font-orange"},[a("i",{staticClass:"icon-coin"}),t._v(t._s(t.pay.ebi))])]),t._v(" "),t._m(4)]):t._e(),t._v(" "),0!=t.pay.money?a("li",{staticClass:"list-box"},[a("p",{staticClass:"list-info-h"},[t._v("微信支付"),a("span",{staticClass:" font-orange"},[t._v("￥"+t._s(t.pay.money))])]),t._v(" "),t._m(5)]):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"fixed-bottom  bg-gray"},[a("div",{staticClass:"cal-banner list-box border-top"},[a("div",{staticClass:"list-info-v"},[a("div",[0!=t.pay.money?a("p",[t._v("\n                      应付现金：\n                      "),a("span",{staticClass:"font-orange"},[t._v("￥"+t._s(t.pay.money))])]):t._e(),t._v(" "),t.userIntegeral&&0!=t.userIntegeral?a("p",[t._v("\n                      应付e币：\n                      "),a("i",{staticClass:"icon-coin"}),t._v(" "),a("span",{staticClass:"font-orange"},[t._v(t._s(t.pay.ebi))])]):t._e()])]),t._v(" "),a("button",{class:[{disbtn:0==t.chooseAddress.length},"btn-theme"],on:{click:t.gotoPay1}},[t._v(" 立即付款")])])])]),t._v(" "),a("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title-bar border-bottom"},[s("h5",[this._v("给卖家留言")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title-bar border-bottom"},[s("h5",[this._v("使用e购账户")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"radio",checked:"",disabled:""}}),this._v(" "),s("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title-bar border-bottom"},[s("h5",[this._v("支付方式")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"radio",checked:"",disabled:""}}),this._v(" "),s("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"radio",checked:"",disabled:""}}),this._v(" "),s("i",{staticClass:"icon-hook"})])}]};var _=a("VU/8")(h,u,!1,function(t){a("gNeH")},"data-v-defe95b0",null);s.default=_.exports},gNeH:function(t,s){}});
//# sourceMappingURL=10.7a348a3f9c8509bb246e.js.map