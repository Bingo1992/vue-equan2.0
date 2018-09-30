<template>
  <div style="margin-top: 44px">
    <div class="fixed-top">
         <ul class="flex-layout nav-bar-2 border-bottom bg-show">
            <li :class="[tabIdx == 0? 'active': '']" @click="tabIdx = 0">
              <a>话费充值</a>
            </li>
            <li :class="[tabIdx == 1? 'active': '']" @click="tabIdx = 1">
              <a>流量充值</a>
            </li>
         </ul>
    </div>    
    <ul class="form-list border-list">
        <li>
            <input type="tel" maxlength="11" placeholder="请输入11位手机号码" v-model="ads.mobile" v-on:input="watchMobile" @focus="showHistory = true" @blur="showHistory = false" >
            <p v-if="isPhoneNum == 1" class="motion-shop"><i class="icon-hook"></i>中国移动</p>
            <p v-if="isPhoneNum == 2" class="motion-shop"><i class="icon-hook"></i>中国联通</p>
            <p v-if="isPhoneNum == 3" class="motion-shop"><i class="icon-hook"></i>中国电信</p>
            <!-- 充值记录 -->
            <ul v-if="showHistory == true && historyList.length != 0" class="history-mobile border-top">
                <li class="list-box" v-for="(item, i) in historyList" :key="i" @click="getMobile(item)">
                  <p class="list-info-h">{{item}} <span class="font-gray pdl">(历史记录)</span> </p>
                  <!-- <i class="icon-wrong"></i> -->
                </li>
            </ul>
        </li>
    </ul>
    <p class="font-red pdl pdb md-font">*请确认手机号信息，一经提交，无法撤回！</p>

    <!-- 话费充值 -->
    <div v-if="tabIdx == 0">
       <ul class="face-list">
            <li :class="{'active': m1.idx===i}" v-for="(item, i) in feeList" @click="getVal(item.faceVal, i)" :key="i">
              <p class="face-value">{{item.faceVal}}元</p>
            </li>
        </ul>
        
        <div class="bg-mgShow" v-if="m1.ebi != 0 || m1.money != 0">
          <div class="title-bar border-bottom">
              <h5>支付选择</h5>
            </div>
            <ul>
                <li class="list-box" v-if="m1.ebi != 0">
                  <p class="list-info-h">e币支付</p>
                  <span class="font-orange pdr">{{m1.ebi}} e币</span>
                  <label class="checkbox">
                      <input style="margin-right:0" type="checkbox" name="type" checked disabled>
                      <i class="icon-hook"></i>
                  </label>
                </li>
                <li class="list-box" v-if="m1.money != 0">
                  <p class="list-info-h">微信支付</p>
                  <span class="font-orange pdr">{{m1.money}} 元</span>
                  <label class="checkbox">
                      <input style="margin-right:0" type="radio" name="type" checked disabled>
                      <i class="icon-hook"></i>
                  </label>
                </li>
            </ul>
        </div> 
    </div>

    <!-- 流量充值 -->
    <div v-if="tabIdx == 1">
      <ul class="face-list" v-if="isPhoneNum == 0">
            <li v-for="(item, i) in feeList0" :key="i" @click="showHideAlert('请先输入正确的手机号')">
              <div class="face-value">
                  <p>{{item.flow}}</p>
              </div>  
            </li>
        </ul>
       <ul class="face-list" v-if="isPhoneNum == 1">
            <li :class="{'active': m2.idx===i}" v-for="(item, i) in feeList1" @click="getVal2(item.faceVal,item.flow, i)" :key="i">
              <div class="face-value">
                   <div>
                    <p>{{item.flow}}</p>
                    <p>售价：{{item.faceVal}}元</p>
                    <p class="font-gray md-font">月底失效</p>
                  </div>
              </div>  
            </li>
        </ul>
        <ul class="face-list" v-if="isPhoneNum == 2">
            <li :class="{'active': m2.idx===i}" v-for="(item, i) in feeList2" @click="getVal2(item.faceVal,item.flow, i)" :key="i">
              <div class="face-value">
                   <div>
                    <p>{{item.flow}}</p>
                    <p>售价：{{item.faceVal}}元</p>
                    <p class="font-gray md-font">月底失效</p>
                  </div>
              </div>  
            </li>
        </ul>

        <ul class="face-list" v-if="isPhoneNum == 3">
            <li :class="{'active': m2.idx===i}" v-for="(item, i) in feeList3" @click="getVal2(item.faceVal,item.flow, i)" :key="i">
              <div class="face-value">
                  <div>
                    <p>{{item.flow}}</p>
                    <p>售价：{{item.faceVal}}元</p>
                    <p class="font-gray md-font">月底失效</p>
                  </div>
                  
              </div>  
            </li>
        </ul>
        
        <div class="bg-mgShow"  v-if="m2.ebi != 0 || m2.money != 0">
          <div class="title-bar border-bottom">
              <h5>支付选择</h5>
            </div>
            <ul>
              <li class="list-box" v-if="m2.ebi != 0">
                <p class="list-info-h">e币支付</p>
                <span class="font-orange pdr">{{m2.ebi}} e币</span>
                <label class="checkbox">
                    <input type="checkbox" name="type" checked disabled style="margin-right:0">
                    <i class="icon-hook"></i>
                </label>
              </li>
              <li class="list-box" v-if="m2.money != 0">
                <p class="list-info-h">微信支付</p>
                <span class="font-orange pdr">{{m2.money}} 元</span>
                <label class="checkbox">
                    <input type="checkbox" name="type" checked disabled style="margin-right:0">
                    <i class="icon-hook"></i>
                </label>
              </li>
            </ul>
        </div> 
    </div>

		<div class="bg-mgShow rich-box">
			 <h5>服务说明</h5>
	      <p class="font-gray">每天23:00-01:00暂停充值。</p>
		</div>
	     
    <div class="btn">
        <p class="btn-pure-theme" @click="gotoPay()">立即支付</p>
    </div>

    <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
