<template>
	<div class="">
      <div class="ui-dialog"></div>
      <div class="attr-container">
          <i @click="closeAttrDialog(false)" class="icon-wrong"></i>
          <div class="list-box">
              <!-- <img class="list-img" src="../assets/images/picEb.png" > -->
              <img v-if="imgSrc" class="list-img" :src="getImgPath(imgSrc)" >
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
              <buy-num :proID="productId" :skuID="skuId" 
                @editNum="editNum" :stock="stock"
                 ></buy-num>
          </div>

          <div v-if="clickAttr" class="two-btn add-buy border-top">
              <a v-if="stock==0" class="btn-pure-theme disbtn" style="width:90%">商品已售罄</a>
              <a v-else-if="state==0" class="btn-pure-theme disbtn" style="width:90%">商品已下架</a> 
              
              <a v-if="stock != 0 && state == 1" class="btn-pure-theme" @click="saveBtn('cart')"  >加入购物车</a>
              <a v-if="stock != 0 && state == 1"  class="btn-pure-theme" @click="saveBtn('buy')">立即购买</a>
 
          </div>  
          <div v-else class="btn border-top">
              <p v-if="stock==0" class="btn-pure-theme disbtn" >商品已售罄</p>
              <p v-else-if="state==0" class="btn-pure-theme disbtn">商品已下架</p> 
              
              <p v-else @click="saveBtn" class="btn-pure-theme">确定</p>

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
            ebuy: 0,//是否支持e购
            state: 1,//是否下架
            imgSrc: '',
            skuValue: '',//已选规格
            skuValAttr:[],//规格数组
            skuId: this.oldSkuId,
			attrInfo: {
                //  "allSkuAtrr": {
                //     "颜色": [
                //         "红色", 
                //         "黄色", 
                //         "蓝色"
                //     ], 
                //     "规格": [
                //         "3L", 
                //         "5L", 
                //         "7L"
                //     ]
                // }, 
                // "allSku": [
                //     {
                //         "stock": 100, 
                //         "showPic": "/shopProduct/20180425/20180425114523_31.jpg", 
                //         "skuValue": "红色,3L", 
                //         "salePrice": 100, 
                //         "marketPrice": 120,
                //         "skuid": 1
                //     }, 
                //     {
                //         "stock": 50, 
                //         "showPic": "/shopProduct/20180424/20180424104506_164.jpg", 
                //         "skuValue": "黄色,3L", 
                //         "salePrice": 110, 
                //         "marketPrice": 130,
                //         "skuid": 2
                //     }, 
                //     {
                //         "stock": 50, 
                //         "showPic": "/shopProduct/20180424/20180424104506_164.jpg", 
                //         "skuValue": "黄色,5L", 
                //         "salePrice": 300, 
                //         "marketPrice": 320,
                //         "skuid": 3
                //     }
                // ]
            }
		}
	},
 
    mixins: [getImgPath],
    props: ['cartDialog', 'skuValueStr','productId','oldSkuId', 'clickAttr'],
    components: { buyNum, alertTip },
    created() {
        this._initData();
    },
	methods: {
        _initData() {
            choosesku({params:{skuid: this.oldSkuId, productId: this.productId}}).then(res => {
                this.attrInfo = res.attributes;
               
                this.skuValAttr = this.skuValueStr.split(',');//获取默认属性
                this.skuValue = this.skuValueStr;
              
                this.traverseAttrSku();//遍历sku商品列表
               
                Object.keys(this.attrInfo.allSkuAtrr).forEach((key, i) => {
                    this.attrInfo.allSkuAtrr[key].forEach((item, j) => {
                        if(this.skuValAttr[i] === item) {
                            this.attrActive.push(j);//给已选的属性索引添加active  
                        }
                    })
                  
                }) 
               
            })
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
                    this.skuId = item.skuid;  
                    this.state = item.state;  
                    this.ebuy = item.ebuy;    
                } 
            })
        },
        saveBtn(type) {
            let flag = false;
            this.attrActive.forEach(elm  => {
               if(elm === -1) {
                   flag = true;
                   this.showHideAlert('还有未选项'); 
                    return;
               }
            })   
            if(this.stock < this.quality) {
                 this.showHideAlert('库存不足，请重新修改数量'); 
                 return;
            }
            if(!flag) {
                this.closeAttrDialog(true, type);
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
        closeAttrDialog(flag, type) {
            this.$emit('closeAttrDialog', flag, type, this.skuValue, this.skuId, 
            this.quality, this.price, this.marketPrice, this.imgSrc, this.stock, this.state, this.ebuy);
        },
        //数量
        editNum(productid, skuid, quality, check) {
            this.skuId = skuid;
            this.quality = quality;
            this.check = check;
        }
         
    },
    watch: {
        'skuValueStr': '_initData'
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
        margin-top: 6px;
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
.add-buy {
    a{
       margin: 16px 5%; 
    }
    
}
</style>