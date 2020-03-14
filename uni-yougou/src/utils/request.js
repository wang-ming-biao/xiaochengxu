// 封装基地址
const BASE_URl = 'https://www.uinav.com'
// 封装首页图片详情请求接口
function request({
	url,
	showLoading = true
}) {
	return new Promise((resolve, reject) => {
		if (showLoading) {
			// 请求前开启Loadding
			uni.showToast({
				title: '加载中...',
				icon: 'loading',
				mask: true // loading中,底下不允许点击
			})
		}
		uni.request({
			url: BASE_URl + url,
			method: 'GET',
			success: res => {
				let {
					meta,
					message
				} = res.data
				if (meta.status === 200) {
					// 数据正确
					resolve(message)
					this.swiperdata = res.data.message
				} else {
					// 数据错误,提示用户错误信息
					uni.showToast({
						title: meta.message,
						icon: 'none'
					})
				}
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
