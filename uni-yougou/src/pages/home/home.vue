<template>
	<view class="home">
		<!-- 头部 -->
		<searchLink />
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.3)">
			<swiper-item v-for="(item,index) in swiperdata" :key="item.goods_id" >
				<view class="swiper-item" >
					<image :src="item.image_src"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航栏 -->
		<view class="nav">
			<image :src="item.image_src"  v-for="(item,index) in navs" :key="index"></image>
		</view>
		<!-- 楼层区 -->
		<view class="floor">
			<view class="floor-item" v-for="(floor,index) in floors" :key="index" >
				<image :src="floor.floor_title.image_src"></image>
				<view class="product-list">
					<image :src="floor.product_list[0].image_src"></image>
					<view class="right">
						<!-- block:不会渲染到页面上,主要用来存放wx:for -->
						<block v-for="(item,index) in floor.product_list" :key="index">
						  <image v-if="index" :src="item.image_src" mode=""></image>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
  import searchLink from '../../components/searchLink.vue'
  export default {
	data() {
		return {
			swiperdata: [], // 轮播图
			navs: [], // 导航栏的每个选项
			floors: [] // 楼层区
		}
	},
	onLoad () {
		this.getSwiperdata()
		this.getCatitems()
		this.getFloordata()
	},
	methods: {
		// 获取轮播图数据
		async getSwiperdata () {
			// 使用 async与await 进一步优化
			this.swiperdata = await this.$request({
				url: '/api/public/v1/home/swiperdata'
			})
			console.log(this.swiperdata)
		},
		// 获取导航栏的数据
		async getCatitems () {
			this.navs = await this.$request({
				url: '/api/public/v1/home/catitems'
			})
		},
		// 获取热门商品的数据
		async getFloordata () {
			this.floors = await this.$request({
				url: '/api/public/v1/home/floordata'
			})
		}
	},
	components: {
		searchLink
	}
  }
</script>

<style scoped lang="less">
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
