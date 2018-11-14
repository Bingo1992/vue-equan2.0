<template>
	<div>	
		<!-- 订单列表 -->
		<ul class="border-list" v-if="orderList.length">
			<li class="bg-mgShow" v-for="(item, i) in orderList" :key="i">
				<div class="list-box border-bottom">
					<!-- 只有实物，电子券，手机充值，流媒体充值有未支付状态 -->
	                <p v-if="item.state == 0 && (item.orderType == 0 || 
					item.orderType == 7 || item.orderType == 4 || item.orderType == 6
					|| item.orderType == 9)" class="list-info-h">支付单号：
	                     <span>{{item.note}}</span> 
	                </p> 
					 <p v-else class="list-info-h">订单号：
	                     <span>{{item.id}}</span> 
	                </p> 
	                <span class="font-orange">{{stateList[item.orderType][item.state]}}</span>
	            </div> 

				 <!-- 未支付实物或电子券订单 -->
				<div v-if="item.unpaid" class="border-bottom" v-for="pro in item.unpaid" :key="pro.id">
					 <div v-if="pro.product" class="list-box"> <!--旧订单数据 -->
						<img class="list-img-small" :src="getImgPath(pro.product.showpic)">
						<div class="list-info-v">
							<h4 class="nowrap"> {{pro.product.name}}</h4>
							<p>价格：{{pro.product.price}} &nbsp;&nbsp; 数量：{{pro.amount}}</p>
							<p>下单时间：<span>{{pro.createTime}}</span></p>
						</div>
					</div>
					 <div v-else class="list-box"> <!--新订单数据 sku-->
						<img class="list-img-small" :src="getImgPath(pro.productSku.pic.split(',')[0])">
						<div class="list-info-v">
							<h4 class="nowrap">{{pro.productSku.productName}}</h4>
							<p v-if="pro.productSku.twoAttrValue">已选：{{pro.productSku.oneAttrValue+","+pro.productSku.twoAttrValue}}</p>
							<p v-else>已选：{{pro.productSku.oneAttrValue}}</p>
							<p>价格：{{pro.productSku.salePrice}} &nbsp;&nbsp; 数量：{{pro.amount}}</p>
							<p>下单时间：<span>{{pro.createTime}}</span></p>
						</div>
					</div>	
	            </div> 	
	            <div v-if="item.unpaid" class="clearfix pd">
	            	<a style="margin-left:10px"  class="btn-border btn-border-theme fr" :href="getUrlPath('/pay.html?orderNo='+item.note)">立刻支付</a>
					<a class="btn-delete btn-border fr" 
						@click="cancelOrder1(item.note, i)">取消订单</a>
	            </div>

	            <!-- 已支付订单+未支付充值中心 -->
			 
				<!-- "0":实物,"1":电子券兑换e币,"2":电子券兑换红包,"3":电子券充值油卡,"4":话费充值,"5":e币充值油卡,"6":流量充值,"7":电子券,"8":人保vip,"9":流媒体充值 "10"：电子券兑换e币+e购 "11": 电子券兑换红包+e购 "12": 电子券兑换e购 "13"：e币兑换红包 -->
				<div v-else>
					 <div v-if="item.orderType === 0 || item.orderType === 7"> <!-- 实物或电子券 -->
						<div class="border-bottom"  v-for="pro in item.detail" :key="pro.id">
							<div v-if="pro.product" class="list-box"> <!--旧订单数据 -->
								<img  class="list-img-small" :src="getImgPath(pro.product.showpic)">
								<div class="list-info-v">
									<h5 class="nowrap-2">{{pro.product.name}}</h5>
									<p>价格：{{pro.product.price}} &nbsp;&nbsp; 数量：{{pro.amount}}</p>
									<p>下单时间：{{item.otime}}</p>
								</div>
							</div>
							<div v-else class="list-box">   <!--新订单数据 sku-->
								<img class="list-img-small" :src="getImgPath(pro.productSku.pic.split(',')[0])">
								<div class="list-info-v">
									<h5 class="nowrap-2">{{pro.productSku.productName}}</h5>
									<p v-if="pro.productSku.twoAttrValue">已选：{{pro.productSku.oneAttrValue+","+pro.productSku.twoAttrValue}}</p>
									<p v-else>已选：{{pro.productSku.oneAttrValue}}</p>

									<p>价格：{{pro.productSku.salePrice}} &nbsp;&nbsp; 数量：{{pro.amount}}</p>
									<p>下单时间：{{item.otime}}</p>
								</div>
							</div>
						</div>
						<div class="clearfix pd">
							<router-link style="margin-left: 10px" class="btn-border fr" :to="{path: '/orderList/orderDetail', query: {id: item.id}}">查看订单</router-link>
							<router-link style="margin-left: 10px"  v-if="item.orderType === 7 && item.state == 2" class="btn-border fr" :to="{path: '/orderList/ticketDetail', query: {orderId: item.id, supplierid: item.supplierid}}">查看电子券</router-link>
						</div>	
						 
					</div>

					<div v-else>
						<div class="list-box border-bottom">
							<img v-if="item.orderType === 1" class="list-img-small" src="../../assets/images/picEb.png">
							<img  v-if="item.orderType === 2 || item.orderType === 13" class="list-img-small" src="../../assets/images/picRb.png">
							<img  v-if="item.orderType === 3 || item.orderType === 5" class="list-img-small" src="../../assets/images/oil.png">
							<img  v-if="item.orderType === 4" class="list-img-small" src="../../assets/images/mobile.png">
							<img  v-if="item.orderType === 6" class="list-img-small" src="../../assets/images/flow.png">
							<img  v-if="item.orderType === 8" class="list-img-small" src="../../assets/images/a8.png">
							<img  v-if="item.orderType === 9" class="list-img-small" src="../../assets/images/media.png">
							<img  v-if="item.orderType === 10" class="list-img-small" src="../../assets/images/picEb.png">
							<img  v-if="item.orderType === 11" class="list-img-small" src="../../assets/images/picRb.png">
							<img  v-if="item.orderType === 12" class="list-img-small" src="../../assets/images/ebuy.png">
							
							<div class="list-info-v">
								<h5 v-if="item.orderType === 1" class="nowrap-2">兑换e币</h5>
								<h5 v-if="item.orderType === 2 || item.orderType === 13" 
								class="nowrap-2">兑换红包</h5>
								<h5 v-if="item.orderType === 3" class="nowrap-2">油卡充值</h5>
								<h5 v-if="item.orderType === 4" class="nowrap-2">话费充值</h5>
								<h5 v-if="item.orderType === 5" class="nowrap-2">油卡充值</h5>
								<h5 v-if="item.orderType === 6" class="nowrap-2">流量充值</h5>
								<h5 v-if="item.orderType === 8" class="nowrap-2">人保VIP</h5>
								<h5 v-if="item.orderType === 9" class="nowrap-2">
								流媒体充值</h5>
								<h5 v-if="item.orderType === 10" class="nowrap-2">兑换e币+e购</h5>
								<h5 v-if="item.orderType === 11" class="nowrap-2">兑换红包+e购</h5>
								<h5 v-if="item.orderType === 12" class="nowrap-2">兑换e购</h5>
								<p>面额：<span class="font-orange">{{item.amount}}</span></p>
								<p>下单时间：{{item.otime}}</p>
							</div>
							<p class="font-green state" v-if="item.state == 0">未提交充值</p>
							<p class="font-green state" v-if="item.state == 1">已提交充值</p>
						</div>	
						<!-- 未支付充值中心 -->
						 <div v-if="item.state==0 && (item.orderType == 4 || item.orderType == 6 || item.orderType == 9)" class="clearfix pd">
							<a style="margin-left:10px"  class="btn-border btn-border-theme fr" :href="getUrlPath('/pay.html?orderNo='+item.note)">立刻支付</a>
							<a class="btn-delete btn-border fr" 
								@click="cancelOrder1(item.note, i)">取消订单</a>
						</div>

						<div v-else class="clearfix pd">
							<router-link class="btn-border fr" :to="{path: '/orderList/orderDetail', query: {id: item.id}}">查看订单</router-link>
						</div>
					</div>	
				</div>
			</li>
		</ul>
		<!-- 加载更多 -->
		<load-more class="bg-gray" v-if="loadmore" :isLoading="isLoading" :noData="noData" @loadMore="loadMore"></load-more>
		
		<div v-if="orderList.length==0 && !isLoading" class="nothing">
	        <img src="../../assets/images/nothing.png" >
	        <p class="font-gray">暂时没有订单</p> 
	        <router-link class="font-red" to="/home">去商城逛逛</router-link>
	    </div>

		<!-- 遮罩 -->
        <alert-tip v-show="showAlertTip"  :alertText="alertText"></alert-tip>
		
		<!-- 进入详情页 -->
		<transition name="router-slid" mode="out-in">
	    	<router-view></router-view>
	    </transition>
	</div>

