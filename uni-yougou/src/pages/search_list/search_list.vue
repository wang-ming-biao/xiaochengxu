<template>
	<view>
		<!-- 头部 -->
		<view class="header-wrapper">
		<view class="header">
			<icon type="search" size="16" color="#bbb">
			</icon>
			<input type="text" v-model="keyWord" @confirm="reload" confirm-type="search" >
		</view>

		<!-- 过滤菜单 -->
		<view class="filter-menu">
			<view :class="{active:activeIndex === index}" @click="changeIndex(index)" v-for="(item, index) in menuList" :key="index">{{item}}</li>
			</view>
		</view>
		</view>

		<!-- 商品列表 -->
		<view class="goods-list" >
			<view @click="toItem(item.goods_id)" class="goods" v-for="(item, index) in goods" :key="index">
				<image :src="item.goods_small_logo" alt="">
					<view class="right">
						<view class="goods-name text-line2">{{item.goods_name}}</view>
						<view class="price">￥<text>{{item.goods_price}}</text>.00</view>
					</view>
			</view>
		</view>
		<!-- 当页数等于最后一页时,显示加载到底部了 -->
		<view class="btm-line" v-show="isLastPage" >
			--我是有底线的--
		</view>
	</view>
</template>
<script>
	const PAGE_SIZE = 6
	export default {
		data() {
			return {
				menuList: ['综合','销量','价格'], // 综合数据分类
				activeIndex: 0, // 记住当时选中的过滤栏的菜单
				keyWord: '', // 上一个页面传递过来的参数
				goods: [], // 搜索的商品详情
				isLastPage: false // 当前是否是最后一页
			}
		},
		onLoad(options) {
			// 无需在结构渲染的变量不要声明在data里面
			this.pageNum = 1 // 请求数据的页码
			this.isRequesting = false // 是否请求中
			this.keyWord = options.catName
			this.queryGoods()
		},
		// 下拉刷新时会触发
		onPullDownRefresh() {
			this.reload()
			// 在下来时使得过滤栏变成粘性定位
			this.isFixed = false
		},
		// 当页面滚动时触发
		onPageScroll() {
			// 使定位变成固定定位
			this.isFixed = true
		},
		// 上拉触发
		onReachBottom() {
			this.pageNum++
			this.queryGoods()
		},
		methods: {
			// 加载第一页数据
			reload () {
				// 请求第一页的数据
				this.pageNum = 1
				// 重置
				this.isLastPage = false
				// // 清空数组
				this.goods = []
				this.queryGoods()
			},
			changeIndex(index) {
				this.activeIndex = index
			},
			async queryGoods () {
				// 请求前,如果请求中或者当前是最后一页,就返回
				if(this.isRequesting || this.isLastPage) {
					return
				}
				// 请求前,将操作锁住
				this.isRequesting = true
				let data = await this.$request({
					url: '/api/public/v1/goods/search',
					showLoading:false,
					data: {
						query: this.keyWord,
						pagenum: this.pageNum,
						pagesize: PAGE_SIZE
					}
				})
				this.goods = [...this.goods,...data.goods]
				// 在每次请求完后,判断是否是最后一页
				if(this.goods.length === data.total) {
					this.isLastPage = true
				}
				// 请求后,释放
				this.isRequesting = false
			},
			// 跳转到商品详情页面
			toItem (id) {
				uni.navigateTo({
					url: '/pages/item/item?goodsId=' + id
				})
			}
		}
	}
</script>

<style lang="less">
	.header-wrapper {
		// 粘性定位
		position: sticky;
		top: 0;
		background-color: #fff;
	}
	.header {
		height: 120rpx;
		padding: 30rpx 16rpx;
		box-sizing: border-box;
		background-color: #eee;
		position: relative;

		icon {
			position: absolute;
			top: 48rpx;
			left: 44rpx;
		}

		input {
			height: 60rpx;
			width: 100%;
			border-radius: 4rpx;
			background-color: #fff;
			padding-left: 80rpx;
			box-sizing: border-box;
		}
	}

	.top-header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
	}

	.header {
		height: 120rpx;
		padding: 30rpx 16rpx;
		box-sizing: border-box;
		background-color: #eee;
		position: relative;

		icon {
			position: absolute;
			top: 48rpx;
			left: 44rpx;
		}

		input {
			height: 60rpx;
			width: 100%;
			border-radius: 4rpx;
			background-color: #fff;
			padding-left: 80rpx;
			box-sizing: border-box;
		}
	}

	.filter-menu {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100rpx;

		view.active {
			color: #EB4450;
		}
	}

	.goods {
		border-top: 1rpx solid #ddd;
		height: 260rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		display: flex;
		align-items: center;

		image {
			width: 200rpx;
			height: 200rpx;
		}

		.right {
			flex: 1;
			margin-left: 26rpx;

			.price {
				color: #eb4450;
				font-size: 24rpx;
				margin-top: 80rpx;

				text {
					font-size: 36rpx;
				}
			}
		}
	}

	.btm-line {
		text-align: center;
	}
</style>
