<template>
	<div>
		<loading v-if="showLoading"></loading>
		<div v-else>
			<banner :listImg="adsImg" myClass="-c2"></banner>
			<ul class="recharge-list flex-layout">
				<li>
					<a :href="getUrlPath('/mobile_recharge.html')">
						<img src="../../assets/images/mobile.png">
						<p>手机充值</p>
					</a>
				</li>
				<li>
					<a :href="getUrlPath('/oilCard_recharge.html')">
						<img src="../../assets/images/oil.png">
						<p>油卡充值</p>
					</a>
				</li>
				<li>
					<a :href="getUrlPath('/media_recharge.html')">
						<img src="../../assets/images/media.png">
						<p>娱乐充值</p>
					</a>
				</li>
				<li>
					<router-link to="/redPacketCharge">
						<img src="../../assets/images/redpacket.png">
						<p>红包充值</p>
					</router-link>
				</li>
			</ul>
			<router-link class="title-list" :to="{path: '/proList', query: {areaId: 11, title: '人气推荐'}}">
				<h4>人气推荐</h4>
				<i class="icon-circle"></i>
			</router-link>
			<product :proList="proList" proThree="true"></product>
		</div>
	 
	</div>
</template>
<script>
import {banner, proList} from '/api/api'
import { getUrlPath } from '/components/mixin'
import Banner from '/components/swiperDefault'
import product from '/components/product'
import loading from '/components/loading'

export default {
	name: 'home',
	data() {
		return {
			showLoading: true,
			adsImg: [],
			proList: []
		}
	},
	created() {
		document.title = "充值中心";
		this._initData();
	},
	components: {
	   Banner, product, loading
	},
	mixins: [getUrlPath],
	methods: {
		_initData() {
			banner({params:{location: "index_top"}}).then(res => {
				this.adsImg = res.obj;
				this.showLoading = false;
				this.$nextTick(() => {
					var swiperc3 = new Swiper('.swiper-container-c2', {
			            slidesPerView: 'auto',
			            centeredSlides: true,
			            paginationClickable: true,
			            spaceBetween: 12,
			            loop: true,
			            autoplay: 5000,
			            autoplayDisableOnInteraction: false
			        });
	        
				})
			});
			proList({params:{areaId: 11,pageSize: 40}}).then(res => {
				this.proList = res.attributes.resultList;
				if(this.proList.length % 3 == 1){
					this.proList.splice(this.proList.length-1, 1);
				}
				if(this.proList.length % 3 == 2){
					this.proList.splice(this.proList.length-2, 2);
				}
			});
			
		}
	}

}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
.swiper-container-c2 {
	height: pxTorem(317) !important;
	margin-top: $gauge;
	.swiper-slide {
		width: pxTorem(687) !important;
		border-radius: 16px;
	}
}
.recharge-list {
	padding: $gauge .3rem 0 .3rem;
	li {
		background-color: #f8f8f8;
	    border-radius: .3rem;
		margin: 0 .3rem;
		padding: 1.1rem 0;
    	// padding: .8rem 0;
	}
		
	img {
		width: pxTorem(54);
		margin: 0 auto;
	}
}

</style>