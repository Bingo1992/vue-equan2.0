webpackJsonp([31],{vTG8:function(t,s){},zFyg:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),r=i("KgXo"),e=i("NYxO"),a=i("P9l9"),c=i("BzkK"),l=i("mzkE"),d={name:"sort",data:function(){return{showLoading:!0,sortList2:[],bannerUrl:"",bannerImg:"",levelOneIdx:0}},mixins:[i("Dqno").b],created:function(){document.title="全部分类",this._initData()},components:{FooterNav:l.a,alertTip:c.a,loading:r.a},computed:n()({},Object(e.c)(["sortProIndex","sortList"])),methods:n()({},Object(e.b)(["CHOOSE_PROSORT","INIT_SORTLIST","CHOOSE_LEVERONEID","CHOOSE_LEVERTWOID"]),{_initData:function(){0==this.sortList.length?this._getSortList():(window.scrollTo(0,1),window.scrollTo(0,0),this._getSecondSort())},sortPro:function(t,s,i){var o=this;this.levelOneIdx=i,this.bannerUrl=this.sortList[i].classifyImgHref,this.bannerImg=this.sortList[i].classifyImgSrc,this.sortList2=[],this.CHOOSE_PROSORT({sortPro:t,index:this.levelOneIdx});var n=this.sortList[i].subGoodsClassifyList;n&&n.forEach(function(t,i){t.parentId==s&&o.sortList2.push(t)})},getProList:function(t,s,i){this.CHOOSE_PROSORT({sortPro:t,index:this.levelOneIdx}),this.CHOOSE_LEVERONEID(s),this.CHOOSE_LEVERTWOID(i),this.$router.push({path:"/proList",query:{levelOneCid:s,levelTwoCid:i}})},_getSortList:function(){var t=this;Object(a.Q)().then(function(s){t.INIT_SORTLIST(s.obj),t.$nextTick(function(){window.scrollTo(0,1),window.scrollTo(0,0)}),t._getSecondSort()})},_getSecondSort:function(){this.showLoading=!1,this.CHOOSE_PROSORT({sortPro:this.sortList[0].classifyName,index:0}),this.bannerUrl=this.sortList[0].classifyImgHref,this.bannerImg=this.sortList[0].classifyImgSrc,this.sortList2=this.sortList[0].subGoodsClassifyList}})},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"banner-b"},[t.showLoading?i("loading"):i("div",[i("div",{staticClass:"sort-box"},[i("div",{staticClass:"box-cnt"},[i("ul",{staticClass:"sortNav-fl"},t._l(t.sortList,function(s,o){return i("li",{key:o,class:{active:t.sortProIndex==o},on:{click:function(i){t.sortPro(s.classifyName,s.id,o)}}},[i("span",[t._v(t._s(s.classifyName))])])})),t._v(" "),i("ul",{staticClass:"sortNav-fr"},[i("li",[i("a",{attrs:{href:t.bannerUrl}},[i("img",{attrs:{src:t.getImgPath(t.bannerImg)}})]),t._v(" "),i("ul",{staticClass:"second-sortNav"},t._l(t.sortList2,function(s,o){return i("li",{key:o,on:{click:function(i){t.getProList(s.classifyName,s.parentId,s.id)}}},[i("img",{attrs:{src:t.getImgPath(s.classifyImgSrc)}}),t._v(" "),i("p",[t._v(t._s(s.classifyName))])])}))])])])])]),t._v(" "),i("div",{staticClass:"fixed-bottom bg-show"},[i("footer-nav")],1)],1)},staticRenderFns:[]};var f=i("VU/8")(d,h,!1,function(t){i("vTG8")},"data-v-14c0c5b9",null);s.default=f.exports}});
//# sourceMappingURL=31.fdf31c613ffcb5527963.js.map