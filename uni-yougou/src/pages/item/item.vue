<template>
	<view class="wrapper">

		<swiper class="swiper" indicator-dots autoplay circular indicator-color="#ccc" indicator-active-color="#fff">
			<block v-for="(item, index) in goods.pics" :key="index">
				<swiper-item>
					<image class="swiper-img" @click="previewImg(index)" :src="item.pics_big"></image>
				</swiper-item>
			</block>
		</swiper>
		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="price">￥{{goods.goods_price}}</view>
			<view class="name-favo">
				<view class="name">{{goods.goods_name}}</view>
				<view class=favo>
					<text class="iconfont icon-share"></text>
					<text>分享</text>
					<button open-type="share">分享</button>
				</view>
			</view>
			<view class="express">快递: 免运费</view>
		</view>
		<view class="promote">
			<view>
				<text class="name">促销</text>
				<text class="detail">满300减30元</text>
			</view>
			<view class="brother">
				<text class="name">已选</text>
				<text class="detail gray">黑色/S/1件</text>
			</view>
		</view>
		<!-- 图文介绍 -->
		<view class="goods-detail">
			<view class="tabs">
				<text :class="{active:activeIndex === index}" @click="changeIndex(index)" v-for="(item,index) in tabList" :key="index">{{item}}</text>
			</view>
			<view class="main">
				<view v-show="!activeIndex" v-html="goods.goods_introduce"></view>
				<view v-show="activeIndex">商品参数</view>
			</view>
		</view>
		<view class="fixed-bottom">
			<view class="icon-text">
				<text class="iconfont icon-kefu "></text>
				<text>联系客服</text>
				<!-- contact进入客服 -->
				<button open-type="contact">客服</button>
			</view>
			<view class="icon-text" @click="toCart">
				<text class="iconfont icon-cart"></text>
				<text>购物车</text>
			</view>
			<view class="btn add-cart-btn" @click="addCart">加入购物车</view>
			<view class="btn buy-btn">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: ['图文介绍', '规格参数'],
				activeIndex: 0,
				goods: {}
			}
		},
		onLoad(options) {
			this.goodsId = options.goodsId
			this.getItem(this.goodsId)
		},
		onShareAppMessage() {
			return {
				title: this.goods.goods_name,
				imageUrl: this.goods.pics[0].pics_big
			}
		},
		methods: {
			// 把当前商品加入到购物车
			addCart() {
				// 取购物车
				let cart = uni.getStorageSync('cart') || []
				// 更新购物车
				// 获取当前商品的id
				let curGoodsId = this.goods.goods_id
				// 找到购物车里面goodsId为当前商品的id的那个对象
				let goods = cart.find(item =>{
					// 如果本地存储的id等于当前商品的id,那么就返回true,否则返回false
					return item.goodsId === curGoodsId
				})
				// 通过goods返回的布尔值进行判断
				if(goods) {
					// 非首次添加,商品数量++,总是选中状态
					goods.num = goods.num+1,
					goods.checked = true
				} else {
					// 首次添加
					let newGoods = {
						goodsId: curGoodsId,
						num: 1,
						checked: true
					}
					// 拿到已经存储的数组,平铺开来,并将首次添加的商品加到最前面去
					cart = [newGoods,...cart]
				}
				// 存购物车
				uni.setStorageSync('cart', cart)
			},
			// 跳转到购物车页面
			toCart() {
				uni.switchTab({
					// 跳转到tadbBar上的购物车页面
					url: '../cart/cart'
				})
			},
			// 获取页面详细信息
			async getItem(id) {
				let data = await this.$request({
					url: '/api/public/v1/goods/detail?goods_id=' + id
				})
				this.goods = data
			},
			// 改变图文介绍与规格参数的下标
			changeIndex(index) {
				this.activeIndex = index
			},
			// 预览图片,传入图片的下标
			previewImg(index) {
				let urls = []
				this.goods.pics.forEach(v => {
					urls.push(v.pics_big)
				})
				uni.previewImage({
					// 传入当前点击的图片的下标
					current: urls[index],
					urls
				})
			}
		}
	}
</script>
<style lang="less">
	.iconfont {
		font-size: 50rpx;
	}

	.wrapper {
		background-color: #f4f4f4;
		padding-bottom: 98rpx;
	}

	.swiper {
		height: 720rpx;
	}

	.swiper-img {
		width: 100%;
		height: 720rpx;
	}

	.goods-info {
		padding: 40rpx 0 30rpx 20rpx;
		background-color: #fff;

		.price {
			color: #eb4450;
			font-size: 40rpx;
		}

		.name-favo {
			display: flex;
			height: 78rpx;
			margin-top: 14rpx;

			.name {
				color: #333;
				flex: 1;
				font-size: 28rpx;
				padding-right: 78rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; // 控制多行的行数
				-webkit-box-orient: vertical;
			}

			.favo {
				border-left: 1px solid #ddd;
				width: 144rpx;
				color: #999;
				font-size: 24rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				position: relative;

				button {
					position: absolute;
					// 将按钮的透明度设置为0
					opacity: 0;
				}
			}
		}

		.express {
			color: #999;
			font-size: 24rpx;
			margin-top: 20rpx;
		}
	}

	.promote {
		margin-top: 20rpx;

		view {
			background-color: #fff;
			height: 96rpx;
			line-height: 96rpx;
			font-size: 28rpx;
			margin-top: 20rpx;
			padding-left: 20rpx;

			&.brother {
				margin-top: 0;
			}

			.name {
				color: #404040;
			}

			.detail {
				color: #ff4055;
				margin-left: 40rpx;

				&.gray {
					color: #dfdfdf;
				}
			}
		}
	}

	.goods-detail {
		margin-top: 20rpx;
		background-color: #fff;

		.tabs {
			display: flex;

			text {
				flex: 1;
				text-align: center;
				color: #404040;
				font-size: 22rpx;
				height: 100rpx;
				line-height: 100rpx;
				box-sizing: border-box;

				&.active {
					color: #ff4055;
					border-bottom: 10rpx solid #ff2644;
				}
			}
		}
	}

	.fixed-bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 98rpx;
		display: flex;
		background-color: #fff;

		.icon-text {
			flex: 2;
			font-size: 20rpx;
			color: #404040;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;

			button {
				position: absolute;
				opacity: 0;
			}
		}

		.btn {
			flex: 3;
			color: #fff;
			text-align: center;
			line-height: 98rpx;

			&.add-cart-btn {
				background-color: #ffb400;
			}

			&.buy-btn {
				background-color: #ff2d4a;
			}
		}
	}
</style>
