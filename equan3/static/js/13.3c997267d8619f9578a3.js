webpackJsonp([13],{"1Qft":function(s,e){},kXmu:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Dd8w"),d=t.n(i),n=t("NYxO"),o=t("KgXo"),a=t("bcEp"),r=t("P9l9"),c={name:"chooseAddress",data:function(){return{showLoading:!0,address:[],addressID:"",isDefault:"",defaultIndex:0,showDialog:!1,confirmTitle:"",confirmText:""}},components:{loading:o.a,confirmDialog:a.a},created:function(){document.title="选择地址",this._getAddress()},computed:d()({},Object(n.c)(["addressIndex"])),methods:d()({},Object(n.b)(["CHOOSE_ADDRESS"]),{_getAddress:function(){var s=this;Object(r.d)().then(function(e){s.address=e.resultList,s.showLoading=!1,s.address&&s.address.forEach(function(e,t){1===e.isdefault&&(s.defaultIndex=t)})})},confirmBtn:function(){var s=this;Object(r.j)({isdefault:this.isDefault},this.addressID).then(function(e){s.address.forEach(function(e,t){e.id===s.addressID&&s.address.splice(t,1)}),0===s.address.length?s.CHOOSE_ADDRESS({address:"",id:0,index:0}):s.address.forEach(function(e,t){t===s.addressIndex&&s.CHOOSE_ADDRESS({address:e,id:e.id,index:t})})})},chooseAddress:function(s,e,t){this.CHOOSE_ADDRESS({address:s,id:e,index:t}),this.$router.go(-1)},showConfirmDialog:function(s,e){this.showDialog=!0,this.confirmText="确定删除该地址吗？",this.addressID=s,this.isDefault=e},closeConfirmDialog:function(){this.showDialog=!1}})},l={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chooseAddress"},[s.showLoading?t("loading"):s._e(),s._v(" "),s.showLoading?s._e():t("section",[t("ul",{staticClass:"address-list border-list"},s._l(s.address,function(e,i){return t("li",{key:e.id,staticClass:"list-box",on:{click:function(t){s.chooseAddress(e,e.id,i)}}},[t("div",{staticClass:"checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.addressIndex,expression:"addressIndex"}],attrs:{id:i,type:"radio",name:"address"},domProps:{value:i,checked:s._q(s.addressIndex,i)},on:{change:function(e){s.addressIndex=i}}}),s._v(" "),t("i",{staticClass:"icon-hook"})]),s._v(" "),t("div",{staticClass:"list-info-v"},[t("div",{staticClass:"list-info"},[t("span",{staticClass:"pdr"},[s._v(s._s(e.username))]),s._v(" "),t("span",[s._v(s._s(e.mobile))]),s._v(" "),t("p",[s._v(s._s(e.province)+s._s(e.city)+s._s(e.district)+s._s(e.detailaddress))])])]),s._v(" "),t("i",{staticClass:"icon-del",on:{click:function(t){t.stopPropagation(),s.showConfirmDialog(e.id,e.isdefault)}}})])})),s._v(" "),0===s.address.length?t("div",{staticClass:"nothing"},[t("i",{staticClass:"icon-map"}),s._v(" "),t("h4",[s._v("您还未添加地址")])]):s._e(),s._v(" "),t("div",{staticClass:"btn"},[t("router-link",{staticClass:"btn-theme",attrs:{to:"/addAddress"}},[s._v("+新增地址")])],1)]),s._v(" "),s.showDialog?t("confirm-dialog",{attrs:{"confirm-text":s.confirmText,showBtn:"true",centerText:"true"},on:{closeConfirmDialog:s.closeConfirmDialog,confirmBtn:s.confirmBtn}}):s._e()],1)},staticRenderFns:[]};var f=t("VU/8")(c,l,!1,function(s){t("1Qft")},null,null);e.default=f.exports}});
//# sourceMappingURL=13.3c997267d8619f9578a3.js.map