<template>
  <div style="margin-top: 44px">
    <div class="fixed-top">
         <ul class="flex-layout nav-bar-2 border-bottom bg-show">
            <li :class="[tabIdx == 0? 'active': '']" @click="changeTabs(0)">
              <a>中石化油卡</a>
            </li>
            <li :class="[tabIdx == 1? 'active': '']" @click="changeTabs(1)">
              <a>中石油油卡</a>
            </li>
         </ul>
    </div>   

    <!-- 中石化 -->
    <div v-if="tabIdx == 0">
        <ul class="form-list border-list">
            <li>
                <input v-bind:type="oil1.inputType" placeholder="请输入卡号100011开头共19位的卡号" v-model="oil1.cardNum"  v-on:input="watchNum"  @focus="showHistory = true" @blur="showHistory = false">
                <!-- 充值记录 -->
                <ul v-if="showHistory == true && historyList1.length != 0" class="history-mobile border-top">
                   <li class="list-box" v-for="(item, i) in historyList1" :key="i" @click="getNum(item.cardNo)">
                    <p class="list-info-h">{{item.cardNo}} <span class="font-gray pdl">(历史记录)</span> </p>
                   </li>
                </ul>
            </li>
            <li>
                <input type="tel" placeholder="请再次确认卡号" v-model="oil1.cardNumConfirm" @focus="insite()" @blur="outsite()">
            </li>
            <li>
                <input type="text" placeholder="请输入持卡人姓名" v-model="oil1.name">
            </li>
        </ul>
        <p class="font-red pdl pdb pdr md-font">*请确认油卡号信息，一经提交，无法撤回！(仅支持100倍数的面值在线充值！)</p>

        <ul class="face-list">
            <li :class="{'active': oil1.idx===i}" v-for="(item, i) in feeList" @click="getVal1(item.ebi, i)" :key="i">
                <p class="face-value">{{item.faceVal}}元</p>
            </li>
            <li :class="{'active': oil1.idx===4}" @click="getVal1(oil1.otherVal, 4)">
                <p class="face-value">  <input type="number" v-model="oil1.otherVal" placeholder="其他面值" style="width:60px">元</p>
            </li>
        </ul>
    
        <div class="bg-mgShow">
            <div class="title-bar border-bottom">
            <h5>支付选择</h5>
            </div>
            <ul>
                <li class="list-box">
                <p class="list-info-h">e币支付</p>
                <span class="font-orange pdr">{{oil1.idx===4? oil1.otherVal : oil1.ebi}} e币</span>
                <label class="checkbox">
                    <input type="radio" name="type" checked>
                    <i class="icon-hook"></i>
                </label>
            </li>
            </ul>
        </div> 
    </div> 

    <!-- 中石油 -->
    <div v-if="tabIdx == 1">
        <ul class="form-list border-list">
            <li>
                <input type="text" placeholder="请输入持卡人姓名" v-model="oil2.name">
            </li>
            <li>
                <input  v-bind:type="oil2.inputType" placeholder="9开头（不含91）非车队卡、非不记名16位卡号" v-model="oil2.cardNum"  v-on:input="watchNum"  @focus="showHistory2 = true" @blur="showHistory2 = false">
                <ul v-if="showHistory2 == true && historyList2.length != 0" class="history-mobile border-top">
                   <li class="list-box" v-for="(item, i) in historyList2" :key="i" @click="getNum(item.cardNo)">
                    <p class="list-info-h">{{item.cardNo}} <span class="font-gray pdl">(历史记录)</span> </p>
                   </li>
                </ul>
            </li>
            <li>
                <input type="tel" placeholder="请再次确认卡号" v-model="oil2.cardNumConfirm" @focus="insite()" @blur="outsite()">
            </li>
            <li>
                <input type="tel" placeholder="请输入持卡人身份证" v-model="oil2.IDcard">
            </li>
        </ul>
        <p class="font-red pdl pdb pdr md-font">*充值账号以所填油卡为准，请仔细确认，一经提交，无法撤回！(仅支持100倍数的面值在线充值！)</p>

        <ul class="face-list">
            <li :class="{'active': oil2.idx===i}" v-for="(item, i) in feeList2" @click="getVal2(item.ebi, i)" :key="i">
                <p class="face-value">{{item.faceVal}}元</p>
            </li>
            <li :class="{'active': oil2.idx===4}" @click="getVal2(oil2.otherVal, 4)">
                <p class="face-value">  <input type="number" v-model="oil2.otherVal" placeholder="其他面值" style="width:60px">元</p>
            </li>
        </ul>
 
        <div class="bg-mgShow">
            <div class="title-bar border-bottom">
            <h5>支付选择</h5>
            </div>
            <ul>
                <li class="list-box">
                <p class="list-info-h">e币支付</p>
                <span class="font-orange pdr">{{oil2.idx===4? oil2.otherVal : oil2.ebi}} e币</span>
                <label class="checkbox">
                    <input type="radio" name="type" checked>
                    <i class="icon-hook"></i>
                </label>
            </li>
            </ul>
        </div> 
    </div> 
   
    <dl class="bg-mgShow rich-box">
        <dt>服务说明</dt>
        <dd class="font-gray md-font">
            <p>1.本服务支持中国石化、中国石油卡充值(<font class="font-red">不支持公司卡、副卡及车队卡充值</font>)</p>
            <p>2.加油款于工作时间72小时内充值至加油卡，充值成功平台发送通知。收到通知后，到加油站进行“圈存”即可消费。（工作时间：周一至周五9：00-18：00）</p>
            <p>3.本服务不提供发票</p>
            <p>4.充值成功后，请到加油站<font class="font-red">圈存</font>即可消费使用</p>
            <p>&nbsp;&nbsp;<font class="font-red">什么叫圈存?</font></p>
            <p>&nbsp;&nbsp;圈存就是将您在线充值的资金，写入（同步）到加油<br>
            &nbsp;&nbsp;卡的IC卡芯片上，就可以正常加油了</p>
            <p>&nbsp;&nbsp;<font class="font-red">怎么圈存？</font></p>
            <p>&nbsp;&nbsp;A. 去加油站点找工作人员办理圈存<br>
            &nbsp;&nbsp;B. 加油站内设有24小时自助圈存机，可自行操作</p>        	
            <p>5.如有疑问，请致电客服热线：<a href="tel:4000408000">400-040-8000</a></p>
            <p>6.单张中石化油卡每日提交充值次数不超过8次</p> 
        </dd>
    
    </dl>
	     
    <div class="btn">
        <p class="btn-pure-theme" @click="gotoPay()">立即支付</p>
    </div>

    <alert-tip v-show="showAlertTip" :formLoading="formLoading"  :alertText="alertText"></alert-tip>

    <!-- 中石化确认遮罩 -->
    <div  v-if="tabIdx == 0 && oil1.showDialog" class="ui-dialog">
        <div class="dialog-cnt" style="width:16rem">
            <h3 class="border-bottom">温馨提示</h3>
            <ul class="form-list border-list">
                <li>
                    <label>油卡号：</label>
                    <input type="text"  v-model="oil1.cardNum" readonly>
                </li>
                <li>
                    <label>持卡人姓名：</label>
                    <input type="text"  v-model="oil1.name" readonly>
                </li>
                <li>
                    <label>充值金额：</label>
                    <input v-if="oil1.idx===4" type="text" v-model="oil1.otherVal" readonly>
                    <input v-else type="text" v-model="oil1.ebi" readonly>
                </li>
            </ul>
            <p class="font-red pd md-font">1、一旦充值成功，无法撤销，不支持退款服务，请核实好信息。<br>
            2、单张中石化油卡每日充值金额累计不超过3900元，敬请留意；<br>
            3、单张中石化油卡每日提交订单次数不超过8次，敬请留意；</p>

            <div class="two-btn">
                <a class="btn-cancel" @click="closeConfirmDialog">取消</a>
                <a class="btn-theme" @click="confirmBtn">确定</a>
            </div>
        </div>
