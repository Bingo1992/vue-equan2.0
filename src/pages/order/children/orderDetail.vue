<template>
	<div class="children-view">	
		<!-- 订单列表 -->
		<div class="list-box bg-gray">
			<div class="list-info-h">订单状态</div>
			<span v-if="stateList[type][state]" class="btn-pure-theme btn-state">{{stateList[type][state]}}</span>

		</div>

		<!-- 电子券 -->
		<ul class="order-detail" v-if="esm.flag">    
			<li>
				<span class="pdr">券号：</span>
				<span>{{esm.esmNum}}</span>
			</li>  
			<li>
				<span class="pdr">名称：</span>
				<span>{{esm.name}}</span>
			</li>       
		</ul>

		<!-- 油卡充值 -->
		<ul class="order-detail" v-if="oil.flag">    
			<li>
				<span class="pdr">卡号：</span>
				<span>{{oil.oilCardNum}}</span>
			</li>  
			<li>
				<span class="pdr">姓名：</span>
				<span>{{oil.name}}</span>
			</li>  
			<li>
				<span class="pdr">身份证号：</span>
				<span>{{oil.IDcard}}</span>
			</li>        
		</ul>

		<!-- 手机媒体充值 -->
		<ul class="order-detail" v-if="recharge.flag">    
			<li v-if="recharge.mediaFlag">
				<span class="pdr">充值账号：</span>
				<span>{{recharge.mediaNum}}</span>
			</li> 
			<li v-if="!recharge.mediaFlag">
				<span class="pdr">手机号：</span>
				<span>{{recharge.mobileNum}}</span>
			</li>      
		</ul>

		<!-- 商品 -->
		<div v-if="pro.flag">
			<div class="list-box border-bottom">
				<i class="icon-map pdr"></i>
				<div class="list-info-v">
					<h4>{{pro.name}}&nbsp;&nbsp;{{pro.mobile}}</h4>
					<p>{{pro.address}}</p>
				</div>
			</div>
			<div v-if="logisticsInfo.length == 0" class="list-box"  >
				<p class="list-info-h">暂无物流信息</p>
			</div>
			<div v-else class="list-box" @click="showLogistics = true">
				<p class="list-info-h">{{logisticsInfo[0].AcceptStation}}</p>
				<span class="pdl">点击查看<i class="icon-right"></i></span>
			</div>
		</div>

		<!-- 电子券 -->
		<div class="bg-mgShow">
			<!-- 实物，电子券 -->
			<div v-if="pro.flag" class="list-box border-bottom" v-for="(item, i) in pro.list" :key="i">
				<img class="list-img-small" :src="item.imgUrl">
				<div class="list-info-v">
					<h5  class="nowrap-2">{{item.productName}}</h5>
					<p>数量: {{item.quantity}}</p>
				</div>
				<div>
					<p>￥{{item.price}} </p>
					<!-- <p>{{money==0? ecoin: '￥'+ money + ecoin +'e币' }}</p>   -->
				</div>
			</div>

			<div v-if="esm.flag || recharge.flag || oil.flag" class="list-box border-bottom">
				<img class="list-img-small" :src="getUrlPath(typeList[type].src)">
			 
				<div class="list-info-v">
					<h5  class="nowrap-2">{{typeList[type].name}}</h5>
					<p v-if="type == 4 || type == 6 || type == 9">{{orderName}}</p>
					<p v-else>金额：{{amount}} </p>
				</div>
				<p>
					<span v-if="type == 1">{{exchangeECoin+'e币'}}</span>
					<span v-else-if="type == 2 || type == 13">{{'￥'+redPacket}}</span>
					<span v-else-if="type == 10">{{exchangeECoin + 'e币+' + exchangeEBuy+'e购'}}</span>
					<span v-else-if="type == 11">{{'￥'+redPacket + '+' + exchangeEBuy+'e购'}}</span>
					<span v-else-if="type == 12">{{exchangeEBuy+'e购'}}</span>
					<span v-else>￥{{amount}}</span>
				</p>
			</div>

			<ul v-if="esm.flag" class="order-detail">
				<li>
					<span>商品总额：</span>
					<span class="fr">￥{{amount}}</span>
				</li>
				<li v-if="type == 2 || type == 13 || type == 11">
					<span>发放红包：</span>
					<span class="fr">￥{{redPacket}}</span>
				</li>
				<li v-if="type == 10 || type == 11 || type == 12">
					<span>发放e购：</span>
					<span class="fr">{{exchangeEBuy}}</span>
				</li>
				<li v-if="type == 1 ||  type == 10">
					<span>发放e币：</span>
					<span class="fr">{{exchangeECoin}}</span>
				</li>
			</ul> 

			<!-- 充值 + 实物-->	
			<ul v-else class="order-detail">    
				<li class="list-box">
					<span>商品总额：</span>
					<span class="list-info-h flex-end">￥{{amount}}</span>
				</li>
				<li v-if="ebuy != 0" class="list-box">
					<span>e购支付：</span>
					<span class="list-info-h flex-end">{{ebuy}}</span>
				</li>
				<li v-if="ecoin != 0" class="list-box">
					<span>e币支付：</span>
					<span class="list-info-h flex-end">{{ecoin}}</span>
				</li>
				<li v-if="money != 0" class="list-box">
					<span>微信支付：</span>
					<span class="list-info-h flex-end">￥{{money}}</span>
				</li>        
			</ul>
		</div>		
	
		<ul class="order-detail bg-mgShow">
			<li>
				<span class="pdr">订单编号：</span>
                <span>{{orderId}}</span>
			</li>
			<li>
				<span class="pdr">下单时间：</span>
                <span>{{time}}</span>
			</li>
		</ul>

		<!-- 物流信息 -->
		<logistics v-if="showLogistics" :company="company" :logisId="logisId" 
		:logisticsInfo="logisticsInfo" @closeLogistics="showLogistics = false"></logistics>
	</div>

