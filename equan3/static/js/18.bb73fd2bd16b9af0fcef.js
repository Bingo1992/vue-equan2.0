webpackJsonp([18],{"3ULe":function(t,e){},jY8t:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),a=i.n(s),n=i("P9l9"),o=i("BzkK"),r=i("NXlk"),c={data:function(){return{ebi:0,ebuy:0,eIndex:0,eList:["e币明细","e购明细"],accountList:[],showDialog:!1,showAlertTip:!1,beginTime:"",endTime:"",beginTime1:"",endTime1:"",queryType:"ecoin",isLastPage:!1,page:1,loadmore:!0,isLoading:!0,noData:!1}},components:{alertTip:o.a,loadMore:r.a},mounted:function(){document.title="我的账户",this._initData(),this.$nextTick(function(){window.scrollTo(0,1),window.scrollTo(0,0)})},methods:{_initData:function(){var t=this;Object(n.s)().then(function(e){t.ebi=e.attributes.ecoin,t.ebuy=e.attributes.ebuy}),this.$route.query.type?this.eIndex=Number(this.$route.query.type):this.eIndex=Number(0),this.getOtherList(this.eIndex)},getOtherList:function(t){this.eIndex=t,this.queryType=0==t?"ecoin":"ebuy",this.resetList(),this._getAccountList()},_getAccountList:function(t){var e=this,i={params:{beginDate:this.beginTime1,endDate:this.endTime1,pageNo:this.page,queryType:this.queryType,pageSize:15}};Object(n.a)(i).then(function(i){var s=i.resultList;e.isLastPage=i.isLastPage,200==i.resultCode?e.accountList=t?[].concat(a()(e.accountList),a()(s)):s:e.showHideAlert(i.resultMsg),e.isLoading=!1,0==e.accountList.length?e.loadmore=!1:e.isLastPage?e.noData=!0:e.noData=!1})},checkData:function(){""===this.endTime||""===this.beginTime?this.showHideAlert("日期不能为空"):this.endTime<=this.beginTime?this.showHideAlert("结束日期必须大于开始日期"):(this.beginTime1=this.beginTime,this.endTime1=this.endTime,this.showDialog=!1,this.resetList(),this._getAccountList())},resetList:function(){this.page=1,this.loadmore=!0,this.isLoading=!0,this.noData=!1,this.accountList=[]},loadMore:function(){this.isLastPage?(this.isLoading=!1,this.noData=!0):(this.page++,this.isLoading=!0,this.noData=!1,this._getAccountList(!0))},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1500)}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner-b",attrs:{id:"accountList"}},[s("div",{staticClass:"credit-top"},[s("div",{staticClass:"search",on:{click:function(e){t.showDialog=!t.showDialog}}},[s("i",{staticClass:"icon-search"}),t._v(" "),s("span",[t._v("按日期查询")])]),t._v(" "),s("div",{staticClass:"credit-num"},[s("p",[t._v("e"+t._s(0===t.eIndex?"币":"购")+" 总额")]),t._v(" "),s("h1",[t._v(t._s(0===t.eIndex?t.ebi:t.ebuy))])]),t._v(" "),s("router-link",{staticClass:"btn-recharge",attrs:{to:{path:"/ticket",query:{tckType:1}}}},[t._v("e"+t._s(0===t.eIndex?"币":"购")+"充值")])],1),t._v(" "),s("article",{staticClass:"bg-mgShow"},[s("div",{staticClass:"credit-title border-bottom"},[s("p",[t._v(t._s(""!=t.beginTime&&""!=t.endTime?t.beginTime1+"至"+t.endTime1:"7天内")+"交易情况")])]),t._v(" "),s("table",{staticClass:"credit-detail border-bottom"},[t._m(0),t._v(" "),s("tbody",t._l(t.accountList,function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.opTime))]),t._v(" "),s("td",[t._v(t._s(e.remark))]),t._v(" "),0===t.eIndex?s("td",{class:[1==e.opType?"plus":"minus"]},[t._v(t._s(1==e.opType?"+":"-")+t._s(e.opVal))]):t._e(),t._v(" "),1===t.eIndex?s("td",{class:[1==e.opType?"plus":"minus"]},[t._v(t._s(1==e.opType?"+":"-")+t._s(e.opEbuyVal))]):t._e()])}))]),t._v(" "),t.loadmore?s("load-more",{attrs:{isLoading:t.isLoading,noData:t.noData},on:{loadMore:t.loadMore}}):t._e(),t._v(" "),0!=t.accountList.length||t.isLoading?t._e():s("div",{staticClass:"nothing"},[s("img",{attrs:{src:i("pkH0")}}),t._v(" "),s("p",{staticClass:"font-gray"},[t._v("暂无数据")])])],1),t._v(" "),s("div",{staticClass:"fixed-bottom"},[s("ul",{staticClass:"flex-layout nav-bar border-top"},t._l(t.eList,function(e,i){return s("li",{key:i,class:["border-right",t.eIndex===i?"active":""],on:{click:function(e){t.getOtherList(i)}}},[s("a",[t._v(t._s(e))])])}))]),t._v(" "),s("transition",{attrs:{name:"router-slid",mode:"out-in"}},[t.showDialog?s("div",{staticClass:"time-list fixed-body"},[s("a",{staticClass:"list-box border-bottom",on:{click:function(e){t.showDialog=!t.showDialog}}},[s("i",{staticClass:"icon-left"}),t._v(" "),s("span",{staticClass:"font-gray"},[t._v("返回")])]),t._v(" "),s("ul",{staticClass:"border-list"},[s("li",[s("label",{attrs:{for:"beginTime"}},[t._v("选择开始时间")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.beginTime,expression:"beginTime"}],attrs:{type:"date",name:"beginTime",placeholder:"请输入查询时间段"},domProps:{value:t.beginTime},on:{input:function(e){e.target.composing||(t.beginTime=e.target.value)}}}),t._v(" "),s("i",{staticClass:"icon-right"})]),t._v(" "),s("li",[s("label",{attrs:{for:"endTime"}},[t._v("选择结束时间")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{type:"date",name:"endTime",placeholder:"请输入查询时间段"},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}}),t._v(" "),s("i",{staticClass:"icon-right"})])]),t._v(" "),s("div",{staticClass:"btn"},[s("p",{staticClass:"btn-theme",on:{click:t.checkData}},[t._v("查询")])])]):t._e()]),t._v(" "),t.showAlertTip?s("alert-tip",{attrs:{"alert-text":t.alertText}}):t._e(),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("交易日期")]),this._v(" "),e("th",[this._v("交易描述")]),this._v(" "),e("th",[this._v("额度变动")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed-right"},[e("a",{attrs:{href:"#accountList"}},[e("i",{staticClass:"icon-top"})])])}]};var d=i("VU/8")(c,l,!1,function(t){i("3ULe")},"data-v-589bc89a",null);e.default=d.exports}});
//# sourceMappingURL=18.bb73fd2bd16b9af0fcef.js.map