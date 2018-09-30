<template>
  <div>
      <div class="result" style="padding-bottom: 1rem">
        <i class="icon-hook bg-success"></i>
        <h4 v-if="type">兑换成功</h4>
        <h4 v-if="!type && recharge">充值成功</h4>
        <h4 v-else>支付成功</h4>
      </div>
      <div class="rich-box font-gray">
        <p class="center-text pdb" v-if="type == 1">本次共增加{{ebi}}e币</p>
        <p v-if="type == 2">1.红包将在48小时内发送,如出现"待发送"状态请耐心等待;<br>2.由于微信系统限制，建议兑换操作不能过于频密。</p>
        <p v-if="type == 8">尊敬的VIP客户：车主权益将在7天内发放至您的账户，请注意查收，谢谢！</p>
        <p class="center-text pdb" v-if="type == 10">本次共增加{{ebuy}}e购+{{ebi}}e币</p>
        <p class="center-text pdb" v-if="type == 12">本次共增加{{ebuy}}e购</p>
        <p v-if="type == 11">1.本次共增加{{ebuy}}e购；<br>
        2.红包将在3个工作日内发送,如出现"待发送"状态请耐心等待；<br>3.由于微信系统限制，建议兑换操作不能过于频密。</p>
      
      </div>
      <div class="two-btn">
          <router-link class="btn-pure-theme" to="/home">e币商城</router-link>   
          <a class="btn-gray" :href="getUrlPath('/convert_data.html')">查看订单</a>
      </div>

       <router-link class="title-list" :to="{path: '/proList', query: {areaId: 13}}" style="margin-top:1.5rem;">
        <h4>向上滑动，查看热销爆款</h4>
        <!-- <i class="icon-circle"></i> -->
      </router-link>
      <product :proList="proList2" proThree="true"></product>
      <!-- <div class="outter-list">
				<table class="inner-list">
					<tr>
						<td v-for="(item, i) in proList2" :key="i">
							<router-link :to="{path:'/productDetail', query:{productid: item.id}}">
                <div class="pro-img-2">
                  	<div class="imgLoad" :style="{ backgroundImage: 'url(' + getImgPath(item.pic.split(';')[0]) + ')' }"></div>
                    <img class="soldOut" v-if="item.count === 0" src="../../assets/images/soldOut.png">
                </div>
								<h5 class="nowrap-2">{{item.name}}</h5>
                
                <div class="price-small">
                  <span class="font-orange">
                    <i class="icon-coin"></i>
                    {{item.cost}}
                  </span>
                  <s class="right-text font-gray">￥{{item.price}}</s>
                </div>
							</router-link>
						</td>
					</tr>
				</table>
			</div> -->
  </div> 
</template>

<script>
    import {proList} from '/api/api'
    import { getUrlPath, getImgPath } from '/components/mixin'
    import product from '/components/product'
    // import '/utils/jweixin-1.0.0.js'
    export default {
      name: 'pay',
      data () {
        return {
           proList2: [],
           type: 0,//兑换类型
           recharge: 0,//充值
           ebi: 0,//获得e币
           ebuy: 0,//e购
           redPacket: 0//红包
        }
      },
      components: {
       product
      }, 
      mounted() {
         this._initData();
      },
      mixins: [getUrlPath, getImgPath],
      methods: {
         _initData() {
            this.type = this.$route.query.type;
            this.recharge = this.$route.query.recharge;
            this.ebi = this.$route.query.ecoin;
            this.ebuy = this.$route.query.ebuy;
            this.redPacket = this.$route.query.redPacket;
            
            if(this.type) {
              document.title = "兑换结果";
            } else if(this.recharge) {
              document.title = "充值结果";
            } else {
              document.title = "支付结果";
            }
            //商品列表(推荐)
            proList({params:{areaId: 13}}).then(res => {
              this.proList2 = res.attributes.resultList;
              if(this.proList2.length % 3 == 1){
                this.proList2.splice(this.proList2.length-1, 1);
              }
              if(this.proList2.length % 3 == 2){
                this.proList2.splice(this.proList2.length-2, 2);
              }
            });
         }
        
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.two-btn {
  padding: 0 10px;
  a {
    margin: 0 10px;
  }
}
.outter-list {
	width: 100%;
	overflow-x: auto;
	position: relative;

}
.inner-list {
	padding: 10px;
	td {
    padding: 0 6px;
  }
  .pro-img-2 {
    position: relative;
    padding-bottom: 4px;
  }
	.imgLoad {
		width: 5rem;
    height: 5rem;
    background-position: center;
    background-size: 100%;
	    // object-fit: cover;
  }
  .soldOut {
    width: pxTorem(120) !important;
    height: pxTorem(120) !important;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
  }
}
// .getmore_pro {
// 	a {
// 		display: block;
// 		border: 1px solid #e1e1e1;
// 		padding: 6px;
// 		border-radius: 4px;
// 		font-size: 12px;
// 		text-align: center;
// 		line-height: 18px;
// 	}
	
// }
</style>
