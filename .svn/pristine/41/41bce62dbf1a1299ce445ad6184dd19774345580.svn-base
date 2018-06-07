<template>
　 <div class="ui-dialog">
        <div class="dialog-cnt">
  
            <i v-if="!showBtn" class="icon-wrong" @click="closeConfirmDialog"></i>
            <h3 v-if="confirmTitle" class="border-bottom">{{confirmTitle}}</h3>
            <div class="dialog-content">
                <p :class="[centerText? 'center-text': 'content-text']" v-html="confirmText"></p>
            </div>
       
            <div v-if="showBtn" class="two-btn">
                 <a class="btn-theme" @click="confirmBtn">确定</a>
                 <a class="btn-cancel" @click="closeConfirmDialog">取消</a>
            </div>
        </div>
　 </div>
</template>
<script>

export default {
   name : 'uiDialog',
   data() {
　　  return {
       
　　  }
　 },
	props: ['showBtn','confirmTitle','confirmText','centerText','buyNum'],
    methods:{
        confirmBtn() {
            this.closeConfirmDialog();
            this.$emit('confirmBtn');
        },
        closeConfirmDialog(){
            this.$emit('closeConfirmDialog')
        }

    }

}
</script>

<style lang="scss" scoped>
// @import '../assets/scss/var.scss';
// .ui-dialog{
//     display: -webkit-box;
//     -webkit-box-pack: center;
//     -webkit-box-align: center;
//     background: rgba(0,0,0,.4); 
//     @extend %fixed-body;
//     z-index: 20;
// }
// .dialog-cnt {
//     position: relative;
//     width: 13rem;
//     max-width: 350px;
//     background-color: rgba(253,253,253,.95);
//     border-radius: 6px;
//     i.icon-cancel {
//         position: absolute;
//         top: 8px;
//         right: 8px;
//         color: #999;
//         border: 1px solid #999;
//         @include circle(26px);
//         z-index: 11;
//         font-size: 18px;
//     }
//     h3 {
//         @include height;
//         text-align: center;
//         position: relative;
//     } 
//     .btn-cancel,.btn-theme {
//         margin: 0 20px $gauge 20px;
//         @include height(36px);
//     }
// }
// .dialog-content{
//     padding: 16px $gauge;
//     line-height: 20px;
//     max-height: 15rem;
//     overflow-y: auto;
// }
</style>