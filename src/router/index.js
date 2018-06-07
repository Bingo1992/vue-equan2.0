import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['/pages/home/home'], resolve);
const Ticket = resolve => require(['/pages/ticket/ticket'], resolve);
const User = resolve => require(['/pages/user/user'], resolve);
const Cart = resolve => require(['/pages/cart/cart'], resolve);
// 登录
const Login = resolve => require(['/pages/login/login'], resolve);
// 订单
const OrderList = resolve => require(['/pages/order/orderList'], resolve);
const OrderConfirm = resolve => require(['/pages/order/orderConfirm'], resolve);
const OrderPay = resolve => require(['/pages/order/pay'], resolve);
const Result = resolve => require(['/pages/order/result'], resolve);

// 地址
const ChooseAddress = resolve => require(['/pages/address/chooseAddress'], resolve);
const AddAddress = resolve => require(['/pages/address/children/addAddress'], resolve);
const AddressManage = resolve => require(['/pages/address/addressManage'], resolve);

//券码页面
const TicketCode = resolve => require(['/pages/ticket/ticketCode'], resolve);

// 兑换页面
const Exchange = resolve => require(['/pages/egou/exchange'], resolve);
// 红包活动
const RpLucky = resolve => require(['/pages/user/rpLucky'], resolve);


// 充值中心
const RechargeCenter = resolve => require(['/pages/recharge/rechargeCenter'], resolve);
// const TelCharge = resolve => require(['/pages/recharge/telCharge'], resolve);
// const FlowCharge = resolve => require(['/pages/recharge/flowCharge'], resolve);
// const OilCharge = resolve => require(['/pages/recharge/oilCharge'], resolve);
//e币充值
// const EbiCharge = resolve => require(['/pages/recharge/ebiCharge'], resolve);
// const ReChargeType = resolve => require(['/pages/recharge/reChargeType'], resolve);

// 我的账户
const Account = resolve => require(['/pages/account/account'], resolve);

// 商品
const ProList = resolve => require(['/pages/product/productList'], resolve);
const ProDetail = resolve => require(['/pages/product/children/productDetail'], resolve);


Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base:'/wxhtml/',
  routes: [
  	{
     //地址为空时跳转home页面 
      path: '',
      redirect: '/home'//重定向
      // meta: {title: 'e券商城'}
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      meta: {title: 'e券商城'},
      children:[{
          path: 'productDetail',
          component: ProDetail, 
          meta: {title: '商品详情'}
      }]
    },
    {
      path: '/cart',
      component: Cart,
      name: 'Cart',
      meta: {title: '购物车'}
    },
    {
      path: '/ticket',
      component: Ticket,
      name: 'Ticket',
      meta: {title: '企业赠券'}
    },
    {
      path: '/user',
      component: User,
      name: 'User',
      meta: {title: '个人中心'}
    },
    {
      path: '/proList',
      component: ProList,
      meta: {title: ''},
      children:[{
          path: 'productDetail',
          component: ProDetail,
          name: 'ProDetail',
          meta: {title: '商品详情'}
      }]
    },
    {
        path: '/productDetail',
        component: ProDetail,
        name: 'ProDetail',
        meta: {title: '商品详情'}
    },
    {
      path: '/orderConfirm',
      component: OrderConfirm,
      name: 'OrderConfirm',
      meta: {title: '订单确认'}
    },
    {
      path: '/pay',
      component: OrderPay,
      name: 'OrderPay',
      meta: {title: '订单支付'}
    },
    {
      path: '/result',
      component: Result,
      name: 'Result',
      meta: {title: '订单结果'},
      children:[{
          path: 'productDetail',
          component: ProDetail,
          name: 'ProDetail',
          meta: {title: '商品详情'}
      }]
    },
    {
      path: '/orderList',
      component: OrderList,
      name: 'OrderList',
      meta: {title: '我的订单'}
    },
    {
      path: '/chooseAddress',
      component: ChooseAddress,
      name: 'ChooseAddress',
      meta: {title:'选择地址'}
    },
    {
      path: '/addressManage',
      component: AddressManage,
      name: 'AddressManage',
      meta: {title:'地址管理'}
    },
    {
      path: '/addAddress',
      component: AddAddress,
      name: 'AddAddress',
      meta: {title:'添加地址'}
    },
    {
      path: '/account',
      component: Account,
      name: 'Account',
      meta: {title:'我的账户'}
    },
    {
      path: '/exchange',
      component: Exchange,
      name: 'Exchange',
      meta: {title:'兑换服务'}
    },
    {
      path: '/rpLucky',
      component: RpLucky,
      name: 'RpLucky',
      meta: {title:'红包活动'}
    },
    {
      path: '/ticketCode',
      component:TicketCode,
      name: 'TicketCode',
      meta: {title:'积分卡充值'}
    },
    {
      path: '/login',
      component:Login,
      name: 'Login',
      meta: {title:'登录中心'}
    },
    {
      path: '/rechargeCenter',
      component: RechargeCenter,
      meta: {title:'充值中心'},
      name: 'RechargeCenter',
      children:[{
          path: 'productDetail',
          component: ProDetail,
          name: 'ProDetail',
          meta: {title: '商品详情'}
      }]
    }
    // {
    //   path: '/telCharge',
    //   component: TelCharge,
    //   meta: {title:'话费充值'}
    // },
    // {
    //   path: '/flowCharge',
    //   component: FlowCharge,
    //   meta: {title:'流量充值'}
    // },
    // {
    //   path: '/oilCharge',
    //   component: OilCharge,
    //   meta: {title:'油卡充值'}
    // },
    // {
    //   path: '/ebiCharge',
    //   component: EbiCharge,
    //   meta: {title:'E币充值'}
    // },
    // {
    //   path: '/reChargeType',
    //   component: ReChargeType,
    //   meta: {title:'充值方式'}
    // }
  ]
})
