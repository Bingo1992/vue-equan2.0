webpackJsonp([21],{HQoD:function(t,e){},lofG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("P9l9"),a={name:"ticket",data:function(){return{ticketid:0,ticketNumValue:"",ticketPcode:"",alertText:"",showAlertTip:!1,formLoading:!1}},components:{alertTip:i("BzkK").a},created:function(){document.title="积分卡充值"},methods:{confirmBtn:function(){var t=this;16!=this.ticketNumValue.length?this.showHideAlert("券码输入有误"):""==this.ticketPcode?this.showHideAlert("安全码不能为空"):(this.showAlertTip=!0,this.formLoading=!0,this.alertText="提交中，请稍候",Object(o.A)({params:{ticketid:this.ticketid,ticketNumValue:this.ticketNumValue,ticketPcode:this.ticketPcode}}).then(function(e){200==e.resultCode?t.$router.push({path:"/exchange",query:{tkId:t.ticketid,tkVal:t.ticketNumValue}}):(t.formLoading=!1,t.showHideAlert(e.resultMsg))}))},showHideAlert:function(t){var e=this;this.showAlertTip=!0,this.alertText=t,setTimeout(function(){e.showAlertTip=!1},1e3)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"border-list form-list"},[i("li",[i("label",[t._v("券码：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ticketNumValue,expression:"ticketNumValue"}],attrs:{type:"text",placeholder:"请输入16位券码"},domProps:{value:t.ticketNumValue},on:{input:function(e){e.target.composing||(t.ticketNumValue=e.target.value)}}})]),t._v(" "),i("li",[i("label",[t._v("安全码：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ticketPcode,expression:"ticketPcode"}],attrs:{type:"text",placeholder:"请输入安全码(在卡片背面右下方)"},domProps:{value:t.ticketPcode},on:{input:function(e){e.target.composing||(t.ticketPcode=e.target.value)}}})])]),t._v(" "),i("p",{staticClass:"md-font font-red pd"},[t._v("提示：请输入e券积分卡上的密码及卡片背面右下方4位数字的安全码进行充值")]),t._v(" "),i("div",{staticClass:"btn"},[i("p",{staticClass:"btn-pure-theme",on:{click:function(e){t.confirmBtn()}}},[t._v("充值")])]),t._v(" "),i("alert-tip",{directives:[{name:"show",rawName:"v-show",value:t.showAlertTip,expression:"showAlertTip"}],attrs:{formLoading:t.formLoading,alertText:t.alertText}})],1)},staticRenderFns:[]};var s=i("VU/8")(a,r,!1,function(t){i("HQoD")},"data-v-3a0451e2",null);e.default=s.exports}});
//# sourceMappingURL=21.924571bedf6759837f7f.js.map