webpackJsonp([19],{MrOk:function(t,i){},zizM:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("bOdI"),a=s.n(e),o=s("BzkK"),l=s("P9l9"),n=s("Dqno"),c={name:"addAddress",data:function(){var t;return t={showAlertTip:!1,formLoading:!1},a()(t,"showAlertTip",!1),a()(t,"alertText",""),a()(t,"feeList",[{faceVal:10},{faceVal:30},{faceVal:50},{faceVal:100}]),a()(t,"feeList0",[{flow:"30M"},{flow:"50M"},{flow:"100M"},{flow:"500M"}]),a()(t,"feeList1",[{faceVal:6,flow:"30M"},{faceVal:21,flow:"150M"},{faceVal:32,flow:"500M"}]),a()(t,"feeList2",[{faceVal:7,flow:"350M"},{faceVal:11,flow:"100M"},{faceVal:32,flow:"500M"}]),a()(t,"feeList3",[{faceVal:6,flow:"30M"},{faceVal:8,flow:"50M"},{faceVal:11,flow:"100M"},{faceVal:32,flow:"500M"}]),a()(t,"historyList",[]),a()(t,"showHistory",!1),a()(t,"hasEbi",30),a()(t,"tabIdx",0),a()(t,"ads",{mobile:""}),a()(t,"m1",{ebi:0,money:0,idx:-1}),a()(t,"m2",{ebi:0,flow:"",money:0,idx:-1}),t},components:{alertTip:o.a},mixins:[n.d],created:function(){document.title="手机充值",this._initData()},computed:{isPhoneNum:function(){this.m2.ebi=0;if(/^1\d{10}$/.test(this.ads.mobile)){var t=this.ads.mobile.slice(0,3);this.ads.mobile.slice(0,7);return this.inArray(t,[134,135,136,137,138,139,147,150,151,152,157,158,159,182,183,184,187,188,198])?1:this.inArray(t,[130,131,132,145,155,156,176,185,186,166])?2:this.inArray(t,[133,153,177,180,181,189,199])?3:4}return 0}},methods:{_initData:function(){var t=this;Object(l.t)({params:{orderType:4}}).then(function(i){t.historyList=i.obj,t.ads.mobile=t.historyList[0]}),Object(l.v)().then(function(i){i.success&&(t.hasEbi=i.attributes.ecoin)})},watchMobile:function(){var t=this,i=this.ads.mobile.length;this.historyList.forEach(function(s){var e=s.substring(0,i);t.ads.mobile.match(e)?t.showHistory=!0:t.showHistory=!1}),0==this.isPhoneNum&&(this.m2.ebi=0,this.m2.money=0,this.m2.idx=-1)},getVal:function(t,i){this.m1.idx=i,this.hasEbi>=t?(this.m1.ebi=t,this.m1.money=0):(this.m1.ebi=this.hasEbi,this.m1.money=t-this.hasEbi)},getVal2:function(t,i,s){this.m2.idx=s,this.m2.flow=i,this.hasEbi>=t?(this.m2.ebi=t,this.m2.money=0):(this.m2.ebi=this.hasEbi,this.m2.money=t-this.hasEbi)},getMobile:function(t){this.ads.mobile=t},gotoPay:function(){var t=this;if(this.isPhoneNum)if(-1==this.m1.idx&&0==this.tabIdx)this.showHideAlert("请输入选择充值面额");else if(-1==this.m2.idx&&1==this.tabIdx)this.showHideAlert("请输入选择流量类型");else if(this.showAlertTip=!0,this.formLoading=!0,this.alertText="提交中，请稍候",0==this.tabIdx)if(0==this.m1.money)Object(l.y)({receivermobile:this.ads.mobile,amount:this.m1.ebi,cpType:2,productid:-4,orderType:4,name:"话费充值"+this.m1.ebi+"元"}).then(function(i){i.success?t.$router.push({path:"/result",query:{recharge:1}}):t.showHideAlert(i.msg)});else{var i=parseInt(this.m1.ebi)+parseInt(this.m1.money);Object(l.z)({receivermobile:this.ads.mobile,amount:this.m1.ebi+this.m1.money,cpType:1,productid:-4,orderType:4,name:"话费充值"+i+"元"}).then(function(i){i.success?window.location.href=t.getUrlPath("/pay.html?orderNo="+i.attributes.odNo):t.showHideAlert(i.msg)})}else 0==this.m2.money?Object(l.y)({receivermobile:this.ads.mobile,amount:this.m2.ebi,cpType:2,productid:-6,orderType:6,name:"流量充值"+this.m2.flow}).then(function(i){i.success?t.$router.push({path:"/result",query:{recharge:1}}):t.showHideAlert(i.msg)}):Object(l.z)({receivermobile:this.ads.mobile,amount:this.m2.ebi+this.m2.money,cpType:1,productid:-6,orderType:6,name:"流量充值"+this.m2.flow}).then(function(i){i.success?window.location.href=t.getUrlPath("/pay.html?orderNo="+i.attributes.odNo):t.showHideAlert(i.msg)});else this.showHideAlert("请输入正确的手机号")},inArray:function(t,i){for(var s in i)if(t==i[s])return!0;return!1},showHideAlert:function(t){var i=this;this.formLoading=!1,this.showAlertTip=!0,this.alertText=t,setTimeout(function(){i.showAlertTip=!1},2e3)}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{"margin-top":"44px"}},[s("div",{staticClass:"fixed-top"},[s("ul",{staticClass:"flex-layout nav-bar-2 border-bottom bg-show"},[s("li",{class:[0==t.tabIdx?"active":""],on:{click:function(i){t.tabIdx=0}}},[s("a",[t._v("话费充值")])]),t._v(" "),s("li",{class:[1==t.tabIdx?"active":""],on:{click:function(i){t.tabIdx=1}}},[s("a",[t._v("流量充值")])])])]),t._v(" "),s("ul",{staticClass:"form-list border-list"},[s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.mobile,expression:"ads.mobile"}],attrs:{type:"tel",maxlength:"11",placeholder:"请输入11位手机号码"},domProps:{value:t.ads.mobile},on:{input:[function(i){i.target.composing||t.$set(t.ads,"mobile",i.target.value)},t.watchMobile],focus:function(i){t.showHistory=!0},blur:function(i){t.showHistory=!1}}}),t._v(" "),1==t.isPhoneNum?s("p",{staticClass:"motion-shop"},[s("i",{staticClass:"icon-hook"}),t._v("中国移动")]):t._e(),t._v(" "),2==t.isPhoneNum?s("p",{staticClass:"motion-shop"},[s("i",{staticClass:"icon-hook"}),t._v("中国联通")]):t._e(),t._v(" "),3==t.isPhoneNum?s("p",{staticClass:"motion-shop"},[s("i",{staticClass:"icon-hook"}),t._v("中国电信")]):t._e(),t._v(" "),1==t.showHistory&&0!=t.historyList.length?s("ul",{staticClass:"history-mobile border-top"},t._l(t.historyList,function(i,e){return s("li",{key:e,staticClass:"list-box",on:{click:function(s){t.getMobile(i)}}},[s("p",{staticClass:"list-info-h"},[t._v(t._s(i)+" "),s("span",{staticClass:"font-gray pdl"},[t._v("(历史记录)")])])])})):t._e()])]),t._v(" "),s("p",{staticClass:"font-red pdl pdb md-font"},[t._v("*请确认手机号信息，一经提交，无法撤回！")]),t._v(" "),0==t.tabIdx?s("div",[s("ul",{staticClass:"face-list"},t._l(t.feeList,function(i,e){return s("li",{key:e,class:{active:t.m1.idx===e},on:{click:function(s){t.getVal(i.faceVal,e)}}},[s("p",{staticClass:"face-value"},[t._v(t._s(i.faceVal)+"元")])])})),t._v(" "),0!=t.m1.ebi||0!=t.m1.money?s("div",{staticClass:"bg-mgShow"},[t._m(0),t._v(" "),s("ul",[0!=t.m1.ebi?s("li",{staticClass:"list-box"},[s("p",{staticClass:"list-info-h"},[t._v("e币支付")]),t._v(" "),s("span",{staticClass:"font-orange pdr"},[t._v(t._s(t.m1.ebi)+" e币")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),0!=t.m1.money?s("li",{staticClass:"list-box"},[s("p",{staticClass:"list-info-h"},[t._v("微信支付")]),t._v(" "),s("span",{staticClass:"font-orange pdr"},[t._v(t._s(t.m1.money)+" 元")]),t._v(" "),t._m(2)]):t._e()])]):t._e()]):t._e(),t._v(" "),1==t.tabIdx?s("div",[0==t.isPhoneNum?s("ul",{staticClass:"face-list"},t._l(t.feeList0,function(i,e){return s("li",{key:e,on:{click:function(i){t.showHideAlert("请先输入正确的手机号")}}},[s("div",{staticClass:"face-value"},[s("p",[t._v(t._s(i.flow))])])])})):t._e(),t._v(" "),1==t.isPhoneNum?s("ul",{staticClass:"face-list"},t._l(t.feeList1,function(i,e){return s("li",{key:e,class:{active:t.m2.idx===e},on:{click:function(s){t.getVal2(i.faceVal,i.flow,e)}}},[s("div",{staticClass:"face-value"},[s("div",[s("p",[t._v(t._s(i.flow))]),t._v(" "),s("p",[t._v("售价："+t._s(i.faceVal)+"元")]),t._v(" "),s("p",{staticClass:"font-gray md-font"},[t._v("月底失效")])])])])})):t._e(),t._v(" "),2==t.isPhoneNum?s("ul",{staticClass:"face-list"},t._l(t.feeList2,function(i,e){return s("li",{key:e,class:{active:t.m2.idx===e},on:{click:function(s){t.getVal2(i.faceVal,i.flow,e)}}},[s("div",{staticClass:"face-value"},[s("div",[s("p",[t._v(t._s(i.flow))]),t._v(" "),s("p",[t._v("售价："+t._s(i.faceVal)+"元")]),t._v(" "),s("p",{staticClass:"font-gray md-font"},[t._v("月底失效")])])])])})):t._e(),t._v(" "),3==t.isPhoneNum?s("ul",{staticClass:"face-list"},t._l(t.feeList3,function(i,e){return s("li",{key:e,class:{active:t.m2.idx===e},on:{click:function(s){t.getVal2(i.faceVal,i.flow,e)}}},[s("div",{staticClass:"face-value"},[s("div",[s("p",[t._v(t._s(i.flow))]),t._v(" "),s("p",[t._v("售价："+t._s(i.faceVal)+"元")]),t._v(" "),s("p",{staticClass:"font-gray md-font"},[t._v("月底失效")])])])])})):t._e(),t._v(" "),0!=t.m2.ebi||0!=t.m2.money?s("div",{staticClass:"bg-mgShow"},[t._m(3),t._v(" "),s("ul",[0!=t.m2.ebi?s("li",{staticClass:"list-box"},[s("p",{staticClass:"list-info-h"},[t._v("e币支付")]),t._v(" "),s("span",{staticClass:"font-orange pdr"},[t._v(t._s(t.m2.ebi)+" e币")]),t._v(" "),t._m(4)]):t._e(),t._v(" "),0!=t.m2.money?s("li",{staticClass:"list-box"},[s("p",{staticClass:"list-info-h"},[t._v("微信支付")]),t._v(" "),s("span",{staticClass:"font-orange pdr"},[t._v(t._s(t.m2.money)+" 元")]),t._v(" "),t._m(5)]):t._e()])]):t._e()]):t._e(),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"btn"},[s("p",{staticClass:"btn-pure-theme",on:{click:function(i){t.gotoPay()}}},[t._v("立即支付")])]),t._v(" "),s("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title-bar border-bottom"},[i("h5",[this._v("支付选择")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",{staticClass:"checkbox"},[i("input",{staticStyle:{"margin-right":"0"},attrs:{type:"checkbox",name:"type",checked:"",disabled:""}}),this._v(" "),i("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",{staticClass:"checkbox"},[i("input",{staticStyle:{"margin-right":"0"},attrs:{type:"radio",name:"type",checked:"",disabled:""}}),this._v(" "),i("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title-bar border-bottom"},[i("h5",[this._v("支付选择")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",{staticClass:"checkbox"},[i("input",{staticStyle:{"margin-right":"0"},attrs:{type:"checkbox",name:"type",checked:"",disabled:""}}),this._v(" "),i("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",{staticClass:"checkbox"},[i("input",{staticStyle:{"margin-right":"0"},attrs:{type:"checkbox",name:"type",checked:"",disabled:""}}),this._v(" "),i("i",{staticClass:"icon-hook"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"bg-mgShow rich-box"},[i("h5",[this._v("服务说明")]),this._v(" "),i("p",{staticClass:"font-gray"},[this._v("每天23:00-01:00暂停充值。")])])}]};var h=s("VU/8")(c,r,!1,function(t){s("MrOk")},"data-v-51837d32",null);i.default=h.exports}});
//# sourceMappingURL=19.82b46e10a6fdb1865061.js.map