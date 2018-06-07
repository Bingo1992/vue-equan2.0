 <template>
	<div>
		<div class="credits-ban center-text">
            <p>本次可用积分</p>
            <h1 class=" font-orange">{{e.price}}</h1>
        </div>
        <div class="bg-gray list-box">
            <span class="list-info-h">请选择兑换类型</span>
            <span v-if="e.type === 'ebuy'" class="font-orange" @click="showConfirmDialog()"><i class="btn-help-e">?</i>什么是e购</span>
            <i v-if="e.type === 'ebuy'" class="icon-right"></i>
        </div>

        <ul class="exchange-type">
            <!-- 'ebuy' -->
            <li v-if="e.type === 'ebuy'" @click="chooseTypeBtn(10)">
                <label class="list-box" for="ebuy">
                     <div class="list-info-v">
                        <span class="bg-pink">{{e.ebi}}e币</span>
                        <i class="icon-plus"></i>
                        <span class="bg-orange">{{e.ebuy}}元e购账户</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input id="ebuy" type="radio" name="type1" value="10" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label>
            </li>
            <li v-if="(e.type === 'ebuy' && e.redPacket != 0)  || e.type === 'ebuyOnly'" @click="chooseTypeBtn(11)">
                <label class="list-box" for="ebuy2">
                      <div class="list-info-v">
                        <span class="bg-pink">{{e.redPacket}}元红包</span>
                        <i class="icon-plus"></i>
                        <span class="bg-orange">{{e.ebuy}}元e购账户</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input type="radio" id="ebuy2" name="type1" value="11" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label> 
            </li>

             <li v-if="e.type === 'ebuy_card'" @click="chooseTypeBtn(12)">
                <label class="list-box" for="ebuy3">
                      <div class="list-info-v">
                        <span class="bg-orange">{{e.ebuy}}元e购账户</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input type="radio" id="ebuy3" name="type1" value="12" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label> 
            </li>


            <!-- ecoin -->
            <li v-if="e.type === 'ecoin' || e.type === 'redpack'" @click="chooseType(1)">
                <label class="list-box" for="ecoin">
                     <div class="list-info-v">
                        <span class="bg-pink">{{e.ebi}}e币</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input id="ecoin" type="radio" name="type1" value="1" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label>
            </li>
            <!-- redpack -->
            <li v-if="e.type === 'redpack' || e.type === 'redpackOnly'" @click="chooseTypeBtn(2)">
                <label class="list-box" for="ecoin2">
                      <div class="list-info-v" >
                        <span class="bg-pink">{{e.redPacket}}元红包</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input type="radio" id="ecoin2" name="type1" value="2" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label> 
            </li>

            <!-- picc_vip/ -->
            <li v-if="e.type === 'picc_vip'" @click="chooseTypeBtn(8)">
                <label class="list-box" for="picc_vip">
                     <div class="list-info-v">
                        <span class="bg-pink">兑换人保VIP</span>
                    </div>
                    <div class="checkbox checkbox-2">
                        <input id="picc_vip" type="radio" name="type1" value="8" v-model="inputType">
                        <i class="icon-hook"></i>
                    </div>
                </label>
            </li>

            
        </ul>

        <div class="btn">
            <p :class="['btn-pure-theme',inputType==0?'disbtn':'']" @click="exchange()">确定兑换</p>
        </div>

        <div class="rich-box font-gray">
            <h4>温馨提示</h4>
            <p v-if="e.type==='ebuy'">
            1、每张卡券按一定的比例充入我的e购账户和兑换红包\充值e币账户，其中，我的e购账户内的金额只能购买支持e购账户的礼品，e币可在e券商城购买汽车用品、汽车服务、加油充值、手机充值等；</br>
            2、e购账户和e币不可兑换红包；</p>
            <p v-else>
            1、充值e券账户可获得“e币”，“e币”可在<router-link to="/home" style="color:#87CEEB;">e券商城</router-link>购买汽车用品、汽车服务,加油充值、手机充值等；<br>
            2、e币不可兑换红包；</p>
            <p>3、点击<a style="color:#87CEEB;" href="http://mp.weixin.qq.com/s/d1P9LERBt6W9gGo54zs_7A"> 使用说明</a> 查看详情；<br>
            4、兑换微信红包需先实名认证,认证方式：【微信】-【我】-【钱包】-【…】-【支付管理】-【实名认证】。
            </p>
        </div>

        <banner :listImg="adsImg" myClass="-c2"></banner>

        <!-- e购说明遮罩 -->
       <confirm-dialog v-if="showDialog" :confirm-title="confirmTitle" :confirm-text="confirmText" @closeConfirmDialog="closeConfirmDialog"></confirm-dialog>

        <!-- 提交遮罩 -->
        <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
		
	</div>
