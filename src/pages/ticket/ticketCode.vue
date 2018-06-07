<template>
	<div>
		<ul class="border-list form-list">
			<li>
				<label>券码：</label>
				<input type="text" placeholder="请输入16位券码" v-model="ticketNumValue">
			</li>
			<li>
				<label>安全码：</label>
				<input type="text" placeholder="请输入安全码(在卡片背面右下方)" v-model="ticketPcode">
			</li>
		</ul>
		<p class="md-font font-red pd">提示：请输入e券积分卡上的密码及卡片背面右下方4位数字的安全码进行充值</p>
		<div class="btn">
			<p class="btn-pure-theme" @click="confirmBtn()">充值</p>
		</div>

		<!-- 提交遮罩 -->
      <alert-tip v-show="showAlertTip" :formLoading="formLoading" :alertText="alertText"></alert-tip>
		 
	</div>
</template>
<script>
import {recharge} from '/api/api'
import alertTip from '/components/alertTip'
export default {
	name: 'ticket',
	data() {
		return {
			ticketid: 0,
			ticketNumValue: '',
			ticketPcode: '',
			alertText: '',
            showAlertTip: false,
            formLoading: false
		}
	},
	components: {
		alertTip
	},
	created() {
		document.title = "积分卡充值";
	},
	methods: {
		
		//积分卡充值
		confirmBtn() {
			if(this.ticketNumValue.length != 16) {
				this.showHideAlert('券码输入有误');
			} else if(this.ticketPcode == ""){
				this.showHideAlert('安全码不能为空');
			} else {
				this.showAlertTip = true;//提交中提示
		        this.formLoading = true;
		        this.alertText = '提交中，请稍候'; 
				recharge({params: {
					ticketid: this.ticketid,
					ticketNumValue: this.ticketNumValue,
					ticketPcode: this.ticketPcode
				}}).then(res => {
					if(res.resultCode == 200) {
						this.$router.push({path:'/exchange', query:{tkId: this.ticketid, tkVal: this.ticketNumValue}});
					} else {
						this.formLoading = false;
						this.showHideAlert(res.resultMsg);
					}
					
				});
			}
				
		},
		//显示隐藏提示框
        showHideAlert(text) { 
            this.showAlertTip = true;
            this.alertText = text;
            setTimeout(() => {
                this.showAlertTip = false;
            }, 1000);
        }
	}

}
</script>
<style lang="scss" scoped>

</style>