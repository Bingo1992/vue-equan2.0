webpackJsonp([3],{"2bbs":function(t,e){},"9ZnT":function(t,e){},MzG9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("Xxa5"),n=r.n(i),a=r("exGp"),o=r.n(a),s=(r("NYxO"),r("P9l9")),c={name:"slideDialog",data:function(){return{province:[],city:[],zone:[],provName:"",cityName:"",cityId:1,disName:"",activeIdx:0,flag:!1}},props:["openCity","openDis","provVal","cityVal"],mounted:function(){this._initData()},methods:{_initData:function(){var t=this;Object(s.v)().then(function(e){t.province=e;var r=1,i=0;t.cityVal&&!t.flag?(t.province.forEach(function(e,n){e.ProName===t.provVal&&(r=e.ProID,i=n)}),Object(s.g)().then(function(e){t.provName=t.provVal;var n=[];e.forEach(function(e){e.ProID===r&&n.push(e),e.CityName===t.cityVal&&(t.cityId=e.CityID)}),t.city=n,t.activeIdx=i,t.getDistrict(t.cityId,t.cityVal)}).then(function(){t.flag=!0})):t.flag||t.getCity(1,"北京市",0)})},getCity:function(t,e,r){var i=this;this.provName=e,Object(s.g)().then(function(e){var n=[];e.forEach(function(e){e.ProID===t&&n.push(e)}),i.city=n,i.activeIdx=r})},getDistrict:function(t,e){var r=this;return o()(n.a.mark(function i(){var a,o;return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r.cityName=e,r.provName==e&&(r.provName=""),i.next=4,Object(s.k)();case 4:a=i.sent,o=[],a.forEach(function(e){e.CityID===t&&o.push(e)}),r.zone=o,r.$emit("closeDialog"),r.$emit("provName",r.provName),r.$emit("cityName",r.cityName),r.flag&&r.$emit("disName","");case 12:case"end":return i.stop()}},i,r)}))()},closeDialog:function(){this.$emit("closeDialog")},getDisName:function(t){this.disName=t,this.$emit("disName",this.disName),this.$emit("closeDialog")}},watch:{cityVal:"_initData"}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slideDialog"},[r("div",{class:["Procity-list","dialog-list",{show:t.openCity}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择城市")])]),t._v(" "),r("ul",{staticClass:"selProvince dialog-start-list"},t._l(t.province,function(e,i){return r("li",{key:e.ProID,class:{active:t.activeIdx==i},on:{click:function(r){t.getCity(e.ProID,e.ProName,i)}}},[t._v(t._s(e.ProName))])})),t._v(" "),r("ul",{staticClass:"selCity dialog-end-list"},t._l(t.city,function(e){return r("li",{key:e.CityID,on:{click:function(r){t.getDistrict(e.CityID,e.CityName)}}},[t._v(t._s(e.CityName))])}))]),t._v(" "),r("div",{class:["zone-list","dialog-list",{show:t.openDis}]},[r("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[r("i",{staticClass:"icon-left"}),t._v(" "),r("h4",[t._v("选择地区")])]),t._v(" "),r("ul",{staticClass:"selDistrict dialog-end-list whole-list"},t._l(t.zone,function(e){return r("li",{on:{click:function(r){t.getDisName(e.DisName)}}},[t._v(t._s(e.DisName))])}))])])},staticRenderFns:[]};var u={name:"addAddress",data:function(){return{showLoading:!0,openCity:!1,openDis:!1,district:[],flag:!1,alertText:"",showAlertTip:!1,formLoading:!1,addressId:"",provCityVal:"",ads:{name:"",mobile:"",provVal:"",cityVal:"",disVal:"",detailVal:""}}},mounted:function(){this._initData()},components:{areaDialog:r("VU/8")(c,l,!1,function(t){r("2bbs")},null,null).exports,alertTip:r("BzkK").a},computed:{rightMobile:function(){return/^1\d{10}$/.test(this.ads.mobile)}},methods:{_initData:function(){var t=this;this.addressId=this.$route.query.addressId,this.addressId?(document.title="修改地址",Object(s.d)().then(function(e){t.address=e.resultList,t.address&&t.address.forEach(function(e,r){e.id==t.addressId&&(t.ads.name=e.username,t.ads.mobile=e.mobile,t.ads.provVal=e.province,t.ads.cityVal=e.city,t.ads.provCityVal=e.province+e.city,t.ads.disVal=e.district,t.ads.detailVal=e.detailaddress)})})):document.title="添加地址"},saveAddress:function(t){var e=this;return o()(n.a.mark(function r(){return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.ads.name){r.next=4;break}e.showHideAlert("收货人不能为空"),r.next=38;break;case 4:if(-1==e.ads.name.indexOf("先生")&&-1==e.ads.name.indexOf("小姐")&&-1==e.ads.name.indexOf("女士")){r.next=8;break}e.showHideAlert("由于收寄件人必须实名制，请填写全名"),r.next=38;break;case 8:if(e.rightMobile){r.next=12;break}e.showHideAlert("手机号不正确"),r.next=38;break;case 12:if(e.ads.provCityVal){r.next=16;break}e.showHideAlert("城市不能为空"),r.next=38;break;case 16:if(e.ads.disVal){r.next=20;break}e.showHideAlert("县区不能为空"),r.next=38;break;case 20:if(e.ads.detailVal){r.next=24;break}e.showHideAlert("详细地址不能为空"),r.next=38;break;case 24:if(e.showAlertTip=!0,e.formLoading=!0,e.alertText="提交中，请稍候",!e.addressId){r.next=33;break}return r.next=30,Object(s.b)(t);case 30:r.sent,r.next=37;break;case 33:return delete t.id,r.next=36,Object(s.b)(t);case 36:r.sent;case 37:e.$router.go(-1);case 38:case"end":return r.stop()}},r,e)}))()},showCityDialog:function(){this.openCity=!0,this.$refs.inputCity.blur()},showDisDialog:function(){this.openDis=!0,this.$refs.inputDis.blur()},closeDialog:function(){this.openCity=!1,this.openDis=!1},provName:function(t){this.ads.provVal=t},cityName:function(t){this.ads.cityVal=t,this.ads.provCityVal=this.ads.provVal+t},disName:function(t){this.ads.disVal=t},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}}},d={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"form-list border-list"},[r("li",[r("label",[t._v("收货人")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.name,expression:"ads.name"}],attrs:{type:"text",placeholder:"请输入收货人姓名"},domProps:{value:t.ads.name},on:{input:function(e){e.target.composing||t.$set(t.ads,"name",e.target.value)}}})]),t._v(" "),r("li",[r("label",[t._v("联系电话")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.mobile,expression:"ads.mobile"}],attrs:{type:"tel",placeholder:"请输入联系电话"},domProps:{value:t.ads.mobile},on:{input:function(e){e.target.composing||t.$set(t.ads,"mobile",e.target.value)}}})]),t._v(" "),r("li",{staticClass:"btn-city",on:{click:t.showCityDialog}},[r("label",[t._v("所在城市")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.provCityVal,expression:"ads.provCityVal"}],ref:"inputCity",staticClass:"nowrap",attrs:{type:"text",placeholder:"选择城市",readonly:""},domProps:{value:t.ads.provCityVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"provCityVal",e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",{staticClass:"btn-zone",on:{click:t.showDisDialog}},[r("label",[t._v("所在地区")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.disVal,expression:"ads.disVal"}],ref:"inputDis",staticClass:"zoneValue",attrs:{type:"text",placeholder:"选择区县",readonly:""},domProps:{value:t.ads.disVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"disVal",e.target.value)}}}),t._v(" "),r("i",{staticClass:"icon-right"})]),t._v(" "),r("li",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ads.detailVal,expression:"ads.detailVal"}],staticClass:"list-info-h",attrs:{cols:"30",rows:"3",placeholder:"详细地址"},domProps:{value:t.ads.detailVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"detailVal",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"btn"},[r("p",{staticClass:"btn-theme",on:{click:function(e){t.saveAddress({params:{id:t.addressId,username:t.ads.name,mobile:t.ads.mobile,prov:t.ads.provVal,city:t.ads.cityVal,area:t.ads.disVal,detailaddress:t.ads.detailVal}})}}},[t._v("\n        保存")])]),t._v(" "),r("area-dialog",{attrs:{"open-city":t.openCity,"open-dis":t.openDis,provVal:t.ads.provVal,cityVal:t.ads.cityVal,zone:t.district},on:{closeDialog:t.closeDialog,provName:t.provName,cityName:t.cityName,disName:t.disName}}),t._v(" "),r("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[]};var f=r("VU/8")(u,d,!1,function(t){r("9ZnT")},null,null);e.default=f.exports},SldL:function(t,e){!function(e){"use strict";var r,i=Object.prototype,n=i.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=x;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={},m={};m[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==i&&n.call(g,o)&&(m=g);var w=V.prototype=_.prototype=Object.create(m);N.prototype=w.constructor=V,V.constructor=N,V[c]=N.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===N||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,V):(t.__proto__=V,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},D(C.prototype),C.prototype[s]=function(){return this},u.AsyncIterator=C,u.async=function(t,e,r,i){var n=new C(x(t,e,r,i));return u.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},D(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},u.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=r),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:O(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,i){var n=e&&e.prototype instanceof _?e:_,a=Object.create(n.prototype),o=new I(i||[]);return a._invoke=function(t,e,r){var i=d;return function(n,a){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===n)throw a;return P()}for(r.method=n,r.arg=a;;){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=h;var c=b(t,e,r);if("normal"===c.type){if(i=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=p,r.method="throw",r.arg=c.arg)}}}(t,r,o),a}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function N(){}function V(){}function D(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(r,i){function a(){return new Promise(function(e,a){!function e(r,i,a,o){var s=b(t[r],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},o)}o(s.arg)}(r,i,e,a)})}return e=e?e.then(a,a):a()}}function k(t,e){var i=t.iterator[e.method];if(i===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=b(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,r){t.exports=r("jyFz")},exGp:function(t,e,r){"use strict";e.__esModule=!0;var i,n=r("//Fk"),a=(i=n)&&i.__esModule?i:{default:i};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,r){return function i(n,o){try{var s=e[n](o),c=s.value}catch(t){return void r(t)}if(!s.done)return a.default.resolve(c).then(function(t){i("next",t)},function(t){i("throw",t)});t(c)}("next")})}}},jyFz:function(t,e,r){var i=function(){return this}()||Function("return this")(),n=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,a=n&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=r("SldL"),n)i.regeneratorRuntime=a;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}}});
//# sourceMappingURL=3.380fada8ee456b0e005d.js.map