import alertTip from "/components/alertTip"
import {
  historyMobile,
  mobileRechargeEbi,
  mobileRechargeMix,
  integral
} from "/api/api"
import { getUrlPath } from '/components/mixin'
export default {
  name: "addAddress",
  data() {
    return {
      showAlertTip: false,
      formLoading: false,
      showAlertTip: false,
      alertText: "",

      feeList: [
        { faceVal: 10 },
        { faceVal: 30 },
        { faceVal: 50 },
        { faceVal: 100 }
      ],
      feeList0: [
        { flow: "30M" },
        { flow: "50M" },
        { flow: "100M" },
        { flow: "500M" }
      ],
      feeList1: [
        //移动
        { faceVal: 6, flow: "30M" },
        { faceVal: 21, flow: "150M" },
        { faceVal: 32, flow: "500M" }
      ],
      feeList2: [
        //联通
        { faceVal: 7, flow: "350M" },
        { faceVal: 11, flow: "100M" },
        { faceVal: 32, flow: "500M" }
      ],
      feeList3: [
        //电信
        { faceVal: 6, flow: "30M" },
        { faceVal: 8, flow: "50M" },
        { faceVal: 11, flow: "100M" },
        { faceVal: 32, flow: "500M" }
      ],
      historyList: [],
      showHistory: false,
      hasEbi: 30, //用户e币值
      tabIdx: 0,
      ads: {
        mobile: ""
      },
      m1: {
        ebi: 0,
        money: 0,
        idx: -1
      },
      m2: {
        ebi: 0,
        flow: '',
        money: 0,
        idx: -1
      }
    };
  },
  components: {
    alertTip
  },
  mixins: [getUrlPath],
  created() {
    document.title = "手机充值";
    this._initData();
  },
  computed: {
    /*
        * 判断是否是正确的手机号，以及手机的运营商
        * @param {String} num
        * 
        * 返回值:
        *      0 不是手机号码
        *      1 移动
        *      2 联通
        *      3 电信
        *      4 不确定
        */
    isPhoneNum() {
      var flag = 0;
      this.m2.ebi = 0;
      var phoneRe = /^1\d{10}$/;
      var dx = [133, 153, 177, 180, 181, 189, 199]; /*电信*/
      var lt = [130, 131, 132, 145, 155, 156, 176, 185, 186, 166]; /*联通*/
      var yd = [
        134,
        135,
        136,
        137,
        138,
        139,
        147,
        150,
        151,
        152,
        157,
        158,
        159,
        182,
        183,
        184,
        187,
        188,
        198
      ]; /*移动*/
      if (phoneRe.test(this.ads.mobile)) {
        var temp = this.ads.mobile.slice(0, 3);
        var mb7 = this.ads.mobile.slice(0, 7);
        if (this.inArray(temp, yd)) {
          // this.m2.idx = 0;
          // this.m2.ebi = this.feeList1[0].faceVal;
          return 1;
        }
        if (this.inArray(temp, lt)) {
          // this.m2.idx = 0;
          // this.m2.ebi = this.feeList2[0].faceVal;
          return 2;
        }
        if (this.inArray(temp, dx)) {
          // this.m2.idx = 0;
          // this.m2.ebi = this.feeList3[0].faceVal;
          return 3;
        } else return 4;
      }
      return flag;
    }
  },
  methods: {
    _initData() {
      historyMobile({
        //充值记录
        params: {
          orderType: 4
        }
      }).then(res => {
        this.historyList = res.obj;
        this.ads.mobile = this.historyList[0];
      });
      integral().then(res => {
        //获取用户E币值
        if (res.success) {
          this.hasEbi = res.attributes.ecoin;
        }
      });
    },
    // 实时监控mobile
    watchMobile() {
      let len = this.ads.mobile.length;
      this.historyList.forEach(item => {
        //是否显示充值记录
        let shortStr = item.substring(0, len);
        if (this.ads.mobile.match(shortStr)) {
          this.showHistory = true;
        } else {
          this.showHistory = false;
        }
      });
      // console.log(this.isPhoneNum)
      if (this.isPhoneNum == 0) {
        this.m2.ebi = 0;
        this.m2.money = 0;
        this.m2.idx = -1;
      }
    },
    //选择话费
    getVal(cost, i) {
        this.m1.idx = i;
        if (this.hasEbi >= cost) {
          //e币值大于支付金额
          this.m1.ebi = cost;
          this.m1.money = 0;
        } else {
          this.m1.ebi = this.hasEbi;
          this.m1.money = cost - this.hasEbi;
        }
    
    },
    //选择流量
    getVal2(cost, flow, i) {
      this.m2.idx = i;
      this.m2.flow = flow;
        if (this.hasEbi >= cost) {
          //e币值大于支付金额
          this.m2.ebi = cost;
          this.m2.money = 0;

        } else {
          this.m2.ebi = this.hasEbi;
          this.m2.money = cost - this.hasEbi;
        }
    },
    //选择历史号码
    getMobile(mobile) {
      this.ads.mobile = mobile;
    },
    // 保存
    gotoPay() {
      if (!this.isPhoneNum) {
        this.showHideAlert("请输入正确的手机号");
      } else if (this.m1.idx == -1 && this.tabIdx == 0) {
        this.showHideAlert("请输入选择充值面额");
      } else if (this.m2.idx == -1 && this.tabIdx == 1) {
        this.showHideAlert("请输入选择流量类型");
      } else {
        this.showAlertTip = true; //提交中提示
        this.formLoading = true;
        this.alertText = "提交中，请稍候";
        if (this.tabIdx == 0) {
          //话费充值
          if (this.m1.money == 0) {//纯Ｅ币
            mobileRechargeEbi({
              receivermobile: this.ads.mobile,
              amount: this.m1.ebi,
              cpType: 2,
              productid: -4,
              orderType: 4,
              name: "话费充值" + this.m1.ebi + "元"
            }).then(res => {
              if (res.success) {
                this.$router.push({ path: "/result", query: { recharge: 1 } });
              } else {
                this.showHideAlert(res.msg);
              }
            });
          } else {//混合支付
           let cost1 = parseInt(this.m1.ebi)+parseInt(this.m1.money);
            mobileRechargeMix({
              receivermobile: this.ads.mobile,
              amount: this.m1.ebi+this.m1.money,
              cpType: 1,
              productid: -4,
              orderType: 4,
              name: "话费充值" + cost1 + "元"
            }).then(res => {
              if (res.success) {
                   window.location.href = this.getUrlPath('/pay.html?orderNo='+res.attributes.odNo);   
              } else {
                this.showHideAlert(res.msg);
              }
            });
          }
        } else {
          //流量充值
          if (this.m2.money == 0) {//纯Ｅ币
            mobileRechargeEbi({
              receivermobile: this.ads.mobile,
              amount: this.m2.ebi,
              cpType: 2,
              productid: -6,
              orderType: 6,
              name: "流量充值" + this.m2.flow
            }).then(res => {
              if (res.success) {
                this.$router.push({ path: "/result", query: { recharge: 1 } });
              } else {
                this.showHideAlert(res.msg);
              }
            });
          } else {//混合支付
            mobileRechargeMix({
              receivermobile: this.ads.mobile,
              amount: this.m2.ebi+this.m2.money,
              cpType: 1,
              productid: -6,
              orderType: 6,
              name: "流量充值" + this.m2.flow
            }).then(res => {
              if (res.success) {
                  window.location.href = this.getUrlPath('/pay.html?orderNo='+res.attributes.odNo);   
              } else {
                this.showHideAlert(res.msg);
              }
            });
          }
        }
      }
    },

    inArray(val, arr) {
      for (var i in arr) {
        if (val == arr[i]) return true;
      }
      return false;
    },
    //显示隐藏提示框
    showHideAlert(text) {
      this.formLoading = false;
      this.showAlertTip = true;
      this.alertText = text;
      setTimeout(() => {
        this.showAlertTip = false;
      }, 2000);
    }
  }
}

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
.motion-shop {
  color: #898989;
  // font-size: 12px;
  i {
    @include circle(18px);
    background-color: $color-theme;
    color: #fff;
    margin-right: 4px;
    font-size: 18px;
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
.face-value {
  // -webkit-box-orient: vertical;
  flex-direction: column;
}
</style>
