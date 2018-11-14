<template>
    <div>
        <ul class="warn-list children-view">
            <li>
                <img src="../../../assets/images/helper.png"> 
                <div class="bubble-box">
                    <span class="bubble"></span>
                    <span class="font-gray">2016-09-12 12:00:00</span>
                    <p>您好，请问有什么可以帮助您？<br>大部分客户询问：<br>
                    <router-link class="help-link" to="/user/help/appeal">卡券使用申诉</router-link>
                    <a class="help-link" href="tel:4000408000">客服电话</a></p>
                </div>
            </li>        
        </ul>

          <!-- 进入卡券申诉 -->
		<transition name="router-slid" mode="out-in">
	    	<router-view></router-view>
	    </transition>
    </div>
  
</template>
<script>
export default {
     mounted() {
         this._initData();
         document.title = "客服咨询";
      },
}
</script>

<style lang="scss" scoped>
.warn-list {
    font-size: 12px;
    padding: 20px 10px;
    img {
        width: 1.8rem;
        margin-right: 10px;
        display: inline-block;
        vertical-align: top;
    }
}
.bubble-box {
    position: relative;
    background-color: #e5e5ea;
    border-radius: .6rem;
    padding: 10px;
    display: inline-block;
    width: 13rem;
    .bubble {
        position: absolute;
        top: 0;
        left: -.4rem;
        background: url(../../../assets/images/bubble.png) no-repeat;
        width: 1.5rem;
        height: 1.125rem;
        display: block;
        background-size: 100% 100%;
    }
    .font-gray {
        position: relative;
        z-index: 3;
    }
}
.help-link {
    color: blue;
    text-decoration: underline;
    display: block;
}
</style>
