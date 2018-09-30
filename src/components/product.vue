<template>
	<ul :class="['pro-list', proThree? 'pro-list-1':'pro-list-2', activity?'pro-list-3':'']">
		<li v-if="item.state == 1" v-for="(item, i) in proList" :key="i" @click="gotoDetail(item.id)">
				<div :class="[proThree? 'pro-img-1':'pro-img-2']">
					<!-- <div class="imgLoad" :style="{ backgroundImage: 'url(' + getImgPath(item.pic.split(';')[0]) + ')' }"></div> -->
					<div v-if="item.areaId" class="imgLoad" :style="{ backgroundImage: 'url(' + getImgPath(item.showPic) + ')' }"></div>
					<div v-else class="imgLoad" :style="{ backgroundImage: 'url(' + getImgPath(item.showpic) + ')' }"></div>
					<!-- <img v-if="areaId ==  5" class="img-label" src="../assets/images/valentine.png"> -->
					<!-- <img v-if="item.supplierId ==  20 || item.supplierId ==  39 || item.supplierId ==  40" class="img-label" src="../assets/images/straight_pin_img.png"> -->
					
					<!-- <img v-lazy="getImgPath(item.pic)"> -->
					<!-- <div class="label">
						<span v-if="item.ebuy == 1" class="label-blue">e购</span>
						<span  class="label-orange">e币</span>
					</div> -->
					<img class="soldOut" v-if="item.count === 0" src="../assets/images/soldOut.png">
				</div>
				<h6 v-if="proThree" class="pro-title nowrap-2">
					<!-- <span v-if="item.ebuy == 1" class="label-red">支持e购</span>&nbsp; -->
					{{item.name}}
				</h6>
				<h5 v-else class="pro-title nowrap-2">
					<!-- <span v-if="item.ebuy == 1" class="label-red">支持e购</span>&nbsp; -->
					{{item.name}}
				</h5>
				<div class="price-small">
					<span class="font-orange">
						<i class="icon-coin"></i>
						{{item.cost}}
					</span>
					<s class="right-text font-gray">市场价￥{{item.price}}</s>
				</div>
				 <router-link v-if="activity" class="btn-pink" :to="{path:'/productDetail', query:{productid: item.id}}">立即购买</router-link>
		</li>
	</ul>
	
</template>
<script>
import { getImgPath } from './mixin'
import {mapState, mapMutations} from 'vuex'
// import loading from '/components/loading'
export default {
	name: 'proList',
	data() {
		return {
			areaId: -1
		}
	},
	props: ['proList','proThree','activity'],
	mixins: [getImgPath],
	computed: {
		...mapState(['oneId', 'twoId'])
	},
	mounted() {
		if(this.$route.query.areaId) {
			this.areaId = this.$route.query.areaId;
		}
	},
	methods: {
		gotoDetail(id) {	
			if(this.$route.query.areaId) {//专区进入	
				this.$router.push({path:'/proList/productDetail', query:{productid: id, areaId:this.$route.query.areaId}});
			} else if(this.$route.query.levelOneCid) {//分类进入
				this.$router.push({path:'/proList/productDetail', query:{productid: id, levelOneCid: this.oneId, levelTwoCid: this.twoId}});

			} else if(this.$route.path === '/home') {
				this.$router.push({path:'/home/productDetail', query:{productid: id}});
			} 
			else {
				this.$router.push({path:'/productDetail', query:{productid: id}});
			}
		}
	} 
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.unClick {
	pointer-events: none;
}
.imgLoad {
	// position: absolute;
	width: pxTorem(341);
	height: pxTorem(341);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f6f7f9;
    // object-fit: fill;
}
.soldOut {
	width: pxTorem(150) !important;
	height: pxTorem(150) !important;
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 3;
}
.pro-img-2 {
	position: relative;
}
.pro-img-1 {
	position: relative;
	.imgLoad {
		width: pxTorem(220);
		height: pxTorem(220);
	}
	.soldOut {
		width: pxTorem(120) !important;
		height: pxTorem(120) !important;
	}
	// [class^="label-"] {
	// 	position: absolute;
	// 	bottom: 4px;
	// 	left: 4px;
	// }
}
.proListThree {
	padding-bottom: 16px;
}
.pro-list-1 {
	justify-content: center;
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -webkit-justify-content: center;
	// padding: 0 pxTorem(32);
	// display: flex;
 //    flex-wrap: wrap;
	li {
		width: pxTorem(228);
		padding: 0 pxTorem(4);
		height: pxTorem(368);
		position: relative;
		// height: pxTorem(420);
	}
}
	
.pro-list-2 {
	padding: 0 pxTorem(14);	
	li {
		width: 50%;
		float: left;
		padding: 0 pxTorem(10);
		height: 12.5rem;
	}

    img {
    	height: pxTorem(341);
    }
}
.pro-list-3 {
	li {
		height: 14.2rem;
		position: relative;
	}	
}
@media screen and (max-width: 320px) {
	.pro-list-3 {
		li {
			height: 14.6rem;
		}	
	}
}
.img-label {
    position: absolute;
    bottom: 4px;
    left: 4px;
    height: auto !important;
    width: 3rem;
}
.btn-pink {
	position: absolute;
	bottom: .5rem;
	left: .5rem;
	right: .5rem;
	margin: 0;
    @include btnRadius(32px);
    // width: 9rem;
    border-radius: 32px;
    color: #fcff00;
    background: -webkit-linear-gradient(left, #ff86ab, #f21e86);
}
</style>