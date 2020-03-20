<template>
	<view class="content">
		<view class="title">
			<text class="iconfont icon-shop"></text>
			<text>优购生活馆</text>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="goods-item" v-for="(item, index) in commodity" :key="index">
				<text class="iconfont" @click="toggleCheck(item)" :class="item.checked ? 'icon-check':'icon-uncheck'"></text>
				<image :src="item.goods_small_logo" alt="" />
				<view class="right">
					<text class="text-line2">{{item.goods_name}}</text>
					<view class="btm">
						<text class="price">￥<text>{{item.goods_price}}</text>.00</text>
						<view class="goods-num">
							<button @click="sub(item)" :disabled="item.num ===1">-</button>
							<text>{{item.num}}</text>
							<button @click="add(item)">+</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="select-all">
				<view @click="toggleAll">
					<text class="iconfont" :class="isAll ? 'icon-check':'icon-uncheck'"></text>
					<text>全选</text>
				</view>
				<view class="price-wrapper">
					<view class="price">
						<text>合计:<text class="num">￥{{totalPrice}}.00</text></text>
						<view class="info">包含运费</view>
					</view>
					<view class="account-btn" @click="toPay">结算({{totalNum}})</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				commodity: [] // 购物车商品详情
			}
		},
		// 页面一加载时,获取本地的信息,然后向服务器请求数据
		onShow() {
			this.queryGoodsList()
		},
		// 当页面切换出购物车页面时,将购物车修改后的数据保存到本地内存
		onHide() {
			let cart = this.commodity.map(item=>{
				return {
					goodsId:item.goodsId,
					num:item.num,
					checked:item.checked
				}
			})
			uni.setStorageSync('cart',cart)
		},
		methods: {
			// 进行商品结算
			toPay () {
				// 如果没有添加商品的话,提示用户添加商品
				// 调用计算属性内的totalNum进行判断
				if(!this.totalNum){
					wx.showToast({
						title: '请添加商品',
						icon: 'none'
					})
					return
				}
				// 如果用户没有登录的话,跳转到登录页面进行登录
				let token = uni.getStorageSync('token')
				if(!token) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
						// 阻止后续代码继续执行
						return
				}
				// 如果用户添加了商品并且也登录了
				uni.navigateTo({
					url: '/pages/pay/pay'
				})
			},
			// 全选和不全选
			toggleAll() {
				this.isAll = !this.isAll
			},
			// 点击勾选商品与反选商品
			toggleCheck(item) {
				item.checked = !item.checked
			},
			// 减少商品数量
			sub(item) {
				item.num--
			},
			// 增加商品数量
			add(item) {
				item.num++
			},
			async queryGoodsList() {
				// 根据购物车数据(goodsId) 去发请求
				// 去除存储在本地的购物车数据,也有可能为空,所以要准备一个空数组
				let cart = uni.getStorageSync('cart') || []
				// 若是本地数组为空的话则不用执行以下代码
				if (!cart.length) {
					return
				}
				// 第一种方法
				// 遍历 cart数组,拿出里面goodsid进行拼接
				// let idsStr = ''
				// cart.forEach(item+>{
				// 	// 每遍历一次就加一次,每个ID后面用逗号隔开
				// 	idsStr += item.goodsId + ','
				// })
				// 第二种方法
				// 遍历cart数组,并返回一个处理过的新数组
				let idsArr = cart.map(item => {
					return item.goodsId
				})
				// 通过join方法,中间用逗号进行拼接
				let idsStr = idsArr.join(',')
				// 调用拼接后的参数发送请求
				let _commodity = await this.$request({
					url: `/api/public/v1/goods/goodslist?goods_ids=${idsStr}`
				})
				console.log(_commodity)
				// 将本地的cart与服务器返回的数据进行合并
				this.commodity = cart.map(item => {
					// 从服务器返回的_commodity找到goods_id为item.goodsId的对象
					let goods = _commodity.find(v => {
						// 将对比后的数据返回出去
						return v.goods_id === item.goodsId
					})
					return { ...item,
						...goods
					}
				})
				console.log(this.commodity)
			}
		},
		// 计算属性
		computed: {
			isAll: {
				get() {
					// 第一种方法: for of ,可以中断数组遍历
					// 遍历商品列表中的每一项
					// for(let item of this.commodity) {
					// 	// 判断每一项商品中的checked是否为true
					// 	if(!item.checked) {
					// 		// 若有一项不是,就返回false
					// 		return false
					// 	}
					// }
					// // 若都为true,则返回true
					// return true

					// 最佳方案
					// 将商品数组使用every()进行遍历,若是都为true,则返回true,若有一个是false,则返回false
					return this.commodity.every(item => item.checked)
				},
				set(status) {
					// 商品列表每一个元素的选中状态都应该和全选一致,
					this.commodity.forEach(item => {
						// 遍历其中的每一项,并改变值
						item.checked = status
					})
				}
			},
			// 商品结算的总数量
			totalNum() {
				// 每一个被选中的商品之和
				// reduce()遍历数组中的每一项,
				return this.commodity.reduce((sum, item) => {
					// sum是一个初始值,通过与每一次遍历后的值进行相加,最后获得所有商品的总值
					return sum + (item.checked ? item.num : 0)
				}, 0)
			},
			// 总商品价格
			totalPrice() {
				// 每一个被选中的商品之和
				// reduce()遍历数组中的每一项,
				return this.commodity.reduce((sum, item) => {
					// sum是一个初始值,通过与每一次遍历后的值进行相加,最后获得所有商品的总值
					return sum + (item.checked ? item.num*item.goods_price : 0)
					// 将遍历出来的每一件商品相加
				}, 0)
			}
		}
	}
</script>

<style lang="less">
	.iconfont {
		font-size: 44rpx;
	}

	.title {
		height: 88rpx;
		display: flex;
		align-items: center;

		.iconfont {
			color: #999;
			margin: 6rpx 12rpx 0 32rpx;
		}
	}

	.goods-item {
		height: 206rpx;
		background-color: #fff;
		border-top: 1rpx solid #ddd;
		display: flex;
		box-sizing: border-box;
		align-items: center;

		.iconfont {
			color: #eb4450;
			margin: 0 30rpx;
		}

		image {
			width: 160rpx;
			height: 160rpx;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin: 0 20rpx 0 18rpx;

			.btm {
				display: flex;
				margin-top: 40rpx;
				justify-content: space-between;

				.price {
					color: #eb4450;

					>text {
						font-size: 24px;
					}
				}

				.goods-num {
					display: flex;
					align-items: center;

					button {
						width: 60rpx;
						height: 50rpx;
						box-sizing: border-box;
						display: flex;
						justify-content: center;
						align-items: center;
						border: 4rpx solid #666;
					}

					text {
						margin: 0 30rpx;
					}
				}
			}
		}
	}

	.goods-list {
		position: absolute;
		bottom: 98rpx;
		top: 88rpx;
		width: 100%;
		overflow: auto;
		padding-bottom: 60rpx;
		background-color: #f4f4f4;
	}

	.account {
		height: 98rpx;
		border-bottom: 1rpx solid #ddd;
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;

		.iconfont {
			color: #eb4450;
			margin: 0 30rpx;
		}

		.account-btn {
			width: 230rpx;
			height: 98rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			background-color: #eb4450;
		}

		.select-all {
			flex: 1;
			display: flex;
			align-items: center;

			.price-wrapper {
				display: flex;
				flex: 1;
				justify-content: flex-end;
				align-items: center;
			}
		}

		.price {
			margin-right: 20rpx;

			.num {
				color: #eb4450;
			}

			.info {
				color: #999;
			}
		}
	}
</style>
