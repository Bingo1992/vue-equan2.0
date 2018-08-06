<template>
  <div>
     
    <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>产品选择</h5>
        </div>
        <ul class="brand-list">
            <!-- <li :class="{active: imgIdx == 0}" @click="imgIdx = 0">
                <a><img src="../../assets/images/media/qiyi.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 1}" @click="imgIdx = 1">
               <a><img src="../../assets/images/media/qq_video.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 2}" @click="imgIdx = 2">
               <a><img src="../../assets/images/media/youku.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 3}" @click="imgIdx = 3">
               <a><img src="../../assets/images/media/mgtv.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 4}" @click="imgIdx = 4">
               <a><img src="../../assets/images/media/sohu.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 5}" @click="imgIdx = 5">
               <a><img src="../../assets/images/media/qq_music.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 6}" @click="imgIdx = 6">
               <a><img src="../../assets/images/media/kugo.jpg"></a>
            </li>
            <li :class="{active: imgIdx == 7}" @click="imgIdx = 7">
               <a><img src="../../assets/images/media/letv.jpg"></a>
            </li> -->
            <li :class="{active: imgIdx == i}" v-for="(item,i) in mediaList" @click="getMedia(i)" :key="i">
                <a><img :src="item.src"></a>
            </li>
            
        </ul>
    </div> 

   <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>会员账号</h5>
        </div>
        <ul class="form-list border-list">
            <li>
               <input type="tel" :placeholder="attrName" v-model="account">
            </li>
        </ul>
    </div> 

     <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>产品类型</h5>
        </div>
         <ul class="face-list">
           <li :class="{'active': typeIdx===i}" v-for="(item, i) in typeList" :key="i" @click="getCost(i)">
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
            <li :class="{'active': idx===i}" v-for="(item, i) in costList" :key="i" @click="ebiCost(item.cost, i)">
              <div class="face-value">
                  <p>{{item.name}}</p>
                  <p>{{item.cost}}元</p>
              </div>  
            </li>
        </ul>
    </div> 

    <div class="bg-mgShow">
        <div class="title-bar border-bottom">
            <h5>支付选择</h5>
        </div>
        <ul>
            <li class="list-box">
            <p class="list-info-h">e币支付</p>
            <span class="font-orange pdr">{{ebi}} e币</span>
            <label class="checkbox">
                <input type="radio" name="type" checked>
                <i class="icon-hook"></i>
            </label>
        </li>
        </ul>
    </div> 
    
    <div class="btn">
        <p class="btn-pure-theme" @click="gotoPay()">立即支付</p>
    </div>

    <alert-tip v-show="showAlertTip" :formLoading="formLoading"  :alertText="alertText"></alert-tip>
  </div> 
</template>

<script>
import {oilCharge} from '/api/api'
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
      attrName: '请填写手机号或邮箱',
      account: '',//账号
      mediaList: [{//爱奇艺 
          attr: '请填写手机号或邮箱',
          src: '../../../static/images/media/qiyi.jpg',
          type: [{
              name: '爱奇艺直充<br>(PC/移动端)',
              feeList: [{
                    name: '月卡',
                    cost: 18
                }, {
                    name: '季卡',
                    cost: 52
                }, {
                    name: '年卡',
                    cost: 178
                }]
          }]
      }, {//腾讯
          attr: '请填写QQ号',
          src: '../../../static/images/media/qq_video.jpg',
          type: [{
              name: '腾讯视频直充<br>(PC/移动端)',
              feeList: [{
                    name: '月卡',
                    cost: 19
                }, {
                    name: '季卡',
                    cost: 55
                }, {
                    name: '年卡',
                    cost: 188
                }]
          }]
      }, {//优酷
         attr: '请填写手机号',
         src: '../../../static/images/media/youku.jpg',
          type: [{
              name: '优酷VIP直充<br>(PC/移动端)',
              feeList: [{
                    name: '周卡',
                    cost: 7
                }, {
                    name: '月卡',
                    cost: 15
                }, {
                    name: '季卡',
                    cost: 42
                }, {
                    name: '年卡',
                    cost: 158
                }]
          }]
      }, {//芒果
         attr: '请填写手机号或邮箱',
         src: '../../../static/images/media/mgtv.jpg',
          type: [{
            name: '移动PC端直充<br>(PC/PAD/移动端)',
            feeList: [{
                name: '月卡',
                cost: 13
            }, {
                name: '半年卡',
                cost: 68
            }, {
                name: '年卡',
                cost: 130
            }]
          }, {
              name: '全屏直充(移动端/PC/TV/PAD/盒子)',
              feeList: [{
                    name: '月卡',
                    cost: 25
                }, {
                    name: '季卡',
                    cost: 72
                }, {
                    name: '年卡',
                    cost: 260
                }]
          }]
      }, {//搜狐
         attr: '请填写手机号',
         src: '../../../static/images/media/sohu.jpg',
          type: [{
            name: '搜狐直充<br>(PC/移动端)',
            feeList: [{
                name: '月卡',
                cost: 18
            }, {
                name: '季卡',
                cost: 45
            }, {
                name: '年卡',
                cost: 159
            }]
          }]
      }, {//乐视   
         attr: '请填写手机号或邮箱', 
         src: '../../../static/images/media/letv.jpg',
          type: [{
            name: '乐视超级直充<br>(PC/TV/移动端)',
            feeList: [{
                name: '月卡',
                cost: 45
            }, {
                name: '季卡',
                cost: 128
            }, {
                name: '年卡',
                cost: 388
            }]
          }, {
              name: '乐次元直充<br>(PC/移动端)',
              feeList: [{
                    name: '月卡',
                    cost: 16
                }, {
                    name: '季卡',
                    cost: 45
                }, {
                    name: '年卡',
                    cost: 158
                }]
          }]
      }, {//酷狗
          attr: '请填写绑定的手机号',
          src: '../../../static/images/media/kugo.jpg',
          type: [{
            name: '酷狗豪华版直充(官网)',
            feeList: [{
                name: '月卡',
                cost: 18
            }]
          }]
      }, {//QQ音乐
          attr: '请填写QQ号',
          src: '../../../static/images/media/qq_music.jpg',
          type: [{
            name: '绿钻豪华版直充(官网)',
            feeList: [{
                name: '月卡',
                cost: 15
            }, {
                name: '季卡',
                cost: 45
            }, {
                name: '半年卡',
                cost: 90
            }, {
                name: '年卡',
                cost: 180
            }]
          }]
      }],
      typeList: [],//产品类型
      costList: []//面额
    
    };
  },
  components: {
    alertTip
  },
  created() {
      this.getMedia(0);
      this.getCost(0);
  },
  methods: {
    getMedia(i) {
        this.imgIdx = i;
        this.typeList = this.mediaList[i].type;
        this.attrName = this.mediaList[i].attr;
        this.getCost(0);
        this.ebiCost(this.costList[0].cost, 0); 
    },
    getCost(i) {
        this.typeIdx = i;
        this.costList = this.typeList[i].feeList;
       
    },
    ebiCost(ebi, i) {
        this.ebi = ebi;
        this.idx = i;
    },
    // 保存
    gotoPay() {
      if(this.account == '') {
          this.showHideAlert('会员账号不能为空');
      } else {
          this.showAlertTip = true;//提交中提示
          this.formLoading = true;
          this.alertText = '提交中，请稍候';
            
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/var.scss';
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
    -webkit-box-orient: vertical;
}
</style>
