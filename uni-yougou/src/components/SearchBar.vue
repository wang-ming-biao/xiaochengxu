<template>
	<view class="header">
	  <input type="text" confirm-type="search" placeholder="请输入你想搜索的商品" v-model.trim="inputVal" @confirm="confirmHandler" >
	  <icon class="search-icon"
	        type="search"
	        size="16">
	  </icon>
	  <icon class="clear-icon"
	        type="clear"
	        size="16"
			v-show="inputVal"
			@click="removeInput"
	        color="#ccc">
	  </icon>
	</view>
</template>

<script>
	export default {
		props: ['keyWord'],
		data() {
			return {
				inputVal: ''
			};
		},
		methods: {
			// 清除输入框的内容
			removeInput () {
				this.inputVal = ''
			},
			confirmHandler () {
				// 子传父,自定义一个方法,父组件通过特定的方法名接受
				if(this.inputVal) {
					// 给父组件传一个search事件,然后传当前的输入框的值
					this.$emit('search',this.inputVal)
				}
			}
		},
		watch: {
			keyWord (newValue) {
				this.inputVal = newValue
			}
		}
	}
</script>

<style lang="less" scoped>
.header {
  height: 120rpx;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background-color: #fff;
    height: 60rpx;
    width: 720rpx;
    padding-left: 74rpx;
    box-sizing: border-box;
  }
  .search-icon {
    position: absolute;
    left: 44rpx;
  }

  .clear-icon {
    position: absolute;
    right: 44rpx;
    z-index: 100;
	// 当左右都有定位时,左边占主导地位,若不想左边影响右边
	left: auto;
  }
}
</style>