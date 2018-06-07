<template>
	<div class="dropload-up">
		<div v-if="!isLoading && !noData" class="dropload-refresh">↑上拉加载更多</div>

        <div v-if="isLoading" class="dropload-load">
	        <span class="loading"></span>
	        正在加载...
        </div>

        <div v-if="noData" class="dropload-noData">(T＿T) 已经没有更多了</div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			// isLoading: false,
			// noData: false
		}
	},
	props: ['isLoading','noData'],
	mounted() {
		// this.$nextTick(() => {
			window.addEventListener('scroll', this.handleScroll);
		// })
	},
	beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
	methods: {
		handleScroll() {
			// if ((this.getScrollTop() + this.getClientHeight() + 20 >= this.getScrollHeight()) && !this.scrollDelay) {
			// 	this.$emit('loadMore');
			// } else {
			// 	this.$emit('noScroll');
			// }
			 if ((this.getScrollTop() + this.getClientHeight() == this.getScrollHeight())) {
				this.$emit('loadMore');
			} else {
				// this.$emit('noScroll');
			}
		},
		//获取滚动条当前的位置 
		getScrollTop() {
			let scrollTop = 0;
		    if (document.documentElement && document.documentElement.scrollTop) {
		        scrollTop = document.documentElement.scrollTop;
		    } else if (document.body) {
		        scrollTop = document.body.scrollTop;
		    }
		    return Number(scrollTop);
		},
		//获取当前可视范围的高度 
		getClientHeight() {
		    let clientHeight = 0;
		    if (document.body.clientHeight && document.documentElement.clientHeight) {
		        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
		    } else {
		        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
		    }
		    return Number(clientHeight);
		},
		//获取文档完整的高度
		getScrollHeight() {
		    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		}
	}
}
</script>
<style lang="scss" scoped>
.dropload-refresh, .dropload-load, .dropload-noData {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #666;
  font-size: 12px;
  span {
  	font-size: 16px;
  	margin-right: 4px;
  }
}
.loading {
	  display: inline-block;
	  height: 15px;
	  width: 15px;
	  border-radius: 100%;
	  margin: 6px;
	  border: 2px solid #666;
	  border-bottom-color: transparent;
	  vertical-align: middle;
	  -webkit-animation: rotate 0.75s linear infinite;
	  animation: rotate 0.75s linear infinite;
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
