webpackJsonp([8],{MzG9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),o=a("exGp"),n=a.n(o),r=(a("NYxO"),a("P9l9")),l={name:"slideDialog",data:function(){return{province:[],city:[],zone:[],provName:"",cityName:"",cityId:1,disName:"",activeIdx:0,flag:!1}},props:["openCity","openDis","provVal","cityVal"],mounted:function(){this._initData()},methods:{_initData:function(){var t=this;Object(r.H)().then(function(e){t.province=e;var a=1,i=0;t.cityVal&&!t.flag?(t.province.forEach(function(e,s){e.ProName===t.provVal&&(a=e.ProID,i=s)}),Object(r.j)().then(function(e){t.provName=t.provVal;var s=[];e.forEach(function(e){e.ProID===a&&s.push(e),e.CityName===t.cityVal&&(t.cityId=e.CityID)}),t.city=s,t.activeIdx=i,t.getDistrict(t.cityId,t.cityVal)}).then(function(){t.flag=!0})):t.flag||t.getCity(1,"北京市",0)})},getCity:function(t,e,a){var i=this;this.provName=e,Object(r.j)().then(function(e){var s=[];e.forEach(function(e){e.ProID===t&&s.push(e)}),i.city=s,i.activeIdx=a})},getDistrict:function(t,e){var a=this;return n()(s.a.mark(function i(){var o,n;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a.cityName=e,a.provName==e&&(a.provName=""),i.next=4,Object(r.n)();case 4:o=i.sent,n=[],o.forEach(function(e){e.CityID===t&&n.push(e)}),a.zone=n,a.$emit("closeDialog"),a.$emit("provName",a.provName),a.$emit("cityName",a.cityName),a.flag&&a.$emit("disName","");case 12:case"end":return i.stop()}},i,a)}))()},closeDialog:function(){this.$emit("closeDialog")},getDisName:function(t){this.disName=t,this.$emit("disName",this.disName),this.$emit("closeDialog")}},watch:{cityVal:"_initData"}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slideDialog"},[a("div",{class:["Procity-list","dialog-list",{show:t.openCity}]},[a("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[a("i",{staticClass:"icon-left"}),t._v(" "),a("h4",[t._v("选择城市")])]),t._v(" "),a("ul",{staticClass:"selProvince dialog-start-list"},t._l(t.province,function(e,i){return a("li",{key:e.ProID,class:{active:t.activeIdx==i},on:{click:function(a){t.getCity(e.ProID,e.ProName,i)}}},[t._v(t._s(e.ProName))])})),t._v(" "),a("ul",{staticClass:"selCity dialog-end-list"},t._l(t.city,function(e){return a("li",{key:e.CityID,on:{click:function(a){t.getDistrict(e.CityID,e.CityName)}}},[t._v(t._s(e.CityName))])}))]),t._v(" "),a("div",{class:["zone-list","dialog-list",{show:t.openDis}]},[a("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[a("i",{staticClass:"icon-left"}),t._v(" "),a("h4",[t._v("选择地区")])]),t._v(" "),a("ul",{staticClass:"selDistrict dialog-end-list whole-list"},t._l(t.zone,function(e){return a("li",{key:e,on:{click:function(a){t.getDisName(e.DisName)}}},[t._v(t._s(e.DisName))])}))])])},staticRenderFns:[]};var d={name:"addAddress",data:function(){return{showLoading:!0,openCity:!1,openDis:!1,district:[],flag:!1,alertText:"",showAlertTip:!1,formLoading:!1,addressId:"",provCityVal:"",ads:{name:"",mobile:"",provVal:"",cityVal:"",disVal:"",detailVal:""}}},mounted:function(){this._initData()},components:{areaDialog:a("VU/8")(l,c,!1,function(t){a("icY+")},null,null).exports,alertTip:a("BzkK").a},computed:{rightMobile:function(){return/^1\d{10}$/.test(this.ads.mobile)}},methods:{_initData:function(){var t=this;this.addressId=this.$route.query.addressId,this.addressId?(document.title="修改地址",Object(r.e)().then(function(e){t.address=e.resultList,t.address&&t.address.forEach(function(e,a){e.id==t.addressId&&(t.ads.name=e.username,t.ads.mobile=e.mobile,t.ads.provVal=e.province,t.ads.cityVal=e.city,t.ads.provCityVal=e.province+e.city,t.ads.disVal=e.district,t.ads.detailVal=e.detailaddress)})})):document.title="添加地址"},saveAddress:function(t){var e=this;return n()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.ads.name){a.next=4;break}e.showHideAlert("收货人不能为空"),a.next=38;break;case 4:if(-1==e.ads.name.indexOf("先生")&&-1==e.ads.name.indexOf("小姐")&&-1==e.ads.name.indexOf("女士")){a.next=8;break}e.showHideAlert("由于收寄件人必须实名制，请填写全名"),a.next=38;break;case 8:if(e.rightMobile){a.next=12;break}e.showHideAlert("手机号不正确"),a.next=38;break;case 12:if(e.ads.provCityVal){a.next=16;break}e.showHideAlert("城市不能为空"),a.next=38;break;case 16:if(e.ads.disVal){a.next=20;break}e.showHideAlert("县区不能为空"),a.next=38;break;case 20:if(e.ads.detailVal){a.next=24;break}e.showHideAlert("详细地址不能为空"),a.next=38;break;case 24:if(e.showAlertTip=!0,e.formLoading=!0,e.alertText="提交中，请稍候",!e.addressId){a.next=33;break}return a.next=30,Object(r.c)(t);case 30:a.sent,a.next=37;break;case 33:return delete t.id,a.next=36,Object(r.c)(t);case 36:a.sent;case 37:e.$router.go(-1);case 38:case"end":return a.stop()}},a,e)}))()},showCityDialog:function(){this.openCity=!0,this.$refs.inputCity.blur()},showDisDialog:function(){this.openDis=!0,this.$refs.inputDis.blur()},closeDialog:function(){this.openCity=!1,this.openDis=!1},provName:function(t){this.ads.provVal=t},cityName:function(t){this.ads.cityVal=t,this.ads.provCityVal=this.ads.provVal+t},disName:function(t){this.ads.disVal=t},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"form-list border-list"},[a("li",[a("label",[t._v("收货人")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.name,expression:"ads.name"}],attrs:{type:"text",placeholder:"请输入收货人姓名"},domProps:{value:t.ads.name},on:{input:function(e){e.target.composing||t.$set(t.ads,"name",e.target.value)}}})]),t._v(" "),a("li",[a("label",[t._v("联系电话")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.mobile,expression:"ads.mobile"}],attrs:{type:"tel",placeholder:"请输入联系电话"},domProps:{value:t.ads.mobile},on:{input:function(e){e.target.composing||t.$set(t.ads,"mobile",e.target.value)}}})]),t._v(" "),a("li",{staticClass:"btn-city",on:{click:t.showCityDialog}},[a("label",[t._v("所在城市")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.provCityVal,expression:"ads.provCityVal"}],ref:"inputCity",staticClass:"nowrap",attrs:{type:"text",placeholder:"选择城市",readonly:""},domProps:{value:t.ads.provCityVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"provCityVal",e.target.value)}}}),t._v(" "),a("i",{staticClass:"icon-right"})]),t._v(" "),a("li",{staticClass:"btn-zone",on:{click:t.showDisDialog}},[a("label",[t._v("所在地区")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ads.disVal,expression:"ads.disVal"}],ref:"inputDis",staticClass:"zoneValue",attrs:{type:"text",placeholder:"选择区县",readonly:""},domProps:{value:t.ads.disVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"disVal",e.target.value)}}}),t._v(" "),a("i",{staticClass:"icon-right"})]),t._v(" "),a("li",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ads.detailVal,expression:"ads.detailVal"}],staticClass:"list-info-h",attrs:{cols:"30",rows:"3",placeholder:"详细地址"},domProps:{value:t.ads.detailVal},on:{input:function(e){e.target.composing||t.$set(t.ads,"detailVal",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"btn"},[a("p",{staticClass:"btn-theme",on:{click:function(e){t.saveAddress({id:t.addressId,username:t.ads.name,mobile:t.ads.mobile,prov:t.ads.provVal,city:t.ads.cityVal,area:t.ads.disVal,detailaddress:t.ads.detailVal})}}},[t._v("\n        保存")])]),t._v(" "),a("area-dialog",{attrs:{"open-city":t.openCity,"open-dis":t.openDis,provVal:t.ads.provVal,cityVal:t.ads.cityVal,zone:t.district},on:{closeDialog:t.closeDialog,provName:t.provName,cityName:t.cityName,disName:t.disName}}),t._v(" "),a("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[]};var v=a("VU/8")(d,u,!1,function(t){a("P/BU")},null,null);e.default=v.exports},"P/BU":function(t,e){},"icY+":function(t,e){}});
//# sourceMappingURL=8.623196df8b3a5060e50b.js.map