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
      productId, 
      productImg, 
      productName, 
      currCost,
      currPrice, 
      check = false, 
      total = 1, 
      ebuy}) {
    let cart = state.cartList; // 购物车
    let falg = true;
    let goods = {
      productId,
      productImg,
      productName,
      currCost,
      currPrice,
      ebuy
    }
    if (cart.length) { // 有内容
      cart.forEach(item => {
        if (item.productId === productId) {
          if (item.total >= 0) {
            falg = false;
            item.total += total;
          }
        }
      })
    }
    if (!cart.length || falg) {
      goods.total = total;
      goods.check = false;
      cart.push(goods);
      // console.log(goods)
    }
    state.cartList = cart;
    // 存入localStorage
    setStore('buyCart', cart);
  },
   // 修改购物车
  ['EDIT_CART'] (state, {productid, quality, check}) {
    let cart = state.cartList;

    if(productid) {
       cart.forEach((item) => {
        if(item.productId === productid) {
  
          item.total = quality;
          item.check = check;
        }
      })
    }
    // else if(productId) {//单个勾选
    //   cart.forEach((item) => {
    //     if(item.productId === productId) {
    //       item.check = check;
    //     }
    //   })
    // }
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
          if(item.productId === id) {
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
    state.sortPro = sortPro;
  }
}