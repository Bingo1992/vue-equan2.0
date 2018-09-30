<template>
  <div>
    <div class="redpacket-top">
        <img src="../../assets/images/coin.png" alt="">
        <ul class="flex-layout">
          <li>
              <a>
                  <p>当前e币总额</p>
                  <h1>{{ebiTotal}}</h1>
              </a>
             
              <!-- <h1>534529</h1> -->
          </li>
          <li>
              <a>
                <p>即将到期的e币</p>
                <h1>{{currentEbi}}</h1>
              </a>
             
          </li>
        </ul>
      
    </div>

    <!-- <ul class="flex-layout redPacket-box">
        <li>
          <a>
            <p class="font-gray">即将到期的e币</p>
            <h3>{{currentEbi}}</h3>
          </a>
        </li>
    </ul> -->

    <!-- <div style="margin-top: -40px"> -->
        <h5 class="center-text pd border-bottom">红包兑换</h5>

        <div class="list-box redPacket-exchange">
          <div class="list-info-v">
              <p class="list-info-h">
                e币 <input class="inputText" v-model="ebiInput" type="number" placeholder="请输入e币数量">
              </p>
              <!-- <p class="list-info-h">
                e购 <input class="inputText" v-model="ebuyInput" type="number" placeholder="请输入e购数量" 
               >
              </p> -->
          </div>
          <i class="icon-18"></i>
          <div class="list-info-h">
              <p>红包 <span class="font-orange redpacket">{{getRedPacket}}</span>元</p>
          </div>
        </div>
        <div class="btn">
          <!-- <p :class="['btn-pure-theme', getRedPacket <= 0?'disbtn':'']" @click="gotoExchange()">确定支付</p> -->
           <p class="btn-pure-theme" @click="gotoExchange()">确定支付</p>
        </div>
   
        <div class="rich-box font-gray">
          <h4>温馨提示</h4>
          <p>兑换微信红包需先实名认证,认证方式：【微信】-【我】-【钱包】-【…】-【支付管理】-【实名认证】。</p>
        </div>
    <!-- </div> -->

     <banner :listImg="adsImg" myClass="-c2"></banner>
 
      <!-- 提交遮罩 --> 
    <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
import {banner,checkIntegral, exchangeRedpack, redPacketRatio} from '/api/api'
import alertTip from "/components/alertTip"
import Banner from '/components/swiperDefault'
export default {
  name: "redPacket",
  data() {
    return {
       showAlertTip: false,
       formLoading: false,
       alertText: "",//提交中提示
       ebiTotal: 0,//ebi总额
       currentEbi: 0,//当前快过期e币
      //  currentEbuy: 0,//当前快过期e购
       ebiInput: '',
      //  ebuyInput: '',
       redpacket: 0,
       ratio: 0, //比例
       adsImg: []
    };
  },
  components: {
    alertTip, Banner
  },
  created() {
      document.title = "红包充值";
      this._initData();
  },
  computed: {
    getRedPacket() {
      if(this.ebiInput != '') {
          this.redpacket = (this.ebiInput * this.ratio).toFixed(2);
          // alert(this.redpacket)
          // this.redpacket = (this.ebiInput * 0.93).toFixed(2);
      } else {
          this.redpacket = 0;
      }
      return Number(this.redpacket);
    }
  },
  methods: {
    _initData() {
      //查看e币
      checkIntegral().then(res => {
        this.ebiTotal = res.attributes.ecoin;
        this.currentEbi = res.attributes.oldecoin;
      });
      //获取比例
      redPacketRatio().then(res => {
        this.ratio = res.attributes.ratio;
        // alert(this.ratio);
      })
      // 轮播图2
      banner({params:{location: "eticket_recharge"}}).then(res => {
          this.adsImg = res.obj;
      }).then(() => {
          var swiperc1 = new Swiper('.swiper-container-c2', {
              slidesPerView: 'auto',
              centeredSlides: true,
              paginationClickable: true,
              spaceBetween: 16,
              loop: true,
              autoplay: 5000,
              autoplayDisableOnInteraction: false
          });
      })
    },
    //点击兑换按钮
    gotoExchange() {
      if(this.ebiInput == '') {
        this.showHideAlert('请输入e币的数量');
      } else if(this.ebiInput > this.ebiTotal) {
        this.showHideAlert('可兑换的e币不能大于总额');
      } else if(this.isInteger(Number(this.ebiInput)) == false) {
        this.showHideAlert('e币数量必须是整数');
      } else {
        this.showAlertTip = true;//提交中提示
        this.formLoading = true;
        this.alertText = '提交中，请稍候';
        exchangeRedpack({
           orderType: 13,
           amount: Number(this.ebiInput),
           amountcp: Number(this.redpacket)
        }).then(res => {
        
            if(res.resultCode == 200) {
              this.$router.push({path:'/result', query:{type: 2}});
            } else {
              this.showHideAlert(res.resultMsg);
            }
        }) 
      }
    },
    isInteger(obj) {
       return typeof obj === 'number' && obj%1 === 0;      //是整数，则返回true，否则返回false
    },
     //显示隐藏提示框
    showHideAlert(text) { 
        this.showAlertTip = true;
        this.formLoading = false;
        this.alertText = text;
        setTimeout(() => {
            this.showAlertTip = false;
        }, 2000);
    }
      
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
 .redpacket-top {
    background: -webkit-linear-gradient(left, #36e0d7, #47e1b4);
    
    text-align: center;
    padding: 30px 0;
    position: relative;
    img {
      position: absolute;
      bottom: -1rem;
      left: -2.5rem;
      width: 9rem;
      opacity: 0.6;
    }
    h1 {
      font-size: 46px;
      line-height: 50px;
      color: #fff;
    }
    p {
      font-size: 14px;
      color: #fff;
    }
 }
 .redPacket-box {
   position: relative;
   top: -50px;
   margin: 0 20px;
   padding: 16px 0;
   border-radius: 4px;
   background-color: #fff;
   box-shadow: 1px 5px 2px #edf6f6;
 }
 .redPacket-exchange {
   p {
     color: #333;
   } 
   .list-info-h {
    justify-content: center;
    -webkit-justify-content: center;
    margin: 10px 0;
   }
 }
 .inputText {
    background-color: #f8f8f8;
    padding: 6px 10px;
    width: 5rem;
    margin-left: 6px;
    margin-right: 20px;
 }
 .icon-18 {
   font-size: 30px;
   color: #c1c1c1;
 }
 .redpacket {
   font-size: 28px;
 }
</style>
