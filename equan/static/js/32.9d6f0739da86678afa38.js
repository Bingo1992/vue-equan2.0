webpackJsonp([32],{"3zjx":function(t,s){},ZIoR:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("P9l9"),a={name:"ticketDetail",data:function(){return{ticket:{},code:"-",useTicketUrl:""}},mixins:[i("Dqno").a],mounted:function(){this._initData(),document.title="电子券详情"},methods:{_initData:function(){var t=this;Object(e.R)({params:{eticketId:this.$route.query.supplierid}}).then(function(s){t.ticket=s.resultMap,t.code=t.ticket.code,t.code.length<=16?t.code=t.code.substr(0,4)+"-"+t.code.substr(4,4)+"-"+t.code.substr(8,4)+"-"+t.code.substr(12,4):t.code=t.code.substr(0,4)+"-"+t.code.substr(4,4)+"-"+t.code.substr(8,4)+"-"+t.code.substr(12,4)+"-"+t.code.substr(16,2)})}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"children-view"},[i("div",{staticClass:"bg-mgShow"},[i("h5",{staticClass:"ticket-title"},[t._v("券信息")]),t._v(" "),i("ul",{staticClass:"order-detail border-top"},[i("li",[i("span",{staticClass:"pdr"},[t._v("产品名称：")]),t._v(" "),i("span",[t._v(t._s(t.ticket.productName))])]),t._v(" "),i("li",[i("span",{staticClass:"pdr"},[t._v("有效期：")]),t._v(" "),i("span",[t._v(t._s(t.ticket.expiredTime))])]),t._v(" "),i("li",[i("span",{staticClass:"pdr"},[t._v("状态：")]),t._v(" "),"0"==t.ticket.state?i("span",[t._v("未使用")]):"3"==t.ticket.state?i("span",[t._v("已过期")]):i("span",[t._v("已使用")])]),t._v(" "),i("li",[i("span",{staticClass:"pdr"},[t._v("验证码：")]),t._v(" "),i("span",{staticClass:"lg-font font-red"},[t._v(t._s(t.code))])])])]),t._v(" "),1279==t.ticket.eticketProductId?i("a",{staticClass:"bg-mgShow list-box",attrs:{href:"http://hecaiyun.cyzl.com/"}},[i("span",{staticClass:"list-info-h"},[t._v("查看可消费门店")]),t._v(" "),i("i",{staticClass:"icon-right"})]):i("a",{staticClass:"bg-mgShow list-box",attrs:{href:t.getESMPath("/product?id="+this.ticket.eticketProductId)}},[i("span",{staticClass:"list-info-h"},[t._v("查看可消费门店")]),t._v(" "),i("i",{staticClass:"icon-right"})]),t._v(" "),i("div",{staticClass:"bg-mgShow"},[i("h5",{staticClass:"ticket-title"},[t._v("使用说明")]),t._v(" "),i("div",{staticClass:"instructions border-top",domProps:{innerHTML:t._s(t.ticket.instructions)}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bg-mgShow"},[s("h5",{staticClass:"ticket-title"},[this._v("客服电话")]),this._v(" "),s("ul",{staticClass:"order-detail  border-top"},[s("li",[s("a",{staticClass:"font-gray",attrs:{tel:"02062340956"}},[s("i",{staticClass:"icon-tel"}),this._v("020-6234-0956")])])])])}]};var r=i("VU/8")(a,c,!1,function(t){i("3zjx")},"data-v-19aff5de",null);s.default=r.exports}});
//# sourceMappingURL=32.9d6f0739da86678afa38.js.map