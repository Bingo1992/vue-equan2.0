<template>
	<div id="accountList" class="banner-b">
		<div class="credit-top">
	        <div class="search" @click="showDialog = !showDialog">
	            <i class="icon-search"></i>
	            <span>按日期查询</span>
	        </div>
	        <div class="credit-num">
	            <p>e{{eIndex === 0? '币':'购'}} 总额</p>
	            <h1>{{eIndex === 0? ebi:ebuy}}</h1>
	        </div>
	        <router-link class="btn-recharge" :to="{path:'/ticket',query:{tckType:1}}">e{{eIndex === 0? '币':'购'}}充值</router-link>
	    </div>

	    <!-- 输入查询日期结束 -->
	    <article class="bg-mgShow">
	        <div class="credit-title border-bottom">
	            <p>{{ beginTime != '' && endTime != '' ? beginTime1 + '至' + endTime1 :'7天内'}}交易情况</p>
	        </div>
	        <table class="credit-detail border-bottom">
	            <thead>
	                <tr>
	                    <th>交易日期</th>
	                    <th>交易描述</th>
	                    <th>额度变动</th>
	                </tr>
	            </thead>
	            <tbody>
	                <tr v-for="(item, i) in accountList" :key="i">
	                    <td>{{item.opTime}}</td>
	                    <td>{{item.remark}}</td>
	                    <td v-if="eIndex === 0" :class="[item.opType==1?'plus':'minus']">{{item.opType==1?'+':'-'}}{{item.opVal}}</td>
	                    <td v-if="eIndex === 1" :class="[item.opType==1?'plus':'minus']">{{item.opType==1?'+':'-'}}{{item.opEbuyVal}}</td>
	                </tr>
	               <!--  <tr>
	                    <td>2015-12-24</td>
	                    <td>加油服务</td>
	                    <td class="plus">+100</td>
	                </tr>
	                <tr>
	                    <td>2015-12-24</td>
	                    <td>中石化燃油宝</td>
	                    <td class="minus">-20</td>
	                </tr> -->
	            </tbody>
	        </table>
	        
	        <!-- 加载更多 -->
			<load-more v-if="loadmore" :isLoading="isLoading" :noData="noData" @loadMore="loadMore"></load-more>

			<div v-if="accountList.length==0 && !isLoading" class="nothing">
		        <img src="../../assets/images/nothing.png" >
		        <p class="font-gray">暂无数据</p> 
		    </div>
	    </article>
	    
		<div class="fixed-bottom">
	        <ul class="flex-layout nav-bar border-top">
	            <li :class="['border-right', eIndex===i? 'active':'']" v-for="(item, i) in eList" @click="getOtherList(i)" :key="i">
	                <a>{{item}}</a>
	            </li>
	           <!--  <li>
	                <a>e购明细</a>
	            </li> -->
	        </ul>
	    </div>


	    <!-- 输入查询日期 -->
	    <transition name="router-slid" mode="out-in">  
		    <div v-if="showDialog" class="time-list fixed-body">
	            <a class="list-box border-bottom" @click="showDialog = !showDialog">
	                <i class="icon-left"></i> 
	                <span class="font-gray">返回</span>
	            </a>
	            <ul class="border-list">
	                <li>
	                    <label for="beginTime">选择开始时间</label>
	                    <input type="date" name="beginTime" placeholder="请输入查询时间段" v-model="beginTime">
	                    <i class="icon-right"></i>
	                </li>
	                <li>
	                    <label for="endTime">选择结束时间</label>
	                    <input type="date" name="endTime" placeholder="请输入查询时间段" v-model="endTime">
	                    <i class="icon-right"></i>
	                </li>
	            </ul>
	            <div class="btn">
	            	<p class="btn-theme" @click="checkData">查询</p>
	            </div>
		    </div>
		</transition>

		 <!-- 提示弹窗 -->
        <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
          
		
       <!-- 返回顶部按钮 -->
      <div class="fixed-right">
        <a href="#accountList"><i class="icon-top"></i></a>
      </div>

		<!-- 进入详情页 -->
		<transition name="router-slid" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
import {account, integral} from '/api/api'
import alertTip from '/components/alertTip'
import loadMore from '/components/loadMore'

