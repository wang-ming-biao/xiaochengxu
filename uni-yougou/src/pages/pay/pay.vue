<template>
  <view>
    <view class="address-wrapper">
      <view class="address" v-if="address.userName">
        <view class="receiver">
          <view class="name">收货人：{{address.userName}}</view>
          <view class="phone-num">{{address.telNumber}}</view>
          <text class="iconfont icon-arrow-right"></text>
        </view>
        <view class="address-txt">收货地址：{{address.provinceName+address.cityName+address.countyName+address.detailInfo}}</view>
      </view>
      <!-- 选择地址 -->
      <view class="choose-address" @click="getaddr" v-else>
        <view>请选择地址</view>
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="flower">
        <image src="/static/images/cart_border@2x.png">
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item" v-for="(item,index) in commodity" :key="index">
        <image :src="item.goods_small_logo" alt="" />
        <view class="right">
        	<text class="text-line2">{{item.goods_name}}</text>
        	<view class="btm">
        		<text class="price">￥<text>{{item.goods_price}}</text>.00</text>
        		<view class="goods-num">
              <text>{{item.num}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="bottom-fixed">
      微信支付(1000.00)
    </view>
  </view>
</template>
<script>
	export default {
		data() {
			return {
				// 取出存储在本地的地址数据
				address: uni.getStorageSync('address') || {},
				commodity: [] // 购物车商品详情
			}
		},
		// 在页面一加载时触发加载购物车商品方法
		onLoad() {
			this.queryGoodsList()
		},
		methods: {
			// 过滤掉购物车中未选中的商品
			filterCart (cart) {
				// filter : 依次对数组的每一项进行过滤,是true就返回,不是就不返回
				return cart.filter(item =>{
					// 如果cart里面的checked是true就返回
					return item.checked
				})
			},
			getaddr () {
				// 判断是否拒绝
				// 1.非拒绝,发起授权,调接口
				// 2.拒绝的话,弹框提示允许权限
				// 3.如何判断是否拒绝 wx.getSetting()
				uni.getSetting({ success: settingRes => {
						console.log(settingRes)
						if(settingRes.authSetting['scope.address'] === false) {
							// 拒绝的话,弹框提示允许权限
							uni.showModal({
								title: '授权',
								content: '请允许通讯地址权限',
								success: res => {
									if (res.confirm) {
										// 调用方法再次请求权限
										uni.openSetting()
									}
								}
							})
						} else {
							// 非拒绝,发起授权,调接口
							uni.authorize({
								scope: 'scope.address',
								success: () => {
									uni.chooseAddress({
										success: (res) => {
											this.address = res
											// 获取到token后存储到本地
											uni.setStorageSync('address',res)
										}
									})
								}
							})
						}
					}
					
				})
			},
			async queryGoodsList() {
				// 根据购物车数据(goodsId) 去发请求
				// 去除存储在本地的购物车数据,也有可能为空,所以要准备一个空数组
				let cart = uni.getStorageSync('cart') || []
				// 若是本地数组为空的话则不用执行以下代码
				// 过滤掉购物车中未选中的商品
				cart = this.filterCart(cart)
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
				// 将本地的cart与服务器返回的数据进行合并
				this.commodity = cart.map(item => {
					// 从服务器返回的_commodity找到goods_id为item.goodsId的对象
					let goods = _commodity.find(v => {
						// 将对比后的数据返回出去
						return v.goods_id = item.goodsId
					})
					return { ...item,
						...goods
					}
				})
			}
		}
	}
</script>
<style lang="less">
.address-wrapper {
  background-color: #fff;
}

.address {
  display: flex;
  flex-direction: column;
  padding: 44rpx 30rpx 48rpx 20rpx;
  .receiver {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50rpx;
    position: relative;
    .phone-num {
      margin-right: 40rpx;
    }
    .icon-arrow-right {
      position: absolute;
      top: 8rpx;
      right: 0;
      color: #999;
    }
  }
}

.choose-address {
  display: flex;
  padding: 44rpx 30rpx 48rpx 20rpx;
  justify-content: space-between;
  .icon-arrow-right {
    color: #999;
  }
}

.flower {
  image {
    height: 16rpx;
    width: 100%;
    display: block;
  }
}

.goods-item {
  height: 206rpx;
  background-color: #fff;
  border-top: 1rpx solid #ddd;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  image {
    width: 160rpx;
    height: 160rpx;
    margin-left: 30rpx;
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
        > text {
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
  top: 243rpx;
  width: 100%;
  overflow: auto;
  padding-bottom: 60rpx;
  background-color: #f4f4f4;
}

.bottom-fixed {
  position: absolute;
  height: 98rpx;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1aad19;
  color: #fff;
  line-height: 98rpx;
  text-align: center;
}
</style>