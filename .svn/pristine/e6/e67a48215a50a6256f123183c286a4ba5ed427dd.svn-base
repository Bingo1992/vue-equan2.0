<template>
　 <div class="tip-dialog">
        <div class="tip-content">
            <p v-if="formLoading" class="loading"></p>
            <p>{{alertText}}</p>
        </div>
　 </div>
</template>
<script>

export default {
   name : 'tipDialog',
   data() {
　　  return {
        showAlertTip: true
　　  }
　 },
	props: ['alertText','formLoading']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/var.scss';
.tip-dialog{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    @extend %fixed-body;
    z-index: 20;
}
.tip-content{
    padding:  18px 16px;
    line-height: 20px;
    max-width: 10rem;
    background-color: rgba(0,0,0,.65);
    border-radius: 4px;
    color: #fff;
    // font-size: 12px;
}
.loading {
      display: block;
      height: 30px;
      width: 30px;
      border-radius: 100%;
      margin: 6px auto;
      border: 3px solid #fff;
      border-bottom-color: transparent;
      vertical-align: middle;
      -webkit-animation: rotate 0.75s linear infinite;
      animation: rotate 0.75s linear infinite;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>