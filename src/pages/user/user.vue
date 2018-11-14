 <template>
	<div class="banner-b personnel-list">
		<div class="list-box">
            <img v-if="!headimgurl" class="per-img" src="../../assets/images/user.png">
            <img v-else class="per-img" :src="headimgurl">
            <div class="list-info-v">
                <div>
                    <h5>{{nickName? nickName: '用户昵称'}}</h5>
                    <p>
                        <span class="pdr">e币&nbsp;<span class="font-orange">{{ebi}}</span></span>
                        <span>e购&nbsp;<span class="font-orange">{{ebuy}}</span></span>
                    </p>
                </div>
                	
            </div>
            <router-link class="btn-theme" to="/ticketCode">e币充值</router-link>
        </div>
            
		<ul class="bg-mgShow">
            <li>
                <router-link class="list-box" :to="{path:'/account',query:{type: 0}}">
                    <i class="icon-account font-red pdr"></i>
                    <span class="list-info-h">我的账户</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
            	<!-- <a class="list-box" :href="getUrlPath('/convert_data.html')"> -->
                 <router-link class="list-box" to="/orderList">   
                    <i class="icon-order font-green pdr"></i>
                    <span class="list-info-h">我的订单</span>
                    <i class="icon-right"></i>
                </router-link>    
                <!-- </a> -->
            </li>
            <li>
                <router-link class="list-box" :to="{path:'/ticket', query:{tckType: 1}}">
                    <i class="icon-ticket-3 font-yellow pdr"></i>
                    <span class="list-info-h">我的卡券</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
               <router-link class="list-box" to="/addressManage">
                    <i class="icon-address font-blue pdr"></i>
                    <span class="list-info-h">收货地址</span>
                    <i class="icon-right"></i>
                </router-link>
            </li>
            <li>
               <!-- <a class="list-box" :href="getUrlPath('/rpLucky_new1.html')"> -->
                <router-link class="list-box" to="/rpLucky">
                    <i class="icon-ticket-3 font-red pdr"></i>
                    <span class="list-info-h">红包活动</span>
                    <i class="icon-right"></i>
                </router-link>    
                <!-- </a> -->
            </li>
        </ul>

        <ul class="bg-mgShow">
            <li>
                <a class="list-box" @click="unbindMobile()">
                    <i class="icon-mobile font-gray pdr"></i>
                    <span class="list-info-h">解绑手机号</span>
                    <i class="icon-right"></i>
                </a>
            </li>
            <li>
                <!-- <a class="list-box" href="tel:4000408000"> -->
                <router-link  class="list-box" to="/user/help" >
                    <i class="icon-help font-green pdr"></i>
                    <span class="list-info-h">咨询帮助</span>
                    <i class="icon-right"></i>
                </router-link>
                <!-- </a> -->
            </li>

        </ul>

		<div class="fixed-bottom bg-show">
			<footer-nav></footer-nav>	
		</div>

        <!-- 进入客服咨询 -->
		<!-- <transition name="router-slid" mode="out-in"> -->
	    	<router-view></router-view>
	    <!-- </transition> -->

         <!-- 解绑手机号遮罩 -->
       <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn" centerText="true"></confirm-dialog>
       <!-- 提示遮罩 -->
       <alert-tip v-if="showAlertTip" :alert-text="alertText"></alert-tip>
          
		
	</div>
</template>
<script>
import FooterNav from '/components/footer'
import confirmDialog from '/components/confirmDialog'
import alertTip from '/components/alertTip'
import {unbind, integral, userInfo} from '/api/api'
import { getUrlPath } from '/components/mixin'
export default {
	name: 'user',
	data() {
		return {
            headimgurl: '',
            nickName: '',
            ebi: 0,
            ebuy: 0,
            showDialog: false,
            confirmTitle:'',
            confirmText:'',
            showAlertTip: false,
            alertText: ""
		}
	},
	components: {
		FooterNav, confirmDialog, alertTip
	},
    mixins: [getUrlPath],
    mounted() {
        document.title = "个人中心";
        this._initData();
    },
    methods: {
       _initData() {

            integral().then(res => {
                this.ebi = res.attributes.ecoin;
                this.ebuy = res.attributes.ebuy;
            });
            //用户信息
            userInfo().then(res => {
                // if(res.success === true) {
                    this.nickName = res.obj.wxNickname;
                    this.headimgurl = res.obj.headimgurl;
                // }  
            });
               
       },
        //解绑手机号
        unbindMobile() {
            this.showDialog = true;
            this.confirmText = "确定解绑该手机号吗？"
        },
        //确定解绑
        confirmBtn() {
            unbind().then(res => {
                if(res.resultCode == 200) {
                    this.showHideAlert('已成功解绑手机号');
                    // this.$router.push({path:'/login', query:{t: timestamp}});
                    setTimeout(() => {
                        this.$router.push('/login');
                    },1000);
                }
            })
        },
        //关闭遮罩
        closeConfirmDialog() {
          this.showDialog = false;
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
@import "../../assets/scss/var.scss";
.per-img {
	width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    overflow: hidden;
    margin-right: .5rem;
}
.personnel-list {
	.circlePoint {
		position: relative;
		top: 0;
		right: 4px;
	}
	.btn-theme {
		height: 32px;
		line-height: 32px;
		padding: 0 10px;
		border-radius: 2px;
	}
}
</style>