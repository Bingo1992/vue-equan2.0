<template>
　 <div class="slideDialog">
        <!-- 选择城市遮罩 -->
        <div :class="['Procity-list', 'dialog-list', {'show':showCarNum}]">
            <a class="return-back border-bottom" @click="closeDialog">
                <i class="icon-left"></i>
                <h4>选择车牌号</h4>
            </a>
            <ul class="dialog-start-list">
                <li :class="{active: activeIdx == index}" v-for="(item,index) in zone" :key="item" @click="getRegion(item, index)">{{item}}</li>
            </ul>
            <ul class="dialog-end-list">
                <li v-for="item in letter" :key="item" @click="getLetter(item)">{{item}}</li>
            </ul>
        </div>

　 </div>
</template>
<script>
 
export default {
    name : 'carNumDialog',
    data() {
　　  return {
        zone: ["苏", "鲁", "浙", "川", "皖", "豫", "粤", "鄂", "湘", "吉", "沪", "渝", "云", "晋",
       "蒙", "贵", "京", "陕", "冀", "辽", "津", "桂", "闽", "黑", "新", "琼", "甘", "青", "宁", "藏"],
        letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        activeIdx: 0,//激活索引
        regionVal: '',
        letterVal: ''
　　  }
　  },
    props: ['showCarNum','region'],
    mounted() {
        this._initData(); 
    },
    methods:{
        _initData() { 
           this.regionVal = this.region;
            this.zone.forEach((item, i) => {
                if(item == this.region) {
                    this.activeIdx = i;
                }
            })
        },
        getRegion(region, i) {
            this.activeIdx = i;
            this.regionVal = region;
        },
        getLetter(letter) {
            this.letterVal = letter;
            this.$emit('getRegionVal', this.regionVal, this.letterVal);
        },
        closeDialog() {
            this.$emit('closeDialog');
        },
       
    },
    watch: {
     
     
    }
}
</script>

<style lang="scss">
@import '../assets/scss/var.scss';
.dialog-list{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    display: none
   
}
.dialog-start-list,.dialog-end-list {
    width: 50%;
    // float: left;
    // text-align: center;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    font-size: 12px;
    position: absolute;
    top: 0;
    padding-top: 44px;
    z-index: 4;
    li{
        position: relative;
        padding: 0 10px;
        line-height: 40px;
        &:after {
            @extend %mini-border;
            border-bottom: 1px solid #e1e1e1;
        }
    }
}
.dialog-end-list {
    left: 50%;
}
.dialog-start-list{
    background-color: #eee;
    li.active {
        background-color: #fff;
    }
}
.whole-list {
    width: 100%;
    left: 0;
    li {text-align: left;}
}
.return-back {
    position: fixed;
    background-color: #fff;
    z-index: 5;
    width: 100%;
    @include height;
    padding: 0 10px;
    box-sizing: border-box;
    display: block;
    h4 {
        text-align: center;
        display: inline-block;
        width: 100%;
        height: 44px;
    }
    i {
        position: absolute;
        top: 0;
        left: 10px;
    }
}
.more-wp-open {
    -webkit-transform: translateX(0) translateZ(0) !important;
    -webkit-transition: all .6s;
}
.show {display: block;}
</style>