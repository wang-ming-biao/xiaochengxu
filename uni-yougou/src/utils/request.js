// 封装基地址
const BASE_URl = 'https://www.uinav.com'
// 封装首页图片详情请求接口
function request({
	url,
	method,
	// 判断是否需要登录
	isAuth=false,
	data,
	showLoading = true
}) {
	return new Promise((resolve, reject) => {
		// 初始先给一个空的token
		let header = {}
		// 如果需要登录
		if(isAuth) {
			// 获取到存储在本地的token
			let token = uni.getStorageSync('token')
			// 也有可能本地还没存token
			if(!token) {
				// 判断用户是否已登录
				uni.showToast({
					title: '请先登录', // 弹框提示
					icon: 'none', // 弹框图标
					mask: true, // 弹框以下禁止操作
					success() {
						uni.navigateTo({
							url: '/src/pages/login/login.vue'
						})
						return reject(new Error('未登录'))
					}
				})
			}
			header.Authorization = token
		}
		
		if (showLoading) {
			// 请求前开启Loadding
			uni.showToast({
				title: '加载中...',
				icon: 'loading',
				mask: true // loading中,底下不允许点击
			})
		}
		console.log('嘿嘿嘿')
		uni.request({
			url: BASE_URl + url,
			method,
			header,
			data,
			success: res => { 
				let {
					meta,
					message
				} = res.data
				if (meta.status === 200) {
					// 数据正确
					resolve(message)
				} else {
					// 数据错误,提示用户错误信息
					uni.showToast({
						title: meta.message,
						icon: 'none'
					})
					reject(new Error(meta,message))
				}
			},
			// 网络超时
			fail() {
				uni.showToast({
					title: '网络超时',
					icon: 'none'
				})
				reject(new Error('网络超时'))
			},
			complete() {
				if (showLoading) {
					// 请求结束后,关闭loading
					uni.hideLoading()
				}
			}
		})
	})
}
// 导出方法
export default request
