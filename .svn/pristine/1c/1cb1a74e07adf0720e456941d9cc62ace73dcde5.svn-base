<template>
  <div>
    <!-- <loading v-if="showLoading"></loading> -->
    
    <div class="cart banner-bt-3">
       <div v-if="!cartList || cartList.length == 0" class="nothing">
        <!-- <div> -->
          <img src="../../assets/images/nothing.png" >
          <h4>购物车暂无内容</h4>
        <!-- </div> -->
          
       </div>

      <div class="bg-show fixed-top" v-if="cartList.length > 0">
          <div class="border-bottom" style="width:100%;overflow:hidden">
             <div class="fr btn-edit">
                <span v-if="edit" :class="['btn-border', checkedCount > 0 ? '':'dis-btn']" @click="showConfirmDialog">删除</span>
                <span class="btn-default" @click="editPro()">{{edit? '完成': '编辑'}}</span>
             </div>
          </div>
          
      </div>
      <ul class="cart-ads flex-layout font-theme" v-if="cartList.length > 0">
         <li>
           <span>48小时内发货</span>
         </li>
         <li>
           <span>所有商品免邮费</span>
         </li>
         <li>
           <span>节假日不发货</span>
         </li>
      </ul>
      <ul v-if="cartList.length > 0" class="cart-list border-list">
          <li class="list-box" v-for="(cart) in cartList" :key="cart.id">
                <label class="checkbox checkbox-2">
                    <input type="checkbox" name="checkbox" :value="cart.check" v-model="cart.check"  @change="selectPro(cart.productId, cart.total,cart.check)">
                    <i class="icon-hook"></i>
                </label>
                <img class="list-img" :src="getImgPath(cart.productImg)">
                <div class="list-info-v">
                    <div class="list-box">
                        <div class="list-info-v">
                            <div>
                              <h5 class="nowrap-2">
                                <!-- <span v-if="cart.ebuy" class="label-red">支持e购</span>&nbsp; -->
                                {{cart.productName}}
                              </h5>
                              <div class="list-box">
                                  <div class="list-info-h price-small">
                                    <span class="font-orange"><i class="icon-coin"></i>{{cart.currCost}}</span>
                                    <s class="font-gray">市场价:￥{{cart.currPrice}}</s>
                                  </div>
                                  <buy-num :proID="cart.productId" :proNum="cart.total" :check="cart.check" @editNum="editNum"></buy-num>
                              </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
          </li>
      </ul>

      <div class="fixed-bottom bg-show">
        <div v-if="cartList.length > 0" class="cal-banner list-box border-top">
              <label class="all-check">
                  <input type="checkbox" :value="checkAllFlag" v-model="isCheckAll" @change="selectAll()">
                  <i class="icon-hook"></i>
                  全选
              </label>
              <p class="sm-font font-gray list-info-v right-text pdr"><span v-if="pay.egou">e购抵扣{{pay.egou}}元</span></p>
              <div class="right-text pdr">
                  <p v-if="pay.money != 0" class="font-orange">￥{{pay.money}}</p>
                  <p v-if="pay.ebi != 0">
                     <i class="icon-coin"></i>
                     <span class="font-orange">{{pay.ebi}}</span>
                  </p>
              </div>
              <p @click="gotoBuy" :class="[{ disbtn: total_price2 == 0 }, 'btn-theme']">结算({{checkedCount}})</p>
          </div>

          <footer-nav></footer-nav>
        </div>
      </div>
      <!-- 删除遮罩 -->
       <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn" centerText="true"></confirm-dialog>
 
  </div>
</template>

<script>
// import loading from '/components/loading'
import { mapState, mapMutations } from "vuex";
import FooterNav from "/components/footer";
import confirmDialog from "/components/confirmDialog";
import buyNum from "/components/buyNum";
import { getImgPath } from "/components/mixin";
import { getCartList, addCart, delCart, orderConfirm } from "/api/api";
import { setStore, removeStore } from "/utils/storage";

