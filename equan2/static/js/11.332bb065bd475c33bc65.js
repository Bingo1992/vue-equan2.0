webpackJsonp([11],{"3uSt":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),a=e.n(i),o=e("Dd8w"),r=e.n(o),n=e("NYxO"),l=e("P9l9"),c=e("mzkE"),h=e("u+Fy"),d={name:"sortTabs",data:function(){return{sortList3:[],sortList2:[{name:"价格从高到低",value:1},{name:"价格从低到高",value:2}],sortPriceIndex:null,odByName:"价格",odByVal:"",lowPrice:"",highPrice:"",showAlertTip:!1,levelOneId:"",levelOneIdx:0,isArea:!1}},props:["sortIndex"],created:function(){this._initData()},components:{alertTip:e("BzkK").a},computed:r()({},Object(n.c)(["sortProIndex","sortList","oneId"])),methods:r()({},Object(n.b)(["CHOOSE_PROSORT","INIT_SORTLIST","CHOOSE_LEVERONEID","CHOOSE_LEVERTWOID"]),{_initData:function(){this.$route.query.areaId?(this.CHOOSE_PROSORT({sortPro:"全部分类",index:0}),this.isArea=!0):0==this.sortList.length?this._getSortList():this._getSecondSort()},closeDialog:function(){this.$emit("closeDialog")},getProSort1:function(t,s,e){var i=this;this.CHOOSE_PROSORT({sortPro:t,index:e}),this.CHOOSE_LEVERONEID(s),this.levelOneId=s,this.levelOneIdx=e,this.sortList3=[];var a=this.sortList[e].subGoodsClassifyList;a&&a.forEach(function(t,e){t.parentId==s&&i.sortList3.push(t)})},getProSort2:function(t,s,e){this.CHOOSE_PROSORT({sortPro:t,index:this.levelOneIdx?this.levelOneIdx:this.sortProIndex}),""==this.oneId&&this.CHOOSE_LEVERONEID(this.$route.query.levelOneCid),this.CHOOSE_LEVERTWOID(s),this.$emit("sortType",this.levelOneId,s),this.$emit("closeDialog")},getPriceSort:function(t,s,e){this.sortPriceIndex=e,this.odByName=t,this.odByVal=s},confirmBtn:function(){Number(this.lowPrice)>Number(this.highPrice)?this.showHideAlert("最低价不能高于最高价"):(this.$emit("sortPrice",this.odByName,this.odByVal,this.lowPrice,this.highPrice),this.$emit("closeDialog"))},resetBtn:function(){this.odByName="价格",this.lowPrice="",this.highPrice="",this.odByVal="",this.sortPriceIndex=null,this.$emit("sortPrice",this.odByName,this.odByVal,this.lowPrice,this.highPrice),this.$emit("closeDialog")},showHideAlert:function(t){var s=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){s.showAlertTip=!1},1500)},_getSortList:function(){var t=this;Object(l.N)().then(function(s){t.INIT_SORTLIST(s.obj),t._getSecondSort()})},_getSecondSort:function(){var t=this;this.sortProIndex?this.sortList.forEach(function(s,e){t.sortProIndex==e&&(t.sortList3=t.sortList[e].subGoodsClassifyList)}):this.sortList3=this.sortList[0].subGoodsClassifyList}})},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[0==t.sortIndex?e("div",{staticClass:"sort-box border-top",staticStyle:{height:"15rem"}},[t.isArea?e("ul",{staticClass:"box-cnt"},[e("li",{on:{click:function(s){t.getProSort2("全部分类","",0)}}},[e("span",[t._v("全部分类")])])]):t._e(),t._v(" "),t.isArea?t._e():e("ul",{staticClass:"box-cnt1"},t._l(t.sortList,function(s,i){return e("li",{key:i,class:{active:t.sortProIndex==i},on:{click:function(e){t.getProSort1(s.classifyName,s.id,i)}}},[e("span",[t._v(t._s(s.classifyName))])])})),t._v(" "),t.isArea?t._e():e("ul",{staticClass:"box-cnt2"},t._l(t.sortList3,function(s,i){return e("li",{key:i,on:{click:function(e){t.getProSort2(s.classifyName,s.id,i)}}},[e("span",[t._v(t._s(s.classifyName))])])}))]):t._e(),t._v(" "),1==t.sortIndex?e("div",{staticClass:"sort-box"},[e("div",{staticClass:"box-cnt"},[e("div",[e("span",[t._v("价格区间")]),t._v(" "),e("div",{staticClass:"price-zone"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lowPrice,expression:"lowPrice"}],staticClass:"low",attrs:{type:"number",placeholder:"最低价格"},domProps:{value:t.lowPrice},on:{input:function(s){s.target.composing||(t.lowPrice=s.target.value)}}}),t._v(" "),e("span",[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.highPrice,expression:"highPrice"}],staticClass:"high",attrs:{type:"number",placeholder:"最高价格"},domProps:{value:t.highPrice},on:{input:function(s){s.target.composing||(t.highPrice=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"sort-price"},[e("span",[t._v("价格排序")]),t._v(" "),e("ul",t._l(t.sortList2,function(s,i){return e("li",{key:i,class:{active:t.sortPriceIndex==i},on:{click:function(e){t.getPriceSort(s.name,s.value,i)}}},[e("span",[t._v(t._s(s.name))])])}))]),t._v(" "),e("div",{staticClass:"flex-layout price-btn"},[e("p",{staticClass:"btn-cancel",on:{click:t.resetBtn}},[t._v("重置")]),t._v(" "),e("p",{staticClass:"btn-sort-confirm btn-theme",on:{click:t.confirmBtn}},[t._v("确定")])])])]):t._e(),t._v(" "),e("div",{staticClass:"ui-dialog",on:{click:function(s){t.closeDialog()}}}),t._v(" "),t.showAlertTip?e("alert-tip",{attrs:{alertText:t.alertText}}):t._e()],1)},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("nv64")},"data-v-42681fcd",null).exports,m=e("KgXo"),v=e("NXlk"),_=e("hXbj"),f={name:"productList",data:function(){return{showLoading:!0,sortList:["全部分类","价格"],timer:null,count:0,proList:[],searchVal:"",params:{areaId:"",levelOneCid:"",levelTwoCid:"",odBy:"",pName:"",vFrom:"",vTo:"",page:1},odByName:"价格",sortIndex:null,isLastPage:!1,loadmore:!0,isLoading:!0,noData:!1}},components:{product:h.a,loading:m.a,sortTabs:p,loadMore:v.a,cartNum:_.a,FooterNav:c.a},computed:r()({},Object(n.c)(["sortPro"])),created:function(){this._initData()},methods:r()({},Object(n.b)(["CHOOSE_PROSORT"]),{_initData:function(){this.$route.query.areaId&&(this.params.areaId=this.$route.query.areaId),this.$route.query.levelOneCid&&(this.params.levelOneCid=this.$route.query.levelOneCid,this.params.levelTwoCid=this.$route.query.levelTwoCid),this.titleChange(),this._getProList()},_getProList:function(t){var s=this,e={params:{levelOneCid:this.params.levelOneCid,levelTwoCid:this.params.levelTwoCid,odBy:this.params.odBy,pName:this.params.pName,vFrom:this.params.vFrom,vTo:this.params.vTo,pageNo:this.params.page}};this.params.areaId&&(e.params.areaId=this.params.areaId),Object(l.F)(e).then(function(e){var i=e.attributes.resultList;s.isLastPage=e.attributes.isLastPage,s.proList=t?[].concat(a()(s.proList),a()(i)):i,s.isLoading=!1,0==s.proList.length?s.loadmore=!1:s.isLastPage?s.noData=!0:s.noData=!1})},loadMore:function(){this.isLastPage?(this.isLoading=!1,this.noData=!0):(this.params.page++,this.isLoading=!0,this.noData=!1,this._getProList(!0))},chooseSort:function(t){this.sortIndex!=t?this.sortIndex=t:this.sortIndex=null},sortPrice:function(t,s,e,i){this.odByName=t,this.params.odBy=s,this.params.vFrom=e,this.params.vTo=i,this.params.page=1,this.loadmore=!0,this.isLoading=!0,this.noData=!1,this.proList=[],this._getProList()},sortType:function(t,s){this.params.levelOneCid=t,this.params.levelTwoCid=s,this.params.pName="",this.searchVal="",this.resetSort()},searchTarget:function(t){this.params.pName=t,this.resetSort(),this.$refs.searchInput.blur()},resetSort:function(){this.odByName="价格",this.params.odBy="",this.params.vFrom="",this.params.vTo="",this.params.page=1,this.proList=[],this.loadmore=!0,this.isLoading=!0,this.noData=!1,this._getProList()},closeDialog:function(){this.sortIndex=null},titleChange:function(){this.$route.query.areaId&&!this.$route.query.productid?(this.params.areaId=this.$route.query.areaId,Object(l.f)({params:{areaId:this.params.areaId}}).then(function(t){document.title=t.obj.name})):document.title="商品列表"}}),watch:{$route:"titleChange"}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"banner-bt-2 banner-bt-22"},[i("div",{attrs:{id:"proList"}},[i("div",{staticClass:"fixed-top pdt pdl pdr bg-show"},[i("form",{staticClass:"search-bar list-info-h",attrs:{action:"javascript:return true;"}},[i("div",{staticClass:"list-box"},[i("i",{staticClass:"icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],ref:"searchInput",staticClass:"list-info-h",attrs:{type:"search",placeholder:"请输入商品名称、品牌等"},domProps:{value:t.searchVal},on:{keyup:function(s){if(!("button"in s)&&13!==s.keyCode)return null;t.searchTarget(t.searchVal)},input:function(s){s.target.composing||(t.searchVal=s.target.value)}}}),t._v(" "),i("input",{staticClass:"search_submit",staticStyle:{display:"none"},attrs:{type:"submit",name:"submit"},on:{click:function(s){s.preventDefault(),t.searchTarget(t.searchVal)}}})])]),t._v(" "),i("ul",{staticClass:"sort-tabs flex-layout"},t._l(t.sortList,function(s,e){return i("li",{key:e,on:{click:function(s){t.chooseSort(e)}}},[i("p",[i("span",[t._v(t._s(0==e?t.sortPro:t.odByName))]),t._v(" "),i("i",{class:[t.sortIndex==e?"icon-arrow-up font-theme":"icon-arrow-down"]})])])}))]),t._v(" "),i("sort-tabs",{directives:[{name:"show",rawName:"v-show",value:null!=t.sortIndex,expression:"sortIndex != null"}],attrs:{sortIndex:t.sortIndex},on:{closeDialog:t.closeDialog,sortPrice:t.sortPrice,sortType:t.sortType}}),t._v(" "),t.proList.length?i("product",{attrs:{proList:t.proList}}):t._e(),t._v(" "),t.loadmore?i("load-more",{attrs:{isLoading:t.isLoading,noData:t.noData},on:{loadMore:t.loadMore}}):t._e(),t._v(" "),0!=t.proList.length||t.isLoading?t._e():i("div",{staticClass:"nothing"},[i("img",{attrs:{src:e("pkH0")}}),t._v(" "),i("p",{staticClass:"font-gray"},[t._v("暂时找不到该商品，我们会尽量引进更多商品")])]),t._v(" "),i("transition",{attrs:{name:"router-slid",mode:"out-in"}},[i("router-view")],1)],1),t._v(" "),i("div",{staticClass:"fixed-right"},[i("router-link",{attrs:{to:"/cart"}},[i("i",{staticClass:"icon-cart"}),t._v(" "),i("cart-num",{staticClass:"semiCirclePoint"})],1),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"#proList"}},[s("i",{staticClass:"icon-top"})])}]};var P=e("VU/8")(f,g,!1,function(t){e("w5VK")},"data-v-49e7a2d9",null);s.default=P.exports},nv64:function(t,s){},w5VK:function(t,s){}});
//# sourceMappingURL=11.332bb065bd475c33bc65.js.map