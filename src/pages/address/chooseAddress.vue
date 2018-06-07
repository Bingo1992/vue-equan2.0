<template>
  <div class="chooseAddress">
    <loading v-if="showLoading"></loading>

    <section v-if="!showLoading">
        <!-- 地址列表 -->
        <ul class="address-list border-list">
            <li class="list-box" v-for="(item,i) in address" :key="item.id"  @click="chooseAddress(item,item.id,i)">
               <!-- <label class="list-box" :for="i"> -->
                  <div class="checkbox">
                      <input :id="i" type="radio" name="address" v-model="addressIndex" :value="i">
                      <i class="icon-hook"></i>
                  </div>
                  <div class="list-info-v">
                      <div class="list-info">
                          <span class="pdr">{{item.username}}</span>
                          <span>{{item.mobile}}</span>
                          <p>{{item.province}}{{item.city}}{{item.district}}{{item.detailaddress}}</p>
                      </div>
                  </div>
                  <i class="icon-del"  @click.stop="showConfirmDialog(item.id, item.isdefault)"></i>
              <!-- </label> -->
            </li>
        </ul>
         <div class="nothing" v-if="address.length===0">
            <i class="icon-map"></i>
            <h4>您还未添加地址</h4>
        </div>
        <div class="btn">
          <router-link class="btn-theme" to="/addAddress">+新增地址</router-link>
        </div>
    </section>
<!--     <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>   -->

    <!-- 删除遮罩 -->
     <confirm-dialog v-if="showDialog" :confirm-text="confirmText" showBtn="true" @closeConfirmDialog="closeConfirmDialog" @confirmBtn="confirmBtn" centerText="true"></confirm-dialog>
    
  </div> 
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import loading from '/components/loading'
    import confirmDialog from '/components/confirmDialog'
    import {addressList, delAddress} from '/api/api'
    export default {
      name: 'chooseAddress',
      data () {
        return {
            showLoading: true, //显示加载中  
            address:[],
            addressID: '',
            isDefault: '',
            defaultIndex: 0,
            showDialog: false,
            confirmTitle:'',
            confirmText:'',
        }
      },
      components: {
        loading, confirmDialog
      }, 
      created() {
         document.title = "选择地址";
         this._getAddress();
      },
      computed: {
        ...mapState(['addressIndex'])
      },
      methods: {
        ...mapMutations(['CHOOSE_ADDRESS']),
        // 获取地址
        _getAddress() {
            // addressList().then(res => {
            //   this.address = res.result;
            //   this.showLoading = false;
            //   this.address && this.address.forEach((elm, index) => {
            //       if(elm.check === true){
            //           this.defaultIndex = index;
            //       }
            //   });
            // })
              addressList().then(res => {
                  this.address = res.resultList;
                  this.showLoading = false;
                  this.address && this.address.forEach((elm, index) => {
                      if(elm.isdefault === 1){
                          this.defaultIndex = index;
                      }
                  });
              });
              
               
        },
        //删除地址
        confirmBtn() {
            delAddress({params:{addressid:this.addressID,isdefault:this.isDefault}}).then(res => {
               this.address.forEach((elm, index) => {
                 if(elm.id === this.addressID) {
                    this.address.splice(index,1);
                 }
              });
              if(this.address.length === 0) {//地址为空，清楚数据
                 this.CHOOSE_ADDRESS({address:'', id: 0, index: 0});
              } else {
                   this.address.forEach((elm, index) => {
                        if(index === this.addressIndex) {
                            this.CHOOSE_ADDRESS({address: elm, id: elm.id, index: index});
                        }
                    });
              }
            })
             
        },
        //选择地址
        chooseAddress(address,id,index) {
          this.CHOOSE_ADDRESS({address, id, index});
          this.$router.go(-1);
        }, 
        //显示遮罩
        showConfirmDialog(addressid, isdefault) {
          this.showDialog = true;
          this.confirmText = "确定删除该地址吗？";
          this.addressID = addressid;
          this.isDefault = isdefault;
        },
        //关闭遮罩
        closeConfirmDialog() {
          this.showDialog = false;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>
