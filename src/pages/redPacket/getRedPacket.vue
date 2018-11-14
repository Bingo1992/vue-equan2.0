<template>
  <div>
      <h1 class="bg-gray center-text font-orange pd">恭喜您抽中{{this.$route.query.redPacket}}元微信红包</h1>

      <ul class="form-list border-list bg-mgShow">
          <li>
             <h5> <strong>请填写信息</strong> </h5>
          </li>   
          <li>
              <span @click="showCarNum = true" class="region">{{region + letter}} <i class="icon-down"></i></span>
              <input type="text" placeholder="请输入车牌号" v-model="carNumber">
          </li>
      </ul>
      
      <div class="btn">
          <p class="btn-pure-theme" @click="getRedPacket()">现在领取</p>
      </div>

      <car-num :showCarNum="showCarNum" @getRegionVal="getRegionVal" @closeDialog="closeDialog" 
      :region="region"></car-num>

      <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
    import { checkLucky } from '/api/api'
    import { setStore, getStore } from '/utils/storage'
    import alertTip from "/components/alertTip"
    import carNum from "/components/carNum"
    export default {
      name: 'rpLucky',
      data () {
        return {
           region: '粤',
           letter: 'A',
           carNumber: '',
           showCarNum: false,
           showAlertTip: false,
           formLoading: false,
           showAlertTip: false,
           alertText: ""
        }
      },
      components: {
         alertTip, carNum
      },  
      methods: {

          //领取红包
         getRedPacket() {
           if(this.carNumber == '' || this.carNumber.length != 5) {
               this.showHideAlert('请输入正确的车牌号');
           } else {
                this.showAlertTip = true; //提交中提示
                this.formLoading = true;
                this.alertText = "提交中，请稍候";
                checkLucky({
                   params:{
                       type: 2,
                       code: this.$route.query.ticketCode,
                       redpacket: this.$route.query.redPacket,
                       expressNumber: this.region + this.letter + this.carNumber
                   }
                }).then(res => {
                   if(res.resultCode === 200) {
                       this.$router.push({path:'/result', query: {type: 2}});
                   } else {
                       this.showHideAlert(res.resultMsg);
                   }
                })
           }
         },
        //  获取车牌号
         getRegionVal(region, letter) {
             this.showCarNum = false;
             this.region = region;
             this.letter = letter;
 
         },
         closeDialog() {
             this.showCarNum = false;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
 .region {
     padding: 2px 8px;
     margin-right: 10px;
     border: 1px solid #e1e1e1;
     border-radius: 4px;
 }
</style>
