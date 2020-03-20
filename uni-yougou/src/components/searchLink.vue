<template>
	<view class="header">
		<view class="inner" @click="toSearch" >
			<icon type="search" color="#bbb" size="16"></icon>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			toSearch () {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		height: 100rpx;
		padding: 20rpx 16rpx;
		box-sizing: border-box;
		background-color: #ed4450;
	
		.inner {
			height: 60rpx;
			width: 100%;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4rpx;
	
			text {
				color: #bbb;
				margin-left: 16rpx;
			}
		}
	}
</style>
