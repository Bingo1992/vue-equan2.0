<template>

   <ul class="nav-bar flex-layout">
  <!--   <li v-for="(item, i) in navList">
      <router-link :to="item.path">
        <i :class="[item.icon, activeIndex===i ? item.activeIcon:'' ]"></i>
        <p>{{item.title}}</p>
        <span v-if="num[i]!=0" class="circlePoint">{{numFnc(i)}}</span>
      </router-link>
    </li> -->
    <li>
      <router-link :to="{path: '/home'}">
        <i :class="[$route.path.indexOf('home') !== -1? 'icon-home-2':'icon-home']"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li>
      <router-link :to="{path: '/sort'}">
        <i :class="[$route.path.indexOf('sort') !== -1? 'icon-sort-2':'icon-sort']"></i>
        <p>全部分类</p>
        <!-- <span v-if="cartNum && cartNum!=0" class="circlePoint">{{cartNum}}</span> -->
      </router-link>
    </li> 
    <!-- <li>
      <router-link to="/proList">
        <i :class="[$route.path.indexOf('proList') !== -1? 'icon-sort-2':'icon-sort']"></i>
        <p>全部商品</p>
      </router-link>
    </li>  -->
    <li>
      <router-link to="/cart">
        <i :class="[$route.path.indexOf('cart') !== -1? 'icon-cart-2':'icon-cart']"></i>
        <p>购物车</p>
        <cart-num></cart-num>
        <!-- <span v-if="cartNum && cartNum!=0" class="circlePoint">{{cartNum}}</span> -->
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/ticket', query:{tckType: 2}}">
        <i :class="[$route.path.indexOf('ticket') !== -1? 'icon-ticket-2':'icon-ticket' ]"></i>
        <p>企业赠券</p>
      </router-link>
    </li>
    <li>
      <router-link to="/user">
        <i :class="[$route.path.indexOf('user') !== -1? 'icon-user-2':'icon-user' ]"></i>
        <p>我的</p>
      </router-link>
    </li>
   </ul> 
</template>


<script>
import {mapState, mapMutations} from 'vuex'
// import { getCartList } from '/api/api'
// import { setStore, getStore } from '/utils/storage'
import cartNum from '/components/cartNum'
export default {
  name: 'navBar',
  data () {
    return {
    //   navList:[{
    //     'path': '/home',
    //     'icon': 'icon-home',
    //     'activeIcon': 'icon-home-2',
    //     'title': '首页'
    //   },{
    //     'path': '/cart',
    //     'icon': 'icon-cart',
    //     'activeIcon': 'icon-cart-2',
    //     'title': '购物车'
    //   },{
    //     'path': '/ticket',
    //     'icon': 'icon-ticket',
    //     'activeIcon': 'icon-ticket-2',
    //     'title': '企业赠券'
    //   },{
    //     'path': '/user',
    //     'icon': 'icon-user',
    //     'activeIcon': 'icon-user-2',
    //     'title': '我的'
    //   }]
    }
  },
  components: {
      cartNum
    },
  mounted() {
    // if(!getStore('buyCart')) {
    //   this._getCartList();
    // } else {
    //    this.INIT_BUYCART();
    // }
    
  },
  computed: {
    // ...mapState(['cartList']),
    // activeIndex(){
    //   if(!getSessionStore('active')) {
    //       return Number(0);
    //    } else {
    //       return Number(getSessionStore('active'));
    //    }
    // },
    // router() {
    //   //判断路由变化
    //    this.navList.forEach((item, i) => {
    //       if(this.$route.path == item.path) {
    //          setSessionStore('active', i);
    //       } 
    //   }); 
    // },
    // cartNum() {
    //   let cartNum = 0;
    //   this.cartList && this.cartList.forEach( item => {
    //      cartNum += item.proNum;
    //   })
    //   return Number(cartNum);
    // }
  },
  methods: {
   //  ...mapMutations(['INIT_BUYCART']),
   // // 获取一次购物车商品
   //  _getCartList () {
   //    getCartList().then(res => {
   //      setStore('buyCart', res.result);
   //      // 重新初始化一次本地数据
   //    }).then(this.INIT_BUYCART);
   //  }
  },
  // watch: {
  //   '$route': 'router'
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.fixed-bottom {
  @extend %fixed-bottom;
}
// 底部导航
.nav-bar {
  background-color: #fff;
  position: relative;
  li {
    -webkit-box-orient:vertical;
    display: -webkit-box;
    -webkit-box-pack: center;
    padding: 2px 0;
  }
  i {
    color: #a1a1a1;
    font-size: 24px;
    line-height: 26px;
  }
  a {
    color: #bbb;
    display: block;
  }
  &:after {
    @extend %mini-border;
    border-top: 1px solid $border-color;
  }
}

.nav-bar .router-link-active{
  p, i{
    color: $color-theme;
  }
  i {
   background: $bkg-theme;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  } 
}
    
</style>
