<template>
	<div class="banner-b">
<!-- 
		<loading v-if="showLoading"></loading>
		<section v-if="!showLoading"> -->

			<router-link v-if="tckType==1" class="list-box bg-gray" to="/ticketCode">
		    	<div class="list-info-h">
		    		<span>使用e券积分卡充值</span>
		    		<i class="icon-tip" @click.prevent="showConfirmDialog()">?</i>
		    	</div>
		    	<i class="icon-right"></i>
		    </router-link>

			<div v-if="tckList.length === 0" class="nothing">
					<div class="center-text">
						<i class="icon-ticket"></i>
						<h4>您的账户暂无卡券</h4>
						<router-link class="font-red" to="/home">进入e券商城逛逛</router-link>
					</div>
			        
		    </div>

		    <ul v-else class="ticket-list border-list">
				<li class="list-box" v-for="(item, i) in tckList" :key="i" @click="gotoDetail(item.eticketProductId, item.id, item.code)">
	                <div class="ticket-img">
	                     <img src="../../assets/images/ticket1.jpg">
	                     <p>￥<span>{{item.price}}</span></p>
	                </div>
	               
	                <div class="list-info-v">
						<div>
							<h5>{{item.productName}}</h5>
							<p class="font-gray">有效期：<span>{{item.expiredTime}}</span></p>
							<p class="font-gray">券码：<span>{{item.code}}</span></p>
						</div>
							
	                </div>
	                
	                <!-- <router-link v-if="tckType==1" class="btn-pure-theme btn-normal" :to="{path:'/exchange', query: {tkId: item.id,tkVal: item.code}}">点击充值</router-link> -->
					<p v-if="tckType==1" class="btn-pure-theme btn-normal">点击充值</p>
	                <i v-else class="icon-right"></i>
		        </li>
			</ul>

		<!-- </section> -->
		
		<div v-if="tckType==2" class="fixed-bottom bg-show">
			<footer-nav></footer-nav>	
		</div>

		<confirm-dialog v-if="showDialog" :confirmTitle="confirmTitle" :confirmText="confirmText"  @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>
	</div>
</template>
<script>
import {ticketList} from '/api/api'
import { getESMPath } from '/components/mixin'
import loading from '/components/loading'
import confirmDialog from '/components/confirmDialog'
import FooterNav from '/components/footer'
export default {
	name: 'ticket',
	data() {
		return {
			// showLoading: true, //显示加载中  
			tckList: [],//券
			tckType: 1,
			confirmTtitle: '',
			confirmText: '',
			showDialog: false
		}
	},
	mixins: [getESMPath],
	components: {
		FooterNav, confirmDialog, loading
	},
	mounted() {
		this._initData();
	},
	methods: {
		_initData() {
			this.tckType = Number(this.$route.query.tckType);
			if(this.tckType  == 1) {
				document.title = "我的卡券";
			} else {
				document.title = "企业赠券";
			}
			ticketList({params: {type: this.tckType}}).then(res => {
				if(res.resultCode == 200) {
					this.tckList = res.resultList;	
				} else {
					alert(res.resultMsg);
				}
				// this.showLoading = false;
			}).catch(err => {
				alert(err);
			})
		},
		//显示遮罩
	    showConfirmDialog() {
	      this.showDialog = true;
	      this.confirmTitle = '帮助';
	      this.confirmText = '1、刮开e券积分卡背面的“密码”涂层；<br>\
	      2、将密码输入到“码券”，安全码输入到“安全码”；<br>\
	      3、拖动滑条获取图片验证码，按提示点击图片中的图案；<br>\
	      4、点击“充值”进入充值页面';
	       // event.cancelBubble = true;
	    },
	    gotoDetail(ticketId, id, code) {
	    	if(this.tckType == 2) {
	    		window.location.href = this.getESMPath('/product?id=' + ticketId);
	    	} else {
				this.$router.push({path: '/exchange', query: {tkId: id,tkVal: code}});
			}
	    },
		//关闭遮罩
	    closeConfirmDialog() {
	      this.showDialog = false;
	    }	
	}

}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.ticket-img {
    position: relative;
    text-align: center;
    width: 3.4rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin-right: 10px;
    img {
    	position: absolute;
	    top: 0;
	    left: 0;
    }
    p {
    	position: relative;
	    z-index: 2;
	    color: #fff;
	    font-size: 18px;
    }
}	
.ticket-list {
	.btn-pure-theme {
		position: absolute;
	    bottom: 10px;
	    right: 10px;
	    line-height: 32px;
	    height: 32px;
	    font-size: 12px;
	    padding: 0 10px;
	    margin: 0;
	}	
}
.icon-tip {
	@include circle(18px);
	color: $color-theme;
	border: 1px solid $color-theme;
	font-size: 16px;
	margin-left: 6px;
}
</style>