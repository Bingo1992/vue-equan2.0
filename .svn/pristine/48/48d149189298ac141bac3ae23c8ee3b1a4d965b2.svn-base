<template>
	<div :class="['banner-bt-p', params.areaId == ''? '' : 'banner-bt-pp']">
		<!-- <loading v-if="showLoading"></loading> -->
		<div id="proList">
			<!-- 头部 -->
			<div class="fixed-top  bg-show">
				<ul class="sort-tabs flex-layout">
		            <li v-for="(item, i) in sortList" @click="chooseSort(i)" :key="i">
		                <p>
		                    <span>{{i == 0? sortPro: odByName}}</span>
		                    <i :class="[sortIndex == i?'icon-arrow-up font-theme':'icon-arrow-down']"></i>
		                </p>

		            </li>
		        </ul>
			</div>

			<!-- 筛选遮罩 -->
			<sort-tabs v-show="sortIndex != null" :sortIndex="sortIndex" @closeDialog="closeDialog" @sortPrice="sortPrice" @sortType="sortType"></sort-tabs>

			<!-- 商品列表 -->
			<product v-if="proList.length" :proList="proList" :areaID="params.areaId"></product>

			<!-- 加载更多 -->
			<load-more v-if="loadmore" :isLoading="isLoading" :noData="noData" @loadMore="loadMore"></load-more>
	
			<div v-if="proList.length==0 && !isLoading" class="nothing">
		        <img src="../../assets/images/nothing.png" >
		        <p class="font-gray">暂时找不到该商品，我们会尽量引进更多商品</p> 
		    </div>

		    <!-- 进入详情页 -->
			<transition name="router-slid" mode="out-in">
		    	<router-view></router-view>
		    </transition>
		</div>
			
	     <div v-if="params.areaId == ''" class="fixed-bottom bg-show">
	    	<footer-nav></footer-nav>
	    </div>

		<!-- 购物车+返回顶部按钮 -->
		<div class="fixed-right">
			<router-link to="/cart">
				<i class="icon-cart"></i>
				<cart-num class="semiCirclePoint"></cart-num>
			</router-link>
			<a href="#proList"><i class="icon-top"></i></a>
		</div>

	</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {proList, areaTitle} from '/api/api'
import FooterNav from '/components/footer'
import product from '/components/product'
import sortTabs from '/components/sortTabs'
import loading from '/components/loading'
import loadMore from '/components/loadMore'
import cartNum from '/components/cartNum'

export default {
	name: 'productList',
	data() {
		return {
			showLoading: true,
			sortList: ['全部分类', '价格'],
			timer: null,
			count: 0,			
			proList: [],
			searchVal: '', // 搜索内容
			params: {
				areaId: '',
				showType: '', //分类
				odBy: '',//价格排序
				pName: '', //搜索
				vFrom: '',//最低价
				vTo: '',//最高价
				page: 1, //页数
			},
			odByName: '价格',
			sortIndex: null,//点击的筛选类型
			isLastPage: false,
			loadmore: true,//显示加载更多
			isLoading: true,
			noData: false
		}
	},
	components: {
	    product, loading, sortTabs, loadMore, cartNum, FooterNav
	},
	computed: {
		...mapState(['sortPro']),

	},
	created() {
		this.CHOOSE_PROSORT({sortPro: '全部分类', index: 0});//第一次进入是全部分类
		this._initData();
	},
	methods: {
		...mapMutations(['CHOOSE_PROSORT']),

		_initData() {
			
			//从专区进入
			if(this.$route.query.areaId) {
				this.params.areaId = this.$route.query.areaId;
			}
			this.titleChange();
			//获取商品列表
			this._getProList();
		
			
		},
		//获取商品列表
		_getProList(flag) {
			let params = {
	          params: {
	          	goodsClassifyId: this.params.showType,//商品分类
	          	odBy: this.params.odBy,//价格排序
	            pName: this.params.pName,//搜索
	            vFrom: this.params.vFrom,//最低价
	            vTo: this.params.vTo,//最高价
	            pageNo: this.params.page //页数
	          }
	        }
	     	if(this.params.areaId) {
	     		params.params.areaId = this.params.areaId;
			 }

			proList(params).then(res => {
				let data = res.attributes.resultList;	
				this.isLastPage = res.attributes.isLastPage; //最后一页	
				// this.$nextTick(() => {
    //                 window.scrollTo(0,1);
    //                 window.scrollTo(0,0);
    //             })
				if(flag) {
					this.proList = [...this.proList, ...data];
				} else {
					this.proList = data;
				}
				this.isLoading = false;
				if(this.proList.length == 0) {//无商品列表
					this.loadmore = false;
				} else if(!this.isLastPage) {
					this.noData = false;
				} else {//最后一页
					this.noData = true;			
				}	
			
			});
		},
		
		//加载更多
		loadMore() {
			if(!this.isLastPage) {		
				// setTimeout(() => {
					this.params.page++;
					this.isLoading = true;
					this.noData = false;
					this._getProList(true);	
					
				// },300);
				
			} else {
				//结束
				this.isLoading = false;
				this.noData = true;
			}	
			 
		},
		// // 停止加载的样式
		// noScroll() {
		// 	// this.isLoading = false;
		// 	console.log('停止加载样式'+this.isLoading)
		// },
		//筛选弹窗
		chooseSort(i) {
			if(this.sortIndex != i) {
				this.sortIndex = i;
			} else {
				this.sortIndex = null;//关闭窗口
			}
		},
		//价格筛选
		sortPrice(odByName, odByVal, lowPrice, highPrice) {
			this.odByName = odByName;
			this.params.odBy = odByVal;
			this.params.vFrom = lowPrice;
			this.params.vTo = highPrice;
			this.params.page = 1;
			this.loadmore = true;
			this.isLoading = true;
			this.noData = false;
			this.proList = [];//商品列表置空
			this._getProList();
		},
		//商品分类
		sortType(sortType) {
			this.params.showType = sortType;
			this.params.pName = '';//重置搜索
			this.searchVal = '';
			this.resetSort();
		},

		// 搜索商品
		searchTarget(pName) {
			this.params.pName = pName;
			this.resetSort();
			this.$refs.searchInput.blur();
		},
		//重置筛选内容
		resetSort() {
			this.odByName = '价格';//重置价格排序
			this.params.odBy = '';
			this.params.vFrom = '';
			this.params.vTo = '';
			this.params.page = 1;	
			this.proList = [];//商品列表置空
			this.loadmore = true;
			this.isLoading = true;
			this.noData = false;
			this._getProList();
		},
		// 关闭遮罩
		closeDialog() {
			this.sortIndex = null;
		},
		titleChange() {
			 if(this.$route.query.areaId && !this.$route.query.productid) {
				 this.params.areaId = this.$route.query.areaId;
				areaTitle({params:{areaId: this.params.areaId}}).then(res => {
					document.title = res.obj.name;
				})
			} else {
				document.title = "商品列表";
			}
			
		}
			
	},
	watch: {
		'$route': 'titleChange'
	}

}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.banner-bt-p {
    margin-top: 41px;
    margin-bottom: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
.banner-bt-pp {
    margin-bottom: 0;
}
#proList {
	margin-top: -41px;
	padding-top: 41px;
	// position: absolute;
 //    width: 100%;
 //    height: 100%;
 //    left: 0; 
}
.sort-tabs {
	p {
		width: 100%;
	}
	i {
		font-size: $md-font;
		color:  #e3e3e3;
	}
}
</style>