webpackJsonp([18],{X5kB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("bOdI"),s=i.n(r),o=i("P9l9"),a=(i("VKKs"),i("BzkK")),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slideDialog"},[i("div",{class:["Procity-list","dialog-list",{show:t.showCarNum}]},[i("a",{staticClass:"return-back border-bottom",on:{click:t.closeDialog}},[i("i",{staticClass:"icon-left"}),t._v(" "),i("h4",[t._v("选择车牌号")])]),t._v(" "),i("ul",{staticClass:"dialog-start-list"},t._l(t.zone,function(e,r){return i("li",{key:e,class:{active:t.activeIdx==r},on:{click:function(i){t.getRegion(e,r)}}},[t._v(t._s(e))])})),t._v(" "),i("ul",{staticClass:"dialog-end-list"},t._l(t.letter,function(e){return i("li",{key:e,on:{click:function(i){t.getLetter(e)}}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var l=i("VU/8")({name:"carNumDialog",data:function(){return{zone:["苏","鲁","浙","川","皖","豫","粤","鄂","湘","吉","沪","渝","云","晋","蒙","贵","京","陕","冀","辽","津","桂","闽","黑","新","琼","甘","青","宁","藏"],letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],activeIdx:0,regionVal:"",letterVal:""}},props:["showCarNum","region"],mounted:function(){this._initData()},methods:{_initData:function(){var t=this;this.regionVal=this.region,this.zone.forEach(function(e,i){e==t.region&&(t.activeIdx=i)})},getRegion:function(t,e){this.activeIdx=e,this.regionVal=t},getLetter:function(t){this.letterVal=t,this.$emit("getRegionVal",this.regionVal,this.letterVal)},closeDialog:function(){this.$emit("closeDialog")}},watch:{}},n,!1,function(t){i("ulrH")},null,null).exports,c={name:"rpLucky",data:function(){var t;return t={region:"粤",letter:"A",carNumber:"",showCarNum:!1,showAlertTip:!1,formLoading:!1},s()(t,"showAlertTip",!1),s()(t,"alertText",""),t},components:{alertTip:a.a,carNum:l},methods:{getRedPacket:function(){var t=this;""==this.carNumber||5!=this.carNumber.length?this.showHideAlert("请输入正确的车牌号"):(this.showAlertTip=!0,this.formLoading=!0,this.alertText="提交中，请稍候",Object(o.j)({params:{type:2,code:this.$route.query.ticketCode,redpacket:this.$route.query.redPacket,expressNumber:this.region+this.letter+this.carNumber}}).then(function(e){200===e.resultCode?t.$router.push({path:"/result",query:{type:2}}):t.showHideAlert(e.resultMsg)}))},getRegionVal:function(t,e){this.showCarNum=!1,this.region=t,this.letter=e},closeDialog:function(){this.showCarNum=!1},showHideAlert:function(t){var e=this;this.formLoading=!1,this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},2e3)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"bg-gray center-text font-orange pd"},[t._v("恭喜您抽中"+t._s(this.$route.query.redPacket)+"元微信红包")]),t._v(" "),i("ul",{staticClass:"form-list border-list bg-mgShow"},[t._m(0),t._v(" "),i("li",[i("span",{staticClass:"region",on:{click:function(e){t.showCarNum=!0}}},[t._v(t._s(t.region+t.letter)+" "),i("i",{staticClass:"icon-down"})]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.carNumber,expression:"carNumber"}],attrs:{type:"text",placeholder:"请输入车牌号"},domProps:{value:t.carNumber},on:{input:function(e){e.target.composing||(t.carNumber=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"btn"},[i("p",{staticClass:"btn-pure-theme",on:{click:function(e){t.getRedPacket()}}},[t._v("现在领取")])]),t._v(" "),i("car-num",{attrs:{showCarNum:t.showCarNum,region:t.region},on:{getRegionVal:t.getRegionVal,closeDialog:t.closeDialog}}),t._v(" "),i("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("h5",[e("strong",[this._v("请填写信息")])])])}]};var h=i("VU/8")(c,u,!1,function(t){i("lHTt")},"data-v-25e6ce81",null);e.default=h.exports},lHTt:function(t,e){},ulrH:function(t,e){}});
//# sourceMappingURL=18.544eaf7b9fb71f2fe3b5.js.map