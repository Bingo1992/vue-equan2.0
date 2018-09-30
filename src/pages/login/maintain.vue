<template>
  <div class="maintain">
       <img src="../../assets/images/maintain.png">
        <h3 class="pdt">
            系统正在升级<br>
            如有不便敬请谅解
        </h3>
        <h5 class="font-gray-2">我的一直在为更好的服务努力着~</h5>
        <div class="code">
            <img class="code-img" v-if="type == 1" src="../../assets/images/code2.png"  >
            <img class="code-img" v-else src="../../assets/images/code1.png"  >
            <p>
                可识别二维码<br>
                关注<span v-if="type == 1">易购积分汇</span><span v-else>e券</span>公众号进行兑换服务
            </p>
        </div>
  </div> 
</template>

<script>
import { getUrlPath } from '/components/mixin' 
export default {
  name: "maintain",

  data() {
    return {
        url: '',
        type: 1
    };
  },
  mixins: [getUrlPath],
  created() {
    document.title = "系统升级中";
    this._initData();
  },
  methods: {
    _initData() {
        this.url = this.getUrlPath('');
        if(this.url == 'https://equan.yesm.cn/equan-wxweb/wxhtml' || 
        this.url == 'http://t1.yesm.cn/equan-wxweb/wxhtml') {
            this.type = 1;
        } else {
            this.type = 2;
        }
     
    }
  }
 
};
</script>
<style lang="scss" scoped>
 .maintain {
     text-align: center;
     padding: 1rem 2rem;
 }
 .font-gray-2 {
     padding-top: 2px;
     color: #666;
 }
 .code-img {
     width: 10rem;
     padding-top: 1.5rem;
     margin: 0 auto;
 }
</style>

