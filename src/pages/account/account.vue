<template>
	<div class="banner-account" id="accountList">
		<div class="credit-top center-text" ref="banner">
	        <div class="credit-num">
	            <p>当前e{{eIndex === 0? '币':'购'}} 总额</p>
	            <h1>{{eIndex === 0? ebi:ebuy}}</h1>
				      <p v-if="eIndex === 0"><i class="icon-clock"></i>您有{{expireIntegral}}e币将在今年12月31日到期</p>
	        </div>
			<div class="two-btn">
				<router-link class="btn-border btn-recharge" :to="{path:'/ticket',query:{tckType:1}}">e{{eIndex === 0? '币':'购'}}充值</router-link>
				<router-link v-if="eIndex === 0" class="btn-border" to="/redpacketCharge">红包兑换</router-link>
			</div>
	        
	  </div>

		<div class="credit-detail" v-for="(month, k) in monthList" :key="k">
			<div class="account-title list-box bg-gray">
				<div class="list-info-v" >
					<h5>{{month.monthName}}</h5>
					<div class="font-gray">
						<span style="margin-right: 50px">收入：{{month.incomeTotal}}</span>
						<span>支出：{{month.consumeTotal}}</span>
					</div>
				</div>	
				<i class="icon-date" @click="showDialog = !showDialog"></i>
			</div>

			<ul>
				<li class="border-bottom" v-for="(item, i) in month.list" :key="i">
          <router-link class="list-box" :to="{path:'/account/accountDetail', query:{id: item.id, type: eIndex, actionType: item.actionType} }">
              <img v-if="item.actionType === 'ticket_exchange'" class="account-img" src="../../assets/images/a6.png">
              <img v-else-if="item.actionType === 'shop_exchange_oil'" class="account-img" src="../../assets/images/a4.png">
              <img v-else-if="item.actionType === 'shop_exchange_media'" class="account-img" src="../../assets/images/a3.png">
              <img v-else-if="item.actionType === 'shop_exchange_fare'" class="account-img" src="../../assets/images/a1.png">
              <img v-else-if="item.actionType === 'shop_exchange_flow'" class="account-img" src="../../assets/images/a10.png">
              <img v-else-if="item.actionType === 'shop_exchange_produt'" class="account-img" src="../../assets/images/a5.png">
              <img v-else-if="item.actionType === 'shop_exchange_card'" class="account-img" src="../../assets/images/a9.png">
              <img v-else-if="item.actionType === 'eb_to_redpackage'" class="account-img" src="../../assets/images/a2.png">
              <img v-else class="account-img" src="../../assets/images/a7.png">

              <div class="list-info-v">
                <h5>{{item.actionTitle}}</h5>
                <p>{{item.opTimeString}}</p>
              </div>
              <h5  v-if="eIndex === 0" :class="[item.opType==1?'plus':'minus']">{{item.opType==1?'+':'-'}}{{item.ecoin}}</h5>
              <h5 v-if="eIndex === 1" :class="[item.opType==1?'plus':'minus']">{{item.opType==1?'+':'-'}}{{item.ebuy}}</h5>
          </router-link>
    
				
				</li>
			</ul>
		</div>
		
		
		<!-- 加载更多 -->
		<load-more v-if="loadmore" :isLoading="isLoading" :noData="noData" @loadMore="loadMore"></load-more>

		<div v-if="totalList.length==0 && !isLoading" class="nothing">
			<img src="../../assets/images/nothing.png" >
			<p class="font-gray">暂无数据</p> 
		</div>
	     
	    
		<div class="fixed-bottom">
	        <ul class="flex-layout nav-bar border-top">
	            <li :class="['border-right', eIndex===i? 'active':'']" v-for="(item, i) in eList" @click="getOtherList(i)" :key="i">
	                <a>{{item}}</a>
	            </li>
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
	            	<p class="btn-pure-theme" @click="checkData">查询</p>
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
import { accountNew, statisticsIntegral } from "/api/api";
import alertTip from "/components/alertTip";
import loadMore from "/components/loadMore";

