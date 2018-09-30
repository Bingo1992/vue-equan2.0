import { setStore, getStore } from '/utils/storage'

export default {
	['INIT_BUYCART'](state) {
		let initCart = getStore('buyCart');
		if(initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	  // 加入购物车
  	['ADD_CART'](state, { 
      skuId, 
      productImg, 
      productName, 
      currCost,
      currPrice, 
      check = false, 
      total, 
      ebuy,
      type,
      skuValue}) {
    let cart = state.cartList; // 购物车
    let falg = true;
    let goods = {
      skuId,
      productImg,
      productName,
      currCost,
      currPrice,
      ebuy,
      type,
      skuValue
    }
    if (cart.length) { // 有内容
      cart.forEach(item => {
        if (item.skuId === skuId) {
          if (item.total >= 0) {
            falg = false;
            item.total += total;
          }
        }
      })
    }
    if (!cart.length || falg) {//添加新的购物车列表
      goods.total = total;
      goods.check = false;
      cart.push(goods);
      // console.log(goods)
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', cart);
  },
   // 修改购物车修改购物车
  ['EDIT_CART'] (state, {skuId, quality, check, skuValue}) {
    let cart = state.cartList;

    if(skuId) {//数量，单选
       cart.forEach((item) => {
        if(item.skuId === skuId) {
          item.total = quality;
          item.check = check;
        }  
      })
    }
     else { //全选
      cart.forEach((item) => {
        item.check = check ? true : false;
      })
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
    
  },
    //删除购物车
  ['DELETE_CART'] (state, checkID) {
    let cart = state.cartList;
    checkID && checkID.forEach((id, idx) => {
       cart.forEach((item,i) => {
          if(item.skuId === id) {
            cart.splice(i, 1);
          }
        })
    });
       
   state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', state.cartList);
  },
  //选择的地址
  ['CHOOSE_ADDRESS'](state, {address,id,index}) {
    state.chooseAddress = address;
    state.addressId = id;
    state.addressIndex = index;
    
  },
  //选择的商品分类
  ['CHOOSE_PROSORT'](state, {sortPro, index}) {
    state.sortProIndex = index;
    // state.sortProIndex2 = index2;
    state.sortPro = sortPro;
  },
  // 两级分类的id
  ['CHOOSE_LEVERONEID'](state, {oneId, twoId}) {
    state.oneId = oneId;
    state.twoId = twoId;
  },
  ['CHOOSE_LEVERONEID'](state, oneId) {
    state.oneId = oneId;
    // state.twoId = twoId;
  },
  ['CHOOSE_LEVERTWOID'](state, twoId) {
    // state.oneId = oneId;
    state.twoId = twoId;
  },
  //初始化分类列表
  ['INIT_SORTLIST'](state, list) {
		 state.sortList = list;
	}
}