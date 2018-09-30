import axios from 'axios'
import * as zone from './PlaceJson'
import http from './public'

const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
};
// // 省市区
export const province = () => setpromise(zone.province);
export const city = () => setpromise(zone.city);
export const district = () => setpromise(zone.district);
	
// // 使用代理
// const HOST = '/api';
// const fetch = (type,url,data) => {
// 	url = HOST+ url;
// 	return new Promise((resolve, reject) => {
// 	    axios({
// 	    	method: type,
// 	    	url: url,
// 	    	data: data,
// 	    	headers: {
//             	'Content-Type': 'application/x-www-form-urlencoded',
//       		}
// 	    }).then(response => {
//           resolve(response.data);
//         }).catch(error => {
//         	reject(error);
//         })
// 	})
// };

// 首页
export const integral = (params) =>  http.fetchGet('/user/integral',params);
export const banner = (params) =>  http.fetchGet('/banner',params);
export const areaTitle = (params) =>  http.fetchGet('/area/detail',params);
// export const areaList = (params) =>  http.fetchGet('/area',params);
//账户
export const account = (params) =>  http.fetchGet('/user/integral_history',params);
export const accountNew = (params) =>  http.fetchGet('/user/historyIntegral',params);
// 统计积分
export const statisticsIntegral = (params) =>  http.fetchGet('/user/statisticsUserIntegral',params);
// 交易详情
export const accountDetail = (params, id) =>  http.fetchGet('/user/userIntegralHistoryDetail/'+id, params);

// 用户信息
export const userInfo = (params) =>  http.fetchGet('/user/personnel',params);

//商品列表
export const proList = (params) =>  http.fetchGet('/goods/list',params);
export const proDetail = (params) =>  http.fetchGet('/product/detail',params);
export const sortList = (params) =>  http.fetchGet('/goods/getGoodsClassify',params);
// 商品列表-sku
export const choosesku = (params) =>  http.fetchGet('/goods/choosesku',params);

// 购物车
// export const delCart = (params) => http.fetchGet('/shopCart/removeOrder', params);
// export const addCart = (params,id,count) => http.fetchGet('/cart/'+id+'/'+count, params);
export const getCartList = (params) =>  http.fetchGet('/shopCart/displayOrder', params);
export const delCart = (params) => http.fetchPost('/shopcarts/product/del', params);
export const addCart = (params,id) => http.fetchPost('/shopcarts/'+ id +'/product', params);


// 地址
export const addressList = (params) => http.fetchGet('/user/receipt/address/list', params);
// export const delAddress = (params) => http.fetchGet('/user/receipt/address/delete', params);
// export const addAddress = (params) => http.fetchGet('/user/receipt/address/save', params);
// export const defaultAddress = (params) => http.fetchGet('/user/receipt/address/set_default', params);
export const delAddress = (params, addressid) => http.fetchPost('/user/receipt/address/' + addressid + '/del', params);
export const addAddress = (params) => http.fetchPost('/user/receipt/address', params);
export const defaultAddress = (params, id) => http.fetchPost('/user/receipt/address/'+id+'/default', params);


//订单确认
export const orderConfirm = (params) => http.fetchGet('/product/placeorder', params);
//订单支付
export const gotoPay = (params) => http.fetchGet('/shopCart/exchangeOrder', params);
// export const gotoPay = (params) => http.fetchPost('/shopcarts/submit', params);
export const payment = (params) => http.fetchGet('/wxpay/jsCall', params);
// 订单
export const orderList = (params) => http.fetchGet('/shopCart/orders', params);
export const orderDetail = (params, orderNum) => http.fetchGet('/user/order/detail/'+ orderNum, params);
export const cancelOrder = (params, payOrderId) => http.fetchGet('/cancelOrder/'+ payOrderId, params);

//卡券
export const ticketList = (params) =>  http.fetchGet('/user/eticket/list2', params);
// e币充值
export const recharge = (params) =>  http.fetchGet('/user/eticket/check', params);
// 兑换类型
export const exchangeType = (params) =>  http.fetchGet('/user/eticket/check2', params);
// 兑换服务
export const exchangeService = (params) =>  http.fetchGet('/user/eticket/recharge', params);

// 解除绑定
export const unbind = (params) =>  http.fetchGet('/user/unbindm', params);
//注册
export const register = (params) =>  http.fetchGet('/user/register', params);
export const sendCode = (params) =>  http.fetchGet('/user/register/send_code', params);
export const sendRegister = (params) =>  http.fetchGet('/user/register/save', params);
// 二维码
export const code = (params) =>  http.fetchGet('/user/subscribeQRCode', params);

//充值中心
export const historyMobile = (params) =>  http.fetchGet('/mobile/recharge/record', params);
export const mobileRechargeEbi = (params) =>  http.fetchPost('/mobile/recharge', params);
export const mobileRechargeMix = (params) =>  http.fetchPost('/mobile/recharge/mix', params);

export const reCharge = (params) =>  http.fetchGet('/product/exchange', params);
export const mediaChargeEbi = (params) =>  http.fetchPost('/recharge/ofpay/mediaV2', params);
export const mediaChargeMix = (params) =>  http.fetchPost('/recharge/ofpay/mediaV2/mix', params);

// 油卡充值
export const historyOil = (params) =>  http.fetchPost('/oil/recharge/record', params);
export const realName = (params) =>  http.fetchPost('/product/checkOilcard', params);
export const oilRecharge = (params) =>  http.fetchPost('/product/exchangeOil', params);


// 红包充值
export const checkIntegral = (params) =>  http.fetchGet('/user/fullintegral', params);
export const redPacketRatio = (params) =>  http.fetchGet('/product/checkCanDealRepackRadio', params);
export const exchangeRedpack = (params) =>  http.fetchPost('/product/exchangeRepack', params);

// 红包活动
export const rpLucky = (params) =>  http.fetchGet('/user/eticket/checkLucky', params);
export const checkLucky = (params) =>  http.fetchGet('/user/eticket/lucky', params);

// export const banner = (params) =>  fetch('get','/banner',params);
// export const ads = (params) =>  fetch('get','/ads',params);
// export const proList = (params) =>  fetch('get','/proList',params);
// export const proDetail = (params) =>  fetch('get','/proDetail',params);
// // 购物车
// export const getCartList = (params) =>  fetch('get','/cartList',params);
// export const delCart = (params) => fetch('post','/delCart',params);
// export const addCart = (params) => fetch('post','/addCart',params);
// export const editCart = (params) => fetch('post','/editCart',params);
// export const editCheckAll = (params) => fetch('post','/editCheckAll',params);

// // 地址
// export const addAddress = (params) => fetch('post','/addAddress',params);
// export const addressList = (params) => fetch('post','/address',params);
// export const updateAddress = (params) => fetch('post','/updateAddress',params);
// export const delAddress = (params) => fetch('post','/delAddress',params);

// export const sortList = (params) => fetch('get','/sortList',params);