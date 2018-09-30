<template>
	<div class="">
      <div class="ui-dialog"></div>
      <div class="attr-container">
          <i @click="closeAttrDialog(false)" class="icon-wrong"></i>
          <div class="list-box">
              <!-- <img class="list-img" src="../assets/images/picEb.png" > -->
              <img class="list-img" :src="getImgPath(imgSrc)" >
              <div class="list-info-v">
                  <h5 class="font-orange">￥{{price}}</h5>
                  <p>库存{{stock}}件</p>
                  <span v-if="skuValue">已选：{{skuValue}}</span>
              </div>
          </div>
          <ul class="select-list">
              
              <li class="pdt" v-for="(value, key, i) in attrInfo.allSkuAtrr" :key="i">
                  <p>{{key}}</p>
                  <div class="attr-list">
                     <!-- <span v-for="(item, j) in value" :key="j" 
                     :class="[i==0 && attrActive1 == j || i==1 && attrActive2 == j?'active':'']" 
                      @click="getActive(i, j, item)">{{item}}</span> -->
                     <span v-for="(item, j) in value" :key="j" 
                     :class="[attrActive[i] == j? 'active':'']" 
                      @click="getActive(i, j, item)">{{item}}</span> 
                  </div>
              </li>
 
          </ul>
          <div v-if="!cartDialog" class="list-box">
              <div class="list-info-h">购买数量</div>
              <buy-num :proID="skuid" 
                @editNum="editNum"
                 ></buy-num>
          </div>

          <div class="btn border-top">
              <p @click="saveBtn" class="btn-pure-theme">确定</p>
          </div>
          <!-- 遮罩 -->
          <alert-tip v-show="showAlertTip"  :alertText="alertText"></alert-tip>

      </div>
  </div>
</template>
<script>
import buyNum from "./buyNum"
import alertTip from '/components/alertTip'
import { getImgPath } from '/components/mixin'
import { choosesku } from '/api/api'

export default {
	data() {
		return {
            // attrActive1:-1,
            // attrActive2: -1,
            number: 1,
            check: false,
            quality: 1,
            attrActive: [],//属性选择索引
            showAlertTip: false,
            alertText: '',
            price: 0,//价格
            marketPrice: 0,//市场价
            stock: 0,//库存
            imgSrc: '',
            skuValue: '',//已选规格
            skuValAttr:[],//规格数组
            skuid: '',
			attrInfo: {
                 "allSkuAtrr": {
                    "颜色": [
                        "红色", 
                        "黄色", 
                        "蓝色"
                    ], 
                    "规格": [
                        "3L", 
                        "5L", 
                        "7L"
                    ]
                }, 
                "allSku": [
                    {
                        "stock": 100, 
                        "showPic": "/shopProduct/20180425/20180425114523_31.jpg", 
                        "skuValue": "红色,3L", 
                        "salePrice": 100, 
                        "marketPrice": 120,
                        "skuId": 1
                    }, 
                    {
                        "stock": 50, 
                        "showPic": "/shopProduct/20180424/20180424104506_164.jpg", 
                        "skuValue": "黄色,3L", 
                        "salePrice": 110, 
                        "marketPrice": 130,
                        "skuId": 2
                    }, 
                    {
                        "stock": 50, 
                        "showPic": "/shopProduct/20180424/20180424104506_164.jpg", 
                        "skuValue": "黄色,5L", 
                        "salePrice": 300, 
                        "marketPrice": 320,
                        "skuId": 3
                    }
                ]
            }
		}
	},
 
    mixins: [getImgPath],
    props: ['cartDialog', 'skuCartValue','productId'],
    components: { buyNum, alertTip },
    created() {
        this._initData();
    },
	methods: {
        _initData() {
            // choosesku({params:{productid: this.productId}}).then(res => {
                // this.attrInfo = res;
                if(this.cartDialog) {
                     this.skuValAttr = this.skuCartValue.split(',');
                     this.skuValue = this.skuCartValue;
                     this.traverseAttrSku();//遍历sku商品列表
                }
                Object.keys(this.attrInfo.allSkuAtrr).forEach((key, i) => {
                    if(this.cartDialog) {//购物车进入
                        this.attrInfo.allSkuAtrr[key].forEach((item, j) => {
                            if(this.skuValAttr[i] === item) {
                                this.attrActive.push(j);//索引  
                            }
                        })
                    } else {//商品详情进入
                        this.attrActive.push(-1);//索引个数
                        this.skuValAttr.push('');//属性值   
                    }
                })

                // for(let key in this.attrInfo.allSkuAtrr) {
                //     if(this.cartDialog) {//购物车
                //        this.attrInfo.allSkuAtrr[key].forEach((item, i) => {
                            
                //        })

                //     } else {
                //         this.attrActive.push(-1);//索引个数
                //         this.skuValAttr.push('');//属性值 
                //     }
                   
                // }
               
            // })
        },
		getActive(i, j, value) {
            this.$set(this.skuValAttr, i, value);
            this.$set(this.attrActive, i, j);
            this.skuValue = this.skuValAttr.join(',');
            this.traverseAttrSku();
        },
        //遍历sku商品列表
        traverseAttrSku() {
            this.attrInfo.allSku.forEach((item, i) => {
                if(this.skuValue == item.skuValue) {
                    this.price = item.salePrice;
                    this.marketPrice = item.marketPrice;
                    this.imgSrc = item.showPic;
                    this.stock = item.stock;
                    this.skuid = item.skuId;
                }
            })
        },
        saveBtn() {
            let flag = false;
           this.attrActive.forEach(elm  => {
               if(elm === -1) {
                   flag = true;
                   this.showHideAlert('还有未选项'); 
                    return;
               }
           })   
           if(!flag) {
                this.closeAttrDialog(true);
                
           }
     
        },
        //显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        },
        closeAttrDialog(flag) {
          
            this.$emit('closeAttrDialog', flag, this.skuValue, this.skuid, this.quality, this.price, this.marketPrice, this.imgSrc);
        },
        //数量
        editNum(skuid, quality, check) {
            this.skuid = skuid;
            this.quality = quality;
            this.check = check;
        }
         
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/var.scss';
.attr-container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    max-height: 80%;
    overflow-y: auto;
    z-index: 20;
    .icon-wrong {
        @include circle(26px);
        border: 1px solid #898989;
        color: #898989;
        position: absolute;
        right: .3rem;
        top: .3rem;
        z-index: 3;
    }
}
.attr-list {
    span {
        display: inline-block;
        padding: 2px 8px;
        border: 1px solid #e1e1e1;
        border-radius: 3px;
        margin-right: 8px;
        min-width: 50px;
        text-align: center;
    }
    .active {
        border-color: $color-theme;
        color: $color-theme;
    }
}
.select-list {
    max-height: 17rem;
    overflow-y: auto;
    padding: 0 10px 10px 10px;
}
</style>