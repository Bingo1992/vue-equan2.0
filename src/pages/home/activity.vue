<template>
	<div class="bg-activity">	
        <loading v-if="showLoading"></loading>
        <div v-if="!showLoading">
            <p class="act-rules" @click="showConfirmDialog()">活动规则</p>
            <div class="activity-title-2">
                <h1>{{ecoin}}</h1>
                <p v-if="ecoin >= 1 && ecoin <= 19">蚊子再小也是肉，19e币的衣柜异味消了解一下</p>
                <p v-if="ecoin >= 20 && ecoin <= 49">余额不多，38e币的磁性手机支架来一个</p>
                <p v-if="ecoin >= 50 && ecoin <= 99">销量Top 1，98e币的飞科剃须刀你值得拥有</p>
                <p v-if="ecoin >=100 && ecoin <= 299">168e币的钻石牌机械风扇，陪你度过夏天的尾巴</p>
                <p v-if="ecoin >= 300">319e币的美的电压力锅，一锅多用，品尝舌尖上的美味</p>
                <p v-if="ecoin <= 0">经检测，您的账户状况非常良好，请继续保持哦！</p>
            </div>
            
            <div class="activity-pro">
                <!-- <img class="list-img-big" src="../../assets/images/activity/p4.png" alt=""> -->
                <div class="list-box">
                    <img class="list-img-big" :src="getUrlPath(list[type].src)">
                    <div class="list-info-v pdt">
                        <h5 class="nowrap-2">{{list[type].name}}</h5>
                        <p>
                            <span class="label-orange">{{list[type].label1}}</span>
                            <span class="label-blue">{{list[type].label2}}</span>
                        </p>
                        <h3 class="font-orange"><i class="icon-coin"></i>{{list[type].price}}</h3>
                        <router-link class="btn-pink" :to="{path:'/productDetail', query:{productid: list[type].id}}">立即购买</router-link>
                    </div>
                </div>
               
            </div>
        
            <!-- 活动规则 -->
            <!-- <dl class="activity-list-2 pd">
                 <dt>活动规则：</dt>
                 <dd class="md-font">1、2018年1月1日零点前兑换成功，充值到用户账户中的e币，若2018年年底前仍未消费，将统一在2019年1月1日零点统一从用户账户中扣除；</dd>
                 <dd class="md-font">2、本活动解释权归广州市景心科技股份有限公司所有。</dd>
            </dl> -->

            <!-- 商品列表   -->
            <div class="activity-list-2" v-for="(item, i) in areaList" :key="i">
                <div class="pdt pdr pdb">
                    <span class="activity-label">{{item.area}}e币余额</span>
                    <router-link class="font-orange fr" :to="{path: '/proList', query: {
                                    areaId: item.areaId}}">
                                    更多商品
                    </router-link>           
                </div>
                <product :proList="item.list" activity="true"></product>
            </div>

            <!-- <div class="activity-list">
                <div class="pdt pdr pdb">
                    <span class="activity-label">31-50e币余额</span>
                    <router-link class="font-orange fr" :to="{path: '/proList', query: {
                                    areaId: 5}}">
                                    更多商品
                    </router-link>           
                </div>
                <product :proList="proList2" activity="true"></product>
            </div>

            <div class="activity-list">
                <div class="pdt pdr pdb">
                    <span class="activity-label">50-99e币余额</span>
                    <router-link class="font-orange fr" :to="{path: '/proList', query: {
                                    areaId: 5}}">
                                    更多商品
                    </router-link>           
                </div>
                <product :proList="proList3" activity="true"></product>
            </div>

            <div class="activity-list">
                <div class="pdt pdr pdb">
                    <span class="activity-label">100-299e币余额</span>
                    <router-link class="font-orange fr" :to="{path: '/proList', query: {
                                    areaId: 5}}">
                                    更多商品
                    </router-link>           
                </div>
                <product :proList="proList4" activity="true"></product>
            </div>

            <div class="activity-list">
                <div class="pdt pdr pdb">
                    <span class="activity-label">300e币以上余额</span>
                    <router-link class="font-orange fr" :to="{path: '/proList', query: {
                                    areaId: 5}}">
                                    更多商品
                    </router-link>           
                </div>
                <product :proList="proList5" activity="true"></product>
            </div> -->

        </div>
        <confirm-dialog v-if="showDialog" :confirm-title="confirmTitle" :confirm-text="confirmText" @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>

	</div>
