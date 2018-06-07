<template>
  <div class="login">
    <form action="#">
        <ul class="form-list border-list">
            <li>
                <label>登录账户</label>
                <input v-model="mobileNum" name="mobile" maxlength="11" type="tel" placeholder="请输入注册的手机号">
            </li>

            <li>
                <label>短信验证码</label>
                <input type="tel" placeholder="填写手机验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
                <button @click.prevent="getVerifyCode" class="btn-getCode" :class="{disbtn:!rightMobile}" v-show="!computedTime">获取验证码</button>
                <button @click.prevent="getVerifyCode" class="btn-getCode disbtn" v-show="computedTime">已发送({{computedTime}}s)</button>
            </li>
        </ul>
      <!--   <div class="clearfix pdr">
            <a class="font-gray fr">忘记密码？</a>
        </div> -->
        <div class="btn">
            <a class="btn-pure-theme" @click="mobileLogin">登录</a>
        </div>
        
    </form>

    <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
   
  </div> 
</template>

<script>
import alertTip from '/components/alertTip'
import {register, sendCode, sendRegister} from '/api/api'
export default {
  name: 'register',
  data () {
    return {
        mobileNum: null,//手机号
        computedTime: 0, //倒数记时
        validate_token: null, //获取短信时返回的验证值，登陆时需要
        mobileCode: null, //验证码
        formLoading: false,//提交中提示
        alertText: "",
        showAlertTip: false,
        token: '',
        arr:[]
    }
  },
  components: { 
    alertTip
  },
  created() {
    document.title = "用户注册";
    this._initData();
  },
  computed: {
    //判断手机号码
    rightMobile() {
        return  /^1\d{10}$/.test(this.mobileNum)
     },
     //判断验证码
    rightCode() {
        return /^\d{6}$/gi.test(this.mobileCode)
    }
  },
  methods: {
    // ...mapMutations([
    //     'RECORD_USERINFO'
    // ]),
    // ...mapState([
    //     'userInfo'
    // ]),
    _initData() {
        register({params:{type: 1, __sid:'1bc2200ed18649f8b5bafdc096ee622c'}}).then(res => {
            if(res.resultCode == 200) {
                this.token = res.token;
                localStorage.setItem('token', this.token);
            } else {
                this.showHideAlert(res.resultMsg);
             }   
        });
            
    },
    //获取短信验证码
    getVerifyCode(){
        if(this.token == '') {
            this.showHideAlert('系统异常，稍后再试.');
            return;
        }
        if(this.rightMobile) {//倒计时
            //发送验证码
            sendCode({params: {
                mobile: this.mobileNum,
                token: this.token,
                type: 'ESHOPREGISTER',
                checkMobile: 'yes'
            }}).then(res => {
                this.showHideAlert(res.resultMsg);//提示发送成功或失败
                if(res.resultCode === 200) {
                    this.computedTime = 60;
                    this.timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000);
                }
            });

        }

    },
    //发送登陆信息
    mobileLogin(){
        // if (!this.rightMobile) {
        //    this.showHideAlert('手机号码不正确');
        //     return
        // }else 
        if(!this.rightCode){
            this.showHideAlert('短信验证码不正确');
            return
        } else {
            this.showAlertTip = true;//提交中提示
            this.formLoading = true;
            this.alertText = '提交中，请稍候'; 
            sendRegister({params:{
                mobile: this.mobileNum,
                code: this.mobileCode,
                type: 'ESHOPREGISTER'
            }}).then(res => {
                this.showHideAlert(res.resultMsg);
                if(res.resultCode == 200) {
                    setTimeout(() => {
                        this.$router.push('/home');
                    },1000);
                } 
            })
        }
  
        // //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        // if (!this.userInfo.user_id) {
        //     alert(this.userInfo.message);
        // }else{
        //     this.RECORD_USERINFO(this.userInfo);
        //     this.$router.go(-1);
        // }
    },
    //显示隐藏提示框
    showHideAlert(text) { 
        this.showAlertTip = true;
        this.alertText = text;
        setTimeout(() => {
            this.showAlertTip = false;
        }, 1000);
    }

  }
  
}
</script>
