<template>
  <div>
     
    <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>产品选择</h5>
        </div>
        <ul class="brand-list">
           
            <li :class="{active: imgIdx == i}" v-for="(item,i) in mediaList" @click="getMedia(i)" :key="i">
                <a><img :src="getUrlPath(item.src)"></a>
            </li>
            
        </ul>
    </div> 

   <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>会员账号</h5>
        </div>
        <ul class="form-list border-list">
            <li>
               <input type="text" :placeholder="attrName" v-model="account">
            </li>
        </ul>
    </div> 

     <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>产品类型</h5>
        </div>
         <ul class="face-list">
           <li :class="{'active': typeIdx===i}" v-for="(item, i) in typeList" :key="i" @click="chooseType(i)">
              <div class="face-value">
                  <p class="md-font" v-html="item.name"></p>      
              </div>  
            </li>
        </ul>
    </div> 

    <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>面额</h5>
        </div>
         <ul class="face-list">
            <li :class="{'active': idx===i}" v-for="(item, i) in costList" :key="i" @click="ebiCost(item.cost, item.code, i)">
              <div class="face-value">
                  <div>
                      <p>{{item.name}}</p>
                      <p>{{item.cost}}元</p>
                  </div>                
              </div>  
            </li>
        </ul>
    </div> 

    <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>支付选择</h5>
        </div>
        <ul>
            <li class="list-box" v-if="ebi != 0">
                <p class="list-info-h">e币支付</p>
                <span class="font-orange pdr">{{ebi}} e币</span>
                <label class="checkbox">
                    <input type="checkbox" name="type" checked disabled>
                    <i class="icon-hook"></i>
                </label>
            </li>
            <li class="list-box" v-if="money != 0">
                <p class="list-info-h">微信支付</p>
                <span class="font-orange pdr">{{money}} 元</span>
                <label class="checkbox">
                    <input type="checkbox" name="type" checked disabled>
                    <i class="icon-hook"></i>
                </label>
            </li>   
        </ul>
    </div> 
    
    <div class="btn">
        <p class="btn-pure-theme" @click="gotoPay()">立即支付</p>
    </div>

    <!-- 信息确认遮罩 -->
    <div  v-if="showDialog" class="ui-dialog">
        <div class="dialog-cnt" style="width:15rem">
            <h3 class="border-bottom">温馨提示</h3>
            <ul class="form-list border-list">
                <li>
                    <label>会员账号：</label>
                    <input type="text"  v-model="account">
                </li>
                <li>
                    <label>充值金额：</label>
                    <span v-if="money == 0 && ebi != 0" class="list-info-h">{{ebi +'e币'}}</span>
                    <span v-if="ebi == 0 && money != 0" class="list-info-h">{{money + '元'}}</span>
                    <span  v-if="ebi != 0 && money != 0" class="list-info-h">{{ebi +'e币 + '+ money + '元'}}</span>
   
                </li>
            </ul>
            <p class="font-red pd md-font">*请核实好信息，一旦充值成功，无法撤销，不支持退款服务。</p>
            <div class="two-btn">
                <a class="btn-cancel" @click="closeDialog">取消</a>
                <a class="btn-theme" @click="confirmDialog">确定</a>
            </div>
        </div>
　  </div>
    <alert-tip v-show="showAlertTip" :formLoading="formLoading"  :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
