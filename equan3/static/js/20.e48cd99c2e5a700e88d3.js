webpackJsonp([20],{"24hE":function(s,t){},qb4N:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Dd8w"),d=e.n(i),a=e("NYxO"),n=e("KgXo"),o=e("P9l9"),r=e("bcEp"),c={name:"chooseAddress",data:function(){return{showLoading:!0,address:[],showDialog:!1,confirmTitle:"",confirmText:"",addressID:"",isDefault:"",defaultIndex:-1}},components:{loading:n.a,confirmDialog:r.a},mounted:function(){document.title="地址管理",this.getAddress()},computed:d()({},Object(a.c)(["addressIndex","chooseAddress"])),methods:d()({},Object(a.b)(["CHOOSE_ADDRESS"]),{getAddress:function(){var s=this;Object(o.d)().then(function(t){s.address=t.resultList,s.showLoading=!1,s.address&&s.address.forEach(function(t,e){1===t.isdefault&&(s.defaultIndex=e,s.CHOOSE_ADDRESS({address:t,id:t.id,index:e}))})})},delAddress:function(){var s=this;Object(o.j)({isdefault:this.isDefault},this.addressID).then(function(t){s.address.forEach(function(t,e){t.id===s.addressID&&s.address.splice(e,1)}),s.CHOOSE_ADDRESS({address:"",id:0,index:0})})},changeDefault:function(s){var t=this;Object(o.i)({},s).then(function(){Object(o.d)().then(function(e){t.address=e.resultList,console.log(t.address),t.address&&t.address.forEach(function(e,i){e.id===s&&t.CHOOSE_ADDRESS({address:e,id:e.id,index:i})})})})},showConfirmDialog:function(s,t){this.showDialog=!0,this.confirmText="确定删除该地址吗？",this.addressID=s,this.isDefault=t,console.log(t)},closeConfirmDialog:function(){this.showDialog=!1}})},l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"chooseAddress"},[s.showLoading?e("loading"):s._e(),s._v(" "),s.showLoading?s._e():e("section",[s.address.length?e("ul",{staticClass:"address-list"},s._l(s.address,function(t,i){return e("li",{key:t.id,staticClass:"bg-mgShow"},[e("div",{staticClass:"rich-box border-bottom"},[e("span",[s._v(s._s(t.username))]),s._v(" "),e("span",[s._v(s._s(t.mobile))]),s._v(" "),e("p",[s._v(s._s(t.province)+s._s(t.city)+s._s(t.district)+s._s(t.detailaddress))])]),s._v(" "),e("div",{staticClass:"list-box"},[e("div",{staticClass:"list-info-v"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.defaultIndex,expression:"defaultIndex"}],attrs:{type:"radio"},domProps:{value:i,checked:s._q(s.defaultIndex,i)},on:{change:[function(t){s.defaultIndex=i},function(e){s.changeDefault(t.id)}]}}),s._v(" "),e("i",{staticClass:"icon-hook"}),s._v(" "),e("span",[s._v(" "+s._s(s.defaultIndex==i?"默认地址":"设为默认"))])])]),s._v(" "),e("div",{staticClass:"new-addr-btn"},[e("span",{staticClass:"font-gray pdr",on:{click:function(e){e.stopPropagation(),s.showConfirmDialog(t.id,t.isdefault)}}},[e("i",{staticClass:"icon-del"})]),s._v(" "),e("router-link",{staticClass:"font-gray pdl",attrs:{to:{path:"/addAddress",query:{addressId:t.id}}}},[e("i",{staticClass:"icon-edit"})])],1)])])})):e("div",{staticClass:"nothing"},[e("i",{staticClass:"icon-map"}),s._v(" "),e("h4",[s._v("您还未添加地址")])]),s._v(" "),e("div",{staticClass:"btn"},[e("router-link",{staticClass:"btn-theme",attrs:{to:"/addAddress"}},[s._v("+新增地址")])],1)]),s._v(" "),s.showDialog?e("confirm-dialog",{attrs:{"confirm-text":s.confirmText,showBtn:"true"},on:{closeConfirmDialog:s.closeConfirmDialog,confirmBtn:s.delAddress}}):s._e()],1)},staticRenderFns:[]};var u=e("VU/8")(c,l,!1,function(s){e("24hE")},null,null);t.default=u.exports}});
//# sourceMappingURL=20.e48cd99c2e5a700e88d3.js.map