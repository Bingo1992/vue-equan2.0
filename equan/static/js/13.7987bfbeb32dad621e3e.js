webpackJsonp([13],{EgHO:function(t,e){},oQUZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("P9l9"),a=s("Dqno"),r={name:"pay",data:function(){return{proList2:[],type:0,ebi:0,ebuy:0,redPacket:0}},components:{product:s("u+Fy").a},mounted:function(){this._initData()},mixins:[a.c],methods:{_initData:function(){var t=this;this.type=Number(this.$route.query.type),this.ebi=this.$route.query.ecoin,this.ebuy=this.$route.query.ebuy,this.redPacket=this.$route.query.redPacket,this.type?document.title="兑换结果":document.title="支付结果",Object(i.u)({params:{areaId:2,pageSize:30}}).then(function(e){t.proList2=e.attributes.resultList})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"result",staticStyle:{"padding-bottom":"1rem"}},[s("i",{staticClass:"icon-hook bg-success"}),t._v(" "),0!=this.type?s("h4",[t._v("兑换成功")]):s("h4",[t._v("支付成功")])]),t._v(" "),s("div",{staticClass:"rich-box font-gray"},[1==t.type?s("p",{staticClass:"center-text pdb"},[t._v("本次共增加"+t._s(t.ebi)+"e币")]):t._e(),t._v(" "),2==t.type?s("p",[t._v('1.红包将在48小时内发送,如出现"待发送"状态请耐心等待;'),s("br"),t._v("2.由于微信系统限制，建议兑换操作不能过于频密。")]):t._e(),t._v(" "),8==t.type?s("p",[t._v("尊敬的VIP客户：车主权益将在7天内发放至您的账户，请注意查收，谢谢！")]):t._e(),t._v(" "),10==t.type?s("p",{staticClass:"center-text pdb"},[t._v("本次共增加"+t._s(t.ebuy)+"e购+"+t._s(t.ebi)+"e币")]):t._e(),t._v(" "),12==t.type?s("p",{staticClass:"center-text pdb"},[t._v("本次共增加"+t._s(t.ebuy)+"e购")]):t._e(),t._v(" "),11==t.type?s("p",[t._v("1.本次共增加"+t._s(t.ebuy)+"e购；"),s("br"),t._v('\n      2.红包将在48小时内发送,如出现"待发送"状态请耐心等待；'),s("br"),t._v("3.由于微信系统限制，建议兑换操作不能过于频密。")]):t._e()]),t._v(" "),s("div",{staticClass:"two-btn"},[s("router-link",{staticClass:"btn-pure-theme",attrs:{to:"/home"}},[t._v("e币商城")]),t._v(" "),s("a",{staticClass:"btn-gray",attrs:{href:t.getUrlPath("/convert_data.html")}},[t._v("查看订单")])],1),t._v(" "),s("router-link",{staticClass:"title-list",staticStyle:{"margin-top":"1.5rem"},attrs:{to:{path:"/proList",query:{areaId:2}}}},[s("h4",[t._v("人气推荐")]),t._v(" "),s("i",{staticClass:"icon-circle"})]),t._v(" "),s("product",{attrs:{proList:t.proList2}})],1)},staticRenderFns:[]};var c=s("VU/8")(r,n,!1,function(t){s("EgHO")},"data-v-91aee066",null);e.default=c.exports}});
//# sourceMappingURL=13.7987bfbeb32dad621e3e.js.map