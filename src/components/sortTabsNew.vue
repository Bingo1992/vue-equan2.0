<template>
	<div>
		<!-- //排序，筛选 -->
	    <div class="sort-box border-top" v-if="sortIndex == 0" style="height: 15rem;">
			<ul v-if="isArea"  class="box-cnt">
				<li @click="getProSort2('全部分类','', 0)">
	        		<span>全部分类</span>
	        	</li>
			</ul>
			<ul v-if="!isArea" class="box-cnt1">
	        	<li :class="{'active': sortProIndex==i}" v-for="(item, i) in sortList"
				 @click="getProSort1(item.classifyName, item.id, i)" :key="i">
	        		<span>{{item.classifyName}}</span>
	        	</li>
	        </ul>
			<ul v-if="!isArea" class="box-cnt2">
	        	<li v-for="(item, i) in sortList3"
				 @click="getProSort2(item.classifyName, item.id, i)" :key="i">
	        		<span>{{item.classifyName}}</span>
	        	</li>
	        </ul>

	        <!-- <ul class="box-cnt1">
				<li class="active" v-if="isArea" @click="getProSort1('全部分类','', 0)">
	        		<span>全部分类</span>
	        	</li>
	        	<li v-if="!isArea" :class="{'active': sortProIndex==i}" v-for="(item, i) in sortList"
				 @click="getProSort1(item.classifyName, item.id, i)" :key="i">
	        		<span>{{item.classifyName}}</span>
	        	</li>
	        </ul>
			<ul  class="box-cnt2">
				<li v-if="isArea" @click="getProSort2('全部分类','', 0)">
	        		<span>全部分类</span>
	        	</li>
	        	<li v-if="!isArea" v-for="(item, i) in sortList3"
				 @click="getProSort2(item.classifyName, item.id, i)" :key="i">
	        		<span>{{item.classifyName}}</span>
	        	</li>
	        </ul> -->
	    </div>
		<div class="sort-box"  v-if="sortIndex == 1">
	        <div class="box-cnt">
	            <div>
	                <span>价格区间</span>
	                <div class="price-zone">
	                    <input class="low" type="number" placeholder="最低价格" v-model="lowPrice">
	                    <span>-</span>
	                    <input class="high" type="number" placeholder="最高价格" v-model="highPrice">
	                </div>
	            </div>
	            <div class="sort-price">
	                <span>价格排序</span>
	                <ul>
	                    <li v-for="(item, i) in sortList2" :class="{'active': sortPriceIndex==i}"
						 @click="getPriceSort(item.name, item.value, i)" :key="i"><span>{{item.name}}</span></li>
	                </ul>
	            </div>
	            <div class="flex-layout price-btn">
	                <p class="btn-cancel" @click="resetBtn">重置</p>
	                <p class="btn-sort-confirm btn-theme" @click="confirmBtn">确定</p>
	            </div>
	        </div>
	    </div>

	    <div class="ui-dialog" @click="closeDialog()"></div>

	    <alert-tip v-if="showAlertTip" :alertText="alertText"></alert-tip>
	</div>
		
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {sortList} from '/api/api'
import alertTip from '/components/alertTip'

