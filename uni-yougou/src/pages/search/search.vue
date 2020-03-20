<template>
  <view class="wrapper">
    <SearchBar @search="toSearchList" />
    <view class="history-search">
      <view class="title">
        <text class="title">历史搜索</text>
        <icon type="clear"
              size="18" @click="clearAll" >
        </icon>
      </view>
      <view>
        <view @click="toSearchList(item)" v-for="(item,index) in keyWordList" :key="index" >{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script>
// 导入头部搜索组件
import SearchBar from '../../components/SearchBar'
// 由于页面上很多地方都要用到keyWoed_list,所以可以设置为一个常量
const KEYWORD_LIST = 'keyWord_list'
export default {
	data() {
		return {
			keyWordList: uni.getStorageSync(KEYWORD_LIST) || []
		}
	},
  components: {
    SearchBar
  },
  // 优化:当页面跳转到搜索列表后再将历史记录保存起来
  onHide() {
  	// 跳转到搜索列表后,更新搜索历史
  	this.keyWordList = uni.getStorageSync(KEYWORD_LIST)
  },
  methods: {
	  // 清除所有搜索历史记录
	  clearAll () {
		  uni.showModal({
		  	title: '提示',
			content: '你确定要清空搜索历史吗?',
			success: res => {
				if (res.confirm) {
					// 当用户点击确定,界面清空
					this.keyWordList = []
					// 存储清空
					uni.removeStorageSync(KEYWORD_LIST)
				}
			}
		  })
	  },
	  // 跳转到搜索列表页
	  toSearchList (inputVal) {
		  // 复制一份keyWordList
		  let _keyWordList = [...this.keyWordList]
		  // 把inputVal插入到keyWordList的头部
		  _keyWordList.unshift(inputVal)
		  // 使用new Set()对数组进行去重
		  // 使用 ... 将数组展开,放在一个 [] 中,将新的数组赋值给keyWordList
		  _keyWordList = [...new Set(_keyWordList)]
		  // 存到storage
		  uni.setStorageSync(KEYWORD_LIST,_keyWordList)
		  uni.navigateTo({
		  	url: '/pages/search_list/search_list?catName=' + inputVal
		  })
	  }
  }
}
</script>

<style lang="less">
.search {
  background-color: #eee;
  padding: 30rpx 15rpx;
  display: flex;
  justify-content: space-between;
  font-size: 28rpx;
  position: relative;
  icon {
    position: absolute;
    top: 50rpx;
    left: 38rpx;
  }
  input {
    height: 60rpx;
    flex: 1;
    background-color: #fff;
    padding-left: 70rpx;
    box-sizing: border-box;
    border-radius: 4rpx;
  }
  button {
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
    border: 1rpx solid #bfbfbf;
    background-color: #eee;
    margin-left: 20rpx;
  }
}

.history-search {
  color: #333;
  font-size: 28rpx;
  padding: 30rpx 30rpx 30rpx 15rpx;
  .title {
    display: flex;
    justify-content: space-between;
  }

  view {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30rpx;
    view {
      height: 64rpx;
      line-height: 64rpx;
      padding: 0 26rpx;
      background-color: #ddd;
      margin: 0 30rpx 16rpx 0;
    }
  }
}
</style>