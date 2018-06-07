<template>
  <div>
      <ul class="border-list form-list">
          <li>
              <span>订单号：</span>
              <span>{{ord.ordNo}}</span>
          </li>
          <li>
              <span>支付金额：</span>
              <span>{{ord.money}}</span>
          </li>
          <li>
              <span>下单时间：</span>
              <span>{{ord.oTime}}</span>
          </li>
          <li>
              <span>订单状态：</span>
              <span class="font-red">未支付</span>
          </li>
      </ul>
      <div class="btn">
          <a v-if="rePay"  class="btn-pure-theme" @click="wexinPay" >重新支付</a>
      </div>
    
       <!-- 提交遮罩 -->
      <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
    import { payment } from '/api/api'
    import alertTip from '/components/alertTip'
    import 'weixin-js-sdk'
    // import '/utils/jweixin-1.0.0.js'
    export default {
      name: 'pay',
      data () {
        return {
            alertText: "",
            showAlertTip: false,
            formLoading: false,//提交中提示
            rePay: false,//重新支付
            wx: {
              appId: '',
              timeStamp: '',
              nonceStr: '',
              packagestr: '',
              paySign: ''
            },
            ord: {//订单信息
              ordNo: '',
              money: 0,
              oTime: ''
            }

        }
      },
      components: {
        alertTip
      }, 
      mounted() {
        document.title = "订单支付";
        this._initData();
      },
      methods: {
       
        _initData() {
            let orderNo = this.$route.query.orderNo;
           
            if(orderNo && orderNo != '') {
               payment({params: {orderNo:orderNo}}).then(res => {
                  this.ord.ordNo = orderNo;
                  this.ord.money = res.money;
                  this.ord.oTime = res.oTime;
                  // alert(res.money)
                  this.wx.appId = res.appid;
                  this.wx.timeStamp = res.timeStamp;
                  this.wx.nonceStr = res.nonceStr;
                  this.wx.packagestr = res.packageValue;
                  this.wx.paySign = res.sign;
               
                  if (typeof WeixinJSBridge == "undefined"){
                    if(document.addEventListener){
                      document.addEventListener('WeixinJSBridgeReady', this.wexinPay(), false);  
                    }else if(document.attachEvent){
                      document.attachEvent('WeixinJSBridgeReady', this.wexinPay()); 
                      document.attachEvent('onWeixinJSBridgeReady', this.wexinPay());  
                    }
                  }else{
                    this.wexinPay();
                  }
              })
             } else {
                  this.showHideAlert('非法请求');
             }
          
        },
        //调用支付接口
        wexinPay() {
            WeixinJSBridge.invoke('getBrandWCPayRequest', {
                "appId" : this.wx.appId,
                "timeStamp" : this.wx.timeStamp,
                "nonceStr" : this.wx.nonceStr, 
                "package" : this.wx.packagestr,
                "signType" : "MD5", 
                "paySign" : this.wx.paySign 
            }, res => {
                if(res.err_msg == "get_brand_wcpay_request:ok") {
                      this.showAlertTip = true;//提交中提示
                      this.formLoading = true;
                      this.alertText = '提交中，请稍候'; 
                      setTimeout(() =>{
                        this.$route.push('/result');
                      },4000);
                }else if(res.err_msg == "get_brand_wcpay_request:cancel") {
                      this.showHideAlert('已取消支付');
                      // window.location.reload();
                      this.rePay = true;
                } else {
      
                      // this.showAlertTip = true;//提交中提示
                      // this.alertText = '支付失败'; 
                      // window.location.reload();
                      this.showHideAlert('支付失败');
                      this.rePay = true;
                }
            });
        },
        //显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.formLoading = false;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1000);
        }
      
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// @import "../../assets/scss/var.scss";
 
</style>