export default {
	name: 'sortTabs',
	data() {
		return {
			// sortList1: [{
			// 	classifyName: '全部分类',
			// 	id: '',
			// }, {
			// 	classifyName: '汽车用品',
			// 	id: 1,
			// }, {
			// 	classifyName: '超市卡券',
			// 	id: 2,
			// }, {
			// 	classifyName: '汽车用品',
			// 	id: 1,
			// }, {
			// 	classifyName: '超市卡券',
			// 	id: 2,
			// }, {
			// 	classifyName: '汽车打蜡',
			// 	id: 3,
			// }, {
			// 	classifyName: '生活服务',
			// 	id: 4,
			// }],
			// sortList3: [{
			// 	classifyName: '全部分类',
			// 	id: '',
			// }, {
			// 	classifyName: '汽车用品',
			// 	id: 1,
			// }, {
			// 	classifyName: '超市卡券',
			// 	id: 2,
			// }, {
			// 	classifyName: '汽车打蜡',
			// 	id: 3,
			// }, {
			// 	classifyName: '生活服务',
			// 	id: 4,
			// }],
			sortList3: [],
			sortList2: [{
				name: '价格从高到低',
				value: 1
			}, {
				name: '价格从低到高',
				value: 2
			}],
			sortPriceIndex: null,//价格筛选索引
			odByName: '价格',
			odByVal: '',
			lowPrice: '',
			highPrice: '',
			showAlertTip: false,
			levelOneId: '',
			levelOneIdx: 0,
			isArea: false
		}
	},
	props: ['sortIndex'],
	created() {
		this._initData();
	},
	components: {
        alertTip
      },
	computed: {
		...mapState(['sortProIndex', 'sortList','oneId'])
	},
	methods: {
		...mapMutations(['CHOOSE_PROSORT', 'INIT_SORTLIST', 'CHOOSE_LEVERONEID', 'CHOOSE_LEVERTWOID']),
		_initData() {
			if(this.$route.query.areaId) {//从专区进入
				// this.CHOOSE_PROSORT({sortPro: this.sortList1[0].classifyName, index: 0});
				this.CHOOSE_PROSORT({sortPro: '全部分类', index: 0});
				this.isArea = true;
			
			} else {
				if(this.sortList.length == 0) {
					this._getSortList();
				} else {
					this._getSecondSort();
				}
				// this.CHOOSE_LEVERID({oneId: this.$route.query.levelOneCid, twoId: this.$route.query.levelTwoCid});
				
			}
			
			// sortList().then(res => {
			// 	this.sortList1 = res.obj;
			// 	if(!this.$route.query.levelTwoCid) {//从专区进入
			// 		// this.CHOOSE_PROSORT({sortPro: this.sortList1[0].classifyName, index: 0});
			// 		this.CHOOSE_PROSORT({sortPro: '全部分类', index: -1});
			// 	}
				
			// });
		},
		closeDialog() {
			this.$emit('closeDialog');
		},
		// 一级分类
		getProSort1(name, id, i) {
			this.CHOOSE_PROSORT({sortPro: name, index: i});
			this.CHOOSE_LEVERONEID(id);
			this.levelOneId = id;
			this.levelOneIdx = i;
			this.sortList3 = [];
			let list = this.sortList[i].subGoodsClassifyList;
            list && list.forEach((item, index) => {
                if(item.parentId == id) {
                    this.sortList3.push(item);
                }
            })
			// this.CHOOSE_PROSORT({sortPro: name, index: i});
		},
		// 二级分类
		getProSort2(name, id, i) {
			this.CHOOSE_PROSORT({sortPro: name, index: this.levelOneIdx? this.levelOneIdx: this.sortProIndex});
			if(this.oneId == '') {
				this.CHOOSE_LEVERONEID(this.$route.query.levelOneCid);
			}
			this.CHOOSE_LEVERTWOID(id);
			// this.CHOOSE_LEVERID({oneId: this.levelOneId? this.levelOneId: this.$route.query.levelOneCid, twoId: id});
	
			this.$emit('sortType', this.levelOneId, id);
			this.$emit('closeDialog');
		},
		// 价格筛选
		getPriceSort(name, value, i) {
			this.sortPriceIndex = i;
			this.odByName = name;
			this.odByVal = value;
		},
		// 确定按钮
		confirmBtn() {
			if(Number(this.lowPrice) > Number(this.highPrice)) {
				this.showHideAlert('最低价不能高于最高价');
			} else {
				this.$emit('sortPrice', this.odByName, this.odByVal, this.lowPrice, this.highPrice);
				this.$emit('closeDialog');
			}
		},
		// 重置
		resetBtn() {
			this.odByName = '价格'
			this.lowPrice = '';
			this.highPrice = '';
			this.odByVal = '';
			this.sortPriceIndex = null;
			this.$emit('sortPrice',  this.odByName, this.odByVal, this.lowPrice, this.highPrice);
			this.$emit('closeDialog');
		},
		//显示弹窗
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
		},
		
		//获取分类列表数据
		_getSortList() {
			sortList().then(res => {
				this.INIT_SORTLIST(res.obj);
				this._getSecondSort();
			});
		},
		// 获取二级分类
		_getSecondSort() {
			// this.showLoading = false;
			if(this.sortProIndex) {
				this.sortList.forEach((item, i) => {
					if(this.sortProIndex == i) {
						this.sortList3 = this.sortList[i].subGoodsClassifyList;//根据一级索引获取二级分类
					}
				})
			} else {
				this.sortList3 = this.sortList[0].subGoodsClassifyList;//根据一级索引获取二级分类
			}
			
			// this.sortList2.forEach((item, i) => {
			// 	if(this.$route.query.id == item.id) {
			// 		this.CHOOSE_PROSORT({sortPro: this.sortList[0].classifyName, index: 0});
			// 	}
			// })
			
			
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/var.scss';
.ui-dialog {
	@extend %fixed-body;
	background: rgba(246,247,249,.95);
	z-index: 3;
}
.sort-box {
    position: fixed;
    top: 83px;
    left: 0;
	width: 100%;
	// max-height: 15rem;
	background-color: #fff;
	overflow: hidden;
    margin: 0;
    z-index: 4;
    // display: none;
    .active, .active .font-gray {
	    color: #2dd3c8 !important;
		background-color: #fff;
	}
}
.box-cnt1, .box-cnt2 {
	float: left;
	width: 50%;
	height: 15rem;
	overflow-y: auto;
	line-height: 50px;
	li {
		padding: 0 20px;
	}
}
.box-cnt1 {
	background-color: #f6f6f6;
}
.box-cnt2 {
	background-color: #fff;
}
.box-cnt {
    background-color: #fff;
    position: relative;
    z-index: 4;
    line-height: 50px;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
}
.sort-price .active{
    background: #f2f3f5;   
}
.sort-price {
	ul,li {
		display: inline-block;
	}
	li {
		display: inline-block;
	    line-height: 30px;
	    border-radius: 30px;
	    padding: 0 10px;
	    margin-left: 10px;
	}
}
.price-zone {
    display: inline-block;
    margin-left: 10px;
    input {
	    height: 30px;
	    line-height: 30px;
	    width: 98px;
	    border-radius: 2px;
	    background-color: #f2f3f5;
	    padding: 0 10px;
	    display: inline-block;
	    vertical-align: middle;
	}
}	
.price-btn {
    margin-left: -10px;
    margin-top: 10px;
    [class^='btn-'] {
	    width: 50%;
	    text-align: center;   
	    line-height: 50px;
	}
	.btn-cancel {
	    background-color: #eee;
	}
}
</style>