<template>
  <div>
      <ul class="form-list border-list">
          <li>
              <label>券码：</label>
              <input type="text" placeholder="请输入16位券码" v-model="ticketCode">
          </li>
      </ul>
      <p class="font-red pdl pdt md-font">提示：本次活动只面向受邀用户！</p>
      <div class="btn">
          <p class="btn-pure-theme" @click="checkRedPacket()">登记抽奖</p>
      </div>
      

      <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
    import { rpLucky } from '/api/api'
    import { setStore, getStore } from '/utils/storage'
    import alertTip from "/components/alertTip"
    export default {
      name: 'rpLucky',
      data () {
        return {
           ticketCode: '',
           showAlertTip: false,
           formLoading: false,
           showAlertTip: false,
           alertText: ""
        }
      },
      components: {
         alertTip
      }, 
      
      methods: {
         checkRedPacket() {
            if(this.ticketCode.length != 16 || this.ticketCode === ''){
                this.showHideAlert('请输入正确的券码');
            } else {
                this.showAlertTip = true; //提交中提示
                this.formLoading = true;
                this.alertText = "提交中，请稍候";
                rpLucky({params: {ticketNumValue: this.ticketCode}}).then( res => {
                    if(res.resultCode === 200) {
                        // alert(JSON.stringify(res))
                        this.$router.push({path:'/getRedPacket', 
                        query:{ticketCode: this.ticketCode, redPacket: res.eticket.redPacket}});
                    } else {
                        this.showHideAlert(res.resultMsg);
                    }
                })
            }
            
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
 
</style>
