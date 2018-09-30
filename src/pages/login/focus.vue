<template>
  <div class="focus">
      <div>
            <!-- <img :src="domain1 + '/equan-wxweb/eshop/user/subscribeQRCode'"> -->
          <!-- <img src="http://t2.yesm.cn/equan-wxweb/eshop/user/subscribeQRCode"> -->
           <img v-if="domain1 === 'https://equan.yesm.cn'" 
           src="../../assets/images/code1.png">
           <img v-else-if="domain1 === 'https://equan2.yesm.cn'" 
           src="../../assets/images/code2.png">
           <img v-else src="../../assets/images/code3.png">
           <p class="font-gray">长按识别二维码</p> 
           <h4>关注公众号后才可访问页面</h4>
            
      </div>
    
  </div> 
</template>

<script>
import {domainUrl} from '/utils/env'

export default {
  name: "focus",
  data() {
    return {
      domain1: domainUrl
    };
  },
  created() {
    document.title = "关注公众号";
  }
};
</script>
<style lang="scss" scoped>
.focus {
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
    img {
        width: 8rem;
        margin: 0 auto;
    }
}
</style>