export default {
  data() {
    return {
      ebi: 0, //e币总和
      ebuy: 0, //e购总和
      expireIntegral: 0, //快过期e币
      eIndex: 0, //0为e币，1为e购
      eList: ["e币明细", "e购明细"],
      monthList: [], //每月数据数组
      totalList: [], //总数据
      monthIdx: 0,
      statisticsData: {}, //统计数据
      showDialog: false, //是否显示遮罩
      showAlertTip: false, //是否显示弹窗
      beginTime: "", //input开始时间
      endTime: "", //input结束时间
      beginTime1: "", //确认后的开始时间
      endTime1: "", //确认后的结束时间
      queryType: "ecoin",
      queryTime: "", //查询日期
      isLastPage: false,
      page: 1,
      isFixed: [],//标题是否固定
      loadmore: true, //显示加载更多
      isLoading: true,
      noData: false
    };
  },
  components: {
    alertTip,
    loadMore
  },
  mounted() {
    document.title = "我的账户";
    this._initData();
    // window.addEventListener("scroll", this.scrollToFixed); //滚动判断定位
    this.$nextTick(() => {
      window.scrollTo(0, 1);
      window.scrollTo(0, 0);
    });
  },
  //离开页面移除事件
  // beforeDestroy() {
  //       window.removeEventListener('scroll', this.scrollToFixed);
  //   },
  methods: {
    _initData() {
      // 获取e币
      statisticsIntegral({
        params: {
          startDate: this.beginTime1,
          endDate: this.endTime1,
          queryTime: this.queryTime,
          queryType: this.queryType
        }
      }).then(res => {
          if(res.result) {
            this.ebi = res.data.totalECoin;
            this.ebuy = res.data.totalEBuy;
            this.expireIntegral = res.data.expireIntegral;
          }

          if (this.$route.query.type) {
            this.eIndex = Number(this.$route.query.type);
          } else {
            this.eIndex = Number(0);
          }
          this.getOtherList(this.eIndex);
      });
    },
    //切换选项卡
    getOtherList(i) {
      this.eIndex = i;
      if (i == 0) {
        this.queryType = "ecoin";
      } else {
        this.queryType = "ebuy";
      }
      this.beginTime1 = ""; //清除日期搜索
      this.endTime1 = "";
      let params = {
        params: {
          startDate: this.beginTime1,
          endDate: this.endTime1,
          pageNo: 1,
          queryType: this.queryType,
          pageSize: 10
        }
      };
      accountNew(params).then(res => {
        let data = res.data.resultList;
        if(data.length != 0) {
          this.resetList(data[0].title); //重置内容
        } else {
          this.resetList('本月'); //无数据
        }
        
      })
 
    },
    // 获取数据
    _getAccountList(flag) {
      let params = {
        params: {
          startDate: this.beginTime1,
          endDate: this.endTime1,
          pageNo: this.page,
          queryType: this.queryType,
          pageSize: 10
        }
      };
      accountNew(params).then(res => {
        let data = res.data.resultList;
        this.isLastPage = res.data.isLastPage;
        if(flag) {
           this.totalList = [...this.totalList, ...data]; //总数据 
        } else {
            this.totalList = data; //总数据
        }
    
        if (res.result) {
          if (this.beginTime1 && this.endTime1) {
            //按日期查询
            this.monthList[0].list = this.totalList;           
          } else {
            //查看所有数据
            // if (!flag && data.length <= 1) {
            //   //只有一条数据
            //   this.monthList[0].list = data;
            // } else {
              // if (data.length == 1) {
              //   //最后一个列表只剩一条数据
              //   let listLen = this.monthList[this.monthIdx].list.length;
              //   this._getMonthList(
              //     this.monthList[this.monthIdx].list[listLen - 1].title,
              //     data[0].title,
              //     data[0]
              //   );

              // } else {
              //   for (let i = 1; i < data.length; i++) {
              //     if(i == 1) {
              //       this.monthList[this.monthIdx].list.push(data[0]);
              //     }
              //     this._getMonthList(data[i - 1].title, data[i].title, data[i]);
              //   }
              // }
               
                for (let i = 0; i < data.length; i++) {
                  if(i == 0) {
                    if(flag) {//翻页
                     let listLen = this.monthList[this.monthIdx].list.length;//与前一页最后一条数据对比
                      this._getMonthList(
                          this.monthList[this.monthIdx].list[listLen - 1].title,
                          data[0].title,
                          data[0]
                        );
                    } else {//第一页
                       if(data.length != 0) {
                         this.monthList[this.monthIdx].list.push(data[0]);
                       }
                       
                    }   
                  } else {
                    this._getMonthList(data[i-1].title, data[i].title, data[i]);
                  }
                  
                }  
             
            // }
          }
        } else {
          //信息错误
          this.showHideAlert(res.resultMsg);
        }
        this.isLoading = false;
        if (this.totalList.length == 0) {
          //无商品列表
          this.loadmore = false;
        } else if (!this.isLastPage) {
          this.noData = false;
        } else {
          //最后一页
          this.noData = true;
        }
      });
    },
    //获取不同月份的数据
    _getMonthList(month1, month2, data) {
      if (month1 != month2) {
        //不同月份的数据新增一个数租长度
        this.monthList.push(this.statisticsData[month2]);
        // this.isFixed.push(false);
        this.monthIdx++;
        this.monthList[this.monthIdx] = Object.assign(
          this.monthList[this.monthIdx],
          { list: [], monthName: month2 }
        );
      }
      this.monthList[this.monthIdx].list.push(data);
    },
    // 点击查询按钮
    checkData() {
      if (this.endTime === "" || this.beginTime === "") {
        this.showHideAlert("日期不能为空");
      } else if (this.endTime <= this.beginTime) {
        this.showHideAlert("结束日期必须大于开始日期");
      } else {
        this.beginTime1 = this.beginTime;
        this.endTime1 = this.endTime;
        this.showDialog = false;
        this.resetList(this.beginTime1 + "至" + this.endTime1); //重置内容
      }
    },
    // 重置内容或初始化
    resetList(title) {
      this.page = 1;
      this.loadmore = true;
      this.isLoading = true;
      this.noData = false;
      this.monthList = [];
      this.isFixed = [];
      this.monthIdx = 0;
      statisticsIntegral({
        params: {
          startDate: this.beginTime1,
          endDate: this.endTime1,
          queryTime: this.queryTime,
          queryType: this.queryType
        }
      }).then(res => {
        // console.log(res.data.monthIntegralStatisticsData)
        if(JSON.stringify(res.data.monthIntegralStatisticsData) != "{}") {//有数据
            this.statisticsData = res.data.monthIntegralStatisticsData;
           
            this.monthList[0] = this.statisticsData[title];
            this.monthList[0] = Object.assign(this.monthList[0], {
              list: [],
              monthName: title
            }); //拼接对象
        } else {
            this.monthList[0] = Object.assign({
              consumeTotal: 0,
              incomeTotal: 0
            }, {
              list: [],
              monthName: title
            });
        }
        
        // this.isFixed.push(false);
        this.totalList = [];
        this._getAccountList();
      });
    },

    //滚动监听位置信息
    // scrollToFixed() {
       
    //    for(let i=0; i<this.monthList.length; i++) {
    //        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //       var offsetTop = document.querySelector('#title'+i).scrollTop;
    //       var titleHeight = document.querySelector('#title0').offsetHeight;
    //       if (offsetTop >= titleHeight) {
    //         this.isFixed.forEach((item, idx) => {
    //           item = false;
    //         })
    //          this.isFixed[i] = true;
    //       } else {
    //          this.isFixed[i] = false;
    //       }
    //    }
    // },
    //加载更多
    loadMore() {
      if (!this.isLastPage) {
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
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.banner-account {
  margin-bottom: 44px;
}
.account-title {
  padding: 0.3rem 0.5rem;
  line-height: 1rem;
}
.fixed-title {
  position: fixed;
  top: 0;
  z-index: 2;
}
.credit-top {
  background: url(../../assets/images/account_bg.png) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  overflow: hidden;
  // position: fixed;
  // z-index: 3;
  top: 0;
  width: 100%;
  height: pxTorem(320);
  h1 {
    font-size: 1.8rem;
    line-height: 1.8rem;
  }

  .btn-border {
    width: 6rem;
    @include semicircle(1.8rem);
    color: #fff;
    margin: 0.5rem;
    border-color: #fff;
    // flex: auto !important;
    // -webkit-flex: auto !important;
    // -webkit-box-flex: auto !important;
  }
  .btn-recharge {
    background-color: rgba(255, 255, 255, 0.8);
    color: $color-theme;
    border: none;
  }
}
.fixed-bottom {
  background-color: #fff;
}
.account-img {
  @include circle(2.5rem);
  margin-right: 0.5rem;
}

.credit-num {
  margin-top: 8px;
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
  .minus {
    color: #7bd1ab;
  }
  .plus {
    color: #ffaf24;
  }
}
.nav-bar {
  .active a {
    color: $color-theme;
  }
}
.icon-clock {
  font-size: 18px;
  margin-right: 0.3rem;
}
.icon-date {
  font-size: 24 px;
}
</style>