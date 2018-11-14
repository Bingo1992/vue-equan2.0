<template>
  <div class="children-view">
        <div class="bg-mgShow">
			<h5 class="ticket-title">券信息</h5>
            <ul class="order-detail border-top">    
                <li>
                    <span class="pdr">产品名称：</span>
                    <span>{{ticket.productName}}</span>
                </li>  
                <li>
                    <span class="pdr">有效期：</span>
                    <span>{{ticket.expiredTime}}</span>
                </li>  
                <li>
                    <span class="pdr">状态：</span>
                    <span v-if="ticket.state === '0'">未使用</span>
                    <span v-else>已使用</span>
                </li>  
                <li>
                    <span class="pdr">验证码：</span>
                    <span class="font-red">{{code}}</span>
                </li>        
            </ul>
		</div>

        <div class="bg-mgShow list-box" :to="useTicketUrl">
            <span class="list-info-h">查看可消费门店</span>
            <i class="icon-right"></i>
        </div>

         <div class="bg-mgShow">
			<h5 class="ticket-title">使用说明</h5>
            <div class="order-detail border-top" >    
                {{ticket.instructions}}         
            </div>
        </div>

  
        <div class="bg-mgShow">
			<h5 class="ticket-title">客服电话</h5>
            <ul class="order-detail  border-top" >    
                <li>
                    <a class="font-gray" tel="02062340956"> <i class="icon-tel"></i>020-6234-0956</a>
                </li>         
            </ul>
        </div>
  </div> 
</template>

<script>
    import {ticketDetail} from '/api/api'
    import { getESMPath } from '/components/mixin'
    export default {
      name: 'ticketDetail',
      data () {
        return {
          ticket: {},
          code: '-',//验证码
          useTicketUrl: ''//可消费门店链接
        }
      },
      mixins: [getESMPath],
      mounted() {
         this._initData();
         document.title = "电子券详情";
      },
 
      methods: {
         _initData() {
             ticketDetail({params:{
                 orderId: this.$route.query.orderId, 
                 eticketId: this.$route.query.supplierid}}).then(res => {
                 this.ticket = res.resultMap;
                 this.code = this.ticket.code;
                 if(this.ticket.eticketProductId == 1279) {//广西标准洗车 ---TODO
                    this.useTicketUrl = "http://hecaiyun.cyzl.com/";
                    
                 } else {//esm
                    this.useTicketUrl = this.getESMPath('/product?id=' + this.ticket.eticketProductId);
                    if(this.code.length <= 16) {
                        this.code.substr(0,4)+'-'+this.code.substr(4,4)+'-'+this.code.substr(8,4)+'-'+this.code.substr(12,4);
                    } else {
                        this.code.substr(0,4)+'-'+this.code.substr(4,4)+'-'+this.code.substr(8,4)+'-'+this.code.substr(12,4)+'-'+this.code.substr(16,2)
                    }
                 }
             })
         }
        
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../assets/scss/var.scss';
 .ticket-title {
     margin: 10px;
     padding-left: 6px;
     border-left: 2px solid $color-theme;
     line-height: 20px;
 }
.order-detail {
	 line-height: 40px;
	 padding: 0 10px;
	 
 }
</style>
