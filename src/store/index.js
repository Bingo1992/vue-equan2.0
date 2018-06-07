import Vue from 'vue'
import Vuex from 'vuex'
import mutations  from './mutations'

Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
	cartList: [], //购物车
	checkID: [],//勾选的ID
	chooseAddress: [],//获取的地址
	addressId: 0,//地址id
	addressIndex: 0,//选择地址的索引值
	sortProIndex: 0,//商品分类筛选的索引
	sortPro: '全部分类'//商品分类筛选内容
}

export default new Vuex.Store({
　  state,
　  mutations
});