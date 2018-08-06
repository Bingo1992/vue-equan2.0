<template>
    <div class="children-view">
        <loading v-if="showLoading"></loading>
        <section v-else class="content-main">
            <!-- 图片轮播 -->
            <banner :listImg="imglistSrc" myClass="1"  hasPoint="true"></banner>
            <div :key="proDetail.id">
                <div class="pro-list pdl pdr pdb">
                   <!--  <div class="label">
                        <span v-if="proDetail.label1" class="label-orange">{{proDetail.label1}}</span>
                        <span v-if="proDetail.label2" class="label-blue">{{proDetail.label2}}</span>
                        <span v-if="proDetail.label3" class="label-red">{{proDetail.label3}}</span>
                    </div>
                     -->
                    <h4 class="pro-title">
                        <!-- <span v-if="proDetail.ebuy == 1" class="label-red">支持e购</span>&nbsp; -->
                        {{proDetail.name}}
                        </h4>
                    <div class="price">
                        <span class="font-orange lg-font">
                            <i class="icon-coin"></i>
                            {{proDetail.cost}}
                        </span>
                        <s class="right-text font-gray">市场价￥{{proDetail.price}}</s>
                    </div>
                </div>   
                <div class="bg-mgShow pro-detail">
                    <h4 class="center-text">商品详情</h4>
                    <img v-for="(item,i) in proDetail.detailImg" :src="getImgPath(item.showPic)" :key="i">
                    <div class="pdb pdr pdl" v-html="proDetail.description"></div>
                </div>
            </div>

            <div style="padding-bottom:50px"></div>
       
        </section>

        <div class="fixed-bottom bg-gray">
            <div class="bottomBtn two-btn border-top">
                <router-link class="backNav border-right" to="/cart">
                    <i class="icon-cart"></i>
                    <!-- <span v-if="cartNum != 0" class="circlePoint">{{cartNum}}</span> -->
                    <cart-num></cart-num>
                </router-link>
                <a v-if="count != 0" class="btn-cart" @click="addToCart(
                    proDetail.showPic, 
                    proDetail.name, 
                    proDetail.cost, 
                    proDetail.price, 
                    proDetail.ebuy,
                    proDetail.type)">加入购物车</a>
                <a v-if="count != 0" @click="goToBuy(
                    proDetail.showPic, 
                    proDetail.name, 
                    proDetail.cost, 
                    proDetail.price, 
                    proDetail.ebuy,
                    proDetail.type)" class="btn-theme">立即购买</a>
                <a v-else class="btn-pure-theme disbtn">商品已售罄</a>
            </div>
        </div>

         <!-- 提示遮罩 -->
        <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
          
    </div>
    	 

</template>

<script>
import {mapMutations} from 'vuex'
import {proDetail, addCart} from '/api/api'
import { setStore } from '/utils/storage'
import {getImgPath} from '/components/mixin'
import alertTip from '/components/alertTip'
import Banner from '/components/swiperDefault'
import Loading from '/components/loading'
import cartNum from '/components/cartNum'

export default {
	data(){
		return {
			proDetail: [],
			imglistSrc:[],//轮播图
            count: 0,//商品：1上架，0下架
            showLoading: true,
            showAttrDialog: false,
            showAlertTip: false,
            alertText: ""
		}
	},
    components: {
        Banner, Loading, alertTip, cartNum
    },
	mounted() {
        document.title = "商品详情";
		this._initData();
    },
    mixins: [getImgPath],
    // computed: {
    //     ...mapState(['cartList']),
    //     cartNum () {
    //       let cartNum = 0;
    //       this.cartList && this.cartList.forEach( item => {
    //          cartNum += item.proNum;
    //       })
    //       return cartNum;
    //     }
    // },
	methods: {  
        ...mapMutations(['ADD_CART']),
		_initData() {
            var self = this;
            // document.title = "商品详情";
            // console.log(document.title)
            proDetail({params:{productid: this.$route.query.productid}}).then(res => {
                this.proDetail = res;
                this.count = this.proDetail.count;
                this.showLoading = false;
                let pic = this.proDetail.pic;   
                pic&&pic.forEach( function(element, index) {
                    self.imglistSrc.push({'pic':element});
                });
                this.$nextTick(() => {
                    window.scrollTo(0,1);
                    window.scrollTo(0,0);
                    var swiper1 = new Swiper('.swiper-container1', {
                        pagination: '.swiper-pagination1',
                        paginationClickable: true,
                        loop: true,
                        autoplay: 4500,
                        autoplayDisableOnInteraction: false
                    });
                    // 只有一张图时禁止轮播
                    if(self.imglistSrc.length <= 1) {
                        swiper1.stopAutoplay();//停止自动播放
                        swiper1.detachEvents(); //移除所有监听事件
                    }
                })
               
            })
		},
        //显示弹窗
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        },
        //加入购物车
        addToCart(img, title, price, marketPrice, ebuy, type) {
            addCart({quality:1}, this.$route.query.productid).then(res => {
                this.ADD_CART({
                    productId: this.$route.query.productid,
                    productImg: img,
                    productName: title,
                    currCost: price,
                    currPrice: marketPrice,
                    check: false,
                    total: 1,
                    ebuy: ebuy,
                    type: type
                });
                this.showHideAlert('已成功加入购物车');
            });
        },
        // 点击购买
        goToBuy(img, title, price, marketPrice, ebuy, type) {
            let goods = [];
            goods.push({
                productId: this.$route.query.productid,
                currCost: price,
                productName: title,
                productImg: img,
                currPrice: marketPrice,
                total: 1,
                check: true,
                ebuy: ebuy,
                type: type
            });
         
            setStore('buyPro',goods);//将当前购买的商品信息存储到buyPro
            this.$router.push({path:'/orderConfirm',query:{skuId: this.$route.query.productid}});
        }
       
	},
    watch:{
        '$route':'_initData'
    }

}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/var.scss";
.content-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // padding-bottom: 84px;
    z-index: 5;
    overflow: auto;
    -webkit-overflow-scroll: touch;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
.swiper-container1 {
    height: pxTorem(750);
    .swiper-pagination-bullet-active{
        background: #717171 !important;
    }
    .swiper-pagination-bullet {
        opacity: 1 !important;
    }
}
.backNav {
    flex-direction: column;
    background-color: #fafafa;
    height: 50px;
    padding: 0 20px;
    color: #b2b2b2;
    i{font-size: 24px;}
    
}
.btn-cart {
   background-color: #fafafa;
   width: 100%;
   font-size: 16px;
}
    
.bottomBtn {
    a {
        flex: auto;
        -webkit-flex: auto;
    }
    .btn-theme {
        width: 100%;
        font-size: 16px;
    }
    .disbtn {
        width: 80%;
        font-size: 16px;
    }
}
.price {
    .lg-font {
        font-size: 18px !important;
        padding-right: 6px;
        .icon-coin {font-size: 16px;}
    }
}

.pro-detail {
    h4 {
        padding: 24px 0;
    }
    // p {
    //     padding: 10px;
    // }
}

</style>