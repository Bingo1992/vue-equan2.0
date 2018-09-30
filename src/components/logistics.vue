<template>
    <div class="children-view">
        <a class="return-back border-bottom" @click="closeDialog">
            <i class="icon-left"></i>
            <h4>返回</h4>
        </a>
    　 <ul class="logistic-list">    
            <li class="list-box">
                <span>物流公司：</span>
                <span class="list-info-h">{{company}}</span>
            </li>
            <li class="list-box">
                <span>快递单号：</span>
                <span class="list-info-h">{{logisId}}</span>
            </li>    
        </ul>
        <div class="pd">物流跟踪：</div>
        <ul class="logis-list" v-for="(item, i) in logisticsInfo" :key="i">
            <li :class="[i == 0 ? 'active' : '']">
                <div class="logis-detail">
                    <div class="logis-detail-content border-bottom">
                        <p>{{item.AcceptStation}}</p>
                        <p>{{item.AcceptTime}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ['company', 'logisId', 'logisticsInfo'],
  methods: {
      closeDialog() {
          this.$emit('closeLogistics');
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";

.logis-detail {
    padding-left: 1rem;
    margin-left: 1rem;
    border-left: 1px solid #bfbfbf;
    position: relative;
    line-height: 1rem;
    .active p:first-child {
        color: #333;
    }
    &:after {
        content: '';
        display: inline-block;
        position: absolute;
        left: -.25rem;
        top: .7rem;
        width: .3rem;
        height: .3rem;
        border-radius: .3rem;
        background-color: #BDBDBD;
        border: 2px solid #EEE;
    }
}
.active .logis-detail:after {
    left: -.35rem;
    top: .7rem;
    width: .5rem;
    height: .5rem;
    border-radius: .5rem;
    background-color: #28b46b;
    border: 2px solid #bdedd0;
}
.logis-detail-content {
    padding: .5rem .5rem .5rem 0;
    color: #898989;
    position: relative;
}
</style>