</template>
<script>
import {banner, exchangeType, exchangeService} from '/api/api'
import FooterNav from '/components/footer'
import confirmDialog from '/components/confirmDialog'
import Banner from '/components/swiperDefault'
import alertTip from '/components/alertTip'
export default {
	name: 'exchange',
	data() {
		return {
          showDialog: false,//遮罩
          confirmTitle:'',
          confirmText:'',
          alertText: "",//提交中提示
          showAlertTip: false,
          formLoading: false,
          adsImg: [],
          tkId: '',
          tkVal: '',
          inputType: 0,
          // chooseType: 0,
          e: {
             price: 0,
             ebi: 0,
             ebuy: 0,
             redPacket: 0,
             type: ''
          }

		}
	},
	components: {
		FooterNav, confirmDialog, Banner, alertTip
	},
    created() {
        document.title = "兑换服务";
        this._initData();
    },
    methods: {
        _initData() {
            this.tkId = this.$route.query.tkId;
            this.tkVal = this.$route.query.tkVal;
            exchangeType({params: {tkId: this.tkId, tkVal: this.tkVal}}).then(res => {
                let data = res.eticket;
                this.e.price = data.price;
                this.e.type = data.type;

                this.e.ebuy = data.ebuy;
                this.e.ebi = data.ecoin;
                this.e.redPacket = data.redPacket;

                // if(this.e.type === "ebuy") {
                //     this.inputType = 10;
                // } else if(this.e.type === "ecoin") {
                //     this.inputType = 1;
                // } else if(this.e.type === "picc_vip") {
                //     this.inputType = 8;
                // } else if(this.e.type === "redpack") {
                //     this.inputType = 2;
                // } else if(this.e.type === "ebuy_card") {
                //     this.inputType = 12;
                // } 
            });
            // 轮播图2
            banner({params:{location: "eticket_recharge"}}).then(res => {
                this.adsImg = res.obj;
            }).then(() => {
                var swiperc1 = new Swiper('.swiper-container-c2', {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 16,
                    loop: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false
                });
            })
        },  
        //选择兑换类型
        chooseTypeBtn(type) {
            this.inputType = type;
        },
        //兑换按钮
        exchange() {
            this.showAlertTip = true;//提交中提示
            this.formLoading = true;
            this.alertText = '提交中，请稍候';
            exchangeService({params: {
                type: this.inputType,
                code: this.tkVal
            }}).then(res => {
                if(res.resultCode == 200) {
                     this.$router.push({path:'/result',query:{type: this.inputType, ebuy: this.e.ebuy,ecoin: this.e.ebi, redPacket: this.e.redPacket}});
                 } else {
                    this.showHideAlert(res.resultMsg);
                    //  setTimeout(() => {
                    //      this.$router.go(-1);
                    // }, 2000);
                    
                 }
               
            })
        },
       //显示遮罩
        showConfirmDialog() {
          this.showDialog = true;
          this.confirmTitle = 'e购说明';
          this.confirmText = '1. 我的e购账户是指用户在e券中的特殊账户，每张卡券会按特定比例将部分金额充入我的e购账户。比例由发券企业设置，不可更改;<br>2.我的e购账户中的金额，只能购买e券商城中的支持e购账户购买的礼品，不能购买其他服务;<br>3.兑换多张卡券时e购账户中的金额可累加，使用时可分多次使用。';
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
            }, 1000);
        }
      
    }

}
</script>
<style lang="scss">
@import '../../assets/scss/var.scss';
// .checkbox-2 {
//     input {
//         border: none;
//         background-color: #fff;
//     }
// }
.swiper-container-c2 {
    margin: 10px 0;
    height: pxTorem(180) !important;
    .swiper-slide {
        width: pxTorem(640) !important;
        border-radius: 12px;
    }
}
.credits-ban {
    padding: 20px 0;
}
.btn-help-e {
    @include circle(18px);
    background-color: #ff7554;
    color: #fff;
    display: inline-block;
    font-style: normal;
    margin-right: 4px;
}
.exchange-type {
    padding: 16px 10px 0 10px;

    // display: flex;
    overflow: hidden;
    li {
        padding: 0 6px;
        width: 50%;
        float: left;
    }
    .list-box {
        color: #fff;
        background-color: #f4f4f4;
    }
    .list-info-v {
        justify-content: center;
        align-items: center;
    }
    [class^="bg-"] {
        line-height: 36px;
        border-radius: 36px;
        width: 118px;
        text-align: center;
    }
    .icon-plus {
        @include circle(20px);
        display: block;
        background-color: #cecece;
        // border: 1px solid #bababa;
        margin: 4px 0;
    }
    .checkbox {
        position: absolute;
        right: -4px;
        bottom: 2px;
        z-index: 2;
    }
}
.bg-pink {background-color: #ff6171;}
.bg-orange {background-color: #ff8752;}
// .egouDialog {
//     p {
//         color: #666;
//         line-height: 24px;
//     }
// }
</style>