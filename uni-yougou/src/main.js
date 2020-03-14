import Vue from 'vue'
import App from './App'
// 在全局导入封装的方法
import request from '@/utils/request.js'

// 把request设置给Vue原型
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
