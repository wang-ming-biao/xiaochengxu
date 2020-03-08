// pages/detail/detail.js
// 导入英雄详情数据
import heroDetailArr from '../../data/lol_details_duowan.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
  hero: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    // 需要从array找一个id === options.id 的对象
    for (let hero of heroDetailArr) {
      if(hero.id === id) {
        this.setData({
          hero
        })
        // 将结果返回出去
      return
      }
    }
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