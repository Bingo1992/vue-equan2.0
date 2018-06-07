<template>
　 <div class="slideDialog">
        <!-- 选择城市遮罩 -->
        <div :class="['Procity-list', 'dialog-list', {'show':openCity}]">
            <a class="return-back border-bottom" @click="closeDialog">
                <i class="icon-left"></i>
                <h4>选择城市</h4>
            </a>
            <ul class="selProvince dialog-start-list">
                <li :class="{active: activeIdx == index}" v-for="(item,index) in province" :key="item.ProID" @click="getCity(item.ProID, item.ProName, index)">{{item.ProName}}</li>
            </ul>
            <ul class="selCity dialog-end-list">
                <li v-for="item in city" :key="item.CityID" @click="getDistrict(item.CityID,item.CityName)">{{item.CityName}}</li>
            </ul>
        </div>

        <!-- 选择区县遮罩 -->
        <div :class="['zone-list', 'dialog-list', {'show':openDis}]">
            <a class="return-back border-bottom" @click="closeDialog">
                <i class="icon-left"></i>
                <h4>选择地区</h4>
            </a>
            <ul class="selDistrict dialog-end-list whole-list">
                <li v-for="item in zone"  @click="getDisName(item.DisName)">{{item.DisName}}</li>
            </ul>
        </div>   

　 </div>
</template>
<script>
import {province,city,district} from '/api/api'
export default {
    name : 'slideDialog',
    data() {
　　  return {
       
        province:[],//省份列表
        city:[],//城市列表
        zone:[],//地区列表
        provName: '',
        cityName: '',
        cityId: 1,//城市的id
        disName:'',
        activeIdx: 0,//省份激活索引
        flag: false//控制只执行一次
　　  }
　  },
    props: ['openCity','openDis', 'provVal', 'cityVal'],
    mounted() {
        this._initData(); 
    },
    methods:{
       _initData() { 
           province().then(res => {
                this.province = res;// 获取省份
                let id = 1, idx = 0;//省份id

                if(this.cityVal && !this.flag) {//从修改地址进入
                    
                    this.province.forEach((item, index) => {//根据省份名称查找id
                        if(item.ProName === this.provVal){
                            id = item.ProID;
                            idx = index;
                        }
                    });
                    //根据城市查找城市id
                    city().then(res => {
                       this.provName = this.provVal;
                       let allCity = res;
                       let cityArr = [];
                        allCity.forEach((item) => {
                            if(item.ProID === id){
                                cityArr.push(item);
                            }
                            if(item.CityName === this.cityVal) {
                                this.cityId = item.CityID;
                            }
                        });
                        this.city = cityArr;
                        this.activeIdx = idx;
                        this.getDistrict(this.cityId, this.cityVal);
                    }).then(() => {
                        this.flag = true;
                    })

                } else if(!this.flag){
                    this.getCity(1, "北京市", 0);
                }
            })         
        
        },
        // 获取城市
        getCity(proID, name, index) {
            this.provName = name;
             city().then(res => {
               let allCity = res;
               let cityArr = [];
                allCity.forEach((item) => {
                    if(item.ProID === proID){
                        cityArr.push(item);
                    }
                });
                this.city = cityArr;
                this.activeIdx = index;
            })
        },
        // 获取地区
        async getDistrict(cityID, name) {
            this.cityName = name;
            if(this.provName == name) {
                this.provName = '';
            }
            // console.log(this.cityName)
            let allDistict = await district();
            let disArr = [];
            allDistict.forEach((item) => {
                if(item.CityID === cityID){
                    disArr.push(item);
                }
            });
            this.zone = disArr;
            
            this.$emit('closeDialog');
            this.$emit('provName',this.provName);
            this.$emit('cityName',this.cityName);
            if(this.flag) {
                this.$emit('disName','');
            }
            
        },
        closeDialog() {
            this.$emit('closeDialog');
        },
        getDisName(name){
            this.disName = name;
            this.$emit('disName',this.disName);
            this.$emit('closeDialog');
        }
    },
    watch: {
        // 'provVal': '_initData',
        'cityVal': '_initData'
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
    // -webkit-transform: translateX(150%) translateZ(0);
    // -webkit-transition: all .6s linear 0s;
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