　  </div>

    <!-- 返回其他信息遮罩 -->
   <div class="ui-dialog" v-if="otherMsg">
        <div class="dialog-cnt" style="width:16rem">
            <h3 class="border-bottom">温馨提示</h3>
            <div v-html="otherMsgContent">
             <!-- <p class="pd md-font">当前输入的卡号是【{{msg}}】</p>
              <p class="font-red pdl pdr pdb md-font">请确认信息，一经提交，无法撤回！无法充值的提交充值申请会充值失败。</p> -->
            </div>
           
            <div class="two-btn">
                <a class="btn-cancel" @click="closeConfirmDialog">返回修改</a>
                <a class="btn-theme" @click="oil1.showDialog = true;otherMsg = false">确认充值</a>
            </div>
        </div>
　  </div>


    <!-- 中石油卡确认 -->
    <div  v-if="tabIdx == 1 && oil2.showDialog" class="ui-dialog">
        <div class="dialog-cnt" style="width:16rem">
            <h3 class="border-bottom">温馨提示</h3>
            <ul class="form-list border-list">
                <li>
                    <label>持卡人姓名：</label>
                    <input type="text"  v-model="oil2.name" readonly>
                </li>
                <li>
                    <label>油卡号：</label>
                    <input type="text"  v-model="oil2.cardNum" readonly>
                </li>
                <li>
                    <label>身份证号：</label>
                    <input type="text"  v-model="oil2.IDcard" readonly>
                </li>
                <li>
                    <label>充值金额：</label>
                    <input v-if="oil2.idx === 4" type="text"  v-model="oil2.otherVal" readonly>
                    <input v-else type="text" v-model="oil2.ebi" readonly>
                </li>
            </ul>
            <p class="font-red pdl pdr pdb md-font">*一旦充值成功，无法撤销，不支持退款服务，请核实好信息。</p>

            <div class="two-btn">
                <a class="btn-cancel" @click="closeConfirmDialog">取消</a>
                <a class="btn-theme" @click="confirmBtn">确定</a>
            </div>
        </div>