export default {
	data() {
		return {
			ebi: 0,//e币总和
			ebuy: 0,//e购总和
			eIndex: 0,//0为e币，1为e购
			eList: ['e币明细', 'e购明细'],
			accountList: [],// 账户列表account
			showDialog: false,//是否显示遮罩
			showAlertTip: false,//是否显示弹窗
			beginTime: '',//input开始时间
			endTime: '',//input结束时间
			beginTime1: '',//确认后的开始时间
			endTime1: '',//确认后的结束时间
			queryType: 'ecoin',
			isLastPage: false,
			page: 1,
			loadmore: true,//显示加载更多
			isLoading: true,
			noData: false
		}
	},
	components: {
        alertTip, loadMore
    },
    mounted() {
    	document.title = "我的账户";
    	this._initData();
		this.$nextTick(() => {
			window.scrollTo(0,1);
			window.scrollTo(0,0);
		});
	
    },
    methods: {
    	_initData() {
    		//获取7天内的数据
    		// let nowDate = new Date();
    		// this.beginTime1 = nowDate.toLocaleDateString();//当前日期
    		// nowDate.setDate(nowDate.getDate() -7);
    		// this.endTime1 = nowDate.toLocaleDateString();//七天前
    		// 获取e币
    		integral().then(res => {
    			this.ebi = res.attributes.ecoin;
    			this.ebuy = res.attributes.ebuy;
    		});
    		if(this.$route.query.type) {
    			this.eIndex =  Number(this.$route.query.type);
    		} else {
    			this.eIndex = Number(0);
    		}
    		this.getOtherList(this.eIndex);
    		// this._getAccountList();//获取7天内数据
    	},
    	//切换选项卡
    	getOtherList(i) {
    		this.eIndex = i;
    		if(i == 0) {
    			this.queryType = "ecoin";
    		} else {
    			this.queryType = "ebuy";
    		}

    		this.resetList();//重置内容
    		this._getAccountList();
    	},
    	_getAccountList(flag) {
    		let params = {
    			params: {
    				beginDate: this.beginTime1,
    				endDate: this.endTime1,
    				pageNo: this.page,
    				queryType: this.queryType,
    				pageSize: 15
    			}
    		};
    		account(params).then(res => {
    			let data = res.resultList;
    			this.isLastPage = res.isLastPage;
    		
    			if(res.resultCode == 200) {
    				if(flag) {
		    				this.accountList = [...this.accountList, ...data];
		    			} else {
		    				this.accountList = data;
		    			}
    			} else {
    				this.showHideAlert(res.resultMsg);
    			}
		    	this.isLoading = false;		
				if(this.accountList.length == 0) {//无商品列表
					this.loadmore = false;
				} else if(!this.isLastPage) {
					this.noData = false;
				} else {//最后一页
					this.noData = true;			
				}	
    		})
    	},
    	// 点击查询按钮
    	checkData() {
    		if(this.endTime === '' || this.beginTime === '') {
    			this.showHideAlert('日期不能为空');
    		} else if(this.endTime <= this.beginTime) {
    			this.showHideAlert('结束日期必须大于开始日期');
    		} else {
    			this.beginTime1 = this.beginTime;
    			this.endTime1 = this.endTime;
    			this.showDialog = false;
    			this.resetList();//重置内容
    			this._getAccountList(); 
    		}
    	},
    	// 重置内容
    	resetList() {
			this.page = 1; 
			this.loadmore = true;
			this.isLoading = true;
			this.noData = false;
			this.accountList = [];
    	},
    	//加载更多
		loadMore() {
			if(!this.isLastPage) {		
				this.page++;
				this.isLoading = true;
				this.noData = false;
				this._getAccountList(true);	
			} else {
				//结束
				this.isLoading = false;
				this.noData = true;
			}	
		},
    	//显示弹窗
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
.fixed-bottom {
	background-color: #fff;
}
.credit-top {
    background-color: $color-theme;
    color: #fff;
    overflow: hidden;
    position: relative;
    .search {
	    text-align: right;
	    padding: .5rem .5rem 0 0;
	    width: 100%;
	    box-sizing:border-box;
	}
	.btn-recharge {
	    position: absolute;
	    bottom: .5rem;
	    right: .8rem;
	    border: 1px solid #fff;
	    padding: 4px 8px;
	    border-radius: 2px;
	    color: #fff;
	}
}
.credit-num {
	margin: $gauge;
}

.time-list {
	background-color: #fff;
    li {
    	padding: 0 $gauge;	
    	line-height: 44px;
    }

	input {
	    position: absolute;
	    top: 0;
	    left: 0;
	    padding-left: 6.5rem;
	    width: 100%;
	    @include height(44px);
	}
	i.icon-right {
		float: right;
	}
}
.credit-title {
    color: #3aa3fb;
    line-height: 44px;
    padding-left: $gauge;
    p {
    	display: inline-block;
    }
}
.credit-detail {
    width: 100%;
    text-align: center;
    line-height: 40px;
    table-layout: fixed;
    th {
	    font-weight: normal;
	    position: relative;
	}
	td {
	    max-width: 100%;
	    position: relative;
	    color: #999;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: 12px;
	}
	.minus { color: #7bd1ab;}
	.plus { color: #ffaf24;}
}
.nav-bar {
	.active a {
		color: $color-theme;
	}
}
</style>