</template>
<script>
import {statisticsIntegral, proList} from '/api/api'
import confirmDialog from '/components/confirmDialog'
import product from '/components/product'
import { getUrlPath } from '/components/mixin'
import loading from '/components/loading'
export default {
	name: 'activity',
	data() {
		return {
            showLoading: true, //显示加载中 
            confirmTitle:'',
            confirmText:'',
            
            showDialog: false,//遮罩
            ecoin: Number(0),
            type: 'f',//显示产品类型
			list: {
              "a": {
                 id: 208,
                 src:'/static/images/activity/p1.png',
                 name: 'U2K衣柜异味消 (玫瑰、薰衣草、檀香、橙花、茉莉、洋甘菊)',
                 price: 19,
                 label1: '净化空气',
                 label2: '香味持久'
              },
              "b": {
                 id: 6,
                 src:'/static/images/activity/p2.png', 
                 name: '磁性手机支架',
                 price: 38,
                 label1: '释放双手',
                 label2: '安全驾驶'
              },
              "c": {
                 id: 306,
                 src:'/static/images/activity/p3.png', 
                 name: '飞科剃须刀-FS873',
                 price: 98,
                 label1: '销量第一',
                 label2: '人气之选'
              },
              "d": {
                 id: 584, 
                 src:'/static/images/activity/p4.png',
                 name: '机械台地扇-FTS-25',
                 price: 168,
                 label1: '低噪静音',
                 label2: '家庭首选'
              },
              "e": {
                 id: 583, 
                 src:'/static/images/activity/p5.png', 
                 name: '美的电压力锅-PCS5011HM',
                 price: 319,
                 label1: '一锅多用',
                 label2: '智能预约'
              },
              "f": {
                 id: 840, 
                 src:'/static/images/activity/p6.png',
                 name: '【广州酒家】休闲小食套装（鸡仔饼、凤梨酥、金钱酥、果仁酥）',
                 price: 87,
                 label1: '广府手信',
                 label2: '名家出品'
              }

            },
			account: 0, //e币
            areaList: [{
                area: '0-30',
                areaId: 95,
                list: []
            }, {
                area: '31-50',
                areaId: 96,
                list: []
            }, {
                area: '51-100',
                areaId: 97,
                list: []
            }, {
                area: '101-200',
                areaId: 98,
                list: []
            }, {
                area: '201-300',
                areaId: 99,
                list: []
            }, {
                area: '301-500',
                areaId: 100,
                list: []
            }, {
                area: '501以上',
                areaId: 101,
                list: []
            }]
		}
	},
	components: {
	    product, loading, confirmDialog
	},
	mixins: [getUrlPath ],
	mounted() {
		if(!this.$route.query.productid) {
			document.title = "积分清零倒计时";
		}	
		this._initData();

	},
	methods: {
		async _initData() {
            statisticsIntegral().then(res => {
                if(res.result) {
                    this.ecoin = Number(res.data.expireIntegral);
                }
                if(this.ecoin >= 1 && this.ecoin <= 19) {
                    this.type = "a";
                } else if(this.ecoin >= 20 && this.ecoin <= 49) {
                     this.type = "b";
                } else if(this.ecoin >= 50 && this.ecoin <= 99) {
                     this.type = "c";
                } else if(this.ecoin >= 100 && this.ecoin <= 299) {
                     this.type = "d";
                } else if(this.ecoin >=300) {
                     this.type = "e";
                } else {
                     this.type = "f";
                } 
                
            });

            this.areaList.forEach((item, i) => {
                //商品列表 
                proList({params:{areaId: item.areaId, pageSize: 4}}).then(res => {
                    item.list = res.attributes.resultList;
                    if(i == 0) {
                        this.$nextTick(() => {
                            window.scrollTo(0,1);
                            window.scrollTo(0,0);
                        })
                        this.showLoading = false;
                    }
                   
                });
            })
		 
        },
        //显示遮罩
        showConfirmDialog() {
          this.showDialog = true;
          this.confirmTitle = "活动规则";
          this.confirmText = '1、2018年1月1日零点前兑换成功，充值到用户账户中的e币，若2018年年底前仍未消费，将统一在2019年1月1日零点统一从用户账户中扣除；<br>2、本活动解释权归广州市景心科技股份有限公司所有。';
           // event.cancelBubble = true;
        },
        //关闭遮罩
        closeConfirmDialog() {
          this.showDialog = false;
        },

	 
	}

}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
.act-rules {
    position: absolute;
    right: .5rem;
    top: .5rem;
    @include btnRadius(28px);
    border-radius: 28px;
    width: 66px;
    font-size: 12px;
    background-color: #1980ff;
    color: #fff;
}
.bg-activity {
    width: pxTorem(750);
    // height: pxTorem(700);
    background: url(../../assets/images/activity/ac_bg.png) no-repeat;
    background-size: 100%; 
    background-color: #000853;
    padding: 1.8rem 0 2rem 0;
}
.activity-title-2 {
    width: pxTorem(750);
    height: pxTorem(545);
    background: url(../../assets/images/activity/theme.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    position: relative;
    z-index: 2;
    h1 {
       padding-top: 7rem;
       font-size: 2.5rem;
       line-height: 2.5rem;
       box-sizing: content-box;
    }
    p {
        width: pxTorem(460);
        padding-top: 1.9rem;
        font-size: .6rem;
        line-height: .8rem;
        height: 1.6rem;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        text-align: left;
        box-sizing: content-box;
       
    }
}
.activity-pro, .activity-list-2 {
    background-color: #fff;
    border-radius: 6px;
}
.activity-pro {
    margin: -.8rem .5rem .5rem .5rem;    
    [class^='label-'] {
        margin: 6px 4px 6px 0;
    }
}
.activity-list-2 {
    margin: .6rem .5rem 0 .5rem;
    .imgLoad {
        width: 8.025rem !important;
        height: 8.025rem !important;
    }
    .md-font {
        line-height: 20px;
    }
}
.list-img-big {
    width: 140px;
    height: 140px;
    margin-right: 8px;
}
.btn-pink {
    @include btnRadius(36px);
    // width: 9rem;
    margin: 10px .5rem;
    border-radius: 36px;
    color: #fcff00;
    background: -webkit-linear-gradient(left, #ff86ab, #f21e86);
}
.activity-label {
    width: 142px;
    height: 28px;
    line-height: 28px;
    background: url(../../assets/images/activity/label.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    display: inline-block;
    margin-left: -.2rem;
    padding-left: .5rem;
}
</style>