　  </div>

     <!-- 提示遮罩 -->
    <confirm-dialog v-if="showDialog" :confirm-text="confirmText"  :confirmTitle="confirmTitle" @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>
 
  </div> 
</template>

<script>
import { integral, historyOil, realName, oilRecharge } from "/api/api";
import confirmDialog from "/components/confirmDialog";
import alertTip from "/components/alertTip";
 
export default {
  name: "oilCard",
  data() {
    return {
      showDialog: false,
      confirmText: '',
      confirmTitle: '温馨提示',
      showAlertTip: false,
      formLoading: false,
      alertText: "",
      historyList1: [],
      historyList2: [],
      showHistory: false,
      showHistory2: false,
      otherMsg: false,
      msg: '',
      otherMsgContent: '',//其他信息内容
      ecoin: 0,//用户e币值
      feeList: [
        // { faceVal: 50, ebi: 50 },
        { faceVal: 100, ebi: 100 },
        { faceVal: 500, ebi: 500 },
        { faceVal: 1000, ebi: 1000 }
      ],
      feeList2: [
        { faceVal: 100, ebi: 100 },
        { faceVal: 200, ebi: 200 },
        { faceVal: 500, ebi: 500 },
        { faceVal: 1000, ebi: 1000 }
      ],
      tabIdx: 0,
      oil1: {
        cardNum: "",
        cardNumConfirm: "",
        inputType: "tel",
        ebi: 0,
        otherVal: "",
        idx: -1,
        name: "",
        showDialog: false
      },
      oil2: {
        cardNum: "",
        cardNumConfirm: "",
        name: "",
        IDcard: "",
        inputType: "tel",
        ebi: 0,
        otherVal: "",
        idx: -1,
        showDialog: false
      }
    };
  },
  components: {
    alertTip, confirmDialog
  },
  mounted() {
    this._initData();
  },
  methods: {
    _initData() {
       
      historyOil({oilCardType: 1}).then(res => {//获取中石化历史记录
      if(res.success) {
        this.historyList1 = res.obj;
        if(this.historyList1.length != 0) {
            this.oil1.cardNum = this.historyList1[0].cardNo;
            this.oil1.cardNumConfirm = this.historyList1[0].cardNo;
            this.oil1.name = this.historyList1[0].cardName;
        }
      }
        
        
      });
      // 用户E币数量
			integral().then(res => {
				if(res.attributes.ecoin) {
					this.ecoin = res.attributes.ecoin;
				}
      });
      //维护提示
      // this._showConfirmDialog('由于中石化官方充值通道维护升级，故油卡暂停充值。目前油卡充值订单可以正常提交，但需等通道维护升级结束再安排充值。请急需充值到账的客户慎重考虑，如有不便，敬请谅解！');
    },
    
    changeTabs(i) {
      this.tabIdx = i;
      if(i == 1 && this.historyList2.length == 0) {
        historyOil({oilCardType: 2}).then(res => {//获取中石油历史记录
        if(res.success) {
            this.historyList2 = res.obj;
            if(this.historyList2.length != 0) {
              this.oil2.cardNum = this.historyList2[0].cardNo;
              this.oil2.cardNumConfirm = this.historyList2[0].cardNo;
              this.oil2.name = this.historyList2[0].cardName;
              this.oil2.IDcard = this.historyList2[0].idCardNo;
            }
           
        }
            
        });
      } 
  
      // if((this.oil1.cardNum === '' && i == 0) || (this.oil2.cardNum === '' && i == 1) ) {
      //   historyOil({params: {oilCardType: i+1}}).then(res => { 
      //       if(this.tabIdx == 0) {
      //         this.historyList1 = res.obj;
      //         this.oil1.cardNum = this.historyList1[0].cardNo;
      //         this.oil1.cardNumConfirm = this.historyList1[0].cardNo;
      //         this.oil1.name = this.historyList1[0].cardName;
      //       } else {
      //         this.historyList2 = res.obj;
      //         this.oil2.cardNum = this.historyList2[0].cardNo;
      //         this.oil2.cardNumConfirm = this.historyList2[0].cardNo;
      //         this.oil2.name = this.historyList2[0].cardName;
      //         this.oil2.IDcard = this.historyList2[0].idCardNo;
      //       }
      //   });
      // }
    },
    getNum(num) {
      if(this.tabIdx == 0) {
        this.oil1.cardNum = num;
        this.oil1.cardNumConfirm = num;
      } else {
        this.oil2.cardNum = num;
        this.oil2.cardNumConfirm = num;
      }
    },
    // 监控卡号与历史卡号是否匹配
    watchNum() {
        if(this.tabIdx === 0) {
          let len1 = this.oil1.cardNum.length;
          if(this.historyList1.length != 0) {
            if(this.oil1.cardNum.match(this.historyList1[0].cardNo.substring(0, len1))) {
              this.showHistory = true;
            } else {
              this.showHistory = false;
              this.oil1.cardNumConfirm = "";
            }
          }
          
        } else {
          let len2 = this.oil2.cardNum.length;
          if(this.historyList2.length != 0) {
              if(this.oil2.cardNum.match(this.historyList2[0].cardNo.substring(0, len2))) {
                this.showHistory2 = true;
              } else {
                this.showHistory2 = false;
                this.oil2.cardNumConfirm = "";
              }
          }
         
        }
    },
    getVal1(ebi, i) {
      this.oil1.idx = i;
      this.oil1.ebi = ebi;
    },
    getVal2(ebi, i) {
      this.oil2.idx = i;
      this.oil2.ebi = ebi;
    },
    insite() {
      if (this.tabIdx == 0) {
        this.oil1.inputType = "password";
      } else {
        this.oil2.inputType = "password";
      }
    },
    outsite() {
      if (this.tabIdx == 0) {
        this.oil1.inputType = "tel";
      } else {
        this.oil2.inputType = "tel";
      }
    },
    // 保存
    gotoPay() {
      this._submitLoading();//提交中提示
      if (this.tabIdx === 0) {
     
        //中石化充值
        if (
          this.oil1.cardNum == "" ||
          this.oil1.cardNum.length != 19 ||
          this.oil1.cardNum.substring(0, 6) != "100011"
        ) {
          this.showHideAlert("请输入卡号100011开头共19位的卡号");
        } else if (this.oil1.cardNum != this.oil1.cardNumConfirm) {
          this.showHideAlert("两次卡号不一致，请再次确认");
        } else if (this.oil1.name == "") {
          this.showHideAlert("请输入姓名");
        } else if (this.oil1.idx == -1) {
          this.showHideAlert("请选择面值");
        } else if (
          this.oil1.idx == 4 &&
          (this.oil1.otherVal == "" || this.oil1.otherVal % 100 != 0)
        ) {
          this.showHideAlert("请输入100倍数的面值");
        } else if (this.oil1.otherVal > 3900) {
          this.showHideAlert(
            "单张中石化油卡每日充值金额不超过3900元，请调整金额"
          );
        } else if(this.oil1.idx == 4 && this.oil1.otherVal > this.ecoin 
          || this.oil1.idx != 4 && this.oil1.ebi > this.ecoin) {//判断用户e币值是否足够
            this.showHideAlert("您的e币账户值不足，请重新选择面值");
        } else {
          // 验证姓名
          realName({
            cardNo: this.oil1.cardNum,
            chargeType: 1,
            receivername: this.oil1.name
          }).then(res => {
            if(res.success) {
               this.showAlertTip = false;
              if(res.msg === "nomatch") {
                // this._showConfirmDialog("当前输入的持卡人信息与系统记录的持卡人信息不一致，请返回重试。");
                 this.otherMsg = true;
                 this.otherMsgContent = '<p class="pd md-font"><span class="font-red"> 当前输入的持卡人信息与系统返回信息不一致！<span>系统返回的持卡人信息为'+res.attributes.userName+'</p>\
                 <p class="pdl pdr pdb md-font">若要继续充值，请仔细检查卡号信息，一旦提交，无法退款！</p>';
              } else if(res.msg === "match") { 
                  // 弹窗确认框
                 this.oil1.showDialog = true;

              } else {
                this.msg = res.msg;
                this.otherMsg = true;
                this.otherMsgContent = '<p class="pd md-font">当前输入的卡号是【'+this.msg+'】</p>\
              <p class="font-red pdl pdr pdb md-font">请确认信息，一经提交，无法撤回！无法充值的提交充值申请会充值失败。</p>';
              }
            } else {
               this.showHideAlert(res.msg);
            }
          })
       
        }
      } else {
        //中石油充值
        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (this.oil2.name == "") {
          this.showHideAlert("请输入姓名");
        } else if (
          this.oil2.cardNum == "" ||
          this.oil2.cardNum.length != 16 ||
          this.oil2.cardNum.substring(0, 2) == "91" ||
          this.oil2.cardNum.substring(0, 1) != "9"
        ) {
          this.showHideAlert("请输入9开头(不含91)非车队卡、非不记名16位卡号");
        } else if (this.oil2.cardNum != this.oil2.cardNumConfirm) {
          this.showHideAlert("两次卡号不一致，请再次确认");
        } else if (!reg.test(this.oil2.IDcard)) {
          this.showHideAlert("请输入正确的身份证号");
        } else if (this.oil2.idx == -1) {
          this.showHideAlert("请选择面值");
        } else if (
          this.oil2.idx == 4 &&
          (this.oil2.otherVal == "" || this.oil2.otherVal % 100 != 0)
        ) {
          this.showHideAlert("请输入100倍数的面值");
        } else if(this.oil2.idx == 4 && this.oil2.otherVal > this.ecoin 
          || this.oil2.idx != 4 && this.oil2.ebi > this.ecoin) {//判断用户e币值是否足够
            this.showHideAlert("您的e币账户值不足，请重新选择面值");
        }  else {
          // // 验证姓名
          // realName({
          //   cardNo: this.oil2.cardNum,
          //   chargeType: 2,
          //   receivername: this.oil2.name
          // }).then(res => {
          //   if(res.success) {
          //     if(res.msg === "nomatch") {
          //       this.showHideAlert("姓名与卡号不匹配,请重新输入");
          //     } else if(res.msg === "match") { 
          //         // 弹窗确认框
          //         this.oil2.showDialog = true;
          //     } else {
          //        this.showHideAlert("副卡不能充值");
          //     }
          //   } else {
          //      this.showHideAlert(res.msg);
          //   }
          // })
          // 弹窗确认框
          this.oil2.showDialog = true;
        }
      }
    },
    //提交充值
    confirmBtn() {
      this.closeConfirmDialog();
      this._submitLoading();//提交中提示
      // this.showAlertTip = true; 
      // this.formLoading = true;
      // this.alertText = "提交中，请稍候";
      let cost = 0;
      if(this.tabIdx === 0) {//中石化
         
         if(this.oil1.idx === 4) {//其他面额
            cost = this.oil1.otherVal;
         } else {
           cost = this.oil1.ebi;
         }
         oilRecharge({
           name: '中石化油卡充值'+cost+'元',
           amount: cost,
           chargeType: 1,
           receivername: this.oil1.name,
           cardNo: this.oil1.cardNum,
           cpType: 2,
           idCardNo: ''
         }).then(res => {
           if(res.success) {
             this.$router.push({path:'/result', query:{recharge: 1}});
           } else {
             this.showHideAlert(res.msg);
           }
         })
      } else {//中石油
        if(this.oil2.idx === 4) {//其他面额
            cost = this.oil2.otherVal;
         } else {
           cost = this.oil2.ebi;
         }
        oilRecharge({
           name: '中石油油卡充值'+cost+'元',
           amount: cost,
           chargeType: 2,
           receivername: this.oil2.name,
           cardNo: this.oil2.cardNum,
           cpType: 2,
           idCardNo: this.oil2.IDcard
         }).then(res => {
           if(res.success) {
              this.$router.push({path:'/result', query:{recharge: 1}});
           } else {
             this.showHideAlert(res.msg);
           }
         })
      }
    },
    //显示隐藏提示框
    showHideAlert(text) {
      this.showAlertTip = true;
      this.formLoading = false;
      this.alertText = text;
      setTimeout(() => {
        this.showAlertTip = false;
      }, 2000);
    },
    _submitLoading() {
      this.showAlertTip = true; //提交中提示
      this.formLoading = true;
      this.alertText = "提交中，请稍候";
    },
     //显示遮罩
    _showConfirmDialog(text) {
      this.showDialog = true;
      this.confirmText = text;
    },
    closeConfirmDialog() {
      this.oil1.showDialog = false;
      this.oil2.showDialog = false;
      this.otherMsg = false;
      this.showDialog = false;
      this.showAlertTip = false;
    } 
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.nav-bar-2 {
  li {
    padding: 0;
  }
  .active a {
    display: block;
    padding: 10px 0;
    border-bottom: 2px solid $color-theme;
  }
}
.history-mobile {
  position: absolute;
  width: 100%;
  top: 45px;
  left: 0;
  background-color: #fff;
  z-index: 2;
  p {
    padding: 10px;
  }
  i {
    @include circle(20px);
    background-color: rgb(219, 217, 217);
    color: #fff;
    font-size: 14px;
  }
}
</style>
