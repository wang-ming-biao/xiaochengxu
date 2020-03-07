// 创建模块
function sayHello () {
  wx.showToast({
    title: '今天天气很不错哦!',
  })
}
// 导出模块
module.exports = sayHello