import { mediaChargeEbi, mediaChargeMix, integral, gotoPay } from "/api/api"
import { getUrlPath } from '/components/mixin'
import alertTip from "/components/alertTip";
export default {
  name: "oilCard",
  data() {
    return {
      showAlertTip: false,
      formLoading: false,
      alertText: "",
      idx: 0,
      imgIdx: 0,
      typeIdx: 0,
      ebi: 0,
      money: 0,
      hasEbi: 0, //用户e币值
      attrName: "请填写手机号或邮箱",
      account: "", //账号
      code: "",
      showDialog: false,
      mediaList: [
        {
          //爱奇艺
          attr: "请填写手机号或邮箱",
          src: "/static/images/media/qiyi.jpg",
          type: [
            {
              name: "爱奇艺直充<br>(PC/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1240514",
                  cost: 18
                },
                {
                  name: "季卡",
                  code: "1240510",
                  cost: 52
                },
                {
                  name: "年卡",
                  code: "1240508",
                  cost: 178
                }
              ]
            }
          ]
        },
        {
          //腾讯
          attr: "请填写QQ号",
          src: "/static/images/media/qq_video.jpg",
          type: [
            {
              name: "腾讯视频直充<br>(PC/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1241901",
                  cost: 19
                },
                {
                  name: "季卡",
                  code: "1241903",
                  cost: 55
                },
                {
                  name: "年卡",
                  code: "1241902",
                  cost: 188
                }
              ]
            }
          ]
        },
        {
          //优酷
          attr: "请填写手机号",
          src: "/static/images/media/youku.jpg",
          type: [
            {
              name: "优酷VIP直充<br>(PC/移动端)",
              feeList: [
                {
                  name: "周卡",
                  code: "1240710",
                  cost: 7
                },
                {
                  name: "月卡",
                  code: "1240706",
                  cost: 15
                },
                {
                  name: "季卡",
                  code: "1240707",
                  cost: 42
                },
                {
                  name: "年卡",
                  code: "1240708",
                  cost: 158
                }
              ]
            }
          ]
        },
        {
          //芒果
          attr: "请填写手机号或邮箱",
          src: "/static/images/media/mgtv.jpg",
          type: [
            {
              name: "移动PC端直充<br>(PC/PAD/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1243701",
                  cost: 13
                },
                {
                  name: "半年卡",
                  code: "1243705",
                  cost: 68
                },
                {
                  name: "年卡",
                  code: "1243704",
                  cost: 130
                }
              ]
            },
            {
              name: "全屏直充(移动端/PC/TV/PAD/盒子)",
              feeList: [
                {
                  name: "月卡",
                  code: "1243601",
                  cost: 25
                },
                {
                  name: "季卡",
                  code: "1243603",
                  cost: 72
                },
                {
                  name: "年卡",
                  code: "1243604",
                  cost: 260
                }
              ]
            }
          ]
        },
        {
          //搜狐
          attr: "请填写手机号",
          src: "/static/images/media/sohu.jpg",
          type: [
            {
              name: "搜狐直充<br>(PC/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1242103",
                  cost: 18
                },
                {
                  name: "季卡",
                  code: "1242102",
                  cost: 45
                },
                {
                  name: "年卡",
                  code: "1242101",
                  cost: 159
                }
              ]
            }
          ]
        },
        {
          //乐视
          attr: "请填写手机号或邮箱",
          src: "/static/images/media/letv.jpg",
          type: [
            {
              name: "乐视超级直充<br>(PC/TV/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1241307",
                  cost: 45
                },
                {
                  name: "季卡",
                  code: "1241311",
                  cost: 128
                },
                {
                  name: "年卡",
                  code: "1241308",
                  cost: 388
                }
              ]
            },
            {
              name: "乐次元直充<br>(PC/移动端)",
              feeList: [
                {
                  name: "月卡",
                  code: "1241310",
                  cost: 16
                },
                {
                  name: "季卡",
                  code: "1241309",
                  cost: 45
                },
                {
                  name: "年卡",
                  code: "1241306",
                  cost: 158
                }
              ]
            }
          ]
        },
        {
          //酷狗
          attr: "请填写绑定的手机号",
          src: "/static/images/media/kugo.jpg",
          type: [
            {
              name: "酷狗豪华版直充(官网)",
              feeList: [
                {
                  name: "月卡",
                  code: "2290201",
                  cost: 18
                }
              ]
            }
          ]
        },
        {
          //QQ音乐
          attr: "请填写QQ号",
          src: "/static/images/media/qq_music.jpg",
          type: [
            {
              name: "绿钻豪华版直充(官网)",
              feeList: [
                {
                  name: "月卡",
                  code: "2290107",
                  cost: 15
                },
                {
                  name: "季卡",
                  code: "2290501",
                  cost: 45
                },
                {
                  name: "半年卡",
                  code: "2290502",
                  cost: 90
                },
                {
                  name: "年卡",
                  code: "2290503",
                  cost: 180
                }
              ]
            }
          ]
        }
      ],
      typeList: [], //产品类型
      costList: [] //面额
    };
  },
  components: {
    alertTip
  },
  mixins: [getUrlPath],
  created() {
    this._initData();
  },
  methods: {
    _initData() {
      integral().then(res => {
        //获取用户e币值
        this.hasEbi = res.attributes.ecoin;
        this.getMedia(0);
      });
    },
    getMedia(i) {
      this.imgIdx = i;
      this.typeList = this.mediaList[i].type;
      this.attrName = this.mediaList[i].attr;
      this.chooseType(0);
    },
    //产品类型
    chooseType(i) {
      this.typeIdx = i;
      this.costList = this.typeList[i].feeList;
      this.ebiCost(this.costList[0].cost, this.costList[0].code, 0); //支付
    },
    ebiCost(cost, code, i) {
      this.idx = i;
      this.code = code;
      if (this.hasEbi >= cost) {
        //e币值大于支付金额
        this.ebi = cost;
        this.money = 0;
      } else {
        this.ebi = this.hasEbi;
        this.money = cost - this.hasEbi;
      }
    },
    confirmDialog() {
      this._confirmCharge();
    },
    // 保存
    gotoPay() {
      if (this.account == "") {
        this.showHideAlert("会员账号不能为空");
      } else if (this.idx == -1) {
        this.showHideAlert("请选择面额");
      } else {
        this.showDialog = true;
        //   this.showAlertTip = true;//提交中提示
        //   this.formLoading = true;
        //   this.alertText = '提交中，请稍候';
        //   mediaCharge({
        //       code: this.code,
        //       account: this.account
        //   }).then(res => {
        //       if(res.success) {
        //           this.$router.push('/result');
        //       } else {
        //           this.showHideAlert(res.msg);
        //       }
        //   })
      }
    },
    // 确认充值
    _confirmCharge() {
      this.showDialog = false;
      this.showAlertTip = true; //提交中提示
      this.formLoading = true;
      this.alertText = "提交中，请稍候";
      if (this.money == 0) {//纯Ｅ币支付
        mediaChargeEbi({
          code: this.code,
          account: this.account
        }).then(res => {
          if (res.success) {
            this.$router.push("/result");
          } else {
            this.showHideAlert(res.msg);
          }
        });
      } else {
          mediaChargeMix({
              code: this.code,
              account: this.account
          }).then(res => {
              if(res.success) {
                   window.location.href = this.getUrlPath('/pay.html?orderNo='+res.attributes.odNo);   
              } else {
                  this.showHideAlert(res.msg);
              }
          })
      }
    },
    //显示隐藏提示框
    showHideAlert(text) {
      this.showAlertTip = true;
      this.formLoading = false;
      this.alertText = text;
      setTimeout(() => {
        this.showAlertTip = false;
      }, 2000);
    },
    // 关闭遮罩
    closeDialog() {
      this.showDialog = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
.brand-list {
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 0;
  li {
    display: block;
    width: 33.33%;
    text-align: center;
    padding: 0 10px;
    &.active a {
      border: 1px solid $color-theme;
      border-radius: 2px;
      box-sizing: border-box;
    }
  }
  a {
    display: block;
  }
  img {
    width: 4.9rem;
    display: inline-block;
  }
}
.face-value {
  flex-direction: column;
}
</style>
