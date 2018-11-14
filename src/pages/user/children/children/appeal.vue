<template>
    <div class="children-view">
        <div v-if="specialTicket.length === 0" class="nothing">
            <div class="center-text">
                <i class="icon-ticket"></i>
                <h4>您的账户暂无可申诉的卡券</h4>
                <router-link class="font-red" to="/home">进入e券商城逛逛</router-link>
            </div>    
        </div>

        <div v-else>
            <div class="bg-mgShow">
                <h5 class="ticket-title">请选择需要申诉的卡券</h5>
                <ul class="border-top">
                <li class="list-box" v-for="(item, i) in specialTicket" :key="i">
                        <div class="checkbox">
                            <input type="radio" name="t1" 
                            :value='"{\"code\":\""+item.code+"\",\"tkId\":"+item.eticketProductId+",\"price\":"+item.price+"}"' v-model="ticketInfo">
                            <i class="icon-hook"></i>
                        </div>
                        <div class="ticket-img">
                            <img src="../../../../assets/images/ticket1.jpg">
                            <p>1次</p>
                        </div>
                    
                        <div class="list-info-v">
                            <div>
                                <h5>{{item.productName}}</h5>
                                <p class="font-gray">有效期：<span>{{item.expiredTime}}</span></p>
                                <p class="font-gray">券码：<span>{{item.code}}</span></p>
                            </div>
                                
                        </div>				 
                    </li>
                </ul>
            </div>
            <div class="bg-mgShow">
                <h5 class="ticket-title">请选择需要申诉的内容</h5>
                <ul class="border-top pd">
                    <li>
                        <div class="checkbox">
                            <input type="radio" name="v" id="v2" checked>
                            <i class="icon-hook"></i>
                        </div> 
                        <label for="v2">申请兑换为商城权益</label>
                    </li>
                </ul>
            </div>
            <div class="btn">
                <p class="btn-pure-theme" @click="confirmBtn()">确认申诉</p>     
            </div>
        </div>

	       <!-- 提交遮罩 -->
        <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
          <!-- 提示遮罩 -->
       <confirm-dialog v-if="showDialog" :confirm-title="confirmTitle" :confirm-text="confirmText" @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>

		  
    </div>
</template>
<script>
import {ticketList, exchangeType, exchangeService} from '/api/api'
import alertTip from '/components/alertTip'
import confirmDialog from '/components/confirmDialog'
export default {
    data() {
        return {
            ticketInfo: '',//券码加价格信息
            alertText: "",//提交中提示            
            showAlertTip: false,
            formLoading: false,
            confirmTitle:'',
            confirmText:'',
            showDialog: false,//遮罩
            // specialTicket: [{
            //     "eticketProductId": 244,
            //     "enterpriseName": "E券通公众号",
            //     "category": "汽车服务",
            //     "totalTimes": 1,
            //     "sendTime": "2018-04-23",
            //     "state": 0,
            //     "enterpriseId": 6,
            //     "code": "0207021263262431",
            //     "shopIds": "7,122",
            //     "id": 1747,
            //     "price": 100.0,
            //     "expiredTime": "2018-05-23",
            //     "productName": "测试券20180412(100元)",
            //     "usedTimes": 0,
            //     "isRp": "y",
            //     "redPacket": 93.0
            // },{
            //     "eticketProductId": 245,
            //     "enterpriseName": "E券通公众号",
            //     "category": "汽车服务",
            //     "totalTimes": 1,
            //     "sendTime": "2018-04-23",
            //     "state": 0,
            //     "enterpriseId": 6,
            //     "code": "0207021263262431",
            //     "shopIds": "7,122",
            //     "id": 1747,
            //     "price": 111.0,
            //     "expiredTime": "2018-05-23",
            //     "productName": "测试券20180412(100元)",
            //     "usedTimes": 0,
            //     "isRp": "y",
            //     "redPacket": 93.0
            // },{
            //     "eticketProductId": 246,
            //     "enterpriseName": "E券通公众号",
            //     "category": "代驾券",
            //     "totalTimes": 1,
            //     "sendTime": "2018-04-23",
            //     "state": 0,
            //     "enterpriseId": 6,
            //     "code": "0207021263262431",
            //     "shopIds": "7,122",
            //     "id": 1747,
            //     "price": 189.0,
            //     "expiredTime": "2018-05-23",
            //     "productName": "测试券20180412(100元)",
            //     "usedTimes": 0,
            //     "isRp": "y",
            //     "redPacket": 93.0
            // }],
            tckList: [],//券列表
            specialTicket: []
        }
    },
    components: {
		confirmDialog, alertTip
	},
    mounted() {
        this._initData();
    },
    methods: {
        _initData() {
            ticketList({params: {type: 1}}).then(res => {
				if(res.resultCode == 200) {
                    this.tckList = res.resultList;	
                    this.tckList.forEach((item, i) => {
                        if(item.category == '汽车服务') {
                            this.specialTicket.push(item);
                        }
                    })
                    if(this.specialTicket.length != 0) {//给第一个券加上默认勾选
                        this.ticketInfo = {
                            "code": this.specialTicket[0].code,
                            "tkId": this.specialTicket[0].eticketProductId,
                            "price": this.specialTicket[0].price
                        }
                        this.ticketInfo = JSON.stringify(this.ticketInfo);
                    }
                    
				} else {
					this.showConfirmDialog('温馨提示', res.resultMsg);
				}

            })
            // if(this.specialTicket.length != 0) {//给第一个券加上默认勾选
            //     this.ticketInfo = {
            //         "code": this.specialTicket[0].code,
            //         "tkId": this.specialTicket[0].eticketProductId,
            //         "price": this.specialTicket[0].price
            //     }
            //     this.ticketInfo = JSON.stringify(this.ticketInfo);
            // }

        },
        //确认申诉
        confirmBtn() {
            
            if(this.ticketInfo == '') {
                this.showHideAlert('请选择要申诉的卡券');
            } else {
                let ticket = JSON.parse(this.ticketInfo);
                this.showAlertTip = true;//提交中提示
                this.formLoading = true;
                this.alertText = '提交中，请稍候';
                //判断券是否可兑换
                exchangeType({params:{
                    tkId: ticket.tkId,
                    tkVal: ticket.code
                }}).then( res => {
                    if(res.resultCode == 200) {
                         exchangeService({params: {
                            type: 1,//兑换e币
                            code: ticket.code,
                            redPacket: 0
                        }}).then(res => {
                            if(res.resultCode == 200) {
                                this.$router.push({path:'/result',query:{type: 1, 
                                ecoin: ticket.price}});
                            } else {
                                this.showAlertTip = false; 
                                this.formLoading = false;
                                this.showConfirmDialog('温馨提示', res.resultMsg);
                                
                            }
                        
                        })
                    } else {
                       this.showConfirmDialog('温馨提示', res.resultMsg);
                    }
                })
                
            }
           
        },
        //显示遮罩
        showConfirmDialog(title,text) {
          this.showDialog = true;
          this.confirmTitle = title;
          this.confirmText = text;
           // event.cancelBubble = true;
        },
        //关闭遮罩
        closeConfirmDialog() {
          this.showDialog = false;
        },
         //显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.formLoading = false;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1500);
        }
    }
     
} 
</script>

<style lang="scss" scoped>
@import '../../../../assets/scss/var.scss';
 .ticket-title {
     margin: 10px;
     padding-left: 6px;
     border-left: 2px solid $color-theme;
     line-height: 20px;
 }
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
</style>