</template>
<script>
import {orderList, cancelOrder} from '/api/api'
import alertTip from '/components/alertTip'
import product from '/components/product'
import loading from '/components/loading'
import loadMore from '/components/loadMore'
import { getImgPath, getUrlPath} from '/components/mixin'
export default {
	name: 'orderList',
	data() {
		return {
			orderList: [],
			page: 1, //页数
			isLastPage: false,
			loadmore: true,//显示加载更多
			isLoading: true,
			noData: false,
			showAlertTip: false,
			alertText: '',
			stateList: {
				0: {
					'-1': '已取消',
					99: '异常',
					0: '未支付',
					1: '已支付，待发货',
					2: '已发货',
					3: '已签收',
					4: '已退款'
				},
				1: {
					'-1': '已取消',
					99: '异常',
					1: '兑换成功'
				},
				2: {
					'-1': '已取消',
					99: '异常',
					0: '未发送',
					1: '已发送'
				},
				3: {
					'-1': '已取消',
					99: '异常',
					1: '排队中',
					2: '充值成功',
					3: '充值失败，已退款',
					4: '部分成功，失败部分退款'
				},
				4: {
					'-1': '已取消',
					99: '异常',
					0: '未支付',
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				5: {
					'-1': '已取消',
					99: '异常',
					1: '排队中',
					2: '充值成功',
					3: '充值失败，已退款',
					4: '部分成功，失败部分退款'
				},
				6: {
					'-1': '已取消',
					99: '异常',
					0: '未支付',
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				7: {
					'-1': '已取消',
					99: '异常',
					0: '未支付',
					1: '已支付，待发券',
					2: '已发券' 
				},
				8: {
					'-1': '已取消',
					99: '异常',
					0: '兑换成功，待发卡' 
				},
				9: {
					'-1': '已取消',
					99: '异常',
					0: '未支付',
					1: '排队中',
					2: '充值成功',
					3: '充值失败',
					4: '已退款'
				},
				10: {
					'-1': '已取消',
					99: '异常',
					1: '兑换成功' 
				},
				11: {
					'-1': '已取消',
					99: '异常',
					0: '未发送',
					1: '已发送' 
				},
				12: {
					'-1': '已取消',
					99: '异常',
					1: '兑换成功' 
				},
				13: {
					'-1': '已取消',
					99: '异常',
					0: '未发送',
					1: '已发送' 
				}
			},
		}
	},
	components: {
	   loadMore, alertTip
	},
	mixins: [getImgPath, getUrlPath],
	created() {
		document.title = "我的订单";
		this._initData();
	},
	methods: {		
		_initData() {
			//获取商品列表
			this._getOrderList();
		},
		//获取商品列表
		_getOrderList(flag) {
			let params = {
	          params: {
	            pageNo: this.page //页数
	          }
	        }
			orderList(params).then(res => {
			 
				let data = res.resultList;	
				this.isLastPage = res.isLastPage; //最后一页	
			
				if(flag) {
					this.orderList = [...this.orderList, ...data];
				} else {
					this.orderList = data;
				}
				this.isLoading = false;
				if(this.orderList.length == 0) {//无商品列表
					this.loadmore = false;
				} else if(!this.isLastPage) {
					this.noData = false;
				} else {//最后一页
					this.noData = true;			
				}	
			
			});
		},
		cancelOrder1(id, i) {	
			cancelOrder({params:{}},id).then( res => {
				if(res.resultCode == 200) {
					this.showHideAlert('订单已取消');
					this.orderList.splice(i, 1);
				}
			})
		},
		//显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.formLoading = false;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        },
		//加载更多
		loadMore() {
			if(!this.isLastPage) {		
				// setTimeout(() => {
					this.page++;
					this.isLoading = true;
					this.noData = false;
					this._getOrderList(true);	
					
				// },300);
				
			} else {
				//结束
				this.isLoading = false;
				this.noData = true;
			}	 
		}		
	}

}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.list-img-small {
	width: 50px;
	height: 50px;
	object-fit: contain;
	margin-right: 10px;
}
.state {
	position: absolute;
	top: 12px;
	right: 12px;
	font-size: 12px;
}
</style>