<template>
  <div :class="['swiper-container','swiper-container'+myClass]">
        <div class="swiper-wrapper">
            <a :href="item.url" class="swiper-slide" v-for="(item,i) in listImg" 
            :style="{ backgroundImage: 'url(' + getImgPath(item.pic) + ')' }" :key="i"></a>
        </div>
        <div v-if="hasPoint" :class="['swiper-pagination', 'swiper-pagination-white', 'swiper-pagination' + myClass]"></div>
    </div>
</template>


<script>

import Swiper from 'swiper'
import { getImgPath } from './mixin'
import '/assets/css/swiper.min.css' 

export default {
    name: 'swiper-container',
    data () {
      return {
      }
    },
    props: ['listImg','myClass','hasPoint'],
    mixins: [getImgPath],
    mounted() {
        // var swiper0 = new Swiper('.swiper-container0', {
        //     pagination: '.swiper-pagination0',
        //     paginationClickable: true,
        //     loop: true,
        //     // speed: 600,
        //     autoplay:3000,
        //     // autoplayDisableOnInteraction:false
        // });
        // var swiper1 = new Swiper('.swiper-container1', {
        //     pagination: '.swiper-pagination1',
        //     paginationClickable: true,
        //     loop: true,
        //     // speed: 600,
        //     autoplay: 4000,
        //     // autoplayDisableOnInteraction:false
        // });

        // for(var i = 0; i < this.len; i++) {
        //     new Swiper('.swiper-container'+i, {
        //         pagination: '.swiper-pagination'+i,
        //         paginationClickable: true,
        //         loop: true,
        //         // speed: 600,
        //         autoplay: 4000,
        //         autoplayDisableOnInteraction:false,//手指滑动后继续播放
        //         // onTouchEnd: function() {
        //         //     swiper.startAutoplay()
        //         // }
        //     });
        // }      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/var.scss';
.swiper-container {
    width: 100%;
    height: pxTorem(348);
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        // background-size: 100% 100%;
        object-fit:fill;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.swiper-pagination {
    bottom: $banBottom !important;
}

</style>
