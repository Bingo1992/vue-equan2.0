<template>
	<div class="children-view">	
		<div class="center-text border-bottom  account-top">
            <div class="clearfix">
             <img v-if="this.$route.query.actionType === 'ticket_exchange'" class="account-img-2" src="../../../assets/images/a6.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_oil'" class="account-img-2" src="../../../assets/images/a4.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_media'" class="account-img-2" src="../../../assets/images/a3.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_fare'" class="account-img-2" src="../../../assets/images/a1.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_flow'" class="account-img-2" src="../../../assets/images/a10.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_produt'" class="account-img-2" src="../../../assets/images/a5.png">
              <img v-else-if="this.$route.query.actionType === 'shop_exchange_card'" class="account-img-2" src="../../../assets/images/a9.png">
              <img v-else-if="this.$route.query.actionType === 'eb_to_redpackage'" class="account-img-2" src="../../../assets/images/a2.png">
               <img v-else class="account-img-2" src="../../../assets/images/a7.png">
               <span>{{actionTitle}}</span>
            </div>
            <h1 v-if="$route.query.type == 0">{{opType}} {{eCoin}}</h1>
            <h1 v-if="$route.query.type == 1">{{opType}} {{eBuy}}</h1>
            <!-- <h1 v-if="!esm.flag">{{opType}}{{amount}}</h1> -->
        </div> 

        <!-- 电子券兑换 -->
        <ul v-if="esm.flag" class="account-detail">   
            <li class="list-box">
                <span class="font-gray">卡券号码</span>
                <span class="flex-end list-info-h">{{esm.esmNum}}</span>
            </li>
        </ul>

        <!--红包兑换 -->
        <ul v-if="redPacket.flag" class="account-detail">   
            <li class="list-box">
                <span class="font-gray">提现金额</span>
                <span class="flex-end list-info-h">{{redPacket.amount}}</span>
            </li>
        </ul>

        <!-- 油卡 -->
        <ul v-if="oil.flag" class="account-detail">   
            <li class="list-box">
                <span class="font-gray">油卡类别</span>
                <span class="flex-end list-info-h">{{oil.type}}</span>
            </li> 
            <li class="list-box">
                <span class="font-gray">持卡人姓名</span>
                <span class="flex-end list-info-h">{{oil.name}}</span>
            </li>         
            <li class="list-box">
                <span class="font-gray">油卡卡号</span>
                <span class="flex-end list-info-h">{{oil.oilCardNum}}</span>
            </li>
            <li class="list-box">
                <span class="font-gray">身份证号</span>
                <span class="flex-end list-info-h">{{oil.IDcard}}</span>
            </li>
            <li class="list-box">
                <span class="font-gray">充值金额</span>
                <span class="flex-end list-info-h">{{oil.oilAmount}}</span>
            </li>         
            
        </ul>
        <!-- 手机充值 -->
        <ul v-if="mobile.flag" class="account-detail">    
            <li class="list-box">
                <span class="font-gray">手机号码</span>
                <span class="flex-end list-info-h">{{mobile.mobileNum}}</span>
            </li>
            <li class="list-box">
                <span class="font-gray">充值内容</span>
                <span class="flex-end list-info-h">{{rechargeContent}}</span>
            </li>
        </ul>
        <!-- 流媒体充值 -->
        <ul v-if="media.flag" class="account-detail">    
            <li class="list-box">
                <span class="font-gray">充值账号</span>
                <span class="flex-end list-info-h">{{media.mediaNum}}</span>
            </li>       
            <li class="list-box">
                <span class="font-gray">充值内容</span>
                <span class="flex-end list-info-h">{{rechargeContent}}</span>
            </li>
        </ul>

        <!-- 商品下单 -->
        <ul  v-if="pro.flag"  class="account-detail">    
            <li class="list-box">
                <span class="font-gray">商品名称</span>
                <span class="flex-end list-info-h">{{pro.name}}</span>
            </li>       
        </ul>

        <ul v-if="adjust.flag" class="account-detail">    
            <li class="list-box">
                <span class="font-gray">调整原因</span>
                <span class="flex-end list-info-h">{{adjust.remark}}</span>
            </li>       
        </ul>

        <ul class="account-detail">   
            <li class="list-box">
                <span class="font-gray">交易订单号</span>
                <span class="flex-end list-info-h">{{orderId}}</span>
            </li>
            <li class="list-box">
                <span class="font-gray">交易时间</span>
                <span class="flex-end list-info-h">{{time}}</span>
            </li>
            
        </ul>

	</div>