</template>
<script>
import {orderDetail} from '/api/api'
// import alertTip from '/components/alertTip'
import logistics from '/components/logistics'
// import product from '/components/product'
// import loading from '/components/loading'
// import loadMore from '/components/loadMore'
import { getImgPath, getUrlPath } from '/components/mixin'
export default {
	name: 'orderList',
	data() {
		return {
			orderId: '',
			time: '',
			detail: {},//详情内容
			amount: 0,//订单金额
			ecoin: 0,//e币
			ebuy: 0,//e购
			redPacket: 0,//红包
			money: 0,
			state: 0,//订单状态
			exchangeEBuy: 0,//发放的e购
			exchangeECoin: 0,//发放的e币
			orderName: '-',
			showLogistics: false,
			company: '',
			logisId: '',
			logisticsInfo: [],
			esm: {
                flag: false,
				esmNum: '',//卡券号码  
				name: ''
            },
            oil: {
                flag: false,
                oilCardNum: '',//油卡号
                oilAmount: '',//充值金额
                IDcard: '',//身份证号
                type: '',//油卡类型
				name: '',//持卡人姓名
				
            },  
            recharge: {
				flag: false,
				mediaFlag: false,
				mobileNum: '',//手机号 
				mediaNum: ''//充值账号
            },
            pro: {
                flag: false,
				name: '',
				mobile: '',
				address: '',
				list: []
			},
			type: 1,
			stateList: {
				0: {
					'-1': '已取消',
					0: '未支付',
					1: '已支付，待发货',
					2: '已发货',
					3: '已签收',
					4: '已退款'
				},
				1: {
					1: '兑换成功'
				},
				2: {
					0: '未发送',
					1: '已发送'
				},
				3: {
					1: '排队中',
					2: '充值成功',
					3: '充值失败，已退款',
					4: '部分成功，失败部分退款'
				},
				4: {
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				5: {
					1: '排队中',
					2: '充值成功',
					3: '充值失败，已退款',
					4: '部分成功，失败部分退款'
				},
				6: {
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				7: {
					0: '未支付',
					1: '已支付，待发券',
					2: '已发券' 
				},
				8: {
					0: '兑换成功，待发卡' 
				},
				9: {
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				10: {
					1: '兑换成功' 
				},
				11: {
					0: '未发送',
					1: '已发送' 
				},
				12: {
					1: '兑换成功' 
				},
				13: {
					0: '未发送',
					1: '已发送' 
				}
			},
			typeList: {
				1: {
					"src": "/static/images/picEb.png",
					"name": "兑换e币",
				},
				2: {
					"src": "/static/images/picRb.png",
					"name": "兑换红包",
				},
				3: {
					"src": "/static/images/oil.png",
					"name": "油卡充值",
				},
				4: {
					"src": "/static/images/mobile.png",
					"name": "话费充值",
				},
				5: {
					"src": "/static/images/oil.png",
					"name": "油卡充值",
				},
				6: {
					"src": "/static/images/flow.png",
					"name": "流量充值",
				},
				8: {
					"src": "/static/images/a8.png",
					"name": "人保VIP",
				},
				9: {
					"src": "/static/images/media.png",
					"name": "流媒体充值",
				},
				10: {
					"src": "/static/images/picEb.png",
					"name": "兑换e币+e购",
				},
				11: {
					"src": "/static/images/picRb.png",
					"name": "兑换红包+e购",
				},
				12: {
					"src": "/static/images/picEb.png",
					"name": "兑换e购",
				},
				13: {
					"src": "/static/images/picRb.png",
					"name": "兑换红包",
				}
			}
		}
	},
	components: {
		logistics
	},
	mixins: [getImgPath, getUrlPath],
	created() {
		document.title = "订单详情";
		this._initData(this.$route.query.id);
	},
	methods: {
	  _initData(id) {
		  orderDetail({}, id).then(res => {
			  let data = res.data;
			  this.orderId = data.orderNum;
			  this.state = data.state;
			  this.time = data.orderTime;
			  this.amount = data.amount;

			  this.esm.esmNum = data.esmNum;
			  this.esm.name = data.esmProductName;
			  //   油卡
			  if(data.cardholderIdCard) {
				let len = data.cardholderIdCard.length;
				this.oil.oilCardNum = data.oliCarNum;
				this.oil.IDcard = data.cardholderIdCard.replace(/(\w)/g,function(a,b,c,d){return (c>3 && c < len-4)?'*':a});
				this.oil.name = data.cardholderName;
			  }
				

			  this.pro.name = data.receiverName;
			  this.pro.address = data.receiverAddress;
			  this.pro.mobile = data.receiveMobile;

			  this.recharge.mobileNum = data.rechargeMobile;
			  this.recharge.mediaNum = data.mediaRechargeAccount;
			  this.orderName = data.orderName;
			  
	 
			//  "0":实物,"1":电子券兑换e币,"2":电子券兑换红包,"3":电子券充值油卡,"4":话费充值,"5":e币充值油卡,"6":流量充值,"7":电子券,"8":人保vip,"9":流媒体充值 "10"：电子券兑换e币+e购 "11": 电子券兑换红包+e购 "12": 电子券兑换e购 "13"：e币兑换红包 
			  if(data.orderType == 0) {
				  this.type = 0; 
				  this.pro.flag = true;
				  this.pro.list = data.detailVoList;
	 
				if(data.logisticsInfo) {
					this.company = data.expressSupplier;
				  	this.logisId = data.expressNumber;
					for(let i = data.logisticsInfo.length-1; i >= 0; i--) {
						this.logisticsInfo.push(data.logisticsInfo[i]);
					}
				}
				  

			  } else if(data.orderType == 1) {
				  this.type = 1; 
				  this.esm.flag = true;
			  } else if(data.orderType == 2) {
				  this.type = 2; 
				  this.esm.flag = true;
			  } else if(data.orderType == 3) {
				  this.type = 3; 
				  this.esm.flag = true;
				  this.oil.flag = true;
			  } else if(data.orderType == 4) {
				  this.type = 4; 
				  this.recharge.flag = true;
			  } else if(data.orderType == 5) {
				  this.type = 5; 
				  this.oil.flag = true;
			  } else if(data.orderType == 6) {
				  this.type = 6; 
				  this.recharge.flag = true;
			  } else if(data.orderType == 7) {
				  this.type = 7; 
				  this.pro.flag = true;
			  } else if(data.orderType == 8) {
				  this.type = 8; 
				  this.recharge = true;
			  } else if(data.orderType == 9) {
				  this.type = 9; 
				  this.recharge.flag = true;
				  this.recharge.mediaFlag = true;
			  } else if(data.orderType == 10) {
				  this.type = 10; 
				  this.esm.flag = true;
			  } else if(data.orderType == 11) {
				  this.type = 11; 
				  this.esm.flag = true;
			  } else if(data.orderType == 12) {
				  this.type = 12; 
				  this.esm.flag = true;
			  } else if(data.orderType == 13) {
				  this.type = 13; 
				  this.esm.flag = true;
			  }
			  if(data.exchangeEBuy) { this.exchangeEBuy = data.exchangeEBuy; }
			  if(data.exchangeECoin) { this.exchangeECoin = data.exchangeECoin; }
			  if(data.eBuy) { this.ebuy = data.eBuy; }
			  if(data.eCoin) { this.ecoin = data.eCoin; }
			  if(data.sendTotal) { this.redPacket = data.sendTotal; }
			  if(data.amountCp) { this.money = data.amountCp; }	
		  })
	  }
		 
	}

}
</script>
<style lang="scss" scoped>
.btn-state {
	font-size: 12px;
	padding: 0 10px;
	height: 28px;
	line-height: 28px;
	border-radius: 28px;
}
.order-detail {
	 line-height: 40px;
	 padding: 0 10px;
	.list-box {
		padding: 0;
	}
 }
 .list-img-small {
	 width: 50px;
	 height: 50px;
	 margin-right: 10px;
 }
 .flex-end {
    justify-content: flex-end;
    padding-left: 10px;
}
</style>