export default {
  name: "cart",
  data() {
    return {
      // showLoading: true,
      edit: false, //是否编辑
      checkID: [], //被选中的商品ID
      isCheckAll: true, //全选
      flag: true,
      showDialog: false,
      confirmTitle: "",
      confirmText: "",
      checks: [],
      cartNum: 0, //购物车数量
      total_ebuy: 0, //可使用e购的商品总额
      total_price2: 0, //总额
      userEbuy: 0, //'e购数量'
      userIntegeral: 0, //e币数量
      hasEbuy: 0, //0表示支持e购
      pay: {
        egou: 0,
        ebi: 0,
        money: 0
      }
    };
  },
  components: {
    FooterNav,
    confirmDialog,
    buyNum
  },
  mixins: [getImgPath],
  mounted() {
    document.title = "购物车";
    this.initData();
  },
  computed: {
    ...mapState(["cartList"]),
    // 是否全选
    checkAllFlag() {
      if (this.checkedCount === this.cartList.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
      return this.isCheckAll;
    },
    // 勾选的数量
    checkedCount() {
      var i = 0;
      this.checkID = [];
      this.cartList &&
        this.cartList.forEach(item => {
          if (item.check) {
            i++;
            this.checkID.push(item.productId);
          }
        });
      return Number(i);
    }
  },

  methods: {
    ...mapMutations(["INIT_BUYCART", "EDIT_CART", "DELETE_CART"]),
    initData() {
      this._getUserTotal();
    },
    // 修改购物车
    _editCart(productid, quality, check) {
      addCart({params:{}}, productid, quality).then(res => {
        // console.log(quality)
        this.EDIT_CART({ productid, quality, check });
        this.calcuPay();
      });
    },

    // 修改数量
    editNum(productid, quality, check) {
      this._editCart(productid, quality, check);
    },
    //勾选产品
    selectPro(productid, quality, check) {
      this.calcuPay();
      this.EDIT_CART({ productid, quality, check });
    },
    //全选
    selectAll() {
      let checkAll = !this.checkAllFlag;
      this.EDIT_CART({ check: checkAll });
      this.calcuPay();
    },
    //编辑产品
    editPro() {
      if (!this.edit) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    },
    //统计总额
    calcTotalMoney() {
      this.total_price2 = 0;
      this.cartList &&
        this.cartList.forEach((item, i) => {
          if (item.check) {
            this.total_price2 += item.total * item.currCost;
          }
        });
      return Number(this.total_price2);
    },
    //统计可用e购的总额
    calcTotalEbuy() {
      this.total_ebuy = 0;
      this.cartList &&
        this.cartList.forEach((item, i) => {
          if (item.check && item.ebuy == 1) {
            this.total_ebuy += item.total * item.currCost;
          }
        });
      return Number(this.total_ebuy);
    },
    // 获取e购e币
    _getUserTotal() {
      orderConfirm().then(res => {
        this.userEbuy = res.userEbuy;
        this.userIntegeral = res.userIntegeral;
        this.calcuPay();
      });
    },
    //统计需支付的e购e币
    calcuPay() {
      this.pay.egou = 0;
      this.pay.ebi = 0;
      this.pay.money = 0;
      // if(this.userEbuy && this.userEbuy > this.calcTotalMoney()) {//e购的值够
      //     this.pay.egou = this.calcTotalMoney();
      // } else {
      //     if(this.userEbuy) {
      //        leaveCost1 = this.calcTotalMoney() - this.userEbuy;//e购存在但数量不够
      //         this.pay.egou = this.userEbuy;
      //     }
      //     if(this.userIntegeral && this.userIntegeral > leaveCost1) {//e币数量够
      //         this.pay.ebi = leaveCost1;

      //     } else { //e币数量不够
      //       let leaveCost2 = leaveCost1;
      //       if(this.userIntegeral) { //e币存在
      //         leaveCost2 = leaveCost1 - this.userIntegeral;
      //         this.pay.ebi = this.userIntegeral;
      //       }
      //       this.pay.money = leaveCost2;
      //     }
      // }
      if (this.userEbuy) {
        //有e购
        if (this.userEbuy >= this.calcTotalEbuy()) {
          //e购足够
          this.pay.egou = this.calcTotalEbuy();
          let leaveCost1 = this.calcTotalMoney() - this.calcTotalEbuy(); //不能使用e购支付的金额
          this.integeralPay(this.userIntegeral, leaveCost1);
        } else {
          //e购不足够
          this.pay.egou = this.userEbuy;
          let leaveCost2 = this.calcTotalMoney() - this.userEbuy; //不能使用e购支付的金额
          this.integeralPay(this.userIntegeral, leaveCost2);
        }
      } else {
        //e购不存在
        this.integeralPay(this.userIntegeral, this.calcTotalMoney());
      }
    },
    //e币支付
    integeralPay(userIntegeral, total) {
      if (userIntegeral) {
        //e币存在
        if (userIntegeral >= total) {
          //e币足够
          this.pay.ebi = total;
        } else {
          //e币不足
          this.pay.ebi = userIntegeral;
          this.pay.money = total - userIntegeral;
        }
      } else {
        //e币不存在
        this.pay.money = total;
      }
    },
    //点击结算
    gotoBuy() {
      let goods = [];
      this.cartList &&
        this.cartList.forEach((item, index) => {
          if (item.check) {
            goods.push(item);
          }
        });
      setStore("buyPro", goods);
      removeStore("unCheckCartList");
      this.$router.push("/orderConfirm");
    },
    //删除购物车
    confirmBtn() {
      let productIds = this.checkID.join(","); //以逗号分隔
      delCart({params:{ productIds: productIds }}).then(res => {
        this.DELETE_CART(this.checkID);
        this.calcuPay();
      });
    },
    //显示遮罩
    showConfirmDialog() {
      this.showDialog = true;
      this.confirmText = "确定删除购物车所选内容吗？";
    },
    //关闭遮罩
    closeConfirmDialog() {
      this.showDialog = false;
    }
  },
  watch: {
    $route: "initData"
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/var.scss";
// .checkbox-2 {
//     input {
//         border: none;
//         background-color: #fff;
//     }
// }
.banner-bt-3 {
  margin-top: 50px;
  margin-bottom: 99px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.cart-ads {
  background-color: #f4f4f4;
  padding: 0 pxTorem(30);
  font-size: 12px;
  li {
    position: relative;
    &:before {
      display: inline-block;
      vertical-align: middle;
      content: "";
      @include circle(5px);
      margin-right: 2px;
      border: 1px solid $color-theme;
    }
  }
}

.btn-edit {
  padding: 10px;
  [class^="btn"] {
    margin-left: 10px;
    float: left;
  }
}
.cart-list {
  h5 {
    margin-bottom: 12px;
  }
}
.nothing {
  position: fixed;
  top: 0;
  bottom: 50px;
}
.btn-border.dis-btn {
  color: #999;
  border: 1px solid #e0e0e0;
  pointer-events: none;
}
</style>