</template>
<script>
import {accountDetail} from '/api/api'
 
export default {
	name: 'accountDetail',
	data() {
		return {
            actionTitle: '-',//商品名
            opType: '-',//操作类型
            eCoin: 0,//e币
            eBuy: 0,//e购
            time: '-',//交易时间
            orderId: '-',//订单号
            amount: 0,//订单金额
            rechargeContent: '-',//充值内容
         
            esm: {
                flag: false,
                esmNum: ''//卡券号码  
            },
            oil: {
                flag: false,
                oilCardNum: '-',//油卡号
                oilAmount: '-',//充值金额
                IDcard: '-',//身份证号
                type: '-',//油卡类型
                name: '-'//持卡人姓名
            },  
            mobile: {
                flag: false,
                mobileNum: '-'//手机号 
            },
            media: {
                flag: false,
                mediaNum: '-'//充值账号
            },
            redPacket: {
                flag: false,
                amount: 0,//提现金额
            },
            pro: {
                flag: false,
                name: '-'
            },
            adjust: {
                flag: false,
                remark: '-'
            }
 
		}
	},
	 
	created() {
        document.title = "交易详情"; 
        this._initData(this.$route.query.id);
	},
	methods: {
	  _initData(id) {
            let actionType = this.$route.query.actionType;
        
          accountDetail({}, id).then( res=> {
               let data = res.data;
               this.actionTitle = data.actionTitle;
               let opType = data.opType;
               if(opType == 0) {
                   this.opType = "-";
               } else {
                   this.opType = "+";
               }
               this.eCoin = data.ecoin;
               this.eBuy = data.ebuy;
               this.time = data.opTimeString;
               this.orderId = data.orderId? data.orderId: '-';
               this.amount = data.amount;
               if(actionType === 'ticket_exchange') {
                   this.esm.flag = true;
                   this.esm.name = data.esmProductName;
                   this.esm.esmNum = data.esmNum;

               } else if(actionType === 'shop_exchange_oil') {
                   this.oil.flag = true;
                   this.oil.oilCardNum = data.oliCarNum;
                   
                   if(data.oliCarNum.substring(0, 6) === "100011") {
                       this.oil.type = "中石化油卡";
                   } else {
                       this.oil.type = "中石油油卡";
                   }
               
                   this.oil.name = data.cardholderName;
                   this.oil.oilAmount = data.oliCarRechargeAmount;
                //    this.oil.IDcard = data.cardholderIdCard.replace("(\\d{4})\\d{10}(\\d{4})","$1****$2");

                    let len = data.cardholderIdCard.length;
                    this.oil.IDcard = data.cardholderIdCard.replace(/(\w)/g,function(a,b,c,d){return (c>3 && c < len-4)?'*':a});

               } else if(actionType === 'shop_exchange_media') {
                   this.media.flag = true;
                   this.media.mediaNum = data.mediaRechargeAccount;
                   this.rechargeContent = data.rechargeContent;

               } else if(actionType === 'shop_exchange_fare' || actionType === 'shop_exchange_flow') {
                   this.mobile.flag = true;
                   this.mobile.mobileNum = data.rechargeMobile;
                   this.rechargeContent = data.rechargeContent;

               } else if(actionType === 'shop_exchange_produt' || actionType === 'shop_exchange_card') {
                   this.pro.flag = true;
                   this.pro.name = data.productName;

               } else if(actionType === 'eb_to_redpackage') {
                   this.redPacket.flag = true;
                   this.redPacket.amount = data.sendTotal;
               } else {
                    this.adjust.flag = true;
                    this.adjust.remark = data.remark;
               }
          })
      }
	}

}
</script>
<style lang="scss" scoped>
.account-top {
    padding: 20px 0;
}
 .account-detail {
     line-height: 20px;
 }
.flex-end {
    justify-content: flex-end;
    padding-left: 10px;
}
.account-img-2 {
    width: 30px;
    height: 30px;
    margin-right: 4px;
    display: inline-block;
    vertical-align: middle;
}
</style>