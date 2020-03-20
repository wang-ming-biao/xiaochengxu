<template>
  <view>
    <view class="address-wrapper">
      <view class="address" v-show="address.userName">
        <view class="receiver">
          <view class="name">收货人：{{address.userName}}</view>
          <view class="phone-num">{{address.telNumber}}</view>
          <text class="iconfont icon-arrow-right"></text>
        </view>
        <view class="address-txt">收货地址：{{address.provinceName+address.cityName+address.countyName+address.detailInfo}}</view>
      </view>
      <!-- 选择地址 -->
      <view class="choose-address" @click="getaddr" v-show="!address.userName" >
        <view>请选择地址</view>
        <text class="iconfont icon-arrow-right"></text>
      </view>
      <view class="flower">
        <image src="/static/images/cart_border@2x.png">
      </view>
    </view>

    <!-- 商品列表 -->
    <view class="goods-list">
      <view class="goods-item">
        <image src="https://api.zbztb.cn/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
             alt="">
        <view class="right">
          <view class="line-clamp2">xxx</view>
          <view class="btm">
            <text class="price">￥<text>xxx</text>.00</text>
            <view class="goods-num">
              <text>1000</text>
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
				address: {}
			}
		},
		methods: {
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
											console.log(this.address)
										}
									})
								}
							})
						}
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