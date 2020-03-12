<template>
	<view class="home">
		<!-- 头部 -->
		<view class="header">
			<view class="inner">
				<icon type="search" color="#bbb" size="16"></icon>
				<text>搜索</text>
			</view>
		</view>
		<swiper indicator-dots autoplay indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.3)">
			<swiper-item v-for="(item,index) in 3" :key="index">
				<view class="swiper-item">
					<image src="http://img3.imgtn.bdimg.com/it/u=13232151,2426034510&fm=26&gp=0.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<image src="http://157.122.54.189:9090/pyg/icon_index_nav_4@2x.png" mode="" v-for="(item,index) in 4" :key="index"></image>
		</view>
		<!-- 楼层区 -->
		<view class="floor">
			<view class="floor-item" v-for="(floor,index) in 3" :key="index" >
				<image src="http://157.122.54.189:9090/pyg/pic_floor01_title.png"></image>
				<view class="product-list">
					<image src="http://157.122.54.189:9090/pyg/pic_floor01_1@2x.png" mode=""></image>
					<view class="right">
						<image v-for="(item,index) in 4" :key="index" src="http://157.122.54.189:9090/pyg/pic_floor01_2@2x.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="less">
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

	swiper {
		height: 340rpx;

		image {
			width: 100%;
			height: 340rpx;
		}
	}

	.nav {
		height: 194rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;

		image {
			width: 128rpx;
			height: 140rpx;
		}
	}
	.floor-item {
		>image {
			height: 88rpx;
			width: 100%;
		}
	}
	.product-list {
		display: flex;
		padding: 20rpx 17rpx;
		>image {
			width: 232rpx;
			height: 386rpx;
		}
		.right {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			image {
				width: 232rpx;
				height: 188rpx;
				margin: 0 0 10rpx 10rpx;
			}
		}
	}
</style>
