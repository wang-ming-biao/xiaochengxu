// pages/img/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      '/images/boy.png',
      '/images/girl.png',
      '/images/left.gif',
      '/images/right.png'
    ],
    index: 0
  },
  // 上一张图片
  prev () {
    // 当图片为第一张,点上一张时,显示最后一张
    if( this.data.index === 0 ){
      this.setData({
        index:this.data.imgList.length -1
      })
        return // 代码执行完后返回出去
    }
    this.setData({
      index: this.data.index -1
    })
  },
  // 下一张图片
  next () {
    // 当前为最后一张,点下一张时,显示第一张
    if(this.data.index === this.data.imgList.length -1) {
      this.setData({
        index:0
      })
      return // 代码执行完后返回出去
    }
    this.setData({
      index: this.